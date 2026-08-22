import 'dotenv/config';
import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { QueryTypes, Sequelize } from 'sequelize';
import requestLogger from './middlewares/requestLogger';
import './logger';

const db = new Sequelize(process.env.MYSQL_DATABASE || 'edtech_platform', process.env.MYSQL_USER || 'root', process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST || 'localhost', port: Number(process.env.MYSQL_PORT || 3306), dialect: 'mysql', logging: false
});
const app = express();
app.use(cors(), helmet(), express.json({ limit: '2mb' }), requestLogger);

const razorpayKeyId = process.env.RAZORPAY_KEY_ID || 'rzp_test_TRDOcLu083nG6R';
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || '';

const createRazorpayOrder = async (amount: number, receipt: string) => {
  if (!razorpayKeySecret) throw Object.assign(new Error('Razorpay is not configured on the server'), { status: 503 });
  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString('base64')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount: Math.round(amount * 100), currency: 'INR', receipt })
  });
  const payload = await response.json() as { id?: string; amount?: number; currency?: string; error?: { description?: string } };
  if (!response.ok || !payload.id) throw Object.assign(new Error(payload.error?.description || 'Could not create Razorpay order'), { status: 502 });
  return payload as { id: string; amount: number; currency: string };
};

const userId = (req: Request) => {
  const id = req.header('x-profile-id') || req.header('x-user-id');
  if (!id) throw Object.assign(new Error('Authentication required'), { status: 401 });
  return id;
};
const page = (req: Request) => {
  const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
  const current = Math.max(1, Number(req.query.page) || 1);
  return { limit, current, offset: (current - 1) * limit };
};
const run = (fn: (req: Request, res: Response) => Promise<unknown>) => (req: Request, res: Response) => void fn(req, res).catch((e: Error & { status?: number }) => {
  console.error(e);
  res.status(e.status || 500).json({ success: false, error: { code: e.status === 401 ? 'UNAUTHENTICATED' : 'COMMERCE_ERROR', message: e.status ? e.message : 'Internal server error' } });
});

app.get('/api/v1/books', run(async (req, res) => {
  const p = page(req); const where: string[] = ["status='ACTIVE'"]; const replacements: Record<string, unknown> = { limit: p.limit, offset: p.offset };
  if (req.query.subjectId) { where.push('subject_id=:subjectId'); replacements.subjectId = req.query.subjectId; }
  if (req.query.author) { where.push('author LIKE :author'); replacements.author = `%${req.query.author}%`; }
  const rows = await db.query(`SELECT id,title,author,subject_id AS subjectId,description,price,stock_quantity AS stockQuantity,is_digital AS isDigital,cover_url AS coverUrl FROM books WHERE ${where.join(' AND ')} ORDER BY created_at DESC LIMIT :limit OFFSET :offset`, { replacements, type: QueryTypes.SELECT });
  res.json({ success: true, data: rows, meta: { page: p.current, limit: p.limit } });
}));
app.get('/api/v1/books/:id', run(async (req, res) => {
  const rows = await db.query("SELECT id,title,author,subject_id AS subjectId,description,price,stock_quantity AS stockQuantity,is_digital AS isDigital,cover_url AS coverUrl FROM books WHERE id=:id AND status='ACTIVE'", { replacements: { id: req.params.id }, type: QueryTypes.SELECT });
  if (!rows[0]) return res.status(404).json({ success: false, error: { code: 'BOOK_NOT_FOUND', message: 'Book not found' } });
  res.json({ success: true, data: rows[0] });
}));
app.get('/api/v1/books/:id/reviews', run(async (req, res) => res.json({ success: true, data: await db.query('SELECT id,user_id AS userId,rating,comment,created_at AS createdAt FROM book_reviews WHERE book_id=:id ORDER BY created_at DESC', { replacements: { id: req.params.id }, type: QueryTypes.SELECT }) })));
app.post('/api/v1/books/:id/reviews', run(async (req, res) => {
  const id = randomUUID(); const rating = Number(req.body.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return res.status(400).json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'rating must be between 1 and 5' } });
  await db.query('INSERT INTO book_reviews(id,book_id,user_id,rating,comment) VALUES(:id,:bookId,:userId,:rating,:comment)', { replacements: { id, bookId: req.params.id, userId: userId(req), rating, comment: req.body.comment || null } });
  res.status(201).json({ success: true, data: { id } });
}));
app.get('/api/v1/cart', run(async (req, res) => {
  const items = await db.query('SELECT ci.id,ci.book_id AS bookId,ci.quantity,b.title,b.price,(b.price*ci.quantity) AS lineTotal FROM cart_items ci JOIN books b ON b.id=ci.book_id WHERE ci.user_id=:userId', { replacements: { userId: userId(req) }, type: QueryTypes.SELECT });
  res.json({ success: true, data: { items } });
}));
app.post('/api/v1/cart/items', run(async (req, res) => {
  const quantity = Math.max(1, Number(req.body.quantity) || 1); const uid = userId(req);
  await db.query('INSERT INTO cart_items(id,user_id,book_id,quantity) VALUES(:id,:uid,:bookId,:quantity) ON DUPLICATE KEY UPDATE quantity=quantity+VALUES(quantity)', { replacements: { id: randomUUID(), uid, bookId: req.body.bookId, quantity } });
  res.status(201).json({ success: true });
}));
app.patch('/api/v1/cart/items/:id', run(async (req, res) => {
  const quantity = Number(req.body.quantity); if (!Number.isInteger(quantity) || quantity < 1) return res.status(400).json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'quantity must be positive' } });
  await db.query('UPDATE cart_items SET quantity=:quantity WHERE id=:id AND user_id=:uid', { replacements: { quantity, id: req.params.id, uid: userId(req) } }); res.json({ success: true });
}));
app.delete('/api/v1/cart/items/:id', run(async (req, res) => { await db.query('DELETE FROM cart_items WHERE id=:id AND user_id=:uid', { replacements: { id: req.params.id, uid: userId(req) } }); res.status(204).send(); }));
app.delete('/api/v1/cart', run(async (req, res) => { await db.query('DELETE FROM cart_items WHERE user_id=:uid', { replacements: { uid: userId(req) } }); res.status(204).send(); }));
app.post('/api/v1/payments/orders', run(async (req, res) => {
  const id = randomUUID(); const amount = Number(req.body.amount);
  if (!(amount > 0)) return res.status(400).json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'amount must be positive' } });
  await db.query(`INSERT INTO payment_orders(id,user_id,amount,currency,status,purpose,reference_id) VALUES(:id,:uid,:amount,:currency,'PENDING',:purpose,:referenceId)`, { replacements: { id, uid: userId(req), amount, currency: req.body.currency || 'INR', purpose: req.body.purpose || 'BOOK_ORDER', referenceId: req.body.referenceId || null } });
  res.status(201).json({ success: true, data: { id, gatewayOrderId: id, amount, status: 'PENDING' } });
}));
app.post('/api/v1/payments/verify', run(async (req, res) => {
  if (!razorpayKeySecret) throw Object.assign(new Error('Razorpay is not configured on the server'), { status: 503 });
  const localOrderId = String(req.body.orderId || '');
  const gatewayOrderId = String(req.body.razorpayOrderId || '');
  const paymentId = String(req.body.paymentId || '');
  const rows = await db.query<{ id: string }>("SELECT id FROM payment_orders WHERE id=:id AND gateway_order_id=:gatewayOrderId AND user_id=:uid AND status='PENDING'", { replacements: { id: localOrderId, gatewayOrderId, uid: userId(req) }, type: QueryTypes.SELECT });
  if (!rows[0]) return res.status(404).json({ success: false, error: { code: 'PAYMENT_ORDER_NOT_FOUND', message: 'Payment order was not found' } });
  const expected = createHmac('sha256', razorpayKeySecret).update(`${gatewayOrderId}|${paymentId}`).digest('hex');
  const supplied = String(req.body.signature || '');
  if (expected.length !== supplied.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(supplied))) return res.status(400).json({ success: false, error: { code: 'INVALID_SIGNATURE', message: 'Payment signature is invalid' } });
  await db.query("UPDATE payment_orders SET status='SUCCESS',gateway_payment_id=:paymentId WHERE id=:id AND status='PENDING'", { replacements: { paymentId, id: localOrderId } });
  res.json({ success: true, data: { orderId: localOrderId, status: 'SUCCESS' } });
}));
app.post('/api/v1/payments/webhooks', run(async (req, res) => {
  const status = req.body.status === 'SUCCESS' ? 'SUCCESS' : 'FAILED';
  await db.query('UPDATE payment_orders SET status=:status,gateway_payment_id=:paymentId WHERE gateway_order_id=:gatewayOrderId OR id=:gatewayOrderId', { replacements: { status, paymentId: req.body.paymentId || null, gatewayOrderId: req.body.orderId } });
  res.json({ success: true });
}));
app.get('/api/v1/payments/orders/:id', run(async (req, res) => {
  const rows = await db.query('SELECT * FROM payment_orders WHERE id=:id AND user_id=:uid', { replacements: { id: req.params.id, uid: userId(req) }, type: QueryTypes.SELECT }); res.json({ success: true, data: rows[0] || null });
}));
app.get('/api/v1/payments/invoices/:id', run(async (req, res) => {
  const rows = await db.query("SELECT invoice_url AS invoiceUrl FROM payment_orders WHERE id=:id AND user_id=:uid AND status='SUCCESS'", { replacements: { id: req.params.id, uid: userId(req) }, type: QueryTypes.SELECT }); res.json({ success: true, data: rows[0] || null });
}));
app.post('/api/v1/orders/books/checkout', run(async (req, res) => {
  const uid = userId(req); const orderId = randomUUID(); const paymentId = randomUUID();
  let razorpayOrder: { id: string; amount: number; currency: string } | undefined;
  await db.transaction(async t => {
    const items = await db.query<{bookId:string;quantity:number;price:string;stock:number;digital:number}>('SELECT ci.book_id AS bookId,ci.quantity,b.price,b.stock_quantity AS stock,b.is_digital AS digital FROM cart_items ci JOIN books b ON b.id=ci.book_id WHERE ci.user_id=:uid FOR UPDATE', { replacements: { uid }, type: QueryTypes.SELECT, transaction: t });
    if (!items.length) throw Object.assign(new Error('Cart is empty'), { status: 400 });
    if (items.some(i => i.quantity > i.stock)) throw Object.assign(new Error('Insufficient stock'), { status: 409 });
    const subtotal = items.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0), physical=items.some(i=>!i.digital);let shipping=0;
    if(physical){const pincode=String(req.body.shippingAddress?.pincode||'');const service=await db.query<{shipping_amount:string}>('SELECT shipping_amount FROM serviceable_pincodes WHERE pincode=:pincode AND is_active=1',{replacements:{pincode},type:QueryTypes.SELECT,transaction:t});if(!service[0])throw Object.assign(new Error('Shipping pincode is not serviceable'),{status:400});shipping=Number(service[0].shipping_amount)}
    const tax=Number((subtotal*Number(process.env.BOOK_TAX_RATE||0.18)).toFixed(2)),total=Number((subtotal+shipping+tax).toFixed(2)),buyerType=req.header('x-user-role')==='SCHOOL_ADMIN'?'SCHOOL':'STUDENT';
    razorpayOrder = await createRazorpayOrder(total, orderId);
    await db.query("INSERT INTO payment_orders(id,user_id,gateway_order_id,amount,currency,tax_amount,status,purpose,reference_id) VALUES(:id,:uid,:gatewayOrderId,:total,'INR',:tax,'PENDING','BOOK_ORDER',:orderId)", { replacements: { id: paymentId, uid, gatewayOrderId: razorpayOrder.id, total,tax, orderId }, transaction: t });
    await db.query("INSERT INTO book_orders(id,student_id,payment_order_id,buyer_type,shipping_address,subtotal,shipping_amount,tax_amount,total_amount,shipping_status) VALUES(:id,:uid,:paymentId,:buyerType,:address,:subtotal,:shipping,:tax,:total,'PENDING')", { replacements: { id: orderId, uid, paymentId,buyerType,address:JSON.stringify(req.body.shippingAddress||{}),subtotal,shipping,tax,total }, transaction: t });
    for (const item of items) {
      await db.query('INSERT INTO order_items(id,book_order_id,book_id,quantity,price_at_purchase) VALUES(:id,:orderId,:bookId,:quantity,:price)', { replacements: { id: randomUUID(), orderId, ...item }, transaction: t });
      await db.query('UPDATE books SET stock_quantity=stock_quantity-:quantity WHERE id=:bookId', { replacements: item, transaction: t });
    }
    await db.query('DELETE FROM cart_items WHERE user_id=:uid', { replacements: { uid }, transaction: t });
  });
  res.status(201).json({ success: true, data: { orderId, paymentOrderId: paymentId, razorpayOrderId: razorpayOrder!.id, razorpayKeyId, amount: razorpayOrder!.amount, currency: razorpayOrder!.currency } });
}));
app.post('/api/v1/orders/books/:id/cancel',run(async(req,res)=>{const uid=userId(req);const rows=await db.query<{shippingStatus:string}>('SELECT shipping_status AS shippingStatus FROM book_orders WHERE id=:id AND student_id=:uid',{replacements:{id:req.params.id,uid},type:QueryTypes.SELECT});if(!rows[0]||rows[0].shippingStatus!=='PENDING')throw Object.assign(new Error('Only pending orders can be cancelled'),{status:409});await db.query("UPDATE book_orders SET shipping_status='CANCELLED',cancellation_reason=:reason WHERE id=:id",{replacements:{id:req.params.id,reason:req.body.reason||null}});res.json({success:true})}));
app.post('/api/v1/orders/books/:id/returns',run(async(req,res)=>{const uid=userId(req);await db.query("UPDATE book_orders SET return_status='REQUESTED' WHERE id=:id AND student_id=:uid AND shipping_status='DELIVERED' AND created_at>=DATE_SUB(NOW(),INTERVAL 7 DAY)",{replacements:{id:req.params.id,uid}});res.status(202).json({success:true})}));
app.get('/api/v1/students/me/orders/books', run(async (req, res) => {
  const rows = await db.query('SELECT bo.id,bo.shipping_status AS shippingStatus,bo.tracking_id AS trackingId,bo.created_at AS createdAt,po.amount,po.status AS paymentStatus FROM book_orders bo JOIN payment_orders po ON po.id=bo.payment_order_id WHERE bo.student_id=:uid ORDER BY bo.created_at DESC', { replacements: { uid: userId(req) }, type: QueryTypes.SELECT });
  res.json({ success: true, data: rows });
}));
app.get('/api/v1/students/me/orders/books/:id', run(async (req, res) => {
  const rows = await db.query('SELECT bo.*,po.amount,po.status AS paymentStatus FROM book_orders bo JOIN payment_orders po ON po.id=bo.payment_order_id WHERE bo.id=:id AND bo.student_id=:uid', { replacements: { id: req.params.id, uid: userId(req) }, type: QueryTypes.SELECT });
  res.json({ success: true, data: rows[0] || null });
}));
app.get('/api/v1/students/me/orders/books/:id/tracking', run(async (req, res) => {
  const rows = await db.query('SELECT tracking_id AS trackingId,shipping_status AS shippingStatus FROM book_orders WHERE id=:id AND student_id=:uid', { replacements: { id: req.params.id, uid: userId(req) }, type: QueryTypes.SELECT });
  res.json({ success: true, data: rows[0] || null });
}));
app.get('/api/v1/students/me/library', run(async (req, res) => {
  const rows = await db.query("SELECT DISTINCT b.id,b.title,b.pdf_url AS downloadUrl FROM book_orders bo JOIN payment_orders po ON po.id=bo.payment_order_id JOIN order_items oi ON oi.book_order_id=bo.id JOIN books b ON b.id=oi.book_id WHERE bo.student_id=:uid AND po.status='SUCCESS' AND b.is_digital=1", { replacements: { uid: userId(req) }, type: QueryTypes.SELECT });
  res.json({ success: true, data: rows });
}));
app.get('/api/v1/students/me/library/:bookId/download', run(async (req, res) => {
  const rows = await db.query("SELECT b.pdf_url AS downloadUrl FROM book_orders bo JOIN payment_orders po ON po.id=bo.payment_order_id JOIN order_items oi ON oi.book_order_id=bo.id JOIN books b ON b.id=oi.book_id WHERE bo.student_id=:uid AND b.id=:bookId AND po.status='SUCCESS' AND b.is_digital=1 LIMIT 1", { replacements: { uid: userId(req), bookId: req.params.bookId }, type: QueryTypes.SELECT });
  if (!rows[0]) return res.status(403).json({ success: false, error: { code: 'NO_ENTITLEMENT', message: 'Digital book has not been purchased' } });
  res.json({ success: true, data: rows[0] });
}));
app.use('/internal/v1', (req, res, next) => !process.env.INTERNAL_API_KEY || req.header('x-internal-api-key') === process.env.INTERNAL_API_KEY ? next() : res.status(401).json({ success: false }));
app.get('/internal/v1/books', run(async (_req, res) => res.json({ success: true, data: await db.query('SELECT * FROM books ORDER BY created_at DESC', { type: QueryTypes.SELECT }) })));
app.post('/internal/v1/books', run(async (req, res) => { const id=randomUUID(); await db.query("INSERT INTO books(id,title,author,subject_id,description,price,stock_quantity,is_digital,pdf_url,cover_url,status) VALUES(:id,:title,:author,:subjectId,:description,:price,:stock,:digital,:pdf,:cover,'ACTIVE')",{replacements:{id,title:req.body.title,author:req.body.author||null,subjectId:req.body.subjectId||null,description:req.body.description||null,price:req.body.price,stock:req.body.stockQuantity||0,digital:req.body.isDigital?1:0,pdf:req.body.pdfUrl||null,cover:req.body.coverUrl||null}});res.status(201).json({success:true,data:{id}})}));
app.get('/internal/v1/finance/transactions', run(async (_req,res)=>res.json({success:true,data:await db.query('SELECT * FROM payment_orders ORDER BY created_at DESC',{type:QueryTypes.SELECT})})));
app.get('/internal/v1/finance/transactions/:id', run(async (req,res)=>res.json({success:true,data:(await db.query('SELECT * FROM payment_orders WHERE id=:id',{replacements:{id:req.params.id},type:QueryTypes.SELECT}))[0]||null})));
app.post('/internal/v1/finance/refunds', run(async (req,res)=>{const id=randomUUID();await db.query("INSERT INTO refunds(id,payment_order_id,amount,reason,status)VALUES(:id,:paymentId,:amount,:reason,'PENDING')",{replacements:{id,paymentId:req.body.transactionId,amount:req.body.amount,reason:req.body.reason||null}});res.status(202).json({success:true,data:{id}})}));
app.get('/health', (_req, res) => res.json({ service: 'commerce-service', status: 'ok' }));
app.use((_req, res) => res.status(404).json({ success: false, error: { code: 'ROUTE_NOT_FOUND', message: 'Route not found' } }));
const port = Number(process.env.PORT || 3003);
db.authenticate().then(() => app.listen(port, () => console.log(`commerce-service listening on ${port}`))).catch(e => { console.error(e); process.exit(1); });

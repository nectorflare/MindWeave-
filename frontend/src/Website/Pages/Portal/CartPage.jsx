import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaLock, FaShoppingBag, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { api, getAuthUser } from "../../../services/api";
import "./CartPage.css";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
const emptyAddress = { line1: "", city: "", state: "", pincode: "" };

export default function CartPage() {
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState(emptyAddress);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [order, setOrder] = useState(null);
  const user = getAuthUser();
  const ordersPath = user?.role === "SCHOOL_ADMIN" ? "/school/my-orders" : "/student/my-orders";

  const load = useCallback(async () => {
    try { const response = await api("/api/v1/cart"); setItems(response.data?.items || []); }
    catch (error) { setStatus({ type: "error", text: error.message }); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const update = async (item, quantity) => {
    if (quantity < 1) return remove(item.id);
    setBusy(item.id); setStatus({ type: "", text: "" });
    try { await api(`/api/v1/cart/items/${item.id}`, { method: "PATCH", body: JSON.stringify({ quantity }) }); await load(); }
    catch (error) { setStatus({ type: "error", text: error.message }); }
    finally { setBusy(""); }
  };
  const remove = async (id) => {
    setBusy(id); setStatus({ type: "", text: "" });
    try { await api(`/api/v1/cart/items/${id}`, { method: "DELETE" }); await load(); }
    catch (error) { setStatus({ type: "error", text: error.message }); }
    finally { setBusy(""); }
  };
  const checkout = async (event) => {
    event.preventDefault(); setBusy("checkout"); setStatus({ type: "", text: "" });
    try {
      if (!window.Razorpay) throw new Error("Payment checkout could not be loaded. Please refresh and try again.");
      const response = await api("/api/v1/orders/books/checkout", { method: "POST", body: JSON.stringify({ shippingAddress: address }) });
      const paymentOrder = response.data;
      const razorpay = new window.Razorpay({
        key: paymentOrder.razorpayKeyId, amount: paymentOrder.amount, currency: paymentOrder.currency,
        name: "MindWeave", description: "Book purchase", order_id: paymentOrder.razorpayOrderId,
        prefill: { name: user?.name || "", email: user?.email || "", contact: user?.contact || "" },
        notes: { book_order_id: paymentOrder.orderId }, theme: { color: "#f59e0b" },
        handler: async (payment) => {
          try {
            await api("/api/v1/payments/verify", { method: "POST", body: JSON.stringify({ orderId: paymentOrder.paymentOrderId, razorpayOrderId: payment.razorpay_order_id, paymentId: payment.razorpay_payment_id, signature: payment.razorpay_signature }) });
            setOrder(paymentOrder); setItems([]); setStatus({ type: "success", text: "Payment successful. Your order is confirmed." });
          } catch (error) { setStatus({ type: "error", text: error.message }); }
          finally { setBusy(""); }
        },
        modal: { ondismiss: () => { setStatus({ type: "error", text: "Payment was cancelled. Your order is still awaiting payment." }); setBusy(""); } }
      });
      razorpay.on("payment.failed", (failure) => { setStatus({ type: "error", text: failure.error?.description || "Payment failed. Please try again." }); setBusy(""); });
      razorpay.open();
    }
    catch (error) { setStatus({ type: "error", text: error.message }); setBusy(""); }
  };
  const total = items.reduce((sum, item) => sum + Number(item.lineTotal), 0);

  return <><Navbar /><main className="cart-page"><Link className="cart-back" to="/books-store"><FaArrowLeft /> Continue shopping</Link><header className="cart-header"><div><span>Secure checkout</span><h1>Your shopping cart</h1><p>{items.reduce((sum, item) => sum + Number(item.quantity), 0)} items ready for checkout</p></div><FaShoppingBag /></header>
    {status.text && <div className={`cart-status ${status.type}`} role="status">{status.text}{order && <Link to={ordersPath}>View my orders</Link>}</div>}
    {loading ? <div className="cart-empty">Loading your cart…</div> : !items.length && !order ? <div className="cart-empty"><FaShoppingBag /><h2>Your cart is empty</h2><p>Explore the bookstore and add a learning resource to get started.</p><Link to="/books-store">Browse books</Link></div> : items.length > 0 && <form className="cart-layout" onSubmit={checkout}><section className="cart-items" aria-label="Cart items">{items.map((item) => <article className="cart-item" key={item.id}><div className="cart-book-icon">{item.title.slice(0, 1)}</div><div className="cart-item-info"><h2>{item.title}</h2><p>{money.format(Number(item.price))} each</p><button type="button" className="cart-remove" disabled={busy === item.id} onClick={() => remove(item.id)}><FaTrash /> Remove</button></div><div className="cart-quantity" aria-label={`Quantity for ${item.title}`}><button type="button" disabled={busy === item.id} onClick={() => update(item, item.quantity - 1)} aria-label="Decrease quantity">−</button><output>{item.quantity}</output><button type="button" disabled={busy === item.id} onClick={() => update(item, item.quantity + 1)} aria-label="Increase quantity">+</button></div><strong className="cart-line-total">{money.format(Number(item.lineTotal))}</strong></article>)}</section><aside className="cart-summary"><h2>Order summary</h2><div className="cart-total-row"><span>Subtotal</span><strong>{money.format(total)}</strong></div><p className="cart-calculation-note">Shipping, serviceability, and GST are validated by the server at checkout.</p><h3>Shipping address</h3><div className="cart-fields"><label>Address line<input required autoComplete="street-address" value={address.line1} onChange={(event) => setAddress({ ...address, line1: event.target.value })} /></label><label>City<input required autoComplete="address-level2" value={address.city} onChange={(event) => setAddress({ ...address, city: event.target.value })} /></label><label>State<input required autoComplete="address-level1" value={address.state} onChange={(event) => setAddress({ ...address, state: event.target.value })} /></label><label>PIN code<input required inputMode="numeric" pattern="[0-9]{6}" title="Enter a 6-digit PIN code" autoComplete="postal-code" value={address.pincode} onChange={(event) => setAddress({ ...address, pincode: event.target.value.replace(/\D/g, "").slice(0, 6) })} /></label></div><button className="cart-checkout" disabled={busy === "checkout"}><FaLock /> {busy === "checkout" ? "Creating order…" : "Proceed to checkout"}</button><small>Payment is initiated after the order is created.</small></aside></form>}
  </main><Footer /></>;
}

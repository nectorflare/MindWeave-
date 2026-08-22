import { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import bookImage from "../../../assets/book-image.jpg";
import { api, getAuthUser } from "../../../services/api";
import "./BookDetails.css";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });

export default function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!bookId) { setLoading(false); return; }
    api(`/api/v1/books/${bookId}`).then((response) => setBook(response.data)).catch((error) => setMessage(error.message)).finally(() => setLoading(false));
  }, [bookId]);

  const add = async (goToCart = false) => {
    if (!getAuthUser()) return navigate("/student-login", { state: { from: location.pathname } });
    setAdding(true); setMessage("");
    try {
      await api("/api/v1/cart/items", { method: "POST", body: JSON.stringify({ bookId, quantity }) });
      if (goToCart) navigate("/cart"); else setMessage(`${quantity} ${quantity === 1 ? "copy" : "copies"} added to your cart.`);
    } catch (error) { setMessage(error.message); }
    finally { setAdding(false); }
  };

  return <><Navbar /><main className="book-detail-page"><Link className="book-back" to="/books-store"><FaArrowLeft /> Back to bookstore</Link>
    {loading && <div className="book-detail-state">Loading book details…</div>}
    {!loading && !book && <div className="book-detail-state"><h1>Book not found</h1><p>{message || "Choose a book from the catalogue to see its details."}</p><Link to="/books-store">Browse bookstore</Link></div>}
    {book && <section className="book-product"><div className="book-product-image"><img src={book.coverUrl || bookImage} onError={(event) => { event.currentTarget.src = bookImage; }} alt={`Cover of ${book.title}`} /></div><div className="book-product-info"><span className="book-kicker">Official MindWeave resource</span><h1>{book.title}</h1><p className="book-author">by {book.author || "MindWeave Foundation"}</p><strong className="book-price">{money.format(Number(book.price))}</strong><p className="book-copy">{book.description || "A focused learning resource designed for concept building and Olympiad preparation."}</p><div className="book-facts"><span><FaCheck /> {book.isDigital ? "Digital edition" : "Printed edition"}</span><span><FaCheck /> Secure checkout</span><span><FaCheck /> Stock verified live</span></div><p className={Number(book.stockQuantity) > 0 ? "book-stock available" : "book-stock unavailable"}>{Number(book.stockQuantity) > 0 ? `${book.stockQuantity} copies available` : "Currently out of stock"}</p>
      <div className="book-buy-row"><label>Quantity <span className="book-quantity"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">−</button><output>{quantity}</output><button type="button" onClick={() => setQuantity((value) => Math.min(Number(book.stockQuantity), value + 1))} aria-label="Increase quantity">+</button></span></label><button className="book-add" disabled={adding || Number(book.stockQuantity) < 1} onClick={() => add(false)}><FaShoppingCart /> {adding ? "Adding…" : "Add to cart"}</button><button className="book-buy" disabled={adding || Number(book.stockQuantity) < 1} onClick={() => add(true)}>Buy now</button></div>
      {message && <div className="book-message" role="status">{message} {message.includes("added") && <Link to="/cart">View cart</Link>}</div>}
    </div></section>}
  </main><Footer /></>;
}

import { useEffect, useMemo, useState } from "react";
import { FaArrowRight, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import bookImage from "../../../assets/book-image.jpg";
import { api, getAuthUser } from "../../../services/api";
import "./BookList.css";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });

export default function BookList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [adding, setAdding] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    api("/api/v1/books").then((response) => setBooks(Array.isArray(response.data) ? response.data : []))
      .catch((requestError) => setError(requestError.message)).finally(() => setLoading(false));
    if (getAuthUser()) api("/api/v1/cart").then((response) => setCartCount((response.data?.items || []).reduce((sum, item) => sum + Number(item.quantity), 0))).catch(() => {});
  }, []);

  const visibleBooks = useMemo(() => {
    const term = query.trim().toLowerCase();
    return books.filter((book) => !term || [book.title, book.author, book.description].some((value) => String(value || "").toLowerCase().includes(term))).sort((a, b) => {
      if (sort === "price-low") return Number(a.price) - Number(b.price);
      if (sort === "price-high") return Number(b.price) - Number(a.price);
      if (sort === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [books, query, sort]);

  const addToCart = async (book) => {
    if (!getAuthUser()) return navigate("/student-login", { state: { from: location.pathname } });
    setAdding(book.id); setNotice("");
    try {
      await api("/api/v1/cart/items", { method: "POST", body: JSON.stringify({ bookId: book.id, quantity: 1 }) });
      setCartCount((count) => count + 1); setNotice(`${book.title} was added to your cart.`);
    } catch (requestError) { setNotice(requestError.message); }
    finally { setAdding(""); }
  };

  return <><Navbar /><main className="store-page">
    <section className="store-hero"><div><span className="store-eyebrow">MindWeave learning store</span><h1>Books that turn preparation into progress.</h1><p>Browse official learning material, check availability, and order securely from one simple place.</p></div><Link className="store-cart-link" to="/cart"><FaShoppingCart /> Cart {cartCount > 0 && <span>{cartCount}</span>}</Link></section>
    <section className="store-toolbar" aria-label="Book catalogue controls"><label className="store-search"><FaSearch aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title, author, or topic" aria-label="Search books" /></label><label className="store-sort">Sort <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="title">Title: A–Z</option></select></label></section>
    {notice && <div className="store-notice" role="status">{notice}<Link to="/cart">View cart <FaArrowRight /></Link></div>}
    {loading && <div className="store-state">Loading the catalogue…</div>}
    {error && <div className="store-state store-error" role="alert"><strong>We couldn’t load the bookstore.</strong><span>{error}</span><button onClick={() => window.location.reload()}>Try again</button></div>}
    {!loading && !error && <><div className="store-results"><strong>{visibleBooks.length}</strong> {visibleBooks.length === 1 ? "book" : "books"} available</div>{visibleBooks.length ? <div className="store-grid">{visibleBooks.map((book) => { const inStock = Number(book.stockQuantity) > 0; return <article className="store-card" key={book.id}><Link className="store-cover" to={`/books/${book.id}`}><img src={book.coverUrl || bookImage} onError={(event) => { event.currentTarget.src = bookImage; }} alt={`Cover of ${book.title}`} /><span className={inStock ? "in-stock" : "out-stock"}>{inStock ? `${book.stockQuantity} in stock` : "Out of stock"}</span></Link><div className="store-card-body"><p className="store-author">{book.author || "MindWeave Foundation"}</p><h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2><p className="store-description">{book.description || "Olympiad preparation and concept-building material."}</p><div className="store-card-footer"><strong>{money.format(Number(book.price))}</strong><button disabled={!inStock || adding === book.id} onClick={() => addToCart(book)}><FaShoppingCart /> {adding === book.id ? "Adding…" : "Add"}</button></div></div></article>; })}</div> : <div className="store-state"><strong>No matching books</strong><span>Try a broader search.</span><button onClick={() => setQuery("")}>Clear search</button></div>}</>}
  </main><Footer /></>;
}

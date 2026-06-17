import React, { useState } from "react";
import "./BookDetails.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import bookImage from "../../../assets/book-image.jpg";
const relatedBooks = [
  {
    id: 1,
    src: bookImage,
    label: "Class 1 - 12",
    price: "₹450.00",
  },
  {
    id: 2,
    src: bookImage,
    label: "Class 1 - 12",
    price: "₹450.00",
  },
  {
    id: 3,
    src: bookImage,
    label: "Class 1 - 12",
    price: "₹450.00",
  },
  {
    id: 4,
    src: bookImage,
    label: "Class 1 - 12",
    price: "₹350.00",
  },
  {
    id: 5,
    src: bookImage,
    label: "Class 1 - 12",
    price: "₹399.00",
  },
];

const thumbImages = [bookImage, bookImage, bookImage, bookImage];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Key Features" },
  { id: "inside", label: "What's Inside" },
  { id: "why", label: "Why This Book?" },
  { id: "reviews", label: "Reviews" },
  { id: "shipping", label: "Shipping & Returns" },
];

const reviews = [
  {
    name: "Rahul Sharma",
    rating: "★★★★★",
    text: "Excellent book for ISCO preparation.",
  },
  {
    name: "Ananya Verma",
    rating: "★★★★★",
    text: "Very helpful for my Olympiad exam.",
  },
  { name: "Karan Patel", rating: "★★★★", text: "Good content and quality." },
];

export default function BookDetails() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");
  const [toast, setToast] = useState({ show: false, message: "" });

  const mainImgSrc = thumbImages[activeThumb];

  const handleAddToCart = () => {
    setToast({ show: true, message: `${qty} item added to cart` });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  };

  return (
    <>
      <Navbar />
      <main className="bd-page">
        <div className="bd-container">
          {/* Breadcrumb */}
          <div className="bd-breadcrumb">
            Home &gt; Books Store &gt; Olympiad Books &gt;{" "}
            <span className="bd-breadcrumb-active">
              International Science Olympiad
            </span>
          </div>

          {/* Product Layout */}
          <section className="bd-product-layout">
            {/* Gallery */}
            <div className="bd-gallery">
              <div className="bd-thumbs">
                {thumbImages.map((src, i) => (
                  <div
                    key={i}
                    className={`bd-thumb ${activeThumb === i ? "bd-thumb-active" : ""}`}
                    onClick={() => setActiveThumb(i)}
                  >
                    <img src={src} alt={`Thumb ${i + 1}`} />
                  </div>
                ))}
              </div>

              <div className="bd-main-img">
                <img id="bd-mainBookImg" src={mainImgSrc} alt="Book Main" />
              </div>
            </div>

            {/* Product Info */}
            <div className="bd-product-info">
              <span className="bd-badge">Olympiad Book</span>
              <h1>International Science Olympiad (ISCO)</h1>
              <div className="bd-class-text">Class 1 - 12</div>
              <div className="bd-rating">★★★★★ 4.8 (120 Reviews)</div>
              <div className="bd-price">₹450.00</div>

              <p className="bd-desc">
                ISCO is one of the most prestigious science competitions in
                India that encourages students to explore the wonders of science
                and develop analytical thinking and problem-solving skills.
              </p>

              <div className="bd-meta">
                <div className="bd-meta-box">
                  Author <strong>SilverZone Foundation</strong>
                </div>
                <div className="bd-meta-box">
                  Publisher <strong>Mind Weaver Foundation</strong>
                </div>
                <div className="bd-meta-box">
                  Language <strong>English</strong>
                </div>
              </div>

              <div className="bd-actions">
                <div className="bd-qty">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    −
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)}>+</button>
                </div>
                <button
                  className="bd-btn bd-add-cart-btn"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button className="bd-btn bd-btn-blue">Buy Now</button>
              </div>
            </div>

            {/* Side Card */}
            <aside className="bd-side-card">
              <h3>Product Details</h3>

              {[
                ["ISBN", "978-93-91234-567-8"],
                ["Pages", "320 Pages"],
                ["Dimensions", "24 × 18 × 1.5 cm"],
                ["Weight", "520 g"],
                ["Edition", "2024-25"],
                ["Suitable For", "ISCO Exam"],
                ["Category", "Olympiad Books"],
              ].map(([label, value]) => (
                <div className="bd-detail-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}

              <div className="bd-tags">
                <span>Science</span>
                <span>Olympiad</span>
                <span>ISCO</span>
              </div>

              <a href="#" className="bd-outline-btn">
                Download Brochure
              </a>
              <a href="#" className="bd-outline-btn">
                Share This Book
              </a>
            </aside>
          </section>

          {/* Features Strip */}
          <section className="bd-features">
            <div className="bd-feature">
              🚚{" "}
              <div>
                <strong>Free Shipping</strong>
                <br />
                On orders above ₹499
              </div>
            </div>
            <div className="bd-feature">
              🔒{" "}
              <div>
                <strong>Secure Payment</strong>
                <br />
                100% secure checkout
              </div>
            </div>
            <div className="bd-feature">
              ↩{" "}
              <div>
                <strong>Easy Returns</strong>
                <br />7 days return policy
              </div>
            </div>
            <div className="bd-feature">
              ⭐{" "}
              <div>
                <strong>Best Quality</strong>
                <br />
                Original & Authentic
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section className="bd-tabs-box">
            <div className="bd-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`bd-tab-btn ${activeTab === tab.id ? "bd-tab-active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Overview */}
            <div
              className={`bd-tab-content ${activeTab === "overview" ? "bd-tab-content-active" : ""}`}
            >
              <div className="bd-tab-grid">
                <div>
                  <h3>About the Book</h3>
                  <p>
                    The International Science Olympiad book is specially
                    designed for students from Class 1 to 12 to help them excel
                    in one of India's most prestigious science competitions.
                  </p>
                  <p>
                    It covers Physics, Chemistry and Biology with theory,
                    concepts and practice questions.
                  </p>
                </div>
                <img src={bookImage} alt="Science Learning" />
              </div>

              <div className="bd-info-grid">
                <div className="bd-info-card">
                  <h3>Learning Outcomes</h3>
                  <ul>
                    <li>Strengthen core science concepts</li>
                    <li>Improve analytical and logical thinking</li>
                    <li>Enhance problem-solving abilities</li>
                    <li>Prepare effectively for ISCO exam</li>
                    <li>Build confidence in science subjects</li>
                  </ul>
                </div>
                <div className="bd-info-card">
                  <h3>Key Highlights</h3>
                  <ul>
                    <li>Based on latest ISCO syllabus</li>
                    <li>Includes previous year questions</li>
                    <li>Chapter-wise practice exercises</li>
                    <li>Detailed explanations for understanding</li>
                    <li>Ideal for school and self preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`bd-tab-content ${activeTab === "features" ? "bd-tab-content-active" : ""}`}
            >
              <h3>Key Features</h3>
              <p>
                Latest syllabus, solved examples, chapter-wise practice,
                previous year questions and mock tests.
              </p>
            </div>

            <div
              className={`bd-tab-content ${activeTab === "inside" ? "bd-tab-content-active" : ""}`}
            >
              <h3>What's Inside</h3>
              <p>
                Science concepts, practice questions, sample papers, answer keys
                and exam preparation tips.
              </p>
            </div>

            <div
              className={`bd-tab-content ${activeTab === "why" ? "bd-tab-content-active" : ""}`}
            >
              <h3>Why This Book?</h3>
              <p>
                This book helps students build strong fundamentals and prepare
                confidently for Olympiad exams.
              </p>
            </div>

            <div
              className={`bd-tab-content ${activeTab === "reviews" ? "bd-tab-content-active" : ""}`}
            >
              <h3>Reviews</h3>
              <p>
                Students and parents rated this book 4.8 out of 5 for content
                quality and exam preparation.
              </p>
            </div>

            <div
              className={`bd-tab-content ${activeTab === "shipping" ? "bd-tab-content-active" : ""}`}
            >
              <h3>Shipping & Returns</h3>
              <p>
                Free shipping on orders above ₹499. Easy return available within
                7 days as per policy.
              </p>
            </div>
          </section>

          {/* Related Books */}
          <section className="bd-related">
            <h3>You May Also Like</h3>
            <div className="bd-book-grid">
              {relatedBooks.map((book) => (
                <div className="bd-book-card" key={book.id}>
                  <img src={book.src} alt={`Related book ${book.id}`} />
                  <small>{book.label}</small>
                  <strong>{book.price}</strong>
                  <button
                    className="bd-small-btn"
                    onClick={() => navigate("/book-details")}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Grid */}
          <section className="bd-bottom-grid">
            <div className="bd-panel">
              <h3>Why Students Love This Book</h3>
              <div className="bd-rating-stats">
                <div>
                  <h2>4.8/5</h2>
                  <small>Overall Rating</small>
                </div>
                <div>
                  <h2>120+</h2>
                  <small>Student Reviews</small>
                </div>
                <div>
                  <h2>95%</h2>
                  <small>Would Recommend</small>
                </div>
              </div>
            </div>

            <div className="bd-panel">
              <h3>Student Reviews</h3>
              {reviews.map((r, i) => (
                <div className="bd-review" key={i}>
                  <strong>{r.name}</strong>
                  {r.rating} {r.text}
                </div>
              ))}
            </div>

            <div className="bd-panel bd-bulk">
              <h3>For Schools & Institutions</h3>
              <p>Looking to buy in bulk for your school?</p>
              <ul>
                <li>Special Discounts</li>
                <li>Custom Invoicing</li>
                <li>Priority Support</li>
              </ul>
              <button
                className="bd-btn bd-btn-orange"
                style={{ marginTop: "16px" }}
              >
                Contact Us
              </button>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="bd-cta">
            <div>
              <h2>Ready To Start Your Olympiad Journey?</h2>
              <p>Get your copy now and take the first step towards success!</p>
            </div>
            <div className="bd-cta-actions">
              <button className="bd-btn bd-btn-orange">Buy Now</button>
              <button className="bd-btn bd-btn-blue bd-btn-outline-white">
                Contact Us
              </button>
            </div>
          </section>
        </div>

        {/* Toast */}
        {toast.show && (
          <div className="bd-toast" style={{ display: "block" }}>
            {toast.message}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

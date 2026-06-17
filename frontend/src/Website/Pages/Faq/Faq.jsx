import { useState, useRef, useEffect } from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
const categories = [
  { key: "all", emoji: "🏅", label: "All Questions", count: 24 },
  { key: "olympiads", emoji: "🏆", label: "Olympiads", count: 8 },
  { key: "registration", emoji: "📋", label: "Registration", count: 5 },
  { key: "exam", emoji: "📊", label: "Exam & Results", count: 4 },
  { key: "certificates", emoji: "📄", label: "Certificates", count: 3 },
  { key: "programs", emoji: "📖", label: "Programs", count: 2 },
  { key: "general", emoji: "❓", label: "General", count: 2 },
];

const faqs = [
  {
    id: 1,
    category: "general",
    question: "What is Mind Weaver Foundation?",
    answer:
      "Mind Weaver Foundation is an educational organization dedicated to empowering students through Olympiads, skill-based programs, career guidance, and academic excellence initiatives across India.",
  },
  {
    id: 2,
    category: "olympiads",
    question: "Who can participate in the Olympiads?",
    answer:
      "Students from eligible classes can participate in the Olympiads as per the rules and category defined by Mind Weaver Foundation.",
  },
  {
    id: 3,
    category: "registration",
    question: "How can I register for an Olympiad?",
    answer:
      "You can register through the official website by filling the student registration form and completing the required payment process.",
  },
  {
    id: 4,
    category: "registration",
    question: "Is there any registration fee?",
    answer:
      "Yes, registration fees may apply depending on the Olympiad or program selected by the student.",
  },
  {
    id: 5,
    category: "exam",
    question: "How will I get the exam date and time?",
    answer:
      "Exam date and time will be shared through the website dashboard, registered email, or official communication channels.",
  },
  {
    id: 6,
    category: "exam",
    question: "How are the Olympiad results declared?",
    answer:
      "Results will be declared online on the official website. Students can check their results using their login details or roll number.",
  },
  {
    id: 7,
    category: "olympiads",
    question: "What benefits do students get by participating?",
    answer:
      "Students get academic exposure, competitive learning, certificates, ranking opportunities, and confidence-building experience.",
  },
  {
    id: 8,
    category: "certificates",
    question: "Will participants receive a certificate?",
    answer:
      "Yes, eligible participants will receive certificates as per the Olympiad or program guidelines.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  const answerRef = useRef(null);

  return (
    <div
      className={`faq__item${isOpen ? " active" : ""}`}
      data-category={faq.category}
    >
      <button
        className="faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq__icon">{isOpen ? "−" : "+"}</span>
        {faq.question}
        <small>⌄</small>
      </button>
      <div
        className="faq__answer"
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(faqs[0].id);

  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setOpenId(null);
  };

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="faq__page">
      {/* Hero */}
      <section className="faq__hero">
        <div className="faq__container faq__hero-wrap">
          <div className="faq__hero-content">
            <div className="faq__breadcrumb">
              <Link to="/">Home</Link> &gt; FAQ
            </div>
            <h1>
              Frequently
              <br />
              Asked Questions
            </h1>
            <div className="faq__title-line" />
            <p>
              Find answers to the most common questions about our Olympiads,
              programs, registration, and more.
            </p>
            <Link to="/contact-us" className="faq__hero-btn">
              Contact Us
            </Link>
          </div>

          <div className="faq__hero-image">
            <img src="images/faq-girl.png" alt="FAQ Student" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="faq__categories">
        <div className="faq__container">
          <span className="faq__section-label">EXPLORE FAQ TOPICS</span>
          <h2>Browse By Category</h2>

          <div className="faq__category-grid">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`faq__category-card${activeCategory === cat.key ? " active" : ""}`}
                onClick={() => handleCategoryChange(cat.key)}
              >
                <span>{cat.emoji}</span>
                <h4>{cat.label}</h4>
                <p>({cat.count})</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq__list-section">
        <div className="faq__container">
          <span className="faq__section-label">ALL QUESTIONS</span>
          <h2>Find Answers To Your Questions</h2>

          <div className="faq__accordion">
            {filtered.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq__cta-section">
        <div className="faq__container">
          <div className="faq__cta">
            <h2>Still Have Questions?</h2>
            <p>
              Our support team is here to help you with any queries you may
              have.
            </p>
            <div className="faq__cta-actions">
              <a href="tel:+911234567890">📞 +91 12345 67890</a>
              <a href="mailto:info@mindweaverfoundation.org">
                ✉ info@mindweaverfoundation.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React, { useState, useEffect, useRef } from "react";
import "./OlympiadDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// ── Data ─────────────────────────────────────────────────────────────────────

const summaryRows = [
  {
    icon: "🏷",
    label: "Olympiad Name",
    value: "International Science Olympiad (ISCO)",
  },
  { icon: "🏢", label: "Conducted By", value: "Mind Weaver Foundation" },
  { icon: "🎓", label: "Eligible Classes", value: "1 to 12" },
  { icon: "💻", label: "Exam Mode", value: "Online" },
  { icon: "📅", label: "Exam Date", value: "Nov 2025" },
  { icon: "⏰", label: "Registration Last Date", value: "Oct 15, 2025" },
  {
    icon: "🌐",
    label: "Official Website",
    value: "www.mindweaverfoundation.org",
  },
];

const highlights = [
  {
    ico: "🏆",
    title: "National Level Recognition",
    desc: "Top performers are recognized at national level.",
  },
  {
    ico: "📖",
    title: "Enhance Knowledge",
    desc: "Enhances conceptual understanding and analytical skills.",
  },
  {
    ico: "🎖",
    title: "Exciting Awards",
    desc: "Attractive rewards, certificates and scholarships.",
  },
  {
    ico: "🌍",
    title: "International Exposure",
    desc: "Chance to represent India in International Science Olympiad.",
  },
];

const whyCards = [
  {
    ico: "🎯",
    title: "Skill Development",
    desc: "Enhances logical thinking, conceptual clarity and application skills.",
  },
  {
    ico: "📜",
    title: "Certificates",
    desc: "All participants receive certificates and top rankers get merit certificates.",
  },
  {
    ico: "🎁",
    title: "Awards & Recognition",
    desc: "Medals, trophies and exciting prizes for top achievers.",
  },
  {
    ico: "🚀",
    title: "Career Growth",
    desc: "Builds a strong foundation for future competitive exams.",
  },
];

const syllabusItems = [
  {
    label: "Class 1 - 2",
    body: "Living and non-living things, plants, animals, environment, basic science activities.",
  },
  {
    label: "Class 3 - 5",
    body: "Food, health, safety, matter, force, energy, earth and universe basics.",
  },
  {
    label: "Class 6 - 8",
    body: "Physics, Chemistry, Biology, environment, scientific reasoning and HOTS questions.",
  },
  {
    label: "Class 9 - 10",
    body: "Motion, force, atoms, molecules, life processes, natural resources and practical science.",
  },
  {
    label: "Class 11 - 12",
    body: "Advanced Physics, Chemistry, Biology, analytical reasoning and higher order questions.",
  },
];

const examPattern = [
  {
    section: "Section 1",
    desc: "Logical Reasoning",
    questions: 20,
    marks: 1,
    total: 20,
  },
  {
    section: "Section 2",
    desc: "Subject Knowledge (Science)",
    questions: 30,
    marks: 1,
    total: 30,
  },
  {
    section: "Section 3",
    desc: "Higher Order Thinking Skills",
    questions: 20,
    marks: 1,
    total: 20,
  },
  {
    section: "Section 4",
    desc: "Achievers Section",
    questions: 10,
    marks: 3,
    total: 30,
  },
];

const samplePapers = [
  "Class 1 - 2",
  "Class 3 - 5",
  "Class 6 - 8",
  "Class 9 - 10",
  "Class 11 - 12",
];

const awards = [
  { ico: "🏆", rank: "Rank 1", desc: "Cash Prize + Trophy + Certificate" },
  { ico: "🥈", rank: "Rank 2", desc: "Cash Prize + Medal + Certificate" },
  { ico: "🥉", rank: "Rank 3", desc: "Cash Prize + Medal + Certificate" },
  {
    ico: "🏵",
    rank: "Participation Certificate",
    desc: "For all participants",
  },
];

const dates = [
  { label: "Registration Starts", date: "Aug 01, 2025", red: false },
  { label: "Last Date to Register", date: "Oct 15, 2025", red: false },
  { label: "Admit Card Release", date: "Oct 25, 2025", red: true },
  { label: "Exam Date", date: "Nov 2025", red: true },
  { label: "Result Declaration", date: "Dec 2025", red: false },
  { label: "Certificate Distribution", date: "Jan 2026", red: false },
];

const processSteps = [
  {
    num: "1",
    title: "Register",
    desc: "Fill the registration form with correct details.",
  },
  {
    num: "2",
    title: "Pay Fees",
    desc: "Pay the registration fee securely online.",
  },
  {
    num: "3",
    title: "Admit Card",
    desc: "Download admit card before the exam.",
  },
  {
    num: "4",
    title: "Appear for Exam",
    desc: "Attend the exam and do your best.",
  },
];

const faqs = [
  {
    q: "Who can participate in ISCO?",
    a: "Students from Class 1 to 12 can participate in ISCO.",
  },
  { q: "What is the exam mode?", a: "The exam mode is online." },
  {
    q: "How will I receive my certificate?",
    a: "Certificates will be available after result declaration as per official guidelines.",
  },
  {
    q: "When will the results be announced?",
    a: "Results are expected in Dec 2025.",
  },
  {
    q: "Is there any refund policy?",
    a: "Refund policy will be applicable as per official terms and conditions.",
  },
];

const navTabs = [
  { label: "Overview", target: "od-overview" },
  { label: "Syllabus", target: "od-syllabus" },
  { label: "Exam Pattern", target: "od-pattern" },
  { label: "Sample Papers", target: "od-samples" },
  { label: "Awards & Scholarships", target: "od-awards" },
  { label: "Important Dates", target: "od-dates" },
  { label: "FAQ", target: "od-faq" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function OlympiadDetails() {
  const [activeTab, setActiveTab] = useState("od-overview");
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "" });

  const accordionRefs = useRef([]);
  const faqRefs = useRef([]);

  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: "" }), 1800);
  };

  const handleTabClick = (target) => {
    setActiveTab(target);
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? -1 : index));
  };

  const handleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  };

  // Compute accordion body heights
  useEffect(() => {
    accordionRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = openAccordion === i ? el.scrollHeight + "px" : "0px";
    });
  }, [openAccordion]);

  useEffect(() => {
    faqRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = openFaq === i ? el.scrollHeight + "px" : "0px";
    });
  }, [openFaq]);

  return (
    <>
      <Navbar />
      <main className="od-page">
        <div className="od-container">
          {/* Breadcrumb */}
          <div className="od-breadcrumb">
            Home &gt; Olympiads &gt;{" "}
            <span className="od-breadcrumb-active">
              International Science Olympiad (ISCO)
            </span>
          </div>

          {/* Hero */}
          <section className="od-hero-layout">
            <div className="od-hero-card">
              <div className="od-hero-content">
                <div className="od-exam-logo">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <h1>International Science Olympiad (ISCO)</h1>
                <div className="od-tagline">
                  Ignite Curiosity. Discover Excellence.
                </div>
                <p>
                  ISCO is one of the most prestigious science competitions in
                  India that encourages students to explore the wonders of
                  science and develop analytical thinking and problem-solving
                  skills.
                </p>

                <div className="od-hero-stats">
                  <div className="od-hero-stat">
                    Classes <strong>1 - 12</strong>
                  </div>
                  <div className="od-hero-stat">
                    Exam Mode <strong>Online</strong>
                  </div>
                  <div className="od-hero-stat">
                    Exam Date <strong>Nov 2025</strong>
                  </div>
                  <div className="od-hero-stat">
                    Last Date <strong>Oct 15, 2025</strong>
                  </div>
                </div>

                <div className="od-hero-actions">
                  <button
                    className="od-btn od-btn-gold"
                    onClick={() => showToast("Register Now clicked")}
                  >
                    Register Now
                  </button>
                  <button
                    className="od-btn od-btn-dark"
                    onClick={() => showToast("Download Brochure clicked")}
                  >
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="od-hero-visual">
                <div className="od-student-card">
                  <div className="od-student-emoji">👩‍🎓🏆</div>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <aside className="od-summary-card">
              <h3>Olympiad Summary</h3>
              {summaryRows.map((row, i) => (
                <div className="od-summary-row" key={i}>
                  <i>{row.icon}</i>
                  <div>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </div>
                </div>
              ))}
              <button
                className="od-btn od-btn-gold"
                onClick={() => showToast("Register Now clicked")}
              >
                Register Now
              </button>
              <button
                className="od-btn od-btn-outline"
                onClick={() => showToast("Download Brochure clicked")}
              >
                Download Brochure
              </button>
            </aside>
          </section>

          {/* Highlights */}
          <section className="od-highlight-grid">
            {highlights.map((h, i) => (
              <div className="od-highlight-card" key={i}>
                <div className="od-ico">{h.ico}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </section>

          {/* Sticky Tabs */}
          <nav className="od-sticky-tabs">
            {navTabs.map((tab) => (
              <button
                key={tab.target}
                className={`od-tab-link ${activeTab === tab.target ? "od-tab-active" : ""}`}
                onClick={() => handleTabClick(tab.target)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Overview */}
          <section className="od-section-card" id="od-overview">
            <div className="od-overview-grid">
              <div>
                <h2 className="od-section-title">About ISCO</h2>
                <p className="od-section-text">
                  The International Science Olympiad (ISCO) is conducted to
                  promote interest in science among school students and
                  recognize their talent at the national and international
                  level. It assesses concepts from Physics, Chemistry, and
                  Biology through a challenging exam pattern.
                </p>
                <div className="od-mini-feature-grid">
                  <div className="od-mini-feature">
                    🧠 <strong>Encourages curiosity</strong>
                  </div>
                  <div className="od-mini-feature">
                    🎯 <strong>Problem solving skills</strong>
                  </div>
                  <div className="od-mini-feature">
                    🏅 <strong>Builds confidence</strong>
                  </div>
                  <div className="od-mini-feature">
                    🚀 <strong>Future ready</strong>
                  </div>
                </div>
              </div>
              <div className="od-science-visual">🔬📚</div>
            </div>
          </section>

          {/* Why Participate */}
          <section className="od-section-card">
            <h2 className="od-section-title">Why Participate in ISCO?</h2>
            <div className="od-why-grid">
              {whyCards.map((c, i) => (
                <div className="od-why-card" key={i}>
                  <div className="od-ico">{c.ico}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus */}
          <section className="od-section-card" id="od-syllabus">
            <h2 className="od-section-title">
              Syllabus <small>(Class Wise)</small>
            </h2>
            <div className="od-two-col">
              <div>
                {syllabusItems.map((item, i) => (
                  <div
                    key={i}
                    className={`od-accordion-item ${openAccordion === i ? "od-acc-active" : ""}`}
                  >
                    <button
                      className="od-accordion-head"
                      onClick={() => handleAccordion(i)}
                    >
                      {item.label}{" "}
                      <span>{openAccordion === i ? "−" : "+"}</span>
                    </button>
                    <div
                      className="od-accordion-body"
                      ref={(el) => (accordionRefs.current[i] = el)}
                    >
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>

              <div className="od-download-card">
                <div className="od-ico">📋</div>
                <p>Detailed syllabus for each class is available.</p>
                <button
                  className="od-btn od-btn-outline"
                  onClick={() => showToast("Download Syllabus clicked")}
                >
                  Download Syllabus
                </button>
              </div>
            </div>
          </section>

          {/* Exam Pattern */}
          <section className="od-section-card" id="od-pattern">
            <h2 className="od-section-title">Exam Pattern</h2>
            <div className="od-pattern-wrap">
              <div className="od-table-scroll">
                <table className="od-table">
                  <thead>
                    <tr>
                      <th>Section</th>
                      <th>Description</th>
                      <th>No. of Questions</th>
                      <th>Marks per Question</th>
                      <th>Total Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examPattern.map((row, i) => (
                      <tr key={i}>
                        <td>{row.section}</td>
                        <td>{row.desc}</td>
                        <td>{row.questions}</td>
                        <td>{row.marks}</td>
                        <td>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>Total</td>
                      <td>80 Questions</td>
                      <td></td>
                      <td>100 Marks</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="od-marks-card">
                <div className="od-badge-icon">🏵</div>
                <p>Total Marks</p>
                <h2>100</h2>
                <strong>Duration: 60 Minutes</strong>
              </div>
            </div>
          </section>

          {/* Sample Papers */}
          <section className="od-section-card" id="od-samples">
            <h2 className="od-section-title">Sample Papers</h2>
            <p className="od-section-text">
              Practice with sample papers and analyze your preparation level.
            </p>
            <div className="od-sample-grid">
              {samplePapers.map((cls, i) => (
                <div className="od-sample-card" key={i}>
                  <div className="od-ico">📄</div>
                  <h4>{cls}</h4>
                  <p>Sample Paper</p>
                  <button
                    className="od-small-outline"
                    onClick={() => showToast(`Download clicked`)}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Dates */}
          <section className="od-split-grid">
            <div className="od-section-card" id="od-awards">
              <h2 className="od-section-title">Awards & Scholarships</h2>
              <div className="od-awards-row">
                {awards.map((a, i) => (
                  <div className="od-award" key={i}>
                    <div className="od-ico">{a.ico}</div>
                    <h4>{a.rank}</h4>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="od-section-card" id="od-dates">
              <h2 className="od-section-title">Important Dates</h2>
              <div className="od-date-list">
                {dates.map((d, i) => (
                  <div className="od-date-row" key={i}>
                    <span className={`od-dot ${d.red ? "od-dot-red" : ""}`} />
                    <strong>{d.label}</strong>
                    <span>{d.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Registration Process */}
          <section className="od-section-card">
            <h2 className="od-section-title">Registration Process</h2>
            <div className="od-process-grid">
              {processSteps.map((step, i) => (
                <div className="od-process-card" key={i}>
                  <div className="od-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ & Contact */}
          <section className="od-faq-contact-grid" id="od-faq">
            <div className="od-section-card">
              <h2 className="od-section-title">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`od-faq-item ${openFaq === i ? "od-faq-active" : ""}`}
                >
                  <button className="od-faq-q" onClick={() => handleFaq(i)}>
                    {faq.q} <span>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  <div
                    className="od-faq-a"
                    ref={(el) => (faqRefs.current[i] = el)}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="od-section-card od-support-card">
              <h2 className="od-section-title">
                Need Help? Contact Our Support
              </h2>
              <p>Our support team is always here to help you.</p>
              <div className="od-support-line">
                <span className="od-support-icon">📞</span> +91 12345 67890
              </div>
              <div className="od-support-line">
                <span className="od-support-icon">✉</span>{" "}
                info@mindweaverfoundation.org
              </div>
              <div className="od-support-line">
                <span className="od-support-icon">💬</span> +91 12345 67890
                (WhatsApp Support)
              </div>
              <div className="od-support-visual">🎧</div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="od-bottom-cta">
            <div>
              <h2>Ready to Take the Challenge?</h2>
              <p>
                Join thousands of students across India and showcase your
                talent.
              </p>
            </div>
            <div className="od-cta-actions">
              <button
                className="od-btn od-btn-gold"
                onClick={() => showToast("Register Now clicked")}
              >
                Register Now
              </button>
              <button
                className="od-btn od-btn-dark"
                onClick={() => showToast("Contact Us clicked")}
              >
                Contact Us
              </button>
            </div>
          </section>
        </div>

        {/* Toast */}
        {toast.show && (
          <div className="od-toast" style={{ display: "block" }}>
            {toast.message}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

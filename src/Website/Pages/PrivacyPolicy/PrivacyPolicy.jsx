import { useState } from "react";
import "./PrivacyPolicy.css";
import lockImg from "../../../assets/privacy-lock.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiFileText,
  FiUsers,
  FiShield,
  FiPieChart,
  FiLock,
  FiSmile,
  FiExternalLink,
  FiRefreshCw,
  FiMail,
} from "react-icons/fi";

function PrivacyPolicy() {
  const sections = [
    {
      id: "info",
      title: "Information We Collect",
      icon: <FiUser />,
      content:
        "We collect personal information that you voluntarily provide to us, including your name, email address, phone number, school details, and other information submitted through registration forms, contact forms, or participation in our programs.",
    },

    {
      id: "usage",
      title: "How We Use Information",
      icon: <FiFileText />,
      content:
        "We use the collected information to process registrations, communicate important updates, provide educational services, improve user experience, respond to inquiries, and ensure the smooth operation of our programs and website.",
    },

    {
      id: "sharing",
      title: "Information Sharing",
      icon: <FiUsers />,
      content:
        "We do not sell, rent, or trade your personal information. Information may only be shared with trusted service providers, partners, or authorities when necessary for program delivery, legal compliance, or operational requirements.",
    },

    {
      id: "security",
      title: "Data Security",
      icon: <FiShield />,
      content:
        "We implement appropriate technical, administrative, and organizational safeguards to protect personal information against unauthorized access, disclosure, alteration, misuse, or destruction.",
    },

    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: <FiPieChart />,
      content:
        "Our website may use cookies and similar technologies to improve functionality, analyze website traffic, remember user preferences, and enhance the overall browsing experience. Users may manage cookie settings through their browser.",
    },

    {
      id: "rights",
      title: "Your Rights",
      icon: <FiLock />,
      content:
        "You have the right to access, review, update, correct, or request deletion of your personal information. You may also withdraw consent for certain data processing activities where applicable by law.",
    },

    {
      id: "children",
      title: "Children's Privacy",
      icon: <FiSmile />,
      content:
        "Protecting children's privacy is important to us. We collect and process children's information only when necessary for educational activities and with appropriate consent from parents, guardians, or educational institutions.",
    },

    {
      id: "links",
      title: "Third-Party Links",
      icon: <FiExternalLink />,
      content:
        "Our website may contain links to external websites or services. We are not responsible for the privacy practices, content, or security policies of third-party websites and encourage users to review their privacy policies.",
    },

    {
      id: "changes",
      title: "Changes To This Policy",
      icon: <FiRefreshCw />,
      content:
        "We may update this Privacy Policy periodically to reflect changes in legal requirements, organizational practices, or services. Any updates will be posted on this page along with the revised effective date.",
    },

    {
      id: "contact",
      title: "Contact Us",
      icon: <FiMail />,
      content:
        "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us through our official website, email, or support channels.",
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="privacy-page">
      <>
        <Navbar />
        {/* HERO */}
        <section className="privacy-hero">
          <div className="privacy-hero-overlay">
            <div className="privacy-hero-content">
              <div className="breadcrumb">
                <Link to="/">Home</Link> &gt; <span>Privacy Policy</span>
              </div>

              <h1>Privacy Policy</h1>

              <p>
                Your privacy is important to us. This policy explains how Mind
                Weaver Foundation collects, uses, and protects your information.
              </p>

              <Link to="/contact-us" className="contact-btn">
                Contact Us →
              </Link>
            </div>
          </div>
        </section>

        {/* COMMITMENT */}
        <div className="commitment-box">
          <h3>Our Commitment</h3>
          <p>
            Mind Weaver Foundation is committed to protecting the privacy of
            students, parents, teachers and all users.
          </p>
        </div>

        <div className="last-updated">📅 Last Updated: May 21, 2025</div>

        {/* CONTENT */}
        <section className="policy-content">
          <div className="left-column">
            <div className="policy-sidebar">
              <h3>Policy Sections</h3>

              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className={`sidebar-btn ${
                    activeSection.id === section.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveSection(section);

                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {index + 1}. {section.title}
                </button>
              ))}
            </div>

            <div className="privacy-info-card">
              <div className="privacy-info-icon">
                <FiShield />
              </div>

              <h4>Your Privacy Matters</h4>

              <p>
                We follow industry-standard practices to ensure your information
                is safe and secure.
              </p>

              <span className="privacy-line"></span>
            </div>
          </div>

          <div className="policy-details">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`policy-card ${
                  activeSection.id === section.id ? "active-card" : ""
                }`}
              >
                <div className="policy-number">{index + 1}</div>

                <div className="policy-icon">{section.icon}</div>

                <div>
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="privacy-cta">
          <div className="privacy-cta-icon">
            <FiShield />
          </div>

          <div className="privacy-cta-content">
            <h2>We Value Your Trust</h2>
            <p>
              Your privacy and data security are our top priorities. We ensure
              transparency in how we collect and use your information.
            </p>
          </div>

          <Link to="/contact-us" className="privacy-cta-btn">
            Contact Us <span>›</span>
          </Link>
        </section>
        <Footer />
      </>
    </div>
  );
}

export default PrivacyPolicy;

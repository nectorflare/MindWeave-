import { useState } from "react";
import "./TermsConditions.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiUserCheck,
  FiBookOpen,
  FiAward,
  FiUsers,
  FiShield,
  FiAlertCircle,
  FiRefreshCw,
  FiXCircle,
  FiMail,
  FiFileText,
} from "react-icons/fi";

function TermsConditions() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FiCheckCircle />,
      content:
        "By accessing or using the website and services of Mind Weaver Foundation, you agree to comply with and be bound by these Terms and Conditions.",
    },

    {
      id: "services",
      title: "Use of Our Services",
      icon: <FiUserCheck />,
      content:
        "Our services are intended for educational purposes only. Users must provide accurate information and use the platform responsibly.",
    },

    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: <FiBookOpen />,
      content:
        "Users are responsible for maintaining the confidentiality of their information and ensuring all activities conducted through their account comply with applicable laws.",
    },

    {
      id: "registration",
      title: "Registration & Accounts",
      icon: <FiAward />,
      content:
        "Certain services may require registration. Users must ensure that all information provided is accurate and up to date.",
    },

    {
      id: "programs",
      title: "Programs & Activities",
      icon: <FiUsers />,
      content:
        "Participation in programs is subject to eligibility criteria, schedules, and specific requirements communicated by Mind Weaver Foundation.",
    },

    {
      id: "fees",
      title: "Fees & Payments",
      icon: <FiFileText />,
      content:
        "Where applicable, users agree to pay fees associated with programs or services. Payment terms will be clearly communicated before enrollment.",
    },

    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <FiShield />,
      content:
        "All content, materials, logos, and resources on this platform are the intellectual property of Mind Weaver Foundation and may not be copied without permission.",
    },

    {
      id: "privacy",
      title: "Privacy Policy",
      icon: <FiShield />,
      content:
        "Use of our services is also governed by our Privacy Policy, which explains how personal information is collected and protected.",
    },

    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <FiAlertCircle />,
      content:
        "Mind Weaver Foundation shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.",
    },

    {
      id: "changes",
      title: "Changes to Terms",
      icon: <FiRefreshCw />,
      content:
        "We reserve the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page.",
    },

    {
      id: "termination",
      title: "Termination",
      icon: <FiXCircle />,
      content:
        "We may suspend or terminate access to our services if users violate these Terms and Conditions.",
    },

    {
      id: "contact",
      title: "Contact Us",
      icon: <FiMail />,
      content:
        "For questions regarding these Terms and Conditions, please contact us through our official communication channels.",
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="terms-page">
      <Navbar />

      {/* HERO */}
      <section className="terms-hero">
        <div className="hero-overlay">
          <div className="terms-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link> &gt; <span>Terms & Conditions</span>
            </div>

            <h1>Terms & Conditions</h1>

            <p>
              Please read these Terms & Conditions carefully before using our
              website and services.
            </p>

            <Link to="/contact-us" className="contact-btn">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <div className="commitment-box">
        <h3>Important Notice</h3>
        <p>
          By using our website and services, you agree to follow these Terms and
          Conditions.
        </p>
      </div>

      <div className="last-updated">📅 Last Updated: May 21, 2025</div>

      {/* CONTENT */}
      <section className="policy-content">
        <div className="left-column">
          <div className="policy-sidebar">
            <h3>Terms Sections</h3>

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

          <div className="terms-info-card">
            <div className="terms-info-icon">
              <FiFileText />
            </div>

            <h4>Important Note</h4>

            <p>
              Please review these Terms & Conditions carefully before using our
              services.
            </p>

            <span className="terms-line"></span>
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

      {/* CTA */}
      <section className="terms-cta">
        <div className="terms-cta-icon">
          <FiShield />
        </div>

        <div className="terms-cta-content">
          <h2>Have Questions?</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact our support team.
          </p>
        </div>

        <Link to="/contact-us" className="terms-cta-btn">
          Contact Us <span>›</span>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default TermsConditions;

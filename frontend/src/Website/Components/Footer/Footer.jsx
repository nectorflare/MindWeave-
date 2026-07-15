import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo Section */}
          <div className="footer-column footer-brand">
            <Link to="/">
              <img
                src={logo}
                alt="Mind Weave Foundation"
                className="footer-logo"
              />
            </Link>

            <p className="footer-tagline">Think Smart · Compete Better</p>

            <p className="footer-description">
              India's most future-ready olympiad platform — preparing every
              child not just for exams, but for life.
            </p>

            <div className="footer-socials">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Olympiads */}
          <div className="footer-column">
            <h4>OLYMPIADS</h4>
            <ul>
              <li>Mathematics</li>
              <li>Science</li>
              <li>English</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>RESOURCES</h4>
            <ul>
              <li>
                <Link to="/practice-paper-list">Practice Papers</Link>
              </li>
              <li>
                <Link to="/syllabus">Syllabus</Link>
              </li>
              <li>Exam Dates</li>
              <li>Awards & Prizes</li>
              <li>
                <Link to="/results">Results</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>

              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026{" "}
            <a
              href="https://www.nectorflare.com/"
              target="_blank"
              rel="noreferrer"
            >
              Nectorflare Private Limited
            </a>
            . All rights reserved.
          </p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

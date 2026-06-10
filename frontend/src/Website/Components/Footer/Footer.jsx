import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo Section */}
          <div className="footer-column footer-brand">
            <h2>Mind Weave Foundation</h2>

            <p className="footer-tagline">EMPOWERING MINDS · SHAPING FUTURES</p>

            <p className="footer-description">
              India's most future-ready olympiad platform — preparing every
              child not just for exams, but for life.
            </p>
          </div>

          {/* Olympiads */}
          <div className="footer-column">
            <h4>OLYMPIADS</h4>

            <ul>
              <li>AI & Technology</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>English</li>
              <li>Career Lab</li>
              <li>Life Skills</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>RESOURCES</h4>

            <ul>
              <li>Sample Papers</li>
              <li>Syllabus 2026-27</li>
              <li>Exam Dates</li>
              <li>Awards & Prizes</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>CONTACT</h4>

            <ul>
              <li>info@mindweavefoundation.org</li>
              <li>+91 80000 00000</li>
              <li>WhatsApp Channel</li>
              <li>Register Your School</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Nectorflare Private Limited. All rights reserved.</p>

          <div className="footer-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

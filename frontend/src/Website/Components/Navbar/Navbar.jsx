import "./Navbar.css";
import logo from "../../../assets/logo.jpeg";

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <span>info@mindweavefoundation.com</span>
        <span>|</span>
        <span>+91 0000000485</span>
        <span>|</span>
        <span>WhatsApp Channel</span>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="MindWeave Logo" />
        </div>

        <ul className="nav-links">
          <li>SUBJECTS</li>
          <li>EXAM DETAILS</li>
          <li>QUIZZES</li>
          <li>CAREER LAB</li>
          <li>CONTACT US</li>
          <li>FREE TRIAL</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

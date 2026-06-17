import "./Navbar.css";
import logo from "../../../assets/logo.jpeg";
import { Link } from "react-router-dom";
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
          <Link to="/home">HOME</Link>
          <Link to="/olympiads-list">OLYMPIADS</Link>
          <li>QUIZZES</li>
          <Link to="/books-store">BOOK STORE</Link>
        </ul>

        {/* Login Dropdown */}
        <div className="login-dropdown">
          <button className="login-button">LOGIN ▾</button>

          <div className="dropdown-menu">
            <Link to="/student-login">Student Login</Link>
            <Link to="/school-login">School Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

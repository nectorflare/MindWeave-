// import "./Navbar.css";
// import logo from "../../../assets/logo.jpeg";
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <>
//       {/* Top Bar */}
//       <div className="top-bar">
//         <span>info@mindweavefoundation.com</span>
//         <span>|</span>
//         <span>+91 0000000485</span>
//         <span>|</span>
//         <span>WhatsApp Channel</span>
//       </div>

//       {/* Main Navbar */}
//       <nav className="navbar">
//         <div className="logo">
//           <img src={logo} alt="MindWeave Logo" />
//         </div>

//         <ul className="nav-links">
//           <Link to="/home">HOME</Link>
//           <Link to="/olympiads-list">OLYMPIADS</Link>
//           <li>QUIZZES</li>
//           <Link to="/books-store">BOOK STORE</Link>
//         </ul>

//         {/* Login Dropdown */}
//         <div className="login-dropdown">
//           <button className="login-button">LOGIN ▾</button>

//           <div className="dropdown-menu">
//             <Link to="/student-login">Student Login</Link>
//             <Link to="/school-login">School Login</Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
import "./Navbar.css";
import logo from "../../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

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

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Mobile drawer header - logo + close */}
          <div className="mobile-drawer-header">
            <img src={logo} alt="Logo" className="drawer-logo" />
            <button className="drawer-close" onClick={closeMenu}>
              ✕
            </button>
          </div>

          <Link to="/home" onClick={closeMenu}>
            HOME
          </Link>
          <Link to="/olympiads-list" onClick={closeMenu}>
            OLYMPIADS
          </Link>

          <Link to="/olympiads-list" onClick={closeMenu}>
            QUIZZES
          </Link>

          {/* <li onClick={closeMenu}>QUIZZES</li> */}
          <Link to="/books-store" onClick={closeMenu}>
            BOOK STORE
          </Link>

          {/* Desktop dropdown - hover pe dono options */}
          <div className="login-dropdown">
            <button className="login-button">LOGIN ▾</button>
            <div className="dropdown-menu">
              <Link to="/student-login">Student Login</Link>
              <Link to="/school-login">School Login</Link>
            </div>
          </div>

          {/* Mobile login buttons */}
          <div className="mobile-login-links">
            <Link to="/student-login" onClick={closeMenu}>
              STUDENT LOGIN
            </Link>
            <Link to="/school-login" onClick={closeMenu}>
              SCHOOL LOGIN
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

// import "./Navbar.css";
// import logo from "../../../assets/logo.jpeg";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import CartSlider from "../CartSlider/CartSlider";
// const removeItem = (id) => {
//   setCartItems((prev) => prev.filter((item) => item.id !== id));
// };
// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   // const [cartCount, setCartCount] = useState(2);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Science Olympiad Book", price: 299, qty: 1 },
//     { id: 2, name: "Math Practice Set", price: 199, qty: 2 },
//   ]);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       <div className="top-bar">
//         <span className="top-bar-content">
//           <a href="mailto:info@mindweavefoundation.com">
//             info@mindweavefoundation.com
//           </a>
//           {" | "}
//           <a href="tel:+919540008894">+91 9540008894</a>
//           {" | "}
//           <span>WhatsApp Channel</span>
//         </span>
//       </div>

//       {/* Main Navbar */}
//       <nav className="navbar">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="MindWeave Logo" />
//           </Link>
//         </div>

//         {!menuOpen && (
//           <button
//             className="hamburger"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             ☰
//           </button>
//         )}

//         {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           {/* Mobile drawer header - logo + close */}
//           <div className="mobile-drawer-header">
//             <img src={logo} alt="Logo" className="drawer-logo" />
//             <button className="drawer-close" onClick={closeMenu}>
//               ✕
//             </button>
//           </div>

//           <Link to="/home" onClick={closeMenu}>
//             HOME
//           </Link>
//           <Link to="/olympiads-list" onClick={closeMenu}>
//             OLYMPIADS
//           </Link>

//           {/* <li onClick={closeMenu}>QUIZZES</li> */}
//           <Link to="/books-store" onClick={closeMenu}>
//             BOOK STORE
//           </Link>

//           <div className="cart-icon-wrapper" onClick={() => setCartOpen(true)}>
//             <FiShoppingCart size={20} />
//             {cartItems.length > 0 && (
//               <span className="cart-badge">{cartItems.length}</span>
//             )}
//           </div>

//           {/* Desktop dropdown - hover pe dono options */}
//           <div className="login-dropdown">
//             <button className="login-button">LOGIN ▾</button>
//             <div className="dropdown-menu">
//               <Link to="/student-login">Student Login</Link>
//               <Link to="/school-login">School Login</Link>
//             </div>
//           </div>

//           {/* Mobile login buttons */}
//           <div className="mobile-login-links">
//             <Link to="/student-login" onClick={closeMenu}>
//               STUDENT LOGIN
//             </Link>
//             <Link to="/school-login" onClick={closeMenu}>
//               SCHOOL LOGIN
//             </Link>
//           </div>
//         </ul>
//       </nav>
//       <CartSlider
//         isOpen={cartOpen}
//         onClose={() => setCartOpen(false)}
//         cartItems={cartItems}
//         removeItem={removeItem}
//       />
//     </>
//   );
// }

// export default Navbar;
import "./Navbar.css";
import logo from "../../../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartSlider from "../CartSlider/CartSlider";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Science Olympiad Book", price: 299, qty: 1 },
    { id: 2, name: "Math Practice Set", price: 199, qty: 2 },
  ]);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setProfileOpen(false);
    navigate("/");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="top-bar">
        <span className="top-bar-content">
          <a href="mailto:info@mindweavefoundation.com">
            info@mindweavefoundation.com
          </a>
          {" | "}
          <a href="tel:+919540008894">+91 9540008894</a>
          {" | "}
          <span>WhatsApp Channel</span>
        </span>
      </div>

      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="MindWeave Logo" />
          </Link>
        </div>

        {!menuOpen && (
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}

        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
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
          <Link to="/books-store" onClick={closeMenu}>
            BOOK STORE
          </Link>

          <div className="cart-icon-wrapper" onClick={() => setCartOpen(true)}>
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </div>

          {token ? (
            <div className="profile-dropdown">
              <div
                className="profile-icon"
                onClick={() => setProfileOpen((prev) => !prev)}
              >
                <div className="avatar-circle">
                  {user?.firstName?.charAt(0).toUpperCase() || "U"}
                </div>
              </div>
              {profileOpen && (
                <div className="profile-menu">
                  <p className="profile-name">{user?.firstName || "Student"}</p>
                  <Link
                    to="/student/my-profile"
                    onClick={() => setProfileOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/edit-profile"
                    onClick={() => setProfileOpen(false)}
                  >
                    Edit Profile
                  </Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="login-dropdown">
                <button className="login-button">LOGIN ▾</button>
                <div className="dropdown-menu">
                  <Link to="/student-login">Student Login</Link>
                  <Link to="/school-login">School Login</Link>
                </div>
              </div>
              <div className="mobile-login-links">
                <Link to="/student-login" onClick={closeMenu}>
                  STUDENT LOGIN
                </Link>
                <Link to="/school-login" onClick={closeMenu}>
                  SCHOOL LOGIN
                </Link>
              </div>
            </>
          )}
        </ul>
      </nav>

      <CartSlider
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        removeItem={removeItem}
      />
    </>
  );
}

export default Navbar;

import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import studentImage from "../../assets/login-girl.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Website/Components/Navbar/Navbar";
import Footer from "../../Website/Components/Footer/Footer";
import "./SchoolLogin.css";

function StudentLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return "Password must contain at least one special symbol.";
    }
    return ""; // All checks passed
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setLoginData({ ...loginData, password: newPassword });
    setPasswordError(validatePassword(newPassword));
  };

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(loginData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    const passwordValidationError = validatePassword(loginData.password);
    if (passwordValidationError) {
      alert(passwordValidationError);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        const payload = JSON.parse(atob(data.token.split(".")[1]));
        localStorage.setItem("schoolId", payload.userId);
        localStorage.setItem(
          "user",
          JSON.stringify({
            firstName: payload.email.split("@")[0],
            role: payload.role,
          }),
        );
        alert("Login Successful");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="breadcrumb">
          <span onClick={() => navigate("/")}>Home</span>
          <span className="separator"> / </span>
          <span className="active">Login</span>
        </div>
        <div className="login-wrapper">
          {/* Left Side */}
          <div className="login-left">
            <span className="welcome-text">Welcome Back!</span>
            <h1>
              Login to Your <br />
              Account
            </h1>
            <p>
              Access your dashboard to manage registrations, track progress and
              download certificates.
            </p>
            <div className="features-wrapper">
              <div className="features">
                <div className="feature-item">
                  <span>✓</span>
                  <div>
                    <h4>Secure & Trusted Platform</h4>
                    <p className="first-feature-text">
                      Your data is safe with us.
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <div>
                    <h4>Easy Exam Registration</h4>
                    <p>Register in just a few clicks.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <div>
                    <h4>Download Certificates</h4>
                    <p>Get your certificates instantly.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <div>
                    <h4>Track Results</h4>
                    <p>Monitor your performance anytime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="login-card">
            <h2>Login</h2>
            <p>Welcome back! Please enter your details.</p>

            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={loginData.password}
                onChange={handlePasswordChange}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* 👇 Live validation error shown below the password field */}
            {passwordError && (
              <p
                className="password-error"
                style={{ color: "red", fontSize: "0.8rem", marginTop: "-8px" }}
              >
                {passwordError}
              </p>
            )}

            <div className="login-options">
              <label className="remember-label">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>
              <span className="forgot-password">Forgot Password?</span>
            </div>

            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>

            <p className="register-link">
              Don't have an account?{" "}
              <span onClick={() => navigate("/school-registration")}>
                Register Now
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default StudentLogin;

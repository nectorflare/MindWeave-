import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import studentImage from "../../assets/login-girl.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Website/Components/Navbar/Navbar";
import Footer from "../../Website/Components/Footer/Footer";
import "./StudentLogin.css";

function StudentLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login Successful");

        // Dashboard page
        navigate("/dashboard");
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

              {/* <img src={studentImage} alt="student" className="student-image" /> */}
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
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

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

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="google-btn">Login with Google</button>

            <p className="register-link">
              Don't have an account?{" "}
              <span onClick={() => navigate("/student-registration")}>
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

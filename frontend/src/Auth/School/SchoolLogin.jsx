import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolLogin.css";

function SchoolLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      if (!loginData.email || !loginData.password) {
        alert("Please fill all fields");
        return;
      }

      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      console.log("API Response:", data);

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        alert("Login Successful");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Server Error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>School Login</h2>

        <input
          type="email"
          placeholder="Email ID"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />

        <button onClick={handleLogin}>Login</button>

        <p
          className="register-link"
          onClick={() => navigate("/school-registration")}
        >
          New User? Register Here
        </p>
      </div>
    </div>
  );
}

export default SchoolLogin;

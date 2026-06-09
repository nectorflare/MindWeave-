import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Olympiad Portal</h1>

      <div className="card-wrapper">
        <div className="role-card">
          <h2>Are You A Student?</h2>

          <button onClick={() => navigate("/student-login")}>
            Student Login
          </button>
        </div>

        <div className="role-card">
          <h2>Are You A School?</h2>

          <button onClick={() => navigate("/school-login")}>
            School Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

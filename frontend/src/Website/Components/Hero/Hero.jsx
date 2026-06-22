// import "./Hero.css";

// function Hero() {
//   return (
//     <>
//       <section className="hero">
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1>
//               DISCOVER YOUR
//               <br />
//               CAREER BEFORE
//               <br />
//               CLASS 12
//             </h1>

//             <p>
//               Empowering students with Olympiads, quizzes, career guidance and
//               future-ready skills.
//             </p>

//             <div className="hero-buttons">
//               <button className="btn-primary">Register Now</button>
//               <button className="btn-secondary">Learn More</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Yellow Strip */}
//       <section className="stats-section">
//         <div className="stat-item">
//           <h2>42,000+</h2>
//           <p>School Registered</p>
//         </div>

//         <div className="divider"></div>

//         <div className="stat-item">
//           <h2>7,00,000+</h2>
//           <p>EDUCATORS TRUST US</p>
//         </div>

//         <div className="divider"></div>

//         <div className="stat-item">
//           <h2>1,00,00,000+</h2>
//           <p>PARENTS CHOSE US</p>
//         </div>
//       </section>

//       {/* Blue Strip */}
//       <section className="info-strip">
//         <p>
//           Unicus Olympiads are India's first Summer Olympiad Exam. Based on
//           popular demand, we have introduced Olympiad exams in Winter also.
//           Summer exams take place in July/August every year & Winter exams take
//           place in January.
//         </p>
//       </section>
//     </>
//   );
// }

// export default Hero;
import "./Hero.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const [schools, setSchools] = useState(0);
  const [events, setEvents] = useState(0);
  const [students, setStudents] = useState(0);

  useEffect(() => {
    const animateCount = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 20);

      const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    animateCount(50, setSchools);
    animateCount(2000, setEvents);
    animateCount(20000, setStudents);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="home-hero-content">
            <h1>
              DISCOVER YOUR
              <br />
              CAREER BEFORE
              <br />
              CLASS 12
            </h1>

            <p>
              Empowering students with Olympiads, quizzes, career guidance and
              future-ready skills.
            </p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/student-registration")}
              >
                Register Now
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <h2>{schools}+</h2>
          <p>REGISTERED SCHOOLS</p>
        </div>

        <div className="stats-divider"></div>

        <div className="stat-item">
          <h2>{events}+</h2>
          <p>EVENTS ORGANIZED</p>
        </div>

        <div className="stats-divider"></div>

        <div className="stat-item">
          <h2>{students.toLocaleString()}+</h2>
          <p>STUDENTS PARTICIPATED</p>
        </div>
      </section>

      <section className="info-strip">
        <p>
          Unicus Olympiads offers India's most comprehensive skill-based
          competitions for students from KG to Class 11 — covering AI,
          Mathematics, Science, and Career Discovery. Our exams help students
          build confidence, critical thinking, and future-ready skills from an
          early age.
        </p>
      </section>
    </>
  );
}

export default Hero;

import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
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
              <button className="btn-primary">Register Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Strip */}
      <section className="stats-section">
        <div className="stat-item">
          <h2>42,000+</h2>
          <p>School Registered</p>
        </div>

        <div className="divider"></div>

        <div className="stat-item">
          <h2>7,00,000+</h2>
          <p>EDUCATORS TRUST US</p>
        </div>

        <div className="divider"></div>

        <div className="stat-item">
          <h2>1,00,00,000+</h2>
          <p>PARENTS CHOSE US</p>
        </div>
      </section>

      {/* Blue Strip */}
      <section className="info-strip">
        <p>
          Unicus Olympiads are India's first Summer Olympiad Exam. Based on
          popular demand, we have introduced Olympiad exams in Winter also.
          Summer exams take place in July/August every year & Winter exams take
          place in January.
        </p>
      </section>
    </>
  );
}

export default Hero;

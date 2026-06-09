import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="cta-badge">READY TO BEGIN?</span>

        <h2 className="cta-title">
          Give Your Child the
          <br />
          <span>Edge That Lasts a Lifetime</span>
        </h2>

        <p className="cta-description">
          Registrations for the Mind Weave Summer Olympiad 2026 are now open.
          Seats are limited — secure your child's spot today.
        </p>

        <div className="cta-buttons">
          <button className="cta-btn primary-btn">
            🎓 Register Now — It's Free to Start
          </button>

          <button className="cta-btn secondary-btn">
            📄 Download Syllabus PDF ↓
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

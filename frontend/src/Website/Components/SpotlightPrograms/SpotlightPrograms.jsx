import React from "react";
import "./SpotlightPrograms.css";

const cards = [
  {
    icon: "💡",
    title: "AI & Technology",
    description:
      "Deep dive into prompt engineering, ethical AI, and the mechanics of large language models for young innovators.",
    color: "#0f2e5d",
  },
  {
    icon: "💼",
    title: "Future Careers",
    description:
      "Explore emerging professional landscapes, specialized vocations, and market trends shaping the 2030 global economy.",
    color: "#f5c242",
  },
  {
    icon: "🏳️",
    title: "Essential Life Skills",
    description:
      "Critical thinking, emotional intelligence, financial literacy, and collaborative leadership for real-world success.",
    color: "#98e6a4",
  },
];

const SpotlightPrograms = () => {
  return (
    <section className="spotlight-section">
      <div className="container">
        <div className="section-header">
          <h2>Spotlight Programs</h2>
          <p>
            Focused on the future-ready skills that bridge the gap between
            traditional education and industrial realities.
          </p>
        </div>

        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div
              className="program-card"
              key={index}
              style={{ borderTop: `4px solid ${card.color}` }}
            >
              <div className="icon-box" style={{ backgroundColor: card.color }}>
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <a href="/" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="bottom-line"></div>
      </div>
    </section>
  );
};

export default SpotlightPrograms;

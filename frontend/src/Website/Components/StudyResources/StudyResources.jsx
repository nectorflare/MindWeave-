import "./StudyResources.css";

const books = [
  {
    id: 1,
    class: "Classes 3–11",
    title: "AI & Technology Olympiad Workbook",
    description:
      "Complete chapter-wise guide covering AI basics, digital literacy, and logical reasoning with practice sets.",
    color: "#10275e",
  },
  {
    id: 2,
    class: "Classes KG–11",
    title: "Mathematics Olympiad Master Guide",
    description:
      "500+ solved problems, shortcut techniques, and advanced reasoning patterns across all class levels.",
    color: "#5b2800",
  },
  {
    id: 3,
    class: "Classes 1–11",
    title: "Science Olympiad Explorer Kit",
    description:
      "Concept cards, diagram exercises, and experiment-based questions that make science genuinely exciting.",
    color: "#00381f",
  },
  {
    id: 4,
    class: "Classes 6–11",
    title: "CareerLab Self-Discovery Workbook",
    description:
      "Aptitude maps, industry scenario cards, and mentorship guides to help students find their calling early.",
    color: "#2d1169",
  },
];

export default function StudyResources() {
  return (
    <section className="study-section">
      <div className="study-container">
        <div className="top-line">
          <span>STUDY RESOURCES</span>
        </div>

        <h2>Books & Learning Material</h2>

        <p className="subtitle">
          Expertly crafted study kits, sample papers, and reference books —
          everything your child needs to prepare with confidence.
        </p>

        <div className="books-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div
                className="book-image"
                style={{ backgroundColor: book.color }}
              >
                <div className="book-cover">
                  <span>{book.title}</span>
                </div>
              </div>

              <div className="book-content">
                <p className="class-text">{book.class}</p>

                <h3>{book.title}</h3>

                <p className="description">{book.description}</p>

                <div className="btn-group">
                  <button className="download-btn">Buy Now</button>

                  <button className="preview-btn">👁 Preview</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-btn">📚 View All Study Materials →</button>
      </div>
    </section>
  );
}

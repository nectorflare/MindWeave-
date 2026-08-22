import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PracticePaperDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaClipboardList, FaClock, FaStar, FaTrophy } from "react-icons/fa";
import { api } from "../../../services/api";

const asArray = (value) => {
  if (Array.isArray(value)) return value;
  try { const parsed = JSON.parse(value); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
};

const optionLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function PracticePaperDetails() {
  const { paperId } = useParams();
  const [paper, setPaper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    api(`/api/v1/public/practice-papers/${paperId}`)
      .then((response) => { if (active) setPaper(response.data || null); })
      .catch((requestError) => { if (active) setError(requestError.message || "Unable to load this practice paper."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [paperId]);

  const sections = useMemo(() => asArray(paper?.sections).map((section) => ({ ...section, questions: asArray(section.questions) })), [paper]);
  const instructions = useMemo(() => asArray(paper?.instructions), [paper]);
  const totalQuestions = sections.reduce((total, section) => total + section.questions.length, 0);

  return (
    <>
      <Navbar />
      <div className="practice-paper-page">
        {loading && <div className="practice-paper-message" role="status">Loading practice paper…</div>}
        {!loading && error && <div className="practice-paper-message practice-paper-message-error" role="alert"><p>{error}</p><Link to="/practice-papers">Return to practice papers</Link></div>}
        {!loading && !error && !paper && <div className="practice-paper-message"><p>Practice paper not found.</p><Link to="/practice-papers">Return to practice papers</Link></div>}

        {!loading && !error && paper && <article className="practice-paper-sheet">
          <header className="paper-header">
            <div className="paper-title-block">
              <h1>{paper.title}</h1>
              <div className="paper-badges">
                <span className="paper-badge class-badge">{paper.classLabel}</span>
                <span className="paper-badge test-badge">{paper.subject}</span>
              </div>
              {paper.description && <p>{paper.description}</p>}
            </div>
            <div className="paper-trophy"><FaTrophy /></div>
          </header>

          <div className="paper-info-bar">
            <div className="paper-info-item"><FaClipboardList className="paper-info-icon" /><span>Total Questions: <strong>{totalQuestions}</strong></span></div>
            <div className="paper-info-item"><FaClock className="paper-info-icon" /><span>Time Allotted: <strong>{paper.durationMinutes} minutes</strong></span></div>
            <div className="paper-info-item"><FaStar className="paper-info-icon" /><span>Maximum Marks: <strong>{paper.maxMarks}</strong></span></div>
          </div>

          {instructions.length > 0 && <section className="paper-instructions"><h2>Instructions</h2><ol>{instructions.map((instruction, index) => <li key={`${instruction}-${index}`}>{instruction}</li>)}</ol></section>}

          {sections.length === 0 && <p className="practice-paper-message">No questions have been published for this paper.</p>}
          {sections.map((section, sectionIndex) => <section className="paper-section" key={section.id || sectionIndex}>
            <div className={`paper-section-header ${section.color || "blue"}`}>
              <h2>{section.title}</h2>
              <span className="paper-section-range">{section.questions.length} questions</span>
            </div>
            {section.passage && <div className="paper-passage"><p>{section.passage}</p></div>}
            <div className={`paper-questions-grid cols-${section.columns || 2}`}>
              {section.questions.map((question, questionIndex) => <div className="paper-question" key={question.no || questionIndex}>
                <p className="paper-question-text"><span className="paper-question-no">{question.no || questionIndex + 1}.</span> {question.text}</p>
                <div className="paper-options-grid">{asArray(question.options).map((option, optionIndex) => <span className="paper-option" key={optionIndex}><strong>{optionLetters[optionIndex]}.</strong> {option}</span>)}</div>
              </div>)}
            </div>
          </section>)}
        </article>}
      </div>
      <Footer />
    </>
  );
}

export default PracticePaperDetails;

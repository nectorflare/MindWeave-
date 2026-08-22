import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import "./StudyResources.css";

export default function StudyResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api("/api/v1/public/study-resources")
      .then((response) => setResources(Array.isArray(response.data) ? response.data : []))
      .catch(() => setResources([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || resources.length === 0) return null;

  return <section className="study-section"><div className="study-container">
    <div className="top-line"><span>STUDY RESOURCES</span></div>
    <h2>Books & Learning Material</h2>
    <p className="subtitle">Expertly crafted study kits, sample papers, and reference books—everything your child needs to prepare with confidence.</p>
    <div className="books-grid">{resources.map((resource) => <article className="book-card" key={resource.id}>
      <div className="book-image" style={{ backgroundColor: resource.color || "#10275e" }}><div className="book-cover"><span>{resource.title}</span></div></div>
      <div className="book-content"><p className="class-text">{resource.classRange}</p><h3>{resource.title}</h3><p className="description">{resource.description}</p><div className="btn-group">
        <Link className="download-btn" to={resource.bookId ? `/books/${resource.bookId}` : "/books-store"}>{resource.bookId ? "View Book" : "Browse Store"}</Link>
        <Link className="preview-btn" to={resource.previewPath || "/practice-papers"}>Preview</Link>
      </div></div>
    </article>)}</div>
    <Link className="view-all-btn" to="/books-store">View All Study Materials →</Link>
  </div></section>;
}

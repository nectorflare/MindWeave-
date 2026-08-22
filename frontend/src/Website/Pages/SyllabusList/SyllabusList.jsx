import { useEffect, useMemo, useState } from "react";
import "./SyllabusList.css";
import "../../Components/Breadcrumb/Breadcrumb.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import banner from "../../../assets/book-banner.jpg";
import bookImage from "../../../assets/book-banner.jpg";
import { FaBook } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import { api } from "../../../services/api";

function SyllabusList() {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("nameAsc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    api("/api/v1/subjects")
      .then((response) => {
        if (active) setSubjects(Array.isArray(response.data) ? response.data : []);
      })
      .catch((requestError) => {
        if (active) setError(requestError.message || "Unable to load syllabi.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  const filteredSubjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    const results = subjects.filter((subject) => !query ||
      [subject.name, subject.code, subject.description].some((value) =>
        String(value || "").toLowerCase().includes(query)
      ));
    return results.sort((left, right) => {
      const direction = sortBy === "nameDesc" ? -1 : 1;
      return direction * String(left.name || "").localeCompare(String(right.name || ""));
    });
  }, [subjects, search, sortBy]);

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/home" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Syllabus</span>
      </div>
      <div className="syllabus-page">
        <div className="hero-banner">
          <div className="hero-content">
            <h1>Syllabus</h1>
            <p>Explore the published subject syllabi provided by MindWeave.</p>
          </div>
          <img src={banner} alt="" />
        </div>

        <div className="syllabus-container">
          <aside className="sidebar">
            <div className="filter-box">
              <h3>Find a subject</h3>
              <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Name, code or keyword" aria-label="Search syllabi" />
              {search && <button type="button" onClick={() => setSearch("")}>Clear search</button>}
            </div>
          </aside>

          <div className="syllabus-content">
            <div className="syllabus-list-top-bar">
              <p>{loading ? "Loading syllabi…" : `Showing ${filteredSubjects.length} of ${subjects.length} results`}</p>
              <div className="sort-wrapper">
                <span>Sort By:</span>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  <option value="nameAsc">Name A–Z</option>
                  <option value="nameDesc">Name Z–A</option>
                </select>
              </div>
            </div>

            {error && <p className="syllabus-status syllabus-error" role="alert">{error}</p>}
            {!loading && !error && subjects.length === 0 && <p className="syllabus-status">No published syllabi are available.</p>}
            {!loading && !error && subjects.length > 0 && filteredSubjects.length === 0 && <p className="syllabus-status">No syllabi match your search.</p>}

            <div className="syllabus-grid">
              {filteredSubjects.map((subject) => (
                <article className="syllabus-card" key={subject.id}>
                  <img src={bookImage} alt="" />
                  <h4>{subject.name}</h4>
                  {subject.code && <p>{subject.code}</p>}
                  {subject.description && <h3>{subject.description}</h3>}
                  <button type="button" className="view-syllabus-button" onClick={() => navigate(`/syllabus-details/${subject.id}`)}>
                    <FaBook />
                    View Syllabus
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SyllabusList;

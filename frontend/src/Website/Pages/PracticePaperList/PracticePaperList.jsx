import { useEffect, useMemo, useState } from "react";
import "./PracticePaperList.css";
import "../../Components/Breadcrumb/Breadcrumb.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import banner from "../../../assets/book-banner.jpg";
import bookImage from "../../../assets/book-image.jpg";
import { FaBookOpen } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import { api } from "../../../services/api";

function PracticePaperList() {
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("nameAsc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    api("/api/v1/public/practice-papers")
      .then((response) => {
        if (!active) return;
        setResources(Array.isArray(response.data) ? response.data : []);
      })
      .catch((requestError) => {
        if (active) setError(requestError.message || "Unable to load practice resources.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();
    const results = resources.filter((resource) => !query ||
      [resource.title, resource.subject, resource.classLabel, resource.description].some((value) =>
        String(value || "").toLowerCase().includes(query)
      ));
    return results.sort((left, right) => {
      const direction = sortBy === "nameDesc" ? -1 : 1;
      return direction * String(left.title || "").localeCompare(String(right.title || ""));
    });
  }, [resources, search, sortBy]);

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/home" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Practice Papers</span>
      </div>

      <main className="practice-paper-list-page">
        <div className="hero-banner">
          <div className="hero-content">
            <h1>Practice Papers</h1>
            <p>Explore the practice resources currently published by MindWeave.</p>
          </div>
          <img src={banner} alt="" />
        </div>

        <div className="practice-paper-list-container">
          <aside className="sidebar">
            <div className="filter-box">
              <h3>Find a resource</h3>
              <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Title, class or keyword" aria-label="Search practice resources" />
              {search && <button type="button" onClick={() => setSearch("")}>Clear search</button>}
            </div>
          </aside>

          <section className="practice-paper-list-content">
            <div className="practice-paper-list-top-bar">
              <p>{loading ? "Loading practice resources…" : `Showing ${filteredResources.length} of ${resources.length} results`}</p>
              <div className="sort-wrapper">
                <span>Sort By:</span>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  <option value="nameAsc">Name A–Z</option>
                  <option value="nameDesc">Name Z–A</option>
                </select>
              </div>
            </div>

            {error && <p className="practice-paper-status practice-paper-error" role="alert">{error}</p>}
            {!loading && !error && resources.length === 0 && <p className="practice-paper-status">No practice resources are currently available.</p>}
            {!loading && !error && resources.length > 0 && filteredResources.length === 0 && <p className="practice-paper-status">No practice resources match your search.</p>}

            <div className="practice-paper-grid">
              {filteredResources.map((resource) => (
                <article className="practice-paper-card" key={resource.id} style={{ borderTopColor: resource.color || undefined }} onClick={() => navigate(`/practice-paper-details/${resource.id}`)}>
                  <img src={bookImage} alt="" />
                  <h4>{resource.title}</h4>
                  {resource.classLabel && <p>{resource.classLabel}</p>}
                  {resource.subject && <p>{resource.subject}</p>}
                  {resource.description && <h3>{resource.description}</h3>}
                  <button type="button" className="view-practice-paper-button" onClick={(event) => { event.stopPropagation(); navigate(`/practice-paper-details/${resource.id}`); }}><FaBookOpen /> View Paper</button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PracticePaperList;

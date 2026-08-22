import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SyllabusDetails.css";
import "../../Components/Breadcrumb/Breadcrumb.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import illustration from "../../../assets/book-banner.jpg";
import { FaBook, FaDownload, FaFileAlt, FaInfoCircle } from "react-icons/fa";
import { api } from "../../../services/api";

function SyllabusDetails() {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [syllabusUrl, setSyllabusUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    Promise.all([
      api(`/api/v1/subjects/${subjectId}`),
      api(`/api/v1/subjects/${subjectId}/syllabus`).catch((requestError) => {
        if (requestError.status === 404) return { data: null };
        throw requestError;
      }),
    ])
      .then(([subjectResponse, syllabusResponse]) => {
        if (!active) return;
        setSubject(subjectResponse.data || null);
        setSyllabusUrl(syllabusResponse.data?.syllabusUrl || "");
      })
      .catch((requestError) => {
        if (active) setError(requestError.message || "Unable to load syllabus details.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, [subjectId]);

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/home" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">›</span>
        <Link to="/syllabus" className="breadcrumb-link">Syllabus</Link>
        {subject?.name && <><span className="breadcrumb-separator">›</span><span className="breadcrumb-current">{subject.name}</span></>}
      </div>

      <main className="syllabus-details-page">
        {loading && <div className="syllabus-detail-status" role="status">Loading syllabus details…</div>}
        {!loading && error && <div className="syllabus-detail-status syllabus-detail-error" role="alert"><FaInfoCircle /><p>{error}</p><Link to="/syllabus">Return to syllabus list</Link></div>}
        {!loading && !error && !subject && <div className="syllabus-detail-status"><p>Syllabus details were not found.</p><Link to="/syllabus">Return to syllabus list</Link></div>}

        {!loading && !error && subject && <>
          <section className="syllabus-details-hero">
            <div className="syllabus-details-hero-content">
              <h1>{subject.name}</h1>
              {subject.description && <p>{subject.description}</p>}
            </div>
            <img src={illustration} alt="" className="syllabus-details-hero-img" />
          </section>

          <section className="syllabus-info-bar" aria-label="Syllabus information">
            <div className="info-item">
              <span className="info-icon purple"><FaBook /></span>
              <div><p className="info-label">Subject</p><p className="info-value">{subject.name}</p></div>
            </div>
            {subject.code && <div className="info-item">
              <span className="info-icon green"><FaFileAlt /></span>
              <div><p className="info-label">Subject Code</p><p className="info-value">{subject.code}</p></div>
            </div>}
            <div className="info-item">
              <span className="info-icon blue"><FaFileAlt /></span>
              <div><p className="info-label">Document</p><p className="info-value">{syllabusUrl ? "Available" : "Not available"}</p></div>
            </div>
          </section>

          <section className="syllabus-document-card">
            <FaFileAlt className="syllabus-document-icon" />
            <div>
              <h2>Syllabus document</h2>
              <p>{syllabusUrl ? "Open the complete syllabus published for this subject." : "A syllabus document has not been published for this subject yet."}</p>
            </div>
            {syllabusUrl && <a className="download-syllabus-button" href={syllabusUrl} target="_blank" rel="noreferrer"><FaDownload /> View / Download Syllabus</a>}
          </section>
        </>}
      </main>
      <Footer />
    </>
  );
}

export default SyllabusDetails;

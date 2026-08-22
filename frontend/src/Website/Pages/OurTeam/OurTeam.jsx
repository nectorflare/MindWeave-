import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { api } from "../../../services/api";
import "./OurTeam.css";

export default function OurTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    api("/api/v1/public/team-members")
      .then((response) => { if (active) setMembers(Array.isArray(response.data) ? response.data : []); })
      .catch((requestError) => { if (active) setError(requestError.message || "Unable to load the team."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  return <>
    <Navbar />
    <main className="team-page">
      <div className="team-breadcrumb"><Link to="/home">Home</Link><span>›</span><span>Our Team</span></div>
      <header className="team-heading">
        <span>THE PEOPLE BEHIND MIND WEAVE FOUNDATION</span>
        <h1>Our Team</h1>
      </header>

      {loading && <p className="team-status" role="status">Loading our team…</p>}
      {!loading && error && <p className="team-status team-error" role="alert">{error}</p>}
      {!loading && !error && members.length === 0 && <p className="team-status">Team information is not available yet.</p>}

      {!loading && !error && members.length > 0 && <div className="team-list">
        {members.map((member, index) => <article className={`team-member ${index % 2 ? "team-member-reverse" : ""}`} key={member.id}>
          <div className="team-member-image"><img src={member.imageUrl} alt={member.imageAlt || member.name} loading="lazy" /></div>
          <div className="team-member-content">
            <span className="team-member-number">{String(index + 1).padStart(2, "0")}</span>
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <p>{member.details}</p>
          </div>
        </article>)}
      </div>}
    </main>
    <Footer />
  </>;
}

import "./OlympiadsList.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import {
  FaAtom,
  FaSquareRootAlt,
  FaBookOpen,
  FaLaptopCode,
  FaLightbulb,
  FaBrain,
  FaLeaf,
  FaChartLine,
  FaRobot,
  FaCode,
  FaDna,
  FaFlask,
} from "react-icons/fa";

const fallbackOlympiads = [
  {
    id: "nso",
    icon: <FaAtom />,
    title: "National Science Olympiad (NSO)",
    class: "Class 1 - 12",
  },
  {
    id: "imo",
    icon: <FaSquareRootAlt />,
    title: "International Mathematics Olympiad (IMO)",
    class: "Class 1 - 12",
  },
  {
    id: "ieo-english",
    icon: <FaBookOpen />,
    title: "International English Olympiad (IEO)",
    class: "Class 1 - 12",
  },
  {
    id: "cyber-co",
    icon: <FaLaptopCode />,
    title: "Cyber Olympiad (CO)",
    class: "Class 1 - 12",
  },
  {
    id: "gk",
    icon: <FaLightbulb />,
    title: "GK Olympiad",
    class: "Class 1 - 12",
  },
  {
    id: "reasoning",
    icon: <FaBrain />,
    title: "Reasoning Olympiad (RO)",
    class: "Class 1 - 12",
  },
  {
    id: "environment",
    icon: <FaLeaf />,
    title: "International Environmental Olympiad (IEO)",
    class: "Class 1 - 12",
  },
  {
    id: "commerce",
    icon: <FaChartLine />,
    title: "Commerce Olympiad",
    class: "Class 11 - 12",
  },
  {
    id: "ai-robotics",
    icon: <FaRobot />,
    title: "AI & Robotics Olympiad (ARO)",
    class: "Class 3 - 12",
  },
  {
    id: "coding",
    icon: <FaCode />,
    title: "Coding Olympiad",
    class: "Class 3 - 12",
  },
  {
    id: "biology",
    icon: <FaDna />,
    title: "International Biology Olympiad (IBO)",
    class: "Class 9 - 12",
  },
  {
    id: "chemistry",
    icon: <FaFlask />,
    title: "Chemistry Olympiad",
    class: "Class 9 - 12",
  },
];

function OlampiadsList() {
  const navigate = useNavigate();
  const [olympiads, setOlympiads] = useState(fallbackOlympiads);
  const [error, setError] = useState("");

  useEffect(() => {
    api("/api/v1/exams/schedules")
      .then((response) => setOlympiads(response.data.map((exam) => ({
        ...exam,
        icon: <FaAtom />,
        class: exam.eligibilityCriteria?.classGrades?.length
          ? `Class ${exam.eligibilityCriteria.classGrades.join(", ")}`
          : "Eligibility varies",
      }))))
      .catch((requestError) => setError(requestError.message));
  }, []);
  return (
    <>
      <Navbar />
      <section className="olympiads-list">
        <div className="breadcrumb">
          Home <span>&gt;</span> Olympiads
        </div>

        <div className="heading-wrapper">
          <h1>Our Olympiads</h1>

          <div className="title-decoration">
            <span></span>★<span></span>
          </div>

          <p>
            Explore a wide range of Olympiads designed to challenge young minds,
            build knowledge and inspire excellence across diverse subjects.
          </p>
        </div>

        <div className="olympiads-grid">
          {error && <p role="alert">Live schedules are unavailable: {error}</p>}
          {olympiads.map((item) => (
            <div className="olympiad-card" key={item.id}>
              <div className="icon-circle">{item.icon}</div>

              <h3>{item.title}</h3>

              <p className="class-text">{item.class}</p>

              {/* <button
                className="view-details-button"
                onClick={() => navigate(`/olympiads/${item.id}`)}
              >
                View Details
              </button> */}

              <button
                className="view-details-button"
                onClick={() => navigate(`/olympiads/${item.id}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OlampiadsList;

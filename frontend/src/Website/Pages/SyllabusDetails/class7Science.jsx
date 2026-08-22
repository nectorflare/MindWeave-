import React from "react";
import { Link } from "react-router-dom";
import "./SyllabusDetails.css";
import "../../Components/Breadcrumb/Breadcrumb.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import illustration from "../../../assets/book-banner.jpg";
import {
  FaGraduationCap,
  FaListUl,
  FaBullseye,
  FaFileAlt,
  FaInfoCircle,
  FaDownload,
} from "react-icons/fa";

// Class 7 Science ka fixed data — is page ke liye hardcoded rakha hai
const class7ScienceData = {
  classLabel: "7",
  subject: "Science",
  totalTopics: 16,
  focusArea: "Scientific Concepts & Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class 7 Science is designed to build strong conceptual understanding of core scientific principles and encourage logical, analytical thinking.",
  sections: [
    {
      id: "A",
      title: "Physics",
      color: "purple",
      topics: [
        { no: 1, title: "Heat", desc: "Transfer of heat and temperature." },
        {
          no: 2,
          title: "Acids, Bases and Salts",
          desc: "Properties and everyday examples.",
        },
        {
          no: 3,
          title: "Physical and Chemical Changes",
          desc: "Difference between the two types of changes.",
        },
        {
          no: 4,
          title: "Weather, Climate and Adaptations",
          desc: "How living beings adapt to climate.",
        },
      ],
    },
    {
      id: "B",
      title: "Biology",
      color: "green",
      topics: [
        {
          no: 5,
          title: "Nutrition in Plants",
          desc: "Photosynthesis and modes of nutrition.",
        },
        {
          no: 6,
          title: "Nutrition in Animals",
          desc: "Digestion process in animals.",
        },
        {
          no: 7,
          title: "Respiration in Organisms",
          desc: "Breathing and respiration process.",
        },
        {
          no: 8,
          title: "Transportation in Animals and Plants",
          desc: "Circulatory and transport systems.",
        },
        {
          no: 9,
          title: "Reproduction in Plants",
          desc: "Sexual and asexual reproduction.",
        },
      ],
    },
    {
      id: "C",
      title: "Chemistry",
      color: "blue",
      topics: [
        {
          no: 10,
          title: "Physical and Chemical Changes",
          desc: "Reversible and irreversible changes.",
        },
        {
          no: 11,
          title: "Water: A Precious Resource",
          desc: "Conservation and management of water.",
        },
        {
          no: 12,
          title: "Forests: Our Lifeline",
          desc: "Importance of forests in ecosystem.",
        },
      ],
    },
    {
      id: "D",
      title: "Motion, Force and Electricity",
      color: "orange",
      topics: [
        {
          no: 13,
          title: "Motion and Time",
          desc: "Types of motion and measuring time.",
        },
        {
          no: 14,
          title: "Electric Current and Its Effects",
          desc: "Circuits, magnetic effects of current.",
        },
        {
          no: 15,
          title: "Light",
          desc: "Reflection and properties of light.",
        },
        {
          no: 16,
          title: "Winds, Storms and Cyclones",
          desc: "Air pressure and weather events.",
        },
      ],
    },
  ],
};

function Class7Science() {
  const data = class7ScienceData;

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        <span className="breadcrumb-separator">›</span>
        <Link to="/syllabus" className="breadcrumb-link">
          Syllabus & Papers
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">
          Class {data.classLabel} {data.subject} Syllabus
        </span>
      </div>

      <div className="syllabus-details-page">
        <div className="syllabus-details-hero">
          <div className="syllabus-details-hero-content">
            <h1>
              Class {data.classLabel} {data.subject} Syllabus
            </h1>
            <p>{data.description}</p>
          </div>
          <img
            src={illustration}
            alt=""
            className="syllabus-details-hero-img"
          />
        </div>

        <div className="syllabus-info-bar">
          <div className="info-item">
            <span className="info-icon purple">
              <FaGraduationCap />
            </span>
            <div>
              <p className="info-label">Class</p>
              <p className="info-value">{data.classLabel}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon green">
              <FaListUl />
            </span>
            <div>
              <p className="info-label">Total Topics</p>
              <p className="info-value">{data.totalTopics}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon orange">
              <FaBullseye />
            </span>
            <div>
              <p className="info-label">Focus Area</p>
              <p className="info-value">{data.focusArea}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon blue">
              <FaFileAlt />
            </span>
            <div>
              <p className="info-label">Exam Level</p>
              <p className="info-value">{data.examLevel}</p>
            </div>
          </div>
        </div>

        {data.sections.map((section) => (
          <div className="syllabus-section" key={section.id}>
            <div className={`syllabus-section-header ${section.color}`}>
              <span className={`section-badge ${section.color}`}>
                {section.id}.
              </span>
              <h2>{section.title}</h2>
            </div>

            <div className="syllabus-topics-grid">
              {section.topics.map((topic) => (
                <div className="syllabus-topic-item" key={topic.no}>
                  <span className={`topic-number ${section.color}`}>
                    {topic.no}
                  </span>
                  <div>
                    <h4>{topic.title}</h4>
                    <p>{topic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="syllabus-note-bar">
          <div className="note-text">
            <span className="note-icon-wrapper">
              <FaInfoCircle className="note-icon" />
            </span>
            <p>
              <strong>Note:</strong> The syllabus is indicative. For complete
              details, please download the syllabus PDF.
            </p>
          </div>

          <button className="download-syllabus-button">
            <FaDownload />
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Class7Science;

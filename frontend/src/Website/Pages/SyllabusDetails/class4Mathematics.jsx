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

const class4MathematicsData = {
  classLabel: "4",
  subject: "Mathematics",
  totalTopics: 15,
  focusArea: "Numerical & Logical Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class 4 Mathematics is designed to strengthen number sense, basic operations, and problem-solving skills.",
  sections: [
    {
      id: "A",
      title: "Numbers",
      color: "purple",
      topics: [
        {
          no: 1,
          title: "Large Numbers",
          desc: "Reading and writing numbers up to 5 digits.",
        },
        {
          no: 2,
          title: "Addition and Subtraction",
          desc: "Operations on large numbers.",
        },
        {
          no: 3,
          title: "Multiplication",
          desc: "Multiplying 2 and 3 digit numbers.",
        },
        { no: 4, title: "Division", desc: "Basic division with remainders." },
      ],
    },
    {
      id: "B",
      title: "Fractions & Measurement",
      color: "green",
      topics: [
        { no: 5, title: "Fractions", desc: "Understanding parts of a whole." },
        {
          no: 6,
          title: "Length, Weight and Capacity",
          desc: "Units and conversions.",
        },
        { no: 7, title: "Time", desc: "Reading clocks and calendars." },
        { no: 8, title: "Money", desc: "Basic money calculations." },
      ],
    },
    {
      id: "C",
      title: "Geometry",
      color: "blue",
      topics: [
        { no: 9, title: "Shapes", desc: "2D and 3D shapes." },
        { no: 10, title: "Perimeter", desc: "Perimeter of simple figures." },
        { no: 11, title: "Symmetry", desc: "Lines of symmetry in shapes." },
      ],
    },
    {
      id: "D",
      title: "Data Handling",
      color: "orange",
      topics: [
        {
          no: 12,
          title: "Pictographs",
          desc: "Reading and drawing pictographs.",
        },
        { no: 13, title: "Bar Graphs", desc: "Introduction to bar graphs." },
        { no: 14, title: "Patterns", desc: "Number and shape patterns." },
        {
          no: 15,
          title: "Simple Word Problems",
          desc: "Applying concepts to real-life problems.",
        },
      ],
    },
  ],
};

function Class4Mathematics() {
  const data = class4MathematicsData;

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

export default Class4Mathematics;

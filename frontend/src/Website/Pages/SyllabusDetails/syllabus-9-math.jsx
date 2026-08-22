import React from "react";
import { Link, useLocation } from "react-router-dom";
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

const defaultSyllabus = {
  classLabel: "IX",
  subject: "Math",
  totalTopics: 23,
  focusArea: "Language & Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class IX Olympiad exams is designed to build a strong foundation in language skills and reasoning abilities to help students prepare effectively.",
  sections: [
    {
      id: "A",
      title: "Number Systems",
      color: "purple",
    },
    {
      id: "B",
      title: "Polynomials",
      color: "green",
    },
    {
      id: "C",
      title: "Coordinate Geometry",
      color: "blue",
    },
    {
      id: "D",
      title: "Linear Equations in Two Variables",
      color: "orange",
    },
    {
      id: "E",
      title: "Introduction to Euclid’s Geometry",
      color: "purple",
    },
        {
      id: "F",
      title: "Lines and Angles",
      color: "green",
    },
    {
      id: "G",
      title: "Triangles",
      color: "blue",
    },
    {
      id: "H",
      title: "Quadrilaterals",
      color: "orange",
    },
    {
      id: "I",
      title: "Circles",
      color: "purple",
    },
    {
      id: "J",
      title: "Heron’s Formula",
      color: "green",
    },
    {
      id: "K",
      title: "Surface Areas and Volumes",
      color: "blue",
    },
    {
      id: "L",
      title: "Statistics",
      color: "blue",
    },
    {
      id: "M",
      title: "Probability",
      color: "orange",
    },
    {
      id: "N",
      title: "Olympiad Enrichment",
      color: "purple",
      topics: [
        {
          no: 1,
          title: "Number patterns",
          // desc: "Building correct and meaningful sentences.",
        },
        {
          no: 2,
          title: "Divisibility rules",
          // desc: "Correct use of punctuation marks.",
        },
        {
          no: 3,
          title: "Mathematical puzzles",
          // desc: "Correct use of punctuation marks.",
        },
        {
          no: 4,
          title: "Logical reasoning",
          // desc: "Correct use of punctuation marks.",
        },
      ],
    },
  ],
};

function SyllabusDetails() {
  const location = useLocation();
  const passed = location.state?.syllabus;

  const data =
    passed && passed.sections && passed.sections.length > 0
      ? passed
      : { ...defaultSyllabus, ...passed, sections: defaultSyllabus.sections };

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
          Class {data.classLabel} {data.subject && `${data.subject} `}Syllabus
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
              <p className="info-value">IX</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon green">
              <FaListUl />
            </span>
            <div>
              <p className="info-label">Total Topics</p>
              <p className="info-value">7</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon orange">
              <FaBullseye />
            </span>
            <div>
              <p className="info-label">Focus Area</p>
              <p className="info-value">English Language</p>
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

              {section.topics?.length > 0 && (
              <div className="syllabus-topics-grid">
                {section.topics.map((topic) => (
                  <div className="syllabus-topic-item" key={topic.no}>
                    <span className={`topic-number ${section.color}`}>
                      {topic.no}
                    </span>

                    <div>
                      <h4>{topic.title}</h4>
                      {topic.desc && <p>{topic.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default SyllabusDetails;
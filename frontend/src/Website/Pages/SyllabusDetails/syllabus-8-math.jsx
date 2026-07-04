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
  classLabel: "VII",
  subject: "Math",
  totalTopics: 23,
  focusArea: "Language & Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class VII Olympiad exams is designed to build a strong foundation in language skills and reasoning abilities to help students prepare effectively.",
  sections: [
    {
      id: "A",
      title: "Rational Numbers",
      color: "purple",
    },
    {
      id: "B",
      title: "Linear Equations in One Variable",
      color: "green",
    },
    {
      id: "C",
      title: "Understanding Quadrilaterals",
      color: "blue",
    },
    {
      id: "D",
      title: "Practical Geometry",
      color: "orange",
    },
    {
      id: "E",
      title: "Squares and Square Roots",
      color: "purple",
    },
        {
      id: "F",
      title: "Cubes and Cube Roots",
      color: "green",
    },
    {
      id: "G",
      title: "Comparing Quantities",
      color: "blue",
    },
    {
      id: "H",
      title: "Direct and Inverse Proportions",
      color: "orange",
    },
    {
      id: "I",
      title: "Algebraic Expressions and Identities",
      color: "purple",
    },
    {
      id: "J",
      title: "Mensuration",
      color: "green",
    },
    {
      id: "K",
      title: "Data Handling",
      color: "blue",
    },
    {
      id: "L",
      title: "Data Handling",
      color: "blue",
    },
    {
      id: "M",
      title: "Reasoning",
      color: "blue",
      topics: [
        {
          no: 1,
          title: "Logical deduction",
          // desc: "Building correct and meaningful sentences.",
        },
        {
          no: 2,
          title: "Figure series",
          // desc: "Correct use of punctuation marks.",
        },
        {
          no: 3,
          title: "Mathematical reasoning",
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
              <p className="info-value">VIII</p>
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
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
  classLabel: "V",
  subject: "Math",
  totalTopics: 23,
  focusArea: "Language & Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class V Olympiad exams is designed to build a strong foundation in language skills and reasoning abilities to help students prepare effectively.",
  sections: [
    {
      id: "A",
      title: "Numbers and Operations",
      color: "purple",
      topics: [
        {
          no: 1,
          title: "Large numbers",
          // desc: "Basic rules of grammar and their usage.",
        },
        {
          no: 2,
          title: "Factors and multiples",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
        { 
          no: 3, title: "Fractions", 
          // desc: "Use of pronouns and its types." 
        
        },
        { 
          no: 4, title: "Decimals", 
          // desc: "Use of pronouns and its types." 
        
        },
      ],
    },
    {
      id: "B",
      title: "Geometry and Measurement",
      color: "green",
      topics: [
        {
          no: 5,
          title: "Area",
          // desc: "Words with similar and opposite meanings.",
        },
        {
          no: 6,
          title: "Perimeter",
          // desc: "Words that sound the same but different meanings.",
        },
        {
          no: 7,
          title: "Volume (introduction)",
          // desc: "Words that sound the same but different meanings.",
        },
      ],
    },
    {
      id: "C",
      title: "Data Handling",
      color: "blue",
      topics: [
        {
          no: 8,
          title: "Tables",
          // desc: "Building correct and meaningful sentences.",
        },
        {
          no: 9,
          title: "Bar graphs",
          // desc: "Correct use of punctuation marks.",
        },
        {
          no: 10,
          title: "Interpretation of data",
          // desc: "Correct use of punctuation marks.",
        },
      ],
    },
    {
      id: "D",
      title: "Reasoning",
      color: "orange",
      topics: [
        {
          no: 11,
          title: "Number series",
          // desc: "Identifying the odd one from given options.",
        },
        {
          no: 12,
          title: "Classification",
          // desc: "Finding patterns in words and letters.",
        },
        {
          no: 13,
          title: "Coding patterns",
          // desc: "Identifying the odd one from given options.",
        },
        {
          no: 14,
          title: "Logical puzzles",
          // desc: "Finding patterns in words and letters.",
        },
      ],
    },
    {
      id: "E",
      title: "Measurement",
      color: "purple",
      topics: [
        {
          no: 15,
          title: "Perimeter",
          // desc: "Identifying the odd one from given options.",
        },
        {
          no: 16,
          title: "Area (basic concepts)",
          // desc: "Finding patterns in words and letters.",
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
              <p className="info-value">V</p>
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
      </div>

      <Footer />
    </>
  );
}

export default SyllabusDetails;
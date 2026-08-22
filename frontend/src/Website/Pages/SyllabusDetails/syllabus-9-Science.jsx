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

// Sample/default data — jab tak real syllabus data backend ya
// data file se nahi aata, isko fallback ke roop me use karo.
// SyllabusList se navigate karte waqt state.syllabus me isi
// shape ka object bhej dena, page automatically wahi dikhayega.
const defaultSyllabus = {
  classLabel: "IX",
  subject: "Science",
  totalTopics: 23,
  focusArea: "Language & Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class IX Olympiad exams is designed to build a strong foundation in language skills and reasoning abilities to help students prepare effectively.",
  sections: [
    {
      id: "A",
      title: "Biology",
      color: "purple",
      topics: [
        {
          no: 1,
          title: "The Fundamental Unit of Life",
          // desc: "Basic rules of grammar and their usage.",
        },
        {
          no: 2,
          title: "Tissues",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
         {
          no: 3,
          title: "Diversity in Living Organisms",
          // desc: "Basic rules of grammar and their usage.",
        },
        {
          no: 4,
          title: "Why Do We Fall Ill?",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
         {
          no: 5,
          title: "Improvement in Food Resources",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
      ],
    },
    {
      id: "B",
      title: "Physics",
      color: "green",
      topics: [
        {
          no: 6,
          title: "Motion",
          // desc: "Words with similar and opposite meanings.",
        },
        {
          no: 7,
          title: "Force and Laws of Motion",
          // desc: "Words that sound the same but different meanings.",
        },
         {
          no: 8,
          title: "Gravitation",
          // desc: "Words with similar and opposite meanings.",
        },
        {
          no: 9,
          title: "Work and Energy",
          // desc: "Words that sound the same but different meanings.",
        },
        {
          no: 10,
          title: "Sound",
          // desc: "Words that sound the same but different meanings.",
        },
      ],
    },
    {
      id: "C",
      title: "Chemistry",
      color: "blue",
      topics: [
        {
          no: 11,
          title: "Matter in Our Surroundings",
          // desc: "Building correct and meaningful sentences.",
        },
        {
          no: 12,
          title: "Is Matter Around Us Pure?",
          // desc: "Correct use of punctuation marks.",
        },
        {
          no: 13,
          title: "Atoms and Molecules",
          // desc: "Correct use of capital letters in sentences.",
        },
         {
          no: 14,
          title: "Structure of the Atom",
          // desc: "Correct use of capital letters in sentences.",
        },
      ],
    },
    {
      id: "D",
      title: "Environmental Science",
      color: "orange",
      topics: [
        {
          no: 15,
          title: "Natural Resources",
          // desc: "Identifying the odd one from given options.",
        },
        {
          no: 16,
          title: "Environmental Concerns and Conservation",
          // desc: "Finding patterns in words and letters.",
        },
      ],
    },
    {
      id: "E",
      title: "Scientific Aptitude",
      color: "purple",
      topics: [
        {
          no: 17,
          title: "Data Interpretation",
          // desc: "Identifying the odd one from given options.",
        },
         {
          no: 18,
          title: "Scientific Reasoning",
          // desc: "Identifying the odd one from given options.",
        },
         {
          no: 19,
          title: "Experimental Analysis",
          // desc: "Identifying the odd one from given options.",
        },
         {
          no: 20,
          title: "Higher-Order Thinking Skills (HOTS)",
          // desc: "Identifying the odd one from given options.",
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
              <p className="info-value">{data.classLabel}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon green">
              <FaListUl />
            </span>
            <div>
              <p className="info-label">Total Topics</p>
              <p className="info-value">5</p>
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
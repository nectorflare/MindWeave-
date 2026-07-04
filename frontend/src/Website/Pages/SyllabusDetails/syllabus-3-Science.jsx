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
  classLabel: "III",
  subject: "Science",
  totalTopics: 23,
  focusArea: "Language & Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class III Olympiad exams is designed to build a strong foundation in language skills and reasoning abilities to help students prepare effectively.",
  sections: [
    {
      id: "A",
      title: "Living World",
      color: "purple",
      topics: [
        {
          no: 1,
          title: "Plants and animals around us",
          // desc: "Basic rules of grammar and their usage.",
        },
        {
          no: 2,
          title: "Parts of plants and their functions",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
        { no: 3, title: "Habitats of animals", // desc: "Use of pronouns and its types." 
        
        },
        { no: 4, title: "Food habits of animals", // desc: "Action words and helping verbs." 
        },
      ],
    },
    {
      id: "B",
      title: "Human Body & Health",
      color: "green",
      topics: [
        {
          no: 5,
          title: "Sense organs",
          // desc: "Words with similar and opposite meanings.",
        },
        {
          no: 6,
          title: "Healthy food and nutrition",
          // desc: "Words that sound the same but different meanings.",
        },
        {
          no: 7,
          title: "Personal hygiene",
          // desc: "Replacing phrases with single words.",
        },
      ],
    },
    {
      id: "C",
      title: "Matter & Materials",
      color: "blue",
      topics: [
        {
          no: 8,
          title: "Types of materials",
          // desc: "Building correct and meaningful sentences.",
        },
        {
          no: 9,
          title: "Solids, liquids, and gases",
          // desc: "Correct use of punctuation marks.",
        },
        {
          no: 10,
          title: "Uses of common materials",
          // desc: "Correct use of capital letters in sentences.",
        },
      ],
    },
    {
      id: "D",
      title: "Environment",
      color: "orange",
      topics: [
        {
          no: 11,
          title: "Air and water",
          // desc: "Identifying the odd one from given options.",
        },
        {
          no: 12,
          title: "Weather and seasons",
          // desc: "Finding patterns in words and letters.",
        },
        {
          no: 13,
          title: "Conservation of resources",
          // desc: "Finding patterns in words and letters.",
        },
      ],
    },
    {
      id: "E",
      title: "Science in Daily Life",
      color: "purple",
      topics: [
        {
          no: 14,
          title: "Machines around us",
          // desc: "Identifying the odd one from given options.",
        },
        {
          no: 15,
          title: "Safety rules",
          // desc: "Finding patterns in words and letters.",
        },
        {
          no: 16,
          title: "Scientific observations",
          // desc: "Understanding simple relationships.",
        },
      ],
    },
       {
      id: "F",
      title: "Scientific Reasoning",
      color: "green",
      topics: [
        {
          no: 17,
          title: "Patterns, classification, and simple logical thinking",
          // desc: "Identifying the odd one from given options.",
        },
      ]
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
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
  classLabel: "X",
  subject: "Science",
  totalTopics: 23,
  focusArea: "Language & Reasoning",
  examLevel: "School Level",
  description:
    "The syllabus for Class X Olympiad exams is designed to build a strong foundation in language skills and reasoning abilities to help students prepare effectively.",
  sections: [
    {
      id: "A",
      title: "Biology",
      color: "purple",
      topics: [
        {
          no: 1,
          title: "Life Processes",
          // desc: "Basic rules of grammar and their usage.",
        },
        {
          no: 2,
          title: "Control and Coordination",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
         {
          no: 3,
          title: "How Do Organisms Reproduce?",
          // desc: "Basic rules of grammar and their usage.",
        },
        {
          no: 4,
          title: "Heredity",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
         {
          no: 5,
          title: "Our Environment",
          // desc: "Common nouns, proper nouns, singular, plural.",
        },
        {
          no: 6,
          title: "Management of Natural Resources",
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
          no: 7,
          title: "Light – Reflection and Refraction",
          // desc: "Words with similar and opposite meanings.",
        },
        {
          no: 8,
          title: "The Human Eye and the Colourful World",
          // desc: "Words that sound the same but different meanings.",
        },
         {
          no: 9,
          title: "Electricity",
          // desc: "Words with similar and opposite meanings.",
        },
        {
          no: 10,
          title: "Magnetic Effects of Electric Current",
          // desc: "Words that sound the same but different meanings.",
        },
        {
          no: 11,
          title: "Sources of Energy",
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
          no: 12,
          title: "Chemical Reactions and Equations",
          // desc: "Building correct and meaningful sentences.",
        },
        {
          no: 13,
          title: "Acids, Bases and Salts",
          // desc: "Correct use of punctuation marks.",
        },
        {
          no: 14,
          title: "Metals and Non-metals",
          // desc: "Correct use of capital letters in sentences.",
        },
         {
          no: 15,
          title: "Carbon and Its Compounds",
          // desc: "Correct use of capital letters in sentences.",
        },
        {
          no: 16,
          title: "Periodic Classification of Elements",
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
          no: 17,
          title: "Sustainable Development",
          // desc: "Identifying the odd one from given options.",
        },
        {
          no: 18,
          title: "Biodiversity Conservation",
          // desc: "Finding patterns in words and letters.",
        },
         {
          no: 19,
          title: "Environmental Challenges and Solutions",
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
          no: 20,
          title: "Case Studies",
          // desc: "Identifying the odd one from given options.",
        },
         {
          no: 21,
          title: "Experimental Interpretation",
          // desc: "Identifying the odd one from given options.",
        },
         {
          no: 22,
          title: "Data Analysis",
          // desc: "Identifying the odd one from given options.",
        },
         {
          no: 23,
          title: "Scientific Reasoning and Application-Based Questions",
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
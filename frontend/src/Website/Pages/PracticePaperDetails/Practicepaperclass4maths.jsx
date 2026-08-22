import React from "react";
import "./PracticePaperDetails.css"; // same design, koi nayi CSS nahi
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  FaTrophy,
  FaClipboardList,
  FaClock,
  FaStar,
  FaCalculator,
  FaRulerCombined,
} from "react-icons/fa";

const paperData = {
  title: "International Mathematics Olympiad",
  classLabel: "IV",
  testType: "Practice Test",
  totalQuestions: 50,
  timeAllotted: "60 Minutes",
  maxMarks: 50,

  sections: [
    {
      id: "A",
      title: "Number System & Arithmetic",
      range: "Q. 1 – 25",
      color: "blue",
      icon: "numbers",
      columns: 4,
      questions: [
        {
          no: 1,
          text: "What is the place value of 7 in 57,432?",
          options: ["7", "70", "7000", "700"],
        },
        {
          no: 2,
          text: "Which is the smallest number?",
          options: ["50,209", "50,920", "50,029", "50,902"],
        },
        {
          no: 3,
          text: "Round 48,764 to nearest thousand.",
          options: ["48,000", "49,000", "47,000", "48,700"],
        },
        {
          no: 4,
          text: "Find the missing number: 1350, 1450, 1550, ____, 1750",
          options: ["1600", "1650", "1660", "1700"],
        },
        {
          no: 5,
          text: "Roman numeral for 94 is",
          options: ["XCIV", "IC", "XCIX", "LXXXXIV"],
        },
        {
          no: 6,
          text: "Which number is divisible by 5?",
          options: ["378", "945", "562", "487"],
        },
        {
          no: 7,
          text: "How many thousands in 84,000?",
          options: ["84", "840", "8", "8400"],
        },
        {
          no: 8,
          text: "Number before 70,000 is",
          options: ["69,999", "70,001", "69,990", "69,900"],
        },
        {
          no: 9,
          text: "Arrange in descending order",
          options: [
            "5620,5602,5260,5062",
            "5602,5620,5260,5062",
            "5620,5260,5602,5062",
            "5260,5620,5602,5062",
          ],
        },
        {
          no: 10,
          text: "Greatest even number using 2,4,6,8",
          options: ["8642", "8624", "8462", "8264"],
        },

        {
          no: 11,
          text: "3487 + 4526 =",
          options: ["8013", "7913", "8113", "8033"],
        },
        {
          no: 12,
          text: "9000 – 4689 =",
          options: ["4311", "4211", "4411", "4111"],
        },
        {
          no: 13,
          text: "324 × 8 =",
          options: ["2592", "2492", "2692", "2582"],
        },
        { no: 14, text: "864 ÷ 9 =", options: ["94", "96", "98", "92"] },
        { no: 15, text: "45 + 15 × 3 =", options: ["180", "90", "60", "75"] },

        {
          no: 16,
          text: "Library books total",
          options: ["4053", "4043", "4063", "4033"],
        },
        {
          no: 17,
          text: "Wheat remaining",
          options: ["4055 kg", "4065 kg", "3955 kg", "4155 kg"],
        },
        {
          no: 18,
          text: "Correct multiplication",
          options: ["1000", "950", "900", "975"],
        },
        {
          no: 19,
          text: "Number ÷ 12 = 15",
          options: ["170", "180", "190", "175"],
        },
        {
          no: 20,
          text: "Product of 3 consecutive = 210",
          options: ["4", "5", "6", "7"],
        },

        {
          no: 21,
          text: "Equivalent to 2/4",
          options: ["1/2", "2/3", "3/4", "4/5"],
        },
        {
          no: 22,
          text: "Which is greater?",
          options: ["3/8", "5/8", "Equal", "Cannot say"],
        },
        {
          no: 23,
          text: "0.7 means",
          options: ["7/100", "7/10", "70/1000", "1/7"],
        },
        {
          no: 24,
          text: "Greatest decimal",
          options: ["0.45", "0.54", "0.405", "0.504"],
        },
        {
          no: 25,
          text: "Fraction left of chocolate",
          options: ["3/8", "5/8", "7/16", "1/2"],
        },
      ],
    },
    {
      id: "B",
      title: "Measurement, Geometry & Reasoning",
      range: "Q. 26 – 50",
      color: "green",
      icon: "measurement",
      columns: 3,
      questions: [
        {
          no: 26,
          text: "6 litres = ?",
          options: ["60 mL", "600 mL", "6000 mL", "60000 mL"],
        },
        {
          no: 27,
          text: "Ribbon remaining",
          options: ["4 m 50 cm", "4 m 60 cm", "5 m 10 cm", "4 m 40 cm"],
        },
        {
          no: 28,
          text: "Total weight",
          options: ["10 kg 300 g", "11 kg 300 g", "11 kg 200 g", "10 kg 400 g"],
        },
        {
          no: 29,
          text: "Water left",
          options: ["5825 L", "5925 L", "5725 L", "6025 L"],
        },
        {
          no: 30,
          text: "Best unit for distance",
          options: ["mm", "cm", "m", "km"],
        },

        {
          no: 31,
          text: "Total train distance",
          options: ["802 km", "812 km", "822 km", "792 km"],
        },
        { no: 32, text: "Rope pieces", options: ["18", "19", "20", "21"] },
        {
          no: 33,
          text: "Minutes in 5 hours",
          options: ["250", "300", "350", "400"],
        },
        {
          no: 34,
          text: "Movie duration",
          options: ["1h35m", "1h45m", "1h50m", "2h"],
        },
        { no: 35, text: "Total cost", options: ["990", "995", "1000", "1010"] },

        {
          no: 36,
          text: "Change returned",
          options: ["242", "252", "262", "272"],
        },
        {
          no: 37,
          text: "Clock time after addition",
          options: ["10:55", "11:05", "11:15", "11:25"],
        },
        {
          no: 38,
          text: "Total cost shopping",
          options: ["194", "204", "214", "224"],
        },
        {
          no: 39,
          text: "Diagonals in rectangle",
          options: ["1", "2", "3", "4"],
        },
        {
          no: 40,
          text: "Solid shape",
          options: ["Sphere", "Cube", "Cylinder", "Cone"],
        },

        { no: 41, text: "Edges of cube", options: ["8", "10", "12", "14"] },
        {
          no: 42,
          text: "Max books reader",
          options: ["Aarav", "Diya", "Kabir", "Meera"],
        },
        {
          no: 43,
          text: "Shape with one pair parallel sides",
          options: ["Square", "Rectangle", "Trapezium", "Rhombus"],
        },
        {
          no: 44,
          text: "Cuboid properties",
          options: ["6F 8V 12E", "8F 6V 12E", "6F 12V 8E", "12F 8V 6E"],
        },
        {
          no: 45,
          text: "Next number: 3,6,12,24,48",
          options: ["72", "84", "96", "100"],
        },

        {
          no: 46,
          text: "Coding: BOOK → CPPL, LAMP =",
          options: ["MBNQ", "MBNP", "LBNQ", "NBOQ"],
        },
        { no: 47, text: "Odd one out", options: ["27", "64", "81", "100"] },
        {
          no: 48,
          text: "Clock angle in 2 hours",
          options: ["30°", "45°", "60°", "90°"],
        },
        {
          no: 49,
          text: "Handshake problem",
          options: ["435", "870", "900", "465"],
        },
        {
          no: 50,
          text: "Find original number",
          options: ["35", "40", "45", "50"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "D",
      "C",
      "B",
      "B",
      "A",
      "B",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "B",
      "B",
      "A",
      "A",
      "A",
      "B",
      "A",
      "A",
      "B",
      "B",
      "B",
      "A",
    ],
    B: [
      "C",
      "B",
      "B",
      "A",
      "D",
      "B",
      "C",
      "B",
      "B",
      "C",
      "B",
      "C",
      "B",
      "B",
      "C",
      "C",
      "A",
      "C",
      "A",
      "C",
      "C",
      "D",
      "C",
      "A",
      "B",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  numbers: <FaCalculator />,
  measurement: <FaRulerCombined />,
};

function PracticePaperClass4Maths() {
  return (
    <>
      <Navbar />

      <div className="practice-paper-page">
        <div className="practice-paper-sheet">
          {/* ---- Header ---- */}
          <div className="paper-header">
            <div className="paper-title-block">
              <h1>{paperData.title}</h1>
              <div className="paper-badges">
                <span className="paper-badge class-badge">
                  – CLASS {paperData.classLabel} –
                </span>
                <span className="paper-badge test-badge">
                  {paperData.testType}
                </span>
              </div>
            </div>

            <div className="paper-trophy">
              <FaTrophy />
            </div>
          </div>

          {/* ---- Info bar ---- */}
          <div className="paper-info-bar">
            <div className="paper-info-item">
              <FaClipboardList className="paper-info-icon" />
              <span>
                Total Questions: <strong>{paperData.totalQuestions}</strong>
              </span>
            </div>
            <div className="paper-info-item">
              <FaClock className="paper-info-icon" />
              <span>
                Time Allotted: <strong>{paperData.timeAllotted}</strong>
              </span>
            </div>
            <div className="paper-info-item">
              <FaStar className="paper-info-icon" />
              <span>
                Maximum Marks: <strong>{paperData.maxMarks}</strong>
              </span>
            </div>
          </div>

          {/* ---- Sections ---- */}
          {paperData.sections.map((section) => (
            <div className="paper-section" key={section.id}>
              <div className={`paper-section-header ${section.color}`}>
                <span className={`paper-section-icon ${section.color}`}>
                  {sectionIcons[section.icon]}
                </span>
                <h2>{section.title}</h2>
                <span className="paper-section-range">{section.range}</span>
              </div>

              {section.passage && (
                <div className="paper-passage">
                  <p className="paper-passage-label">Read the passage.</p>
                  <p>{section.passage}</p>
                </div>
              )}

              <div className={`paper-questions-grid cols-${section.columns}`}>
                {section.questions.map((q) => (
                  <div className="paper-question" key={q.no}>
                    <p className="paper-question-text">
                      <span className="paper-question-no">{q.no}.</span>{" "}
                      {q.text}
                    </p>
                    <div className="paper-options-grid">
                      {q.options.map((opt, i) => (
                        <span className="paper-option" key={i}>
                          <strong>{optionLetters[i]}.</strong> {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* ---- Answer Key ---- */}
          <div className="answer-key">
            <h3 className="answer-key-title">ANSWER KEY</h3>

            <div className="answer-key-scroll">
              {paperData.sections.map((section) => (
                <div className="answer-key-row" key={section.id}>
                  <span className={`answer-key-label ${section.color}`}>
                    {section.id} ({section.questions[0].no}–
                    {section.questions[section.questions.length - 1].no})
                  </span>

                  <table className="answer-key-table">
                    <tbody>
                      <tr>
                        {section.questions.map((q) => (
                          <td key={q.no}>{q.no}</td>
                        ))}
                      </tr>
                      <tr>
                        {paperData.answerKey[section.id].map((ans, i) => (
                          <td key={i} className="answer-cell">
                            {ans}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>

          <p className="paper-footer-note">★ All the best! ★</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PracticePaperClass4Maths;

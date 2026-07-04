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
} from "react-icons/fa";

const paperData = {
  title: "International Mathematics Olympiad",
  classLabel: "III",
  testType: "Practice Test",
  totalQuestions: 50,
  timeAllotted: "60 Minutes",
  maxMarks: 50,

  sections: [
    {
      id: "A",
      title: "Mathematics",
      range: "Q. 1 – 50",
      color: "blue",
      icon: "math",
      columns: 4,
      questions: [
        {
          no: 1,
          text: "What is the place value of 6 in 5,648?",
          options: ["6", "60", "600", "6000"],
        },
        {
          no: 2,
          text: "Which is the greatest number?",
          options: ["3987", "3897", "3978", "3789"],
        },
        {
          no: 3,
          text: "Arrange in ascending order: 4502, 4052, 4520, 4250",
          options: [
            "4052, 4250, 4502, 4520",
            "4250, 4052, 4502, 4520",
            "4052, 4502, 4250, 4520",
            "4520, 4502, 4250, 4052",
          ],
        },
        {
          no: 4,
          text: "What comes next? 125, 225, 325, 425, ___",
          options: ["500", "525", "625", "725"],
        },
        {
          no: 5,
          text: "The smallest 4-digit number is",
          options: ["999", "1000", "1001", "9999"],
        },
        {
          no: 6,
          text: "Face value of 8 in 3815 is",
          options: ["800", "80", "8", "8000"],
        },
        {
          no: 7,
          text: "Which number lies between 4599 and 4601?",
          options: ["4598", "4602", "4600", "4610"],
        },
        {
          no: 8,
          text: "How many hundreds are there in 4300?",
          options: ["4", "43", "430", "34"],
        },
        {
          no: 9,
          text: "Find missing number: 3400, 3500, 3600, ___, 3800",
          options: ["3650", "3700", "3900", "3750"],
        },
        {
          no: 10,
          text: "Greatest number from 4821",
          options: ["8421", "8241", "8412", "8214"],
        },

        {
          no: 11,
          text: "2365 + 1784 =",
          options: ["4149", "4049", "4249", "4159"],
        },
        {
          no: 12,
          text: "5000 – 2789 =",
          options: ["2211", "2311", "2221", "2111"],
        },
        { no: 13, text: "235 × 4 =", options: ["840", "940", "960", "920"] },
        { no: 14, text: "648 ÷ 8 =", options: ["81", "82", "84", "88"] },
        {
          no: 15,
          text: "Which operation first? 36 + 12 × 2",
          options: ["Addition", "Multiplication", "Subtraction", "Division"],
        },

        {
          no: 16,
          text: "Apples sold: 148 + 256 =",
          options: ["394", "404", "414", "424"],
        },
        {
          no: 17,
          text: "920 passengers, 145 down. Remaining?",
          options: ["775", "765", "785", "755"],
        },
        {
          no: 18,
          text: "Correct multiplication:",
          options: ["23×5=105", "24×4=96", "36×2=62", "15×8=100"],
        },
        { no: 19, text: "9 × □ = 81", options: ["7", "8", "9", "10"] },
        { no: 20, text: "432 ÷ 6 =", options: ["62", "72", "82", "92"] },

        {
          no: 21,
          text: "Which fraction is one-half?",
          options: ["1/3", "1/2", "2/3", "3/4"],
        },
        {
          no: 22,
          text: "Which is greater?",
          options: ["1/4", "1/2", "Both equal", "Cannot say"],
        },
        {
          no: 23,
          text: "Pizza 8 pieces, eaten 3 =",
          options: ["3/6", "3/8", "5/8", "8/3"],
        },
        {
          no: 24,
          text: "Smallest fraction",
          options: ["1/2", "1/3", "1/4", "1/5"],
        },
        {
          no: 25,
          text: "Cake left (12 pieces, 3+4 eaten)",
          options: ["5/12", "7/12", "8/12", "9/12"],
        },

        {
          no: 26,
          text: "Best unit for pencil",
          options: ["km", "m", "cm", "L"],
        },
        { no: 27, text: "1 metre = ?", options: ["10", "50", "100", "1000"] },
        {
          no: 28,
          text: "Heavier?",
          options: ["1kg cotton", "1000g sugar", "Both equal", "Cannot say"],
        },
        {
          no: 29,
          text: "2L – 750mL =",
          options: ["1050 mL", "1150 mL", "1250 mL", "1350 mL"],
        },
        { no: 30, text: "5 kg = ?", options: ["500", "5000", "50", "50000"] },

        {
          no: 31,
          text: "4m75cm – 2m85cm =",
          options: ["1m80cm", "1m90cm", "2m10cm", "2m20cm"],
        },
        {
          no: 32,
          text: "8000 – 4875 =",
          options: ["3025", "3125", "3225", "3325"],
        },
        {
          no: 33,
          text: "Minutes in 3 hours",
          options: ["120", "150", "180", "240"],
        },
        {
          no: 34,
          text: "8:30–2:30 duration",
          options: ["5h", "5½h", "6h", "6½h"],
        },
        {
          no: 35,
          text: "₹500 – ₹375 =",
          options: ["115", "120", "125", "135"],
        },

        {
          no: 36,
          text: "Greatest amount",
          options: ["495", "549", "459", "594"],
        },
        {
          no: 37,
          text: "2:45 + 2h35m =",
          options: ["5:10", "5:20", "5:30", "5:15"],
        },
        {
          no: 38,
          text: "4×18 + 3×47 =",
          options: ["207", "213", "219", "225"],
        },
        { no: 39, text: "Sides of hexagon", options: ["5", "6", "7", "8"] },
        {
          no: 40,
          text: "One curved side shape",
          options: ["Square", "Triangle", "Circle", "Rectangle"],
        },

        {
          no: 41,
          text: "Cube has",
          options: ["4 faces", "5 faces", "6 faces", "8 faces"],
        },
        {
          no: 42,
          text: "Most liked fruit",
          options: ["Apple", "Banana", "Orange", "Mango"],
        },
        { no: 43, text: "Vertices of cuboid", options: ["6", "8", "10", "12"] },
        {
          no: 44,
          text: "Equal sides & right angles",
          options: ["Rectangle", "Rhombus", "Square", "Kite"],
        },
        { no: 45, text: "4, 8, 16, 32, __", options: ["48", "56", "64", "72"] },

        {
          no: 46,
          text: "DOG → EPH, CAT → ?",
          options: ["DBU", "DBT", "DCT", "CBT"],
        },
        { no: 47, text: "Odd one out", options: ["24", "36", "48", "55"] },
        {
          no: 48,
          text: "Angle at 3:00",
          options: ["60°", "90°", "120°", "180°"],
        },
        {
          no: 49,
          text: "Handshake problem (24 students)",
          options: ["276", "552", "300", "240"],
        },
        {
          no: 50,
          text: "Solve: (x+25)×2=150",
          options: ["40", "45", "50", "75"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "C",
      "A",
      "A",
      "B",
      "B",
      "C",
      "C",
      "B",
      "B",
      "A",
      "A",
      "A",
      "B",
      "A",
      "B",
      "B",
      "A",
      "B",
      "C",
      "B",
      "B",
      "B",
      "B",
      "D",
      "A",
      "C",
      "C",
      "C",
      "C",
      "B",
      "B",
      "B",
      "C",
      "B",
      "C",
      "D",
      "B",
      "B",
      "B",
      "C",
      "C",
      "D",
      "B",
      "C",
      "C",
      "A",
      "D",
      "B",
      "A",
      "C",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  math: <FaCalculator />,
};

function PracticePaperClass3Maths() {
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

export default PracticePaperClass3Maths;

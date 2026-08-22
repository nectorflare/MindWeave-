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
  FaBrain,
} from "react-icons/fa";

const paperData = {
  title: "International Mathematics Olympiad",
  classLabel: "V",
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
          text: "Which is the greatest number?",
          options: ["8,90,456", "8,90,546", "8,09,546", "8,95,406"],
        },
        { no: 2, text: "HCF of 18 and 30 is", options: ["3", "6", "9", "12"] },
        {
          no: 3,
          text: "LCM of 8 and 12 is",
          options: ["12", "24", "36", "48"],
        },
        {
          no: 4,
          text: "Which number is divisible by 9?",
          options: ["5,481", "5,482", "5,484", "Both A and C"],
        },
        {
          no: 5,
          text: "Simplify 3/8 + 1/4",
          options: ["5/8", "4/8", "7/8", "1"],
        },

        {
          no: 6,
          text: "Convert 2.75 into fraction",
          options: ["11/4", "27/10", "275/10", "7/2"],
        },
        { no: 7, text: "25% of 320", options: ["80", "60", "100", "40"] },
        {
          no: 8,
          text: "Which fraction is greatest?",
          options: ["5/8", "3/4", "7/10", "2/3"],
        },
        {
          no: 9,
          text: "4.35 + 6.48 =",
          options: ["10.73", "10.83", "10.93", "11.03"],
        },
        { no: 10, text: "15 × 24 =", options: ["340", "350", "360", "370"] },

        {
          no: 11,
          text: "Which number is prime?",
          options: ["51", "53", "55", "57"],
        },
        { no: 12, text: "GCF of 36,48,60", options: ["6", "8", "12", "24"] },
        {
          no: 13,
          text: "Which decimal is smallest?",
          options: ["0.9", "0.09", "0.099", "0.909"],
        },
        { no: 14, text: "2/5 of 250", options: ["100", "125", "150", "80"] },
        {
          no: 15,
          text: "Sum of first 5 multiples of 9",
          options: ["125", "135", "145", "155"],
        },

        {
          no: 16,
          text: "Area of 12×8 rectangle",
          options: ["80", "96", "100", "108"],
        },
        {
          no: 17,
          text: "Perimeter of square side 14",
          options: ["42", "56", "64", "70"],
        },
        {
          no: 18,
          text: "Volume of cube side 5",
          options: ["25", "75", "100", "125"],
        },
        {
          no: 19,
          text: "Perimeter of 15×9 rectangle",
          options: ["46", "48", "50", "52"],
        },
        {
          no: 20,
          text: "Area of square side 16",
          options: ["128", "256", "196", "144"],
        },

        {
          no: 21,
          text: "Rectangle area 96, length 12 breadth?",
          options: ["6", "8", "9", "10"],
        },
        {
          no: 22,
          text: "Cube volume 216 side?",
          options: ["4", "5", "6", "8"],
        },
        {
          no: 23,
          text: "Greatest area",
          options: ["8×8", "9×7", "10×6", "12×5"],
        },
        {
          no: 24,
          text: "Perimeter of rectangle (area 72, breadth 6)",
          options: ["34", "36", "38", "40"],
        },
        {
          no: 25,
          text: "Area of two squares side 5",
          options: ["25", "50", "75", "100"],
        },
      ],
    },

    {
      id: "B",
      title: "Geometry, Data & Reasoning",
      range: "Q. 26 – 50",
      color: "green",
      icon: "reasoning",
      columns: 3,
      questions: [
        {
          no: 26,
          text: "Best graph for sales comparison",
          options: ["Pie", "Line", "Bar", "Circle"],
        },
        { no: 27, text: "3,6,12,24,__", options: ["36", "42", "48", "50"] },
        {
          no: 28,
          text: "Odd one out",
          options: ["Triangle", "Square", "Circle", "Cube"],
        },
        {
          no: 29,
          text: "CAT → DBU, DOG =",
          options: ["EPH", "EOH", "DPH", "FPH"],
        },
        { no: 30, text: "5,10,20,40,?", options: ["60", "70", "80", "90"] },

        { no: 31, text: "Odd one out", options: ["24", "36", "49", "64"] },
        {
          no: 32,
          text: "RED → SFE, BLUE =",
          options: ["CMVFF", "CMVGF", "CMVFE", "CMWFF"],
        },
        { no: 33, text: "2,5,11,23,47,?", options: ["95", "96", "97", "99"] },
        {
          no: 34,
          text: "Not multiple of 6",
          options: ["42", "54", "63", "72"],
        },
        {
          no: 35,
          text: "0.5 + 0.25",
          options: ["0.65", "0.70", "0.75", "0.80"],
        },

        { no: 36, text: "40% of 250", options: ["80", "90", "100", "120"] },
        {
          no: 37,
          text: "Greatest multiple of 9 <100",
          options: ["81", "90", "99", "108"],
        },
        {
          no: 38,
          text: "Number of factors of 36",
          options: ["6", "7", "8", "9"],
        },
        { no: 39, text: "0.25 equals", options: ["1/5", "1/3", "1/4", "2/5"] },
        {
          no: 40,
          text: "Divisible by 3 and 5",
          options: ["85", "90", "95", "100"],
        },

        {
          no: 41,
          text: "Product of 3 consecutive = 13800 middle number",
          options: ["23", "24", "25", "26"],
        },
        {
          no: 42,
          text: "Remainder problem least number",
          options: ["22", "37", "45", "77"],
        },
        {
          no: 43,
          text: "Square vs rectangle area difference",
          options: ["8", "16", "24", "32"],
        },
        {
          no: 44,
          text: "Sum of factors of 24",
          options: ["48", "54", "60", "72"],
        },
        {
          no: 45,
          text: "Cubes painted (64 small cubes)",
          options: ["12", "24", "16", "8"],
        },

        { no: 46, text: "1,4,10,22,46,?", options: ["92", "94", "96", "98"] },
        {
          no: 47,
          text: "18% of number =72, 125%?",
          options: ["500", "450", "520", "540"],
        },
        {
          no: 48,
          text: "Average of 5 even numbers product",
          options: ["A", "B", "C", "D"],
        },
        {
          no: 49,
          text: "Number equation result original",
          options: ["28", "30", "32", "34"],
        },
        { no: 50, text: "2,6,15,31,56,?", options: ["92", "90", "91", "94"] },
      ],
    },
  ],

  answerKey: {
    A: [
      "D",
      "B",
      "B",
      "D",
      "A",
      "A",
      "A",
      "B",
      "B",
      "C",
      "B",
      "C",
      "B",
      "A",
      "B",
      "B",
      "B",
      "D",
      "B",
      "B",
      "B",
      "C",
      "A",
      "B",
      "B",
    ],
    B: [
      "C",
      "C",
      "D",
      "A",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "B",
      "C",
      "B",
      "B",
      "A",
      "D",
      "C",
      "B",
      "B",
      "B",
      "B",
      "C",
      "B",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  numbers: <FaCalculator />,
  reasoning: <FaBrain />,
};

function PracticePaperClass5Maths() {
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

export default PracticePaperClass5Maths;

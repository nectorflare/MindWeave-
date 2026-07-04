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
  title: "Mind Weave International Mathematics Olympiad (MIMO) – 2026",
  classLabel: "VII",
  testType: "Mathematics Olympiad Practice Test",
  totalQuestions: 50,
  timeAllotted: "60 Minutes",
  maxMarks: 50,

  sections: [
    {
      id: "A",
      title: "Mathematics",
      range: "Q. 1 – 50",
      color: "blue",
      icon: "numbers",
      columns: 2,
      questions: [
        { no: 1, text: "(-18) + 25 =", options: ["5", "6", "7", "8"] },
        {
          no: 2,
          text: "(-12) × (-9) =",
          options: ["-108", "108", "96", "-96"],
        },
        {
          no: 3,
          text: "Which is the smallest integer?",
          options: ["-12", "-8", "0", "8"],
        },
        { no: 4, text: "(-72) ÷ 9 =", options: ["-8", "8", "-9", "9"] },
        { no: 5, text: "3/8 + 5/8 =", options: ["1", "7/8", "8/16", "9/8"] },
        {
          no: 6,
          text: "Reciprocal of -7/11 is",
          options: ["7/11", "-11/7", "11/7", "-7/11"],
        },
        {
          no: 7,
          text: "Which is a rational number?",
          options: ["√5", "π", "-13/17", "√3"],
        },
        { no: 8, text: "2.75 =", options: ["11/4", "7/2", "5/2", "9/4"] },
        { no: 9, text: "2⁵ =", options: ["16", "32", "64", "128"] },
        { no: 10, text: "10³ =", options: ["100", "1000", "10000", "100000"] },

        { no: 11, text: "(3²) × (3³) =", options: ["3⁵", "3⁶", "9⁵", "27²"] },
        { no: 12, text: "5⁰ =", options: ["0", "1", "5", "Undefined"] },
        {
          no: 13,
          text: "Simplify: 5x + 3x",
          options: ["8", "8x", "15x", "x²"],
        },
        {
          no: 14,
          text: "Solve: x + 15 = 39",
          options: ["22", "23", "24", "25"],
        },
        { no: 15, text: "If 4x = 48, x =", options: ["10", "11", "12", "13"] },

        {
          no: 16,
          text: "Value of 2a + 5 when a = 6",
          options: ["15", "16", "17", "18"],
        },
        { no: 17, text: "25% of 320 =", options: ["70", "75", "80", "85"] },
        {
          no: 18,
          text: "CP = ₹400, SP = ₹460. Profit =",
          options: ["₹40", "₹50", "₹60", "₹70"],
        },
        {
          no: 19,
          text: "SI on ₹2000 at 10% for 2 years =",
          options: ["₹200", "₹300", "₹400", "₹500"],
        },
        {
          no: 20,
          text: "Discount of 15% on ₹800 =",
          options: ["₹100", "₹110", "₹120", "₹140"],
        },

        {
          no: 21,
          text: "Sum of angles on a straight line =",
          options: ["90°", "180°", "270°", "360°"],
        },
        {
          no: 22,
          text: "Vertically opposite angles are always",
          options: ["Equal", "Complementary", "Unequal", "Supplementary"],
        },
        {
          no: 23,
          text: "A triangle has",
          options: ["2 sides", "3 sides", "4 sides", "5 sides"],
        },
        {
          no: 24,
          text: "Sum of angles of a triangle =",
          options: ["90°", "180°", "270°", "360°"],
        },
        {
          no: 25,
          text: "Perimeter of a square of side 9 cm =",
          options: ["18 cm", "27 cm", "36 cm", "81 cm"],
        },

        {
          no: 26,
          text: "Area of a rectangle 15 cm × 8 cm =",
          options: ["100 cm²", "110 cm²", "120 cm²", "130 cm²"],
        },
        {
          no: 27,
          text: "Area of a square of side 14 cm =",
          options: ["196 cm²", "182 cm²", "208 cm²", "224 cm²"],
        },
        {
          no: 28,
          text: "Mean of 8, 10, 12, 14 =",
          options: ["10", "11", "12", "13"],
        },
        {
          no: 29,
          text: "Median of 3, 5, 9, 11, 15 =",
          options: ["5", "7", "9", "11"],
        },
        {
          no: 30,
          text: "Mode of 4, 5, 5, 6, 7 =",
          options: ["4", "5", "6", "7"],
        },

        { no: 31, text: "3, 6, 12, 24, ?", options: ["36", "42", "48", "50"] },
        {
          no: 32,
          text: "Which number is different?",
          options: ["16", "25", "36", "45"],
        },
        {
          no: 33,
          text: "If CAT = 24, DOG = 26, then BAT =",
          options: ["21", "22", "23", "24"],
        },
        {
          no: 34,
          text: "Which is divisible by 9?",
          options: ["648", "652", "655", "658"],
        },
        {
          no: 35,
          text: "Find next: 2, 5, 10, 17, 26, ?",
          options: ["35", "36", "37", "38"],
        },

        {
          no: 36,
          text: "Which figure has four equal sides and four right angles?",
          options: ["Rectangle", "Rhombus", "Square", "Kite"],
        },
        {
          no: 37,
          text: "Which Venn diagram relation is correct?",
          options: [
            "Dogs ⊂ Animals",
            "Animals ⊂ Dogs",
            "Birds ⊂ Fish",
            "Squares ⊂ Triangles",
          ],
        },
        {
          no: 38,
          text: "A is taller than B. B is taller than C. Who is shortest?",
          options: ["A", "B", "C", "Cannot determine"],
        },
        {
          no: 39,
          text: "If TODAY is coded as UPEBZ, then BOOK is coded as",
          options: ["CPPL", "CQQL", "CPPM", "DQQL"],
        },
        {
          no: 40,
          text: "Which number completes the series: 1, 4, 9, 16, 25, ?",
          options: ["30", "35", "36", "49"],
        },

        {
          no: 41,
          text: "If (3/5) of a number is 72, the number is",
          options: ["100", "110", "120", "125"],
        },
        {
          no: 42,
          text: "A shopkeeper earns 20% profit after giving 10% discount. Result is",
          options: ["Original", "Greater", "Less", "Cannot say"],
        },
        {
          no: 43,
          text: "Solve: 3(x − 4) + 5 = 2x + 18",
          options: ["21", "23", "25", "27"],
        },
        {
          no: 44,
          text: "Complementary angles ratio 2:3, larger angle",
          options: ["36°", "48°", "54°", "60°"],
        },
        {
          no: 45,
          text: "Perimeter 64 cm, length 20 cm, area =",
          options: ["220 cm²", "240 cm²", "260 cm²", "280 cm²"],
        },

        {
          no: 46,
          text: "If a = -3, b = 5, a² + 2ab + b² =",
          options: ["2", "4", "8", "16"],
        },
        {
          no: 47,
          text: "Average of five consecutive even numbers is 26, largest",
          options: ["28", "30", "32", "34"],
        },
        {
          no: 48,
          text: "Remainder 3 when divided by 7, double number remainder",
          options: ["4", "5", "6", "0"],
        },
        {
          no: 49,
          text: "Expression divisible by 6",
          options: ["n(n+1)", "n(n+1)(n+2)", "n²+1", "2n+1"],
        },
        {
          no: 50,
          text: "Bells (12,18,24 min) next ring time",
          options: ["9:00", "9:12", "9:36", "10:00"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "C",
      "B",
      "A",
      "A",
      "A",
      "B",
      "C",
      "A",
      "B",
      "B",
      "A",
      "B",
      "B",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "B",
      "A",
      "B",
      "B",
      "C",
      "C",
      "A",
      "B",
      "C",
      "B",
      "C",
      "D",
      "B",
      "A",
      "C",
      "C",
      "A",
      "C",
      "A",
      "C",
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
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  numbers: <FaCalculator />,
};

function PracticePaperClass7Maths() {
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

export default PracticePaperClass7Maths;

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
  classLabel: "VI",
  testType: "Mathematics Practice Test",
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
      columns: 4,
      questions: [
        {
          no: 1,
          text: "Which is the greatest number?",
          options: ["5,67,890", "5,76,809", "5,78,690", "5,68,970"],
        },
        {
          no: 2,
          text: "HCF of 48 and 72 is",
          options: ["12", "18", "24", "36"],
        },
        {
          no: 3,
          text: "LCM of 15 and 20 is",
          options: ["40", "60", "80", "120"],
        },
        {
          no: 4,
          text: "Which is a prime number?",
          options: ["87", "91", "97", "99"],
        },
        {
          no: 5,
          text: "Smallest composite number is",
          options: ["1", "2", "3", "4"],
        },
        {
          no: 6,
          text: "The successor of –15 is",
          options: ["–16", "–14", "15", "14"],
        },
        { no: 7, text: "–18 + 25 =", options: ["5", "6", "7", "8"] },
        {
          no: 8,
          text: "3/5 + 7/10 =",
          options: ["11/10", "13/10", "14/10", "3/2"],
        },
        {
          no: 9,
          text: "5.72 – 2.89 =",
          options: ["2.73", "2.83", "2.93", "3.03"],
        },
        { no: 10, text: "2 : 5 = 18 : ?", options: ["40", "42", "45", "48"] },

        {
          no: 11,
          text: "Which number is divisible by both 8 and 9?",
          options: ["144", "136", "152", "168"],
        },
        {
          no: 12,
          text: "The product of two co-prime numbers is 221. One number is 13. The other is",
          options: ["15", "16", "17", "19"],
        },
        { no: 13, text: "–8 × –7 =", options: ["–56", "56", "64", "–64"] },
        {
          no: 14,
          text: "Which fraction is equivalent to 15/20?",
          options: ["2/3", "3/4", "4/5", "5/6"],
        },
        {
          no: 15,
          text: "0.375 as a fraction is",
          options: ["3/8", "5/8", "7/8", "1/8"],
        },
        {
          no: 16,
          text: "If x = 12, find x + 8.",
          options: ["18", "19", "20", "21"],
        },
        {
          no: 17,
          text: "Value of 3a when a = 15.",
          options: ["30", "40", "45", "50"],
        },
        {
          no: 18,
          text: "Which is an algebraic expression?",
          options: ["5 + 7", "4x + 3", "12", "15÷3"],
        },
        {
          no: 19,
          text: "A line has",
          options: [
            "one endpoint",
            "two endpoints",
            "no endpoints",
            "three endpoints",
          ],
        },
        {
          no: 20,
          text: "An angle measuring 90° is",
          options: ["acute", "right", "obtuse", "reflex"],
        },

        {
          no: 21,
          text: "Perimeter of rectangle 18 cm × 12 cm",
          options: ["50", "60", "72", "80"],
        },
        {
          no: 22,
          text: "Area of rectangle 18 cm × 12 cm",
          options: ["196", "204", "216", "224"],
        },
        {
          no: 23,
          text: "Area of square of side 15 cm",
          options: ["200", "210", "225", "250"],
        },
        {
          no: 24,
          text: "Volume of cube of side 8 cm",
          options: ["256", "384", "512", "640"],
        },
        {
          no: 25,
          text: "Two supplementary angles are",
          options: ["90°", "100°", "180°", "360°"],
        },
        {
          no: 26,
          text: "4x + 7 when x = 6",
          options: ["27", "29", "31", "33"],
        },
        {
          no: 27,
          text: "A ray has",
          options: [
            "no endpoint",
            "one endpoint",
            "two endpoints",
            "infinite endpoints",
          ],
        },
        {
          no: 28,
          text: "Opposite sides of a rectangle are",
          options: ["equal", "unequal", "curved", "slant"],
        },
        {
          no: 29,
          text: "Which is not a polygon?",
          options: ["Triangle", "Circle", "Pentagon", "Hexagon"],
        },
        {
          no: 30,
          text: "Number of diagonals in a rectangle",
          options: ["1", "2", "3", "4"],
        },

        {
          no: 31,
          text: "Which graph is best for comparing data?",
          options: ["Pie chart", "Bar graph", "Line", "Histogram"],
        },
        {
          no: 32,
          text: "Series: 3, 8, 15, 24, 35, ?",
          options: ["46", "47", "48", "49"],
        },
        {
          no: 33,
          text: "If CAT = DBU then BOOK =",
          options: ["CPPL", "CPPL", "CQQM", "CQQN"],
        },
        { no: 34, text: "Find odd one.", options: ["64", "81", "100", "90"] },
        {
          no: 35,
          text: "A is brother of B. B is sister of C. C is father of D. A is D's",
          options: ["Uncle", "Father", "Brother", "Grandfather"],
        },
        {
          no: 36,
          text: "Ravi walks 8 km North, then 6 km East. Direction?",
          options: ["North-East", "South-East", "North-West", "West"],
        },
        {
          no: 37,
          text: "Series: 2, 5, 11, 23, 47, ?",
          options: ["93", "94", "95", "96"],
        },
        {
          no: 38,
          text: "Which is different?",
          options: ["Cow", "Goat", "Tiger", "Buffalo"],
        },
        { no: 39, text: "7,14,28,56,?", options: ["84", "98", "112", "120"] },
        {
          no: 40,
          text: "Which is divisible by 11?",
          options: ["253", "264", "275", "286"],
        },

        {
          no: 41,
          text: "Least number leaving remainder 5 when divided by 6,8,15",
          options: ["115", "120", "125", "245"],
        },
        {
          no: 42,
          text: "25% increase then 20% decrease result",
          options: ["Original number", "Greater", "Less", "Cannot say"],
        },
        {
          no: 43,
          text: "4 pencils cost ₹36, 15 pencils cost",
          options: ["₹120", "₹125", "₹135", "₹140"],
        },
        {
          no: 44,
          text: "Cube volume 1728 cm³ edge sum",
          options: ["96 cm", "120 cm", "144 cm", "168 cm"],
        },
        {
          no: 45,
          text: "Sum of first 20 natural numbers",
          options: ["200", "210", "220", "230"],
        },
        {
          no: 46,
          text: "4, 9, 19, 39, 79, ?",
          options: ["149", "158", "159", "161"],
        },
        {
          no: 47,
          text: "Clock angle at 3:30",
          options: ["60°", "75°", "90°", "105°"],
        },
        {
          no: 48,
          text: "Product of 3 consecutive integers = 1320, largest?",
          options: ["10", "11", "12", "13"],
        },
        {
          no: 49,
          text: "x + 12 = 35, then 5x =",
          options: ["105", "110", "115", "120"],
        },
        {
          no: 50,
          text: "Balls problem minimum same colour",
          options: ["2", "3", "4", "5"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "C",
      "C",
      "B",
      "C",
      "D",
      "B",
      "C",
      "B",
      "B",
      "C",
      "A",
      "C",
      "B",
      "B",
      "A",
      "C",
      "C",
      "B",
      "C",
      "B",
      "B",
      "C",
      "C",
      "C",
      "C",
      "C",
      "B",
      "A",
      "B",
      "B",
      "B",
      "B",
      "A",
      "D",
      "A",
      "A",
      "C",
      "C",
      "C",
      "A",
      "C",
      "A",
      "C",
      "C",
      "B",
      "C",
      "B",
      "C",
      "C",
      "C",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  numbers: <FaCalculator />,
};

function PracticePaperClass6Maths() {
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

export default PracticePaperClass6Maths;

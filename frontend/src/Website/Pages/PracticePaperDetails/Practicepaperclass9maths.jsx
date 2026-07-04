import React from "react";
import "./PracticePaperDetails.css";
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
  classLabel: "IX",
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
          text: "The decimal expansion of 1/8 is:",
          options: ["0.125", "0.25", "0.625", "0.0125"],
        },
        { no: 2, text: "√64 is:", options: ["6", "7", "8", "9"] },
        {
          no: 3,
          text: "The degree of the polynomial 5x³−2x+1 is:",
          options: ["1", "2", "3", "4"],
        },
        {
          no: 4,
          text: "The value of x in x+5=12 is:",
          options: ["5", "6", "7", "8"],
        },
        {
          no: 5,
          text: "The coordinates of the origin are:",
          options: ["(1,0)", "(0,1)", "(0,0)", "(1,1)"],
        },
        {
          no: 6,
          text: "Two lines that never meet are called:",
          options: ["Intersecting", "Parallel", "Perpendicular", "Concurrent"],
        },
        {
          no: 7,
          text: "The sum of angles of a triangle is:",
          options: ["90°", "180°", "270°", "360°"],
        },
        {
          no: 8,
          text: "A quadrilateral with all sides equal is a:",
          options: ["Rectangle", "Parallelogram", "Rhombus", "Trapezium"],
        },
        {
          no: 9,
          text: "The radius of a circle is 7 cm. Its diameter is:",
          options: ["7 cm", "14 cm", "21 cm", "49 cm"],
        },
        {
          no: 10,
          text: "Heron's formula is used to find the:",
          options: ["Perimeter", "Area of triangle", "Volume", "Circumference"],
        },

        {
          no: 11,
          text: "The curved surface area of a cube is:",
          options: ["Not defined", "6a²", "4a²", "a³"],
        },
        {
          no: 12,
          text: "The mean of 2, 4, 6, 8 is:",
          options: ["4", "5", "6", "7"],
        },
        {
          no: 13,
          text: "Probability of getting a head on tossing a coin is:",
          options: ["0", "1", "1/2", "1/4"],
        },
        {
          no: 14,
          text: "The value of x²−9 at x=3 is:",
          options: ["0", "3", "6", "9"],
        },
        {
          no: 15,
          text: "Which of the following is an irrational number?",
          options: ["1/2", "0.75", "√2", "5"],
        },

        {
          no: 16,
          text: "The factorisation of x²−9 is:",
          options: ["(x−9)(x+1)", "(x−3)(x+3)", "(x−1)(x−9)", "(x+3)²"],
        },
        {
          no: 17,
          text: "The graph of x=2 is a:",
          options: ["Horizontal line", "Vertical line", "Curve", "Circle"],
        },
        {
          no: 18,
          text: "An angle greater than 90° but less than 180° is:",
          options: ["Acute", "Right", "Obtuse", "Reflex"],
        },
        {
          no: 19,
          text: "The sum of interior angles of a quadrilateral is:",
          options: ["180°", "270°", "360°", "540°"],
        },
        {
          no: 20,
          text: "A chord passing through the centre is called:",
          options: ["Radius", "Diameter", "Arc", "Sector"],
        },

        {
          no: 21,
          text: "The area of an equilateral triangle of side a is:",
          options: ["√3a²/4", "a²", "2a²", "a²/2"],
        },
        {
          no: 22,
          text: "The total surface area of a cube of side a is:",
          options: ["4a²", "6a²", "a³", "2a²"],
        },
        {
          no: 23,
          text: "The median of 3, 5, 7, 9, 11 is:",
          options: ["5", "7", "8", "9"],
        },
        {
          no: 24,
          text: "The probability of an impossible event is:",
          options: ["0", "1", "1/2", "2"],
        },
        {
          no: 25,
          text: "The value of (−3)² is:",
          options: ["−9", "9", "6", "−6"],
        },

        {
          no: 26,
          text: "A polynomial of degree one is called:",
          options: [
            "Linear polynomial",
            "Quadratic polynomial",
            "Cubic polynomial",
            "Constant polynomial",
          ],
        },
        {
          no: 27,
          text: "The equation x+y=5 represents a:",
          options: ["Circle", "Parabola", "Straight line", "Hyperbola"],
        },
        {
          no: 28,
          text: "If one angle of a triangle is 90°, the triangle is:",
          options: ["Obtuse", "Acute", "Right-angled", "Equilateral"],
        },
        {
          no: 29,
          text: "A parallelogram has opposite sides:",
          options: ["Unequal", "Equal and parallel", "Perpendicular", "None"],
        },
        {
          no: 30,
          text: "The circumference of a circle of radius r is:",
          options: ["πr²", "2πr", "πr", "2r"],
        },

        {
          no: 31,
          text: "The area of a triangle with base 10 cm and height 8 cm is:",
          options: ["40 cm²", "80 cm²", "20 cm²", "18 cm²"],
        },
        {
          no: 32,
          text: "The mode of 1,2,2,3,4 is:",
          options: ["1", "2", "3", "4"],
        },
        {
          no: 33,
          text: "A die is thrown once. Probability of getting 6 is:",
          options: ["1/2", "1/3", "1/6", "1"],
        },
        {
          no: 34,
          text: "Which of the following is a natural number?",
          options: ["−2", "0", "3", "1/2"],
        },
        {
          no: 35,
          text: "The value of x in 2x=18 is:",
          options: ["6", "7", "8", "9"],
        },

        {
          no: 36,
          text: "The polynomial x²+5x+6 has degree:",
          options: ["1", "2", "3", "4"],
        },
        {
          no: 37,
          text: "The point (3,−2) lies in:",
          options: ["I quadrant", "II quadrant", "III quadrant", "IV quadrant"],
        },
        {
          no: 38,
          text: "The supplement of 60° is:",
          options: ["30°", "60°", "120°", "300°"],
        },
        {
          no: 39,
          text: "The diagonals of a rectangle are:",
          options: ["Unequal", "Equal", "Perpendicular", "Parallel"],
        },
        {
          no: 40,
          text: "The longest chord of a circle is the:",
          options: ["Radius", "Arc", "Diameter", "Sector"],
        },

        {
          no: 41,
          text: "The perimeter of a triangle with sides 3,4,5 is:",
          options: ["10", "11", "12", "13"],
        },
        {
          no: 42,
          text: "The volume of a cube of side 3 cm is:",
          options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        },
        {
          no: 43,
          text: "The arithmetic mean of 4 and 10 is:",
          options: ["6", "7", "8", "9"],
        },
        {
          no: 44,
          text: "The probability of a sure event is:",
          options: ["0", "1", "1/2", "2"],
        },
        {
          no: 45,
          text: "The additive identity of integers is:",
          options: ["1", "−1", "0", "10"],
        },

        {
          no: 46,
          text: "Which of the following is not a polynomial?",
          options: ["x²+1", "3x−2", "1/x", "5"],
        },
        {
          no: 47,
          text: "Two lines intersecting at right angles are:",
          options: ["Parallel", "Concurrent", "Perpendicular", "Skew"],
        },
        {
          no: 48,
          text: "The sum of angles around a point is:",
          options: ["90°", "180°", "270°", "360°"],
        },
        {
          no: 49,
          text: "The radius is half of the:",
          options: ["Arc", "Diameter", "Chord", "Sector"],
        },
        {
          no: 50,
          text: "The median of 2,4,6,8 is:",
          options: ["4", "5", "6", "7"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "A",
      "C",
      "C",
      "C",
      "C",
      "B",
      "B",
      "C",
      "B",
      "B",
      "A",
      "B",
      "C",
      "A",
      "C",
      "B",
      "B",
      "C",
      "C",
      "B",
      "A",
      "B",
      "B",
      "A",
      "B",
      "A",
      "C",
      "C",
      "B",
      "B",
      "A",
      "B",
      "C",
      "C",
      "D",
      "B",
      "D",
      "C",
      "B",
      "C",
      "C",
      "C",
      "B",
      "B",
      "C",
      "C",
      "C",
      "D",
      "B",
      "B",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  math: <FaCalculator />,
};

function PracticePaperClass9Maths() {
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

export default PracticePaperClass9Maths;

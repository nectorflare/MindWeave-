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
  classLabel: "X",
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
      columns: 1,

      questions: [
        {
          no: 1,
          text: "The HCF of 96 and 404 is:",
          options: ["4", "8", "12", "16"],
        },
        {
          no: 2,
          text: "If the zeroes of x²−5x+6 are α and β, then α+β equals:",
          options: ["5", "6", "–5", "–6"],
        },
        {
          no: 3,
          text: "The pair of equations 2x+y=5 and 4x+2y=10 has:",
          options: [
            "Unique solution",
            "No solution",
            "Infinitely many solutions",
            "Exactly two solutions",
          ],
        },
        {
          no: 4,
          text: "The roots of x²−7x+10=0 are:",
          options: ["2,5", "–2,–5", "1,10", "3,4"],
        },
        {
          no: 5,
          text: "The 15th term of the AP 3, 7, 11,… is:",
          options: ["55", "57", "59", "61"],
        },
        {
          no: 6,
          text: "The decimal expansion of 7/125 is:",
          options: ["0.056", "0.56", "0.0056", "5.6"],
        },
        {
          no: 7,
          text: "If the zeroes of x²−8x+15 are α and β, then αβ is:",
          options: ["8", "15", "–15", "–8"],
        },
        {
          no: 8,
          text: "The distance between (0,0) and (3,4) is:",
          options: ["4", "5", "6", "7"],
        },
        {
          no: 9,
          text: "If tan θ = 1, then θ is:",
          options: ["30°", "45°", "60°", "90°"],
        },
        {
          no: 10,
          text: "The coordinates of the midpoint of (2,3) and (6,7) are:",
          options: ["(4,5)", "(3,4)", "(5,4)", "(2,5)"],
        },

        {
          no: 11,
          text: "A tangent to a circle is:",
          options: [
            "A secant",
            "A chord",
            "A line touching at one point",
            "A diameter",
          ],
        },
        {
          no: 12,
          text: "The area of a circle of radius 7 cm is:",
          options: ["49π cm²", "14π cm²", "154 cm²", "308 cm²"],
        },
        {
          no: 13,
          text: "The volume of a cube of side 5 cm is:",
          options: ["25 cm³", "75 cm³", "125 cm³", "150 cm³"],
        },
        {
          no: 14,
          text: "The median of 2, 5, 7, 9, 10 is:",
          options: ["7", "6", "8", "9"],
        },
        {
          no: 15,
          text: "A coin is tossed once. Probability of getting a head is:",
          options: ["0", "1", "1/2", "1/4"],
        },

        {
          no: 16,
          text: "The LCM of 12 and 18 is:",
          options: ["24", "36", "48", "72"],
        },
        {
          no: 17,
          text: "If one zero of x²−6x+k is 2, then k equals:",
          options: ["6", "8", "10", "12"],
        },
        {
          no: 18,
          text: "The system x+y=4 and x−y=2 has solution:",
          options: ["(1,3)", "(3,1)", "(2,2)", "(4,0)"],
        },
        {
          no: 19,
          text: "The discriminant of x²−4x+4 is:",
          options: ["16", "0", "8", "–8"],
        },
        {
          no: 20,
          text: "The sum of first 10 natural numbers is:",
          options: ["45", "50", "55", "60"],
        },

        {
          no: 21,
          text: "The nth term of AP 5,8,11,… is:",
          options: ["3n+2", "3n+5", "5n+3", "2n+3"],
        },
        {
          no: 22,
          text: "The point (–3,4) lies in:",
          options: ["I quadrant", "II quadrant", "III quadrant", "IV quadrant"],
        },
        { no: 23, text: "sin 30° equals:", options: ["1", "1/2", "√3/2", "0"] },
        { no: 24, text: "cos 60° equals:", options: ["1/2", "√3/2", "1", "0"] },
        {
          no: 25,
          text: "The length of tangent drawn from an external point to a circle are:",
          options: ["Unequal", "Equal", "Twice the radius", "Zero"],
        },

        {
          no: 26,
          text: "Circumference of a circle of radius r is:",
          options: ["πr²", "2πr", "πd²", "r²"],
        },
        {
          no: 27,
          text: "Total surface area of a sphere of radius r is:",
          options: ["4πr²", "2πr²", "πr²", "4/3πr³"],
        },
        {
          no: 28,
          text: "Mode of the data 2,3,4,4,4,5,6 is:",
          options: ["2", "3", "4", "5"],
        },
        {
          no: 29,
          text: "A die is thrown once. Probability of getting an even number is:",
          options: ["1/2", "1/3", "2/3", "1/6"],
        },
        {
          no: 30,
          text: "The HCF of two coprime numbers is:",
          options: ["0", "1", "2", "Their product"],
        },

        {
          no: 31,
          text: "The graph of a linear equation in two variables is a:",
          options: ["Curve", "Circle", "Straight line", "Parabola"],
        },
        {
          no: 32,
          text: "The roots of x²+1=0 are:",
          options: [
            "Real and equal",
            "Real and distinct",
            "No real roots",
            "One real root",
          ],
        },
        {
          no: 33,
          text: "If a=2 and d=3 in an AP, then a₅ is:",
          options: ["11", "12", "14", "15"],
        },
        {
          no: 34,
          text: "The distance between (1,2) and (1,8) is:",
          options: ["5", "6", "7", "8"],
        },
        { no: 35, text: "tan 45° is:", options: ["0", "1", "√3", "Undefined"] },

        {
          no: 36,
          text: "The angle subtended by a diameter at the circumference is:",
          options: ["45°", "60°", "90°", "180°"],
        },
        {
          no: 37,
          text: "Area of a sector of angle θ in a circle of radius r is:",
          options: ["θ/360 × πr²", "2πr", "πr²", "θπr"],
        },
        {
          no: 38,
          text: "The curved surface area of a cylinder is:",
          options: ["2πr²", "πr²h", "2πrh", "πrh"],
        },
        {
          no: 39,
          text: "The arithmetic mean of 5,7,9 is:",
          options: ["6", "7", "8", "9"],
        },
        {
          no: 40,
          text: "Probability of an impossible event is:",
          options: ["0", "1", "1/2", "–1"],
        },

        {
          no: 41,
          text: "The product of the zeroes of 2x²−3x+5 is:",
          options: ["–5/2", "5/2", "3/2", "–3/2"],
        },
        {
          no: 42,
          text: "The pair x+y=2 and 2x+2y=5 is:",
          options: ["Consistent", "Inconsistent", "Dependent", "Identical"],
        },
        {
          no: 43,
          text: "The roots of x²−9=0 are:",
          options: ["±9", "±3", "3 only", "–3 only"],
        },
        {
          no: 44,
          text: "The common difference of AP 11,8,5,2,… is:",
          options: ["3", "–3", "–2", "2"],
        },
        {
          no: 45,
          text: "The coordinates of the origin are:",
          options: ["(1,0)", "(0,1)", "(0,0)", "(1,1)"],
        },

        { no: 46, text: "sec 60° equals:", options: ["1", "2", "√3", "1/2"] },
        {
          no: 47,
          text: "A tangent is perpendicular to the radius at the:",
          options: ["Centre", "Diameter", "Point of contact", "Chord"],
        },
        {
          no: 48,
          text: "Volume of a cone is:",
          options: ["πr²h", "1/3 πr²h", "2πrh", "4/3 πr³"],
        },
        {
          no: 49,
          text: "The median of 3,4,5,6 is:",
          options: ["4", "4.5", "5", "5.5"],
        },
        {
          no: 50,
          text: "A card is drawn from a pack of 52 cards. Probability of getting a king is:",
          options: ["1/13", "1/4", "4/13", "1/52"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "A",
      "A",
      "C",
      "A",
      "C",
      "A",
      "B",
      "B",
      "B",
      "A",
      "C",
      "A",
      "C",
      "A",
      "C",
      "B",
      "B",
      "B",
      "B",
      "C",
      "A",
      "B",
      "B",
      "A",
      "B",
      "B",
      "A",
      "C",
      "A",
      "B",
      "C",
      "C",
      "C",
      "B",
      "B",
      "C",
      "A",
      "C",
      "B",
      "A",
      "B",
      "B",
      "B",
      "B",
      "C",
      "B",
      "C",
      "B",
      "B",
      "A",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  math: <FaCalculator />,
};

function PracticePaperClass10Maths() {
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

export default PracticePaperClass10Maths;

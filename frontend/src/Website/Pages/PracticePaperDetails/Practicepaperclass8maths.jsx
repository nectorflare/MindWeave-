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
  classLabel: "VIII",
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
        {
          no: 1,
          text: "Which of the following is a rational number?",
          options: ["√2", "π", "-7/9", "√5"],
        },
        {
          no: 2,
          text: "(-5/6) + (1/3) =",
          options: ["-1/2", "-7/6", "-1/3", "-5/3"],
        },
        {
          no: 3,
          text: "Reciprocal of -8/15 is",
          options: ["15/8", "-15/8", "-8/15", "8/15"],
        },
        {
          no: 4,
          text: "(-4/7) × (21/8) =",
          options: ["-3/2", "3/2", "-2", "2"],
        },
        { no: 5, text: "Solve: 4x + 7 = 35", options: ["6", "7", "8", "9"] },
        {
          no: 6,
          text: "If 3x – 8 = 19, then x =",
          options: ["7", "8", "9", "10"],
        },
        {
          no: 7,
          text: "The solution of x/5 = 9 is",
          options: ["40", "45", "50", "55"],
        },
        {
          no: 8,
          text: "If 5(x – 3)=40, x=",
          options: ["10", "11", "12", "13"],
        },
        {
          no: 9,
          text: "Sum of interior angles of a quadrilateral is",
          options: ["180°", "270°", "360°", "540°"],
        },
        {
          no: 10,
          text: "Opposite sides of a parallelogram are",
          options: ["Equal", "Unequal", "Perpendicular", "Curved"],
        },

        {
          no: 11,
          text: "Every square is a",
          options: ["Rhombus", "Rectangle", "Parallelogram", "All of these"],
        },
        {
          no: 12,
          text: "Number of diagonals in a quadrilateral",
          options: ["1", "2", "3", "4"],
        },
        { no: 13, text: "√1225 =", options: ["30", "35", "40", "45"] },
        {
          no: 14,
          text: "Cube root of 1728 is",
          options: ["10", "11", "12", "13"],
        },
        { no: 15, text: "√0.81=", options: ["0.09", "0.9", "9", "0.81"] },
        {
          no: 16,
          text: "Cube of 21=",
          options: ["9261", "9321", "9241", "9312"],
        },
        {
          no: 17,
          text: "Profit%=25%, Cost Price=₹400. Selling Price=",
          options: ["₹450", "₹500", "₹520", "₹550"],
        },
        {
          no: 18,
          text: "Simple Interest on ₹5000 at 8% for 2 years=",
          options: ["₹700", "₹800", "₹900", "₹1000"],
        },
        {
          no: 19,
          text: "Discount of 20% on ₹900=",
          options: ["₹180", "₹200", "₹160", "₹220"],
        },
        {
          no: 20,
          text: "GST at 18% on ₹500=",
          options: ["₹80", "₹85", "₹90", "₹95"],
        },

        {
          no: 21,
          text: "If 5 pens cost ₹100, then 8 pens cost",
          options: ["₹150", "₹160", "₹170", "₹180"],
        },
        {
          no: 22,
          text: "12 workers finish a job in 15 days. 20 workers need",
          options: ["8 days", "9 days", "10 days", "12 days"],
        },
        {
          no: 23,
          text: "(a+b)²=",
          options: ["a²+b²", "a²+2ab+b²", "a²-ab+b²", "a²+3ab+b²"],
        },
        {
          no: 24,
          text: "(x−y)(x+y)=",
          options: ["x²+y²", "x²−y²", "x²−2xy+y²", "x²+2xy+y²"],
        },
        {
          no: 25,
          text: "Value of x²−9 when x=5",
          options: ["14", "16", "18", "20"],
        },
        {
          no: 26,
          text: "Area of rectangle 12 cm × 9 cm=",
          options: ["96", "108", "120", "132"],
        },
        {
          no: 27,
          text: "Circumference of a circle of radius 7 cm=",
          options: ["22 cm", "44 cm", "49 cm", "154 cm"],
        },
        {
          no: 28,
          text: "Volume of cube of side 5 cm=",
          options: ["100", "125", "150", "175"],
        },
        { no: 29, text: "Mean of 4,6,8,10=", options: ["6", "7", "8", "9"] },
        {
          no: 30,
          text: "Median of 3,5,8,11,15=",
          options: ["5", "8", "11", "15"],
        },

        {
          no: 31,
          text: "Bar graphs are mainly used to",
          options: [
            "Compare data",
            "Measure length",
            "Solve equations",
            "Draw circles",
          ],
        },
        { no: 32, text: "2,6,12,20,30,?", options: ["40", "42", "44", "46"] },
        {
          no: 33,
          text: "Which number is odd one out?",
          options: ["4", "9", "16", "24"],
        },
        {
          no: 34,
          text: "If CAT=24, DOG=26 then BAT=",
          options: ["22", "23", "24", "25"],
        },
        {
          no: 35,
          text: "Find next: 1,4,9,16,25,?",
          options: ["30", "35", "36", "49"],
        },
        {
          no: 36,
          text: "Which figure has maximum lines of symmetry?",
          options: ["Rectangle", "Square", "Rhombus", "Parallelogram"],
        },
        {
          no: 37,
          text: "Which is divisible by 9?",
          options: ["567", "568", "569", "570"],
        },
        {
          no: 38,
          text: "If 5★4=45, then 6★7=",
          options: ["67", "72", "84", "91"],
        },
        {
          no: 39,
          text: "Find missing: 7,14,28,56,?",
          options: ["84", "98", "112", "120"],
        },
        { no: 40, text: "Which is prime?", options: ["57", "69", "73", "91"] },

        {
          no: 41,
          text: "If (x−3)²=49, x=",
          options: ["10 only", "-4 only", "10 or -4", "7"],
        },
        {
          no: 42,
          text: "A shopkeeper marks +25% and gives 20% discount. Profit%",
          options: ["0%", "2%", "4%", "5%"],
        },
        {
          no: 43,
          text: "Ratio 2:3:5 sum 120. Largest number?",
          options: ["50", "60", "70", "80"],
        },
        {
          no: 44,
          text: "If x²+y²=50 and xy=24, then (x+y)=",
          options: ["7", "8", "9", "10"],
        },
        {
          no: 45,
          text: "Area of square equals 18×8 rectangle. Side =",
          options: ["10 cm", "12 cm", "√144 cm", "14 cm"],
        },
        {
          no: 46,
          text: "Train crosses 300 m bridge at 20 m/s in 30 s. Length?",
          options: ["200 m", "250 m", "300 m", "350 m"],
        },
        {
          no: 47,
          text: "Cube root of 110592=",
          options: ["46", "47", "48", "49"],
        },
        {
          no: 48,
          text: "Correct identity",
          options: [
            "(a+b)²=a²+b²",
            "(a−b)²=a²−2ab+b²",
            "(a+b)(a−b)=a²+b²",
            "(a+b)³=a³+b³",
          ],
        },
        {
          no: 49,
          text: "Remainder 5 when divided by 8. Square remainder?",
          options: ["1", "3", "5", "7"],
        },
        {
          no: 50,
          text: "Quadrilateral with equal diagonals, bisecting at right angles is",
          options: ["Rhombus", "Rectangle", "Square", "Kite"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "C",
      "B",
      "B",
      "A",
      "B",
      "C",
      "B",
      "B",
      "C",
      "A",
      "D",
      "B",
      "B",
      "C",
      "B",
      "A",
      "B",
      "B",
      "A",
      "C",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "D",
      "B",
      "B",
      "C",
      "B",
      "A",
      "B",
      "C",
      "C",
      "C",
      "A",
      "B",
      "D",
      "C",
      "A",
      "C",
      "B",
      "A",
      "C",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  numbers: <FaCalculator />,
};

function PracticePaperClass8Maths() {
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

export default PracticePaperClass8Maths;

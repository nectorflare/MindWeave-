import React from "react";
import "./PracticePaperDetails.css"; // same design, koi nayi CSS nahi
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  FaTrophy,
  FaClipboardList,
  FaClock,
  FaStar,
  FaFlask,
} from "react-icons/fa";

const paperData = {
  title: "Mind Weave International Science Olympiad (MISO) – 2026",
  classLabel: "VI",
  testType: "Science Olympiad Practice Test",
  totalQuestions: 50,
  timeAllotted: "60 Minutes",
  maxMarks: 50,

  sections: [
    {
      id: "A",
      title: "Science",
      range: "Q. 1 – 50",
      color: "green",
      icon: "science",
      columns: 2,
      questions: [
        {
          no: 1,
          text: "Which nutrient is called the body's main source of energy?",
          options: ["Proteins", "Carbohydrates", "Vitamins", "Minerals"],
        },
        {
          no: 2,
          text: "Deficiency of vitamin C causes",
          options: ["Rickets", "Scurvy", "Night blindness", "Anaemia"],
        },
        {
          no: 3,
          text: "The point where two bones meet is called a",
          options: ["Muscle", "Joint", "Ligament", "Tendon"],
        },
        {
          no: 4,
          text: "Which type of joint allows movement in all directions?",
          options: [
            "Hinge joint",
            "Ball-and-socket joint",
            "Pivot joint",
            "Fixed joint",
          ],
        },
        {
          no: 5,
          text: "Which plant part prepares food?",
          options: ["Root", "Stem", "Leaf", "Flower"],
        },
        {
          no: 6,
          text: "Plants lose excess water through",
          options: [
            "Photosynthesis",
            "Respiration",
            "Transpiration",
            "Germination",
          ],
        },
        {
          no: 7,
          text: "Which of the following is an adaptation found in desert plants?",
          options: [
            "Broad leaves",
            "Thick, fleshy stem",
            "Large flowers",
            "Thin bark",
          ],
        },
        {
          no: 8,
          text: "Which of the following is NOT a living organism?",
          options: ["Mushroom", "Bacteria", "Virus", "Rock"],
        },
        {
          no: 9,
          text: "Which nutrient is mainly needed for body growth and repair?",
          options: ["Fats", "Proteins", "Carbohydrates", "Water"],
        },
        {
          no: 10,
          text: "Why do cactus leaves become spines?",
          options: [
            "To prepare more food",
            "To reduce water loss",
            "To absorb water",
            "To attract insects",
          ],
        },

        {
          no: 11,
          text: "A child eats only polished rice for several months. Which deficiency disease is most likely?",
          options: ["Beriberi", "Scurvy", "Rickets", "Goitre"],
        },
        {
          no: 12,
          text: "A plant kept in a dark room turns yellow mainly due to",
          options: [
            "Too much oxygen",
            "Lack of sunlight for photosynthesis",
            "Excess minerals",
            "Lack of water",
          ],
        },
        {
          no: 13,
          text: "Instrument used to measure curved length",
          options: [
            "Scale",
            "Measuring tape",
            "Thread and ruler",
            "Vernier caliper",
          ],
        },
        {
          no: 14,
          text: "SI unit of length",
          options: ["Centimetre", "Metre", "Kilometre", "Millimetre"],
        },
        {
          no: 15,
          text: "Conductor of electricity",
          options: ["Plastic", "Wood", "Copper", "Rubber"],
        },

        {
          no: 16,
          text: "Switch in a circuit is used to",
          options: [
            "Increase current",
            "Complete or break circuit",
            "Produce electricity",
            "Store electricity",
          ],
        },
        {
          no: 17,
          text: "A magnet attracts",
          options: ["Aluminium", "Plastic", "Iron", "Glass"],
        },
        {
          no: 18,
          text: "Image formed by a plane mirror is",
          options: ["Real", "Inverted", "Virtual and erect", "Magnified"],
        },
        {
          no: 19,
          text: "Light travels in",
          options: [
            "Curved lines",
            "Zigzag paths",
            "Straight lines",
            "Circular paths",
          ],
        },
        {
          no: 20,
          text: "Which object casts the darkest shadow?",
          options: [
            "Transparent glass",
            "Clear water",
            "Opaque cardboard",
            "Air",
          ],
        },

        {
          no: 21,
          text: "Which material is magnetic?",
          options: [
            "Iron nail",
            "Plastic spoon",
            "Wooden block",
            "Glass marble",
          ],
        },
        {
          no: 22,
          text: "A compass needle points towards",
          options: ["East", "West", "North–South direction", "South-East"],
        },
        {
          no: 23,
          text: "Steel pin moves toward magnet because",
          options: [
            "Gravity increases",
            "Magnetic force acts at a distance",
            "Air pushes pin",
            "Electricity flows",
          ],
        },
        {
          no: 24,
          text: "First check if torch bulb does not glow",
          options: [
            "Wire colour",
            "Circuit complete or not",
            "Battery shape",
            "Wire length",
          ],
        },
        {
          no: 25,
          text: "Plane mirror image moves when object is moved",
          options: ["10 cm", "20 cm", "Remains fixed", "Disappears"],
        },

        {
          no: 26,
          text: "Sand from water is separated by",
          options: ["Evaporation", "Filtration", "Distillation", "Churning"],
        },
        {
          no: 27,
          text: "Common salt from seawater is obtained by",
          options: ["Sieving", "Sedimentation", "Evaporation", "Winnowing"],
        },
        {
          no: 28,
          text: "Melting butter is a",
          options: [
            "Reversible change",
            "Irreversible change",
            "Chemical change",
            "Permanent change",
          ],
        },
        {
          no: 29,
          text: "Most abundant gas in air",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        },
        {
          no: 30,
          text: "Gas needed for breathing",
          options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Neon"],
        },

        {
          no: 31,
          text: "Removal of insoluble impurities from water",
          options: ["Condensation", "Filtration", "Evaporation", "Sublimation"],
        },
        {
          no: 32,
          text: "Chemical change example",
          options: [
            "Breaking glass",
            "Freezing water",
            "Burning wood",
            "Tearing cloth",
          ],
        },
        {
          no: 33,
          text: "Water vapour → liquid is",
          options: ["Evaporation", "Condensation", "Freezing", "Sublimation"],
        },
        {
          no: 34,
          text: "Correct separation sequence of iron, sand, salt",
          options: [
            "Magnet → Dissolve → Filter → Evaporate",
            "Filter → Magnet → Evaporate",
            "Evaporate → Magnet → Filter",
            "Dissolve → Magnet → Freeze",
          ],
        },
        {
          no: 35,
          text: "Boiling water is effective because it",
          options: [
            "Removes salts",
            "Kills microorganisms",
            "Removes mud",
            "Adds oxygen",
          ],
        },

        {
          no: 36,
          text: "Wind helps drying clothes because",
          options: [
            "Cooling",
            "Faster evaporation",
            "Heavier water",
            "Brighter sunlight",
          ],
        },
        {
          no: 37,
          text: "Saturated solution means",
          options: ["Dilute", "Unsaturated", "Saturated", "Insoluble"],
        },
        {
          no: 38,
          text: "Vegetable peels should go in",
          options: ["Blue bin", "Green bin", "Red bin", "Black bin"],
        },
        {
          no: 39,
          text: "Biodegradable waste is",
          options: ["Plastic bottle", "Glass", "Banana peel", "Aluminium can"],
        },
        {
          no: 40,
          text: "Three Rs stand for",
          options: [
            "Read, Revise, Repeat",
            "Reduce, Reuse, Recycle",
            "Repair, Remove, Return",
            "Recover, Replace, Reduce",
          ],
        },

        {
          no: 41,
          text: "Water conservation method",
          options: [
            "Open taps",
            "Repair leaks",
            "Wash cars daily",
            "Throw waste in rivers",
          ],
        },
        {
          no: 42,
          text: "Highest collected recyclable waste",
          options: ["Plastic", "Metal", "Paper", "Glass"],
        },
        {
          no: 43,
          text: "Best conservation practice",
          options: [
            "Burn leaves",
            "Recycle paper",
            "Waste electricity",
            "Use plastic",
          ],
        },
        {
          no: 44,
          text: "Experiment control variable",
          options: [
            "Fertilizer amount",
            "Type of plant",
            "Plant height",
            "Leaves number",
          ],
        },
        {
          no: 45,
          text: "Shortest shadow at noon because",
          options: [
            "Sun highest",
            "Stick smaller",
            "Earth stops",
            "Light weaker",
          ],
        },

        {
          no: 46,
          text: "Air occupies space because",
          options: [
            "Balloon expands",
            "Rocks fall",
            "Water flows",
            "Air invisible",
          ],
        },
        {
          no: 47,
          text: "Magnets attract iron because",
          options: [
            "Gravity",
            "Iron is magnetic",
            "Air pressure",
            "Electricity",
          ],
        },
        {
          no: 48,
          text: "Plant experiment conclusion",
          options: [
            "Water is essential",
            "Sun harmful",
            "Soil unnecessary",
            "Water reduces growth",
          ],
        },
        {
          no: 49,
          text: "Floating depends on",
          options: ["Weight", "Density", "Colour", "Shape"],
        },
        {
          no: 50,
          text: "Groundwater decreases due to",
          options: [
            "Tree cutting",
            "Rain increase",
            "Better drainage",
            "Rivers drying",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "B",
      "B",
      "B",
      "B",
      "C",
      "C",
      "B",
      "D",
      "B",
      "B",
      "A",
      "B",
      "C",
      "B",
      "C",
      "B",
      "C",
      "C",
      "C",
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
      "B",
      "C",
      "B",
      "A",
      "B",
      "B",
      "C",
      "B",
      "C",
      "B",
      "B",
      "B",
      "B",
      "B",
      "A",
      "A",
      "A",
      "B",
      "B",
      "A",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  science: <FaFlask />,
};

function PracticePaperClass6Science() {
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

export default PracticePaperClass6Science;

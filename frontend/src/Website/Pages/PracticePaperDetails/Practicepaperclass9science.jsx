import React from "react";
import "./PracticePaperDetails.css";
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
  classLabel: "IX",
  testType: "Science Olympiad Test",
  totalQuestions: 50,
  timeAllotted: "90 Minutes",
  maxMarks: 100,

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
          text: "The SI unit of force is:",
          options: ["Joule", "Newton", "Pascal", "Watt"],
        },
        {
          no: 2,
          text: "Which cell organelle is called the powerhouse of the cell?",
          options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi body"],
        },
        {
          no: 3,
          text: "The atomic number of carbon is:",
          options: ["6", "12", "14", "8"],
        },
        {
          no: 4,
          text: "Which of the following is a homogeneous mixture?",
          options: ["Milk", "Soil", "Air", "Smoke"],
        },
        {
          no: 5,
          text: "The acceleration due to gravity on Earth is approximately:",
          options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
        },

        {
          no: 6,
          text: "The basic unit of life is:",
          options: ["Tissue", "Organ", "Cell", "Organism"],
        },
        {
          no: 7,
          text: "Which among the following is a vector quantity?",
          options: ["Speed", "Distance", "Mass", "Velocity"],
        },
        {
          no: 8,
          text: "The process of conversion of liquid into gas is called:",
          options: ["Condensation", "Sublimation", "Vaporisation", "Fusion"],
        },
        {
          no: 9,
          text: "Which tissue transports water in plants?",
          options: ["Phloem", "Xylem", "Meristem", "Epidermis"],
        },
        {
          no: 10,
          text: "The force responsible for keeping planets in their orbits is:",
          options: [
            "Magnetic force",
            "Frictional force",
            "Gravitational force",
            "Muscular force",
          ],
        },

        {
          no: 11,
          text: "Which gas is evolved when zinc reacts with dilute HCl?",
          options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
        },
        {
          no: 12,
          text: "One kilowatt-hour is equal to:",
          options: ["3.6 × 10⁶ J", "3.6 × 10⁵ J", "3600 J", "36 J"],
        },
        {
          no: 13,
          text: "The outermost shell of sodium contains:",
          options: ["1 electron", "2 electrons", "7 electrons", "8 electrons"],
        },
        {
          no: 14,
          text: "Which kingdom includes bacteria?",
          options: ["Protista", "Fungi", "Monera", "Plantae"],
        },
        {
          no: 15,
          text: "The loudness of sound depends on:",
          options: ["Frequency", "Amplitude", "Speed", "Pitch"],
        },

        {
          no: 16,
          text: "A body moving with uniform velocity has:",
          options: [
            "Zero acceleration",
            "Constant acceleration",
            "Increasing acceleration",
            "Decreasing acceleration",
          ],
        },
        {
          no: 17,
          text: "Which organelle contains genetic material?",
          options: ["Vacuole", "Nucleus", "Ribosome", "Lysosome"],
        },
        {
          no: 18,
          text: "The number of protons in magnesium is:",
          options: ["10", "12", "14", "24"],
        },
        {
          no: 19,
          text: "Which of the following is a colloid?",
          options: [
            "Salt solution",
            "Sugar solution",
            "Starch solution",
            "Copper sulphate solution",
          ],
        },
        {
          no: 20,
          text: "The S.I. unit of momentum is:",
          options: ["kg m/s", "N/m", "J/s", "kg/m"],
        },

        {
          no: 21,
          text: "The tissue responsible for growth in plants is:",
          options: ["Meristematic tissue", "Xylem", "Phloem", "Epidermis"],
        },
        {
          no: 22,
          text: "Which law explains action and reaction?",
          options: [
            "First law",
            "Second law",
            "Third law",
            "Universal law of gravitation",
          ],
        },
        {
          no: 23,
          text: "Which among these is a pure substance?",
          options: ["Brass", "Air", "Water", "Milk"],
        },
        {
          no: 24,
          text: "The energy possessed by a body due to motion is:",
          options: [
            "Heat energy",
            "Potential energy",
            "Kinetic energy",
            "Chemical energy",
          ],
        },
        {
          no: 25,
          text: "Amoeba moves with the help of:",
          options: ["Cilia", "Flagella", "Pseudopodia", "Tentacles"],
        },

        {
          no: 26,
          text: "The atomic mass of oxygen is approximately:",
          options: ["8 u", "12 u", "14 u", "16 u"],
        },
        {
          no: 27,
          text: "Which of the following is not a characteristic of sound waves?",
          options: ["Frequency", "Wavelength", "Amplitude", "Colour"],
        },
        {
          no: 28,
          text: "Which category of organisms prepares its own food?",
          options: ["Consumers", "Producers", "Decomposers", "Parasites"],
        },
        {
          no: 29,
          text: "The weight of an object is maximum on:",
          options: ["Moon", "Jupiter", "Mars", "Space station"],
        },
        {
          no: 30,
          text: "Which process separates cream from milk?",
          options: [
            "Evaporation",
            "Filtration",
            "Centrifugation",
            "Distillation",
          ],
        },

        {
          no: 31,
          text: "A car accelerates from 10 m/s to 30 m/s in 5 s. Its acceleration is:",
          options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
        },
        {
          no: 32,
          text: "A body of mass 5 kg moving at 4 m/s has kinetic energy:",
          options: ["20 J", "40 J", "60 J", "80 J"],
        },
        {
          no: 33,
          text: "Which tissue is known as the packing tissue of plants?",
          options: ["Xylem", "Phloem", "Collenchyma", "Parenchyma"],
        },
        {
          no: 34,
          text: "The value of g decreases because:",
          options: [
            "Earth rotates",
            "Earth is spherical",
            "Distance from Earth's centre increases",
            "All of these",
          ],
        },
        {
          no: 35,
          text: "The total number of electrons in an aluminium atom is:",
          options: ["11", "12", "13", "14"],
        },

        {
          no: 36,
          text: "Which of the following is an isotopic pair?",
          options: [
            "Carbon-12 and Carbon-14",
            "Sodium and Magnesium",
            "Chlorine and Bromine",
            "Hydrogen and Helium",
          ],
        },
        {
          no: 37,
          text: "The speed of sound is maximum in:",
          options: ["Air", "Water", "Steel", "Vacuum"],
        },
        {
          no: 38,
          text: "Which group contains only invertebrates?",
          options: [
            "Fish, Frog, Snake",
            "Earthworm, Cockroach, Starfish",
            "Pigeon, Bat, Whale",
            "Lizard, Crocodile, Turtle",
          ],
        },
        {
          no: 39,
          text: "A body of mass 2 kg is raised through a height of 10 m. Potential energy gained is (g = 10 m/s²):",
          options: ["100 J", "200 J", "50 J", "20 J"],
        },
        {
          no: 40,
          text: "Which law gives the relation (F=ma)?",
          options: [
            "Newton's First Law",
            "Newton's Second Law",
            "Newton's Third Law",
            "Law of Gravitation",
          ],
        },

        {
          no: 41,
          text: "A body thrown vertically upwards with velocity 20 m/s reaches a maximum height of:",
          options: ["10 m", "20 m", "30 m", "40 m"],
        },
        {
          no: 42,
          text: "Two bodies of masses 2 kg and 8 kg have the same kinetic energy. The ratio of their speeds is:",
          options: ["1:2", "2:1", "4:1", "1:4"],
        },
        {
          no: 43,
          text: "A satellite revolves around Earth because:",
          options: [
            "No force acts on it",
            "Gravitational force provides centripetal force",
            "It has no weight",
            "It moves in vacuum",
          ],
        },
        {
          no: 44,
          text: "A sound wave of frequency 500 Hz and speed 340 m/s has wavelength:",
          options: ["0.34 m", "0.68 m", "1.47 m", "170 m"],
        },
        {
          no: 45,
          text: "If the atomic number of an element is 17, the valency of the element is:",
          options: ["1", "2", "3", "7"],
        },

        {
          no: 46,
          text: "Which tissue in plants is dead at maturity and provides mechanical strength?",
          options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Epidermis"],
        },
        {
          no: 47,
          text: "The momentum of a body doubles when:",
          options: [
            "Mass doubles only",
            "Velocity doubles only",
            "Either mass or velocity doubles",
            "Both mass and velocity double",
          ],
        },
        {
          no: 48,
          text: "A 2 kg object moving at 10 m/s collides with a wall and rebounds at 5 m/s. Change in momentum is:",
          options: ["10 kg m/s", "20 kg m/s", "30 kg m/s", "40 kg m/s"],
        },
        {
          no: 49,
          text: "Which of the following organisms shows the highest level of organisation?",
          options: ["Hydra", "Planaria", "Earthworm", "Human being"],
        },
        {
          no: 50,
          text: "A body of mass 10 kg falls freely from a height of 20 m. Its velocity just before striking the ground is:",
          options: ["10 m/s", "20 m/s", "40 m/s", "80 m/s"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "B",
      "C",
      "A",
      "C",
      "B",
      "C",
      "D",
      "C",
      "B",
      "C",
      "B",
      "A",
      "A",
      "C",
      "B",
      "A",
      "B",
      "B",
      "C",
      "A",
      "A",
      "C",
      "C",
      "C",
      "C",
      "D",
      "D",
      "B",
      "B",
      "C",
      "C",
      "B",
      "D",
      "D",
      "C",
      "A",
      "C",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "A",
      "C",
      "C",
      "C",
      "D",
      "B",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  science: <FaFlask />,
};

function PracticePaperClass9Science() {
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

export default PracticePaperClass9Science;

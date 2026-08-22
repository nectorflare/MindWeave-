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
  classLabel: "V",
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
          text: "Which group contains only mammals?",
          options: [
            "Cow, Whale, Bat",
            "Snake, Lizard, Crocodile",
            "Eagle, Sparrow, Crow",
            "Frog, Fish, Toad",
          ],
        },
        {
          no: 2,
          text: "Green plants are called",
          options: ["Consumers", "Producers", "Decomposers", "Scavengers"],
        },
        {
          no: 3,
          text: "Which organism breaks down dead plants and animals?",
          options: ["Tiger", "Mushroom", "Deer", "Sparrow"],
        },
        {
          no: 4,
          text: "Which is a consumer in the food chain?",
          options: ["Grass", "Algae", "Rabbit", "Mango tree"],
        },
        {
          no: 5,
          text: "Which food chain is correct?",
          options: [
            "Grass → Deer → Tiger",
            "Tiger → Grass → Deer",
            "Deer → Tiger → Grass",
            "Grass → Tiger → Deer",
          ],
        },
        {
          no: 6,
          text: "Which animal is an omnivore?",
          options: ["Cow", "Lion", "Bear", "Deer"],
        },
        {
          no: 7,
          text: "The largest bone in the human body is the",
          options: ["Femur", "Humerus", "Tibia", "Radius"],
        },
        {
          no: 8,
          text: "Muscles help us",
          options: [
            "Digest food",
            "Move our body",
            "Hear sounds",
            "Smell objects",
          ],
        },
        {
          no: 9,
          text: "Which nutrient mainly helps in body building?",
          options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
        },
        {
          no: 10,
          text: "Deficiency of Vitamin C causes",
          options: ["Scurvy", "Rickets", "Night blindness", "Goitre"],
        },

        {
          no: 11,
          text: "Which is a balanced diet?",
          options: [
            "Rice only",
            "Fruits only",
            "Food containing all nutrients",
            "Milk only",
          ],
        },
        {
          no: 12,
          text: "Which organ protects the brain?",
          options: ["Rib cage", "Skull", "Backbone", "Pelvis"],
        },
        {
          no: 13,
          text: "Which joint allows movement in all directions?",
          options: [
            "Hinge joint",
            "Ball-and-socket joint",
            "Fixed joint",
            "Pivot joint",
          ],
        },
        {
          no: 14,
          text: "Which is a vertebrate?",
          options: ["Earthworm", "Snail", "Fish", "Cockroach"],
        },
        {
          no: 15,
          text: "Which is an invertebrate?",
          options: ["Dog", "Human", "Butterfly", "Eagle"],
        },

        {
          no: 16,
          text: "Force can change the",
          options: [
            "Colour only",
            "Shape or motion of an object",
            "Smell only",
            "Taste only",
          ],
        },
        {
          no: 17,
          text: "Which force pulls objects towards Earth?",
          options: [
            "Magnetic force",
            "Gravitational force",
            "Muscular force",
            "Friction",
          ],
        },
        {
          no: 18,
          text: "Sound travels fastest through",
          options: ["Air", "Water", "Solids", "Vacuum"],
        },
        {
          no: 19,
          text: "Which simple machine is used to lift water from a well?",
          options: ["Pulley", "Wheel", "Screw", "Wedge"],
        },
        {
          no: 20,
          text: "A knife is an example of",
          options: ["Lever", "Pulley", "Wedge", "Wheel"],
        },

        {
          no: 21,
          text: "The Earth revolves around the",
          options: ["Moon", "Mars", "Sun", "Jupiter"],
        },
        {
          no: 22,
          text: "Which planet is known as the Red Planet?",
          options: ["Venus", "Mars", "Saturn", "Mercury"],
        },
        {
          no: 23,
          text: "The natural satellite of the Earth is",
          options: ["Sun", "Moon", "Venus", "Mars"],
        },
        {
          no: 24,
          text: "Which rock is formed from cooled lava?",
          options: [
            "Igneous rock",
            "Sedimentary rock",
            "Metamorphic rock",
            "Limestone",
          ],
        },
        {
          no: 25,
          text: "Coal is mainly used as",
          options: ["Fuel", "Fertilizer", "Food", "Medicine"],
        },

        {
          no: 26,
          text: "Which natural disaster is measured using the Richter scale?",
          options: ["Flood", "Earthquake", "Cyclone", "Drought"],
        },
        {
          no: 27,
          text: "Which instrument measures temperature?",
          options: ["Barometer", "Thermometer", "Hygrometer", "Compass"],
        },
        {
          no: 28,
          text: "Which machine helps lift heavy loads?",
          options: ["Lever", "Pulley", "Wheel and axle", "All of these"],
        },
        {
          no: 29,
          text: "Which planet has beautiful rings?",
          options: ["Mars", "Saturn", "Mercury", "Venus"],
        },
        {
          no: 30,
          text: "Which is a renewable source of energy?",
          options: ["Coal", "Petrol", "Solar energy", "Natural gas"],
        },

        {
          no: 31,
          text: "Which graph is best for comparing rainfall in different months?",
          options: ["Bar graph", "Pie chart", "Line drawing", "Flow chart"],
        },
        {
          no: 32,
          text: "Complete the series: 3, 7, 15, 31, __",
          options: ["47", "63", "62", "65"],
        },
        {
          no: 33,
          text: "Find the odd one.",
          options: ["Mercury", "Venus", "Moon", "Earth"],
        },
        {
          no: 34,
          text: "If CAT = DBU, then TREE =",
          options: ["USFF", "USSF", "TSEE", "VSGG"],
        },
        {
          no: 35,
          text: "A student performs an experiment three times before writing the result. This shows",
          options: ["Carelessness", "Scientific inquiry", "Guesswork", "Luck"],
        },

        {
          no: 36,
          text: "Which step comes first in scientific investigation?",
          options: [
            "Drawing conclusion",
            "Observation",
            "Writing report",
            "Experiment",
          ],
        },
        {
          no: 37,
          text: "Ravi pushes a box but it does not move. The force is",
          options: ["Zero", "Applied but insufficient", "Magnetic", "Electric"],
        },
        {
          no: 38,
          text: "Which is not a mineral?",
          options: ["Quartz", "Mica", "Coal", "Granite"],
        },
        {
          no: 39,
          text: "Which object produces sound by vibration?",
          options: ["Bell", "Book", "Stone", "Chair"],
        },
        {
          no: 40,
          text: "Which one is different?",
          options: ["Cyclone", "Flood", "Earthquake", "Rainbow"],
        },

        {
          no: 41,
          text: "Which food chain correctly shows the flow of energy?",
          options: [
            "Grass → Grasshopper → Frog → Snake → Eagle",
            "Snake → Frog → Grass → Eagle",
            "Eagle → Snake → Frog → Grass",
            "Grasshopper → Grass → Frog → Eagle",
          ],
        },
        {
          no: 42,
          text: "A child fractures the femur. Which body function is most affected?",
          options: ["Breathing", "Walking", "Hearing", "Digestion"],
        },
        {
          no: 43,
          text: "Two identical toy cars are pushed with different forces. The car pushed with the greater force travels farther because",
          options: [
            "It becomes heavier.",
            "Greater force produces greater motion.",
            "Gravity becomes weaker.",
            "The wheels become larger.",
          ],
        },
        {
          no: 44,
          text: "During a solar eclipse, the",
          options: [
            "Earth comes between the Sun and Moon.",
            "Moon comes between the Sun and Earth.",
            "Sun comes between Earth and Moon.",
            "Earth stops revolving.",
          ],
        },
        {
          no: 45,
          text: "Which rock is most likely to contain fossils?",
          options: ["Igneous", "Sedimentary", "Metamorphic", "Granite"],
        },

        {
          no: 46,
          text: "A pulley does not reduce the work done but changes the",
          options: [
            "Mass of the object",
            "Direction of the applied force",
            "Weight of the object",
            "Size of the object",
          ],
        },
        {
          no: 47,
          text: "If BOOK is coded as CPPL, then PLANT is coded as",
          options: ["QMBOU", "QMBOT", "RMCPU", "PMBNT"],
        },
        {
          no: 48,
          text: "A scientist changes only one factor during an experiment while keeping all others the same. This helps to",
          options: [
            "Increase mistakes.",
            "Find the effect of that one factor.",
            "Finish quickly.",
            "Reduce observations.",
          ],
        },
        {
          no: 49,
          text: "Earth takes approximately ______ to complete one revolution around the Sun.",
          options: ["24 hours", "30 days", "365¼ days", "12 hours"],
        },
        {
          no: 50,
          text: "A balanced diet contains carbohydrates, proteins, fats, vitamins, minerals, fibre and water because",
          options: [
            "One nutrient alone cannot meet all body needs.",
            "Vitamins provide all energy.",
            "Water is the only essential nutrient.",
            "Proteins are needed only by children.",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "A",
      "B",
      "B",
      "C",
      "A",
      "C",
      "A",
      "B",
      "B",
      "A",
      "C",
      "B",
      "B",
      "C",
      "C",
      "B",
      "B",
      "C",
      "A",
      "C",
      "B",
      "B",
      "B",
      "A",
      "A",
      "B",
      "B",
      "D",
      "B",
      "C",
      "A",
      "B",
      "C",
      "A",
      "B",
      "B",
      "B",
      "C",
      "A",
      "D",
      "A",
      "B",
      "B",
      "B",
      "B",
      "B",
      "A",
      "B",
      "C",
      "A",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  science: <FaFlask />,
};

function PracticePaperClass5Science() {
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

export default PracticePaperClass5Science;

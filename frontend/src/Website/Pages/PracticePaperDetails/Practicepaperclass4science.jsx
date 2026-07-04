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
  classLabel: "IV",
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
          text: "Young one of butterfly",
          options: ["Chick", "Caterpillar", "Tadpole", "Larva"],
        },
        {
          no: 2,
          text: "Changes colour",
          options: ["Cow", "Chameleon", "Horse", "Camel"],
        },
        {
          no: 3,
          text: "Plants prepare food by",
          options: [
            "Respiration",
            "Photosynthesis",
            "Digestion",
            "Germination",
          ],
        },
        {
          no: 4,
          text: "Food chain starts with",
          options: ["Animals", "Green plants", "Birds", "Insects"],
        },
        {
          no: 5,
          text: "Predator carnivore",
          options: ["Deer", "Tiger", "Goat", "Rabbit"],
        },
        {
          no: 6,
          text: "Desert plant",
          options: ["Lotus", "Cactus", "Fern", "Moss"],
        },
        {
          no: 7,
          text: "Duck adaptation",
          options: ["Claws", "Webbed feet", "Neck", "Fur"],
        },
        {
          no: 8,
          text: "Tadpole is baby of",
          options: ["Fish", "Frog", "Snake", "Lizard"],
        },
        {
          no: 9,
          text: "Stores fat hump",
          options: ["Camel", "Horse", "Goat", "Buffalo"],
        },
        {
          no: 10,
          text: "Producer",
          options: ["Grass", "Cow", "Lion", "Eagle"],
        },
        {
          no: 11,
          text: "Hibernates",
          options: ["Bear", "Cow", "Goat", "Horse"],
        },
        {
          no: 12,
          text: "Decomposer",
          options: ["Mushroom", "Tiger", "Goat", "Fish"],
        },
        {
          no: 13,
          text: "Has scales",
          options: ["Snake", "Cat", "Cow", "Rabbit"],
        },
        {
          no: 14,
          text: "Nocturnal animal",
          options: ["Owl", "Sparrow", "Crow", "Pigeon"],
        },
        {
          no: 15,
          text: "Lose water through",
          options: ["Roots", "Flowers", "Leaves", "Fruits"],
        },
        {
          no: 16,
          text: "Digestion starts in",
          options: ["Stomach", "Mouth", "Intestine", "Liver"],
        },
        {
          no: 17,
          text: "Tearing teeth",
          options: ["Molars", "Incisors", "Canines", "Premolars"],
        },
        {
          no: 18,
          text: "Disease spread",
          options: ["Diabetes", "Cold", "Fracture", "Toothache"],
        },
        { no: 19, text: "Solid", options: ["Air", "Milk", "Ice", "Steam"] },
        {
          no: 20,
          text: "Water to steam",
          options: ["Freezing", "Heating", "Cooling", "Melting"],
        },
        {
          no: 21,
          text: "Light travels in",
          options: ["Curves", "Straight lines", "Circles", "Zigzags"],
        },
        {
          no: 22,
          text: "Transparent",
          options: ["Wood", "Glass", "Stone", "Brick"],
        },
        {
          no: 23,
          text: "Heat conductor",
          options: ["Plastic", "Iron", "Rubber", "Wood"],
        },
        {
          no: 24,
          text: "Attracted by magnet",
          options: ["Iron", "Plastic", "Glass", "Paper"],
        },
        {
          no: 25,
          text: "Changes shape easily",
          options: ["Clay", "Stone", "Iron rod", "Brick"],
        },
        {
          no: 26,
          text: "Opaque object",
          options: ["Glass", "Water", "Wall", "Air"],
        },
        {
          no: 27,
          text: "Body temperature",
          options: ["27°C", "37°C", "47°C", "57°C"],
        },
        {
          no: 28,
          text: "Best conductor",
          options: ["Wood", "Copper", "Plastic", "Rubber"],
        },
        {
          no: 29,
          text: "Evaporation",
          options: [
            "Ice to water",
            "Water to vapour",
            "Steam to water",
            "Milk to curd",
          ],
        },
        {
          no: 30,
          text: "Own light source",
          options: ["Moon", "Sun", "Mirror", "Planet"],
        },
        {
          no: 31,
          text: "Conserve",
          options: ["Water", "Plastic waste", "Smoke", "Dust"],
        },
        {
          no: 32,
          text: "Gas needed by plants",
          options: ["Oxygen", "CO2", "Nitrogen", "Hydrogen"],
        },
        {
          no: 33,
          text: "Air pollution cause",
          options: ["Trees", "Vehicle smoke", "Rain", "Rivers"],
        },
        {
          no: 34,
          text: "Graph type",
          options: ["Bar graph", "Circle", "Triangle", "Flow chart"],
        },
        { no: 35, text: "Odd one", options: ["Cow", "Goat", "Tiger", "Mango"] },
        { no: 36, text: "3,6,9,12,__", options: ["14", "15", "16", "18"] },
        { no: 37, text: "CAT coded", options: ["EPH", "EOG", "FPH", "DPH"] },
        { no: 38, text: "Floats", options: ["Stone", "Wood", "Iron", "Coin"] },
        {
          no: 39,
          text: "Highest temperature season",
          options: ["Winter", "Rainy", "Summer", "Spring"],
        },
        {
          no: 40,
          text: "Save water",
          options: ["Open tap", "Repair leaks", "Wash daily", "Waste water"],
        },
        {
          no: 41,
          text: "Food chain correct",
          options: [
            "Grass→Deer→Tiger",
            "Tiger→Grass→Deer",
            "Deer→Grass→Tiger",
            "Grass→Tiger→Deer",
          ],
        },
        {
          no: 42,
          text: "Polar bear adaptation",
          options: ["Thin skin", "Thick fur", "Webbed feet", "Long legs"],
        },
        {
          no: 43,
          text: "No sunlight plant reason",
          options: ["Water", "Soil", "No photosynthesis", "Air"],
        },
        {
          no: 44,
          text: "Raincoat material",
          options: ["Cotton", "Wool", "Plastic", "Paper"],
        },
        {
          no: 45,
          text: "Always true",
          options: [
            "All transparent objects cast dark shadow",
            "All living things need energy",
            "All animals eat plants",
            "All birds fly",
          ],
        },
        {
          no: 46,
          text: "Tooth decay reason",
          options: [
            "Perfect teeth",
            "Decay still occurs",
            "Stronger teeth",
            "Chocolates clean teeth",
          ],
        },
        {
          no: 47,
          text: "Ice sequence",
          options: [
            "Ice→Steam→Water",
            "Ice→Water→Vapour",
            "Water→Ice→Steam",
            "Steam→Water→Ice",
          ],
        },
        {
          no: 48,
          text: "Earthworms useful",
          options: ["Damage roots", "Enrich soil", "Eat crops", "Stop seeds"],
        },
        {
          no: 49,
          text: "PLANT coded",
          options: ["QMBOT", "QMBOU", "PMBOU", "RMCPU"],
        },
        {
          no: 50,
          text: "Metal spoon heats faster because",
          options: [
            "Wood better conductor",
            "Metal is good conductor",
            "Wood produces heat",
            "Soup heats metal only",
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
      "B",
      "B",
      "B",
      "B",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "C",
      "B",
      "C",
      "B",
      "C",
      "B",
      "B",
      "B",
      "B",
      "A",
      "A",
      "C",
      "B",
      "B",
      "B",
      "B",
      "A",
      "B",
      "B",
      "A",
      "D",
      "B",
      "A",
      "B",
      "C",
      "B",
      "A",
      "B",
      "C",
      "C",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  science: <FaFlask />,
};

function PracticePaperClass4Science() {
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

export default PracticePaperClass4Science;

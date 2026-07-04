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
  classLabel: "VII",
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
          text: "Plants prepare their own food by the process of",
          options: [
            "Respiration",
            "Photosynthesis",
            "Digestion",
            "Transpiration",
          ],
        },
        {
          no: 2,
          text: "Which raw material is NOT required for photosynthesis?",
          options: ["Carbon dioxide", "Water", "Oxygen", "Sunlight"],
        },
        {
          no: 3,
          text: "The tiny pores present on leaves are called",
          options: ["Veins", "Stomata", "Guard cells", "Chloroplasts"],
        },
        {
          no: 4,
          text: "In human beings, the exchange of gases takes place in the",
          options: ["Heart", "Stomach", "Alveoli", "Liver"],
        },
        {
          no: 5,
          text: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
          options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
        },
        {
          no: 6,
          text: "Xylem mainly transports",
          options: ["Food", "Water and minerals", "Oxygen", "Carbon dioxide"],
        },
        {
          no: 7,
          text: "Vegetative propagation by stem occurs naturally in",
          options: ["Potato", "Mango", "Pea", "Wheat"],
        },
        {
          no: 8,
          text: "Which of the following is NOT a mode of asexual reproduction in plants?",
          options: [
            "Budding",
            "Fragmentation",
            "Seed formation",
            "Spore formation",
          ],
        },
        {
          no: 9,
          text: "Respiration releases",
          options: ["Only oxygen", "Energy", "Water only", "Chlorophyll"],
        },
        {
          no: 10,
          text: "A plant is kept in darkness for three days and then tested with iodine. The leaf shows no blue-black colour because",
          options: [
            "chlorophyll disappeared",
            "starch was not formed",
            "water evaporated",
            "stomata remained closed",
          ],
        },

        {
          no: 11,
          text: "Which tissue carries prepared food from leaves to other parts of the plant?",
          options: ["Xylem", "Phloem", "Cortex", "Epidermis"],
        },
        {
          no: 12,
          text: "A potted plant receives enough water and minerals but is kept inside a closed cupboard for one week. Which statement is MOST likely true?",
          options: [
            "It will grow faster.",
            "It cannot prepare sufficient food.",
            "It will produce more flowers.",
            "Its roots will stop absorbing water.",
          ],
        },
        {
          no: 13,
          text: "Heat always flows from",
          options: [
            "Cold object to hot object",
            "Hot object to cold object",
            "Equal temperatures",
            "Vacuum to air",
          ],
        },
        {
          no: 14,
          text: "Which is the SI unit of temperature?",
          options: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
        },
        {
          no: 15,
          text: "A clinical thermometer is mainly used to measure",
          options: [
            "Room temperature",
            "Human body temperature",
            "Boiling point of water",
            "Temperature of metals",
          ],
        },
        {
          no: 16,
          text: "Speed is equal to",
          options: [
            "Distance × Time",
            "Distance ÷ Time",
            "Time ÷ Distance",
            "Mass × Velocity",
          ],
        },
        {
          no: 17,
          text: "The filament of an electric bulb is usually made of",
          options: ["Copper", "Aluminium", "Tungsten", "Silver"],
        },
        {
          no: 18,
          text: "A fuse protects electrical appliances because it",
          options: [
            "stores electricity",
            "melts during excessive current",
            "increases current",
            "reduces voltage",
          ],
        },
        {
          no: 19,
          text: "The image formed by a plane mirror is",
          options: [
            "Real and inverted",
            "Virtual and erect",
            "Real and enlarged",
            "Virtual and inverted",
          ],
        },
        {
          no: 20,
          text: "The splitting of white light into seven colours is called",
          options: ["Reflection", "Refraction", "Dispersion", "Diffusion"],
        },

        {
          no: 21,
          text: "Which material is the best conductor of heat?",
          options: ["Wood", "Plastic", "Copper", "Rubber"],
        },
        {
          no: 22,
          text: "Why are cooking utensils usually made of aluminium or copper?",
          options: [
            "They are expensive.",
            "They conduct heat efficiently.",
            "They are poor conductors.",
            "They absorb water.",
          ],
        },
        {
          no: 23,
          text: "Two identical balls are released from the same height. Which ball travels farther?",
          options: [
            "Ball A",
            "Ball B",
            "Both travel equal distances.",
            "Cannot be determined.",
          ],
        },
        {
          no: 24,
          text: "A student connects two bulbs in series. One bulb fuses. What happens?",
          options: [
            "Only one bulb glows.",
            "Both bulbs stop glowing.",
            "Both glow brighter.",
            "The battery gets damaged.",
          ],
        },
        {
          no: 25,
          text: "Only one mirror always forms an erect image irrespective of position. That mirror is",
          options: [
            "Plane mirror",
            "Concave mirror",
            "Convex mirror",
            "Both A and C",
          ],
        },

        {
          no: 26,
          text: "A substance that turns blue litmus red is",
          options: ["Base", "Salt", "Acid", "Water"],
        },
        {
          no: 27,
          text: "Which of the following is a natural indicator?",
          options: ["China rose", "Turmeric", "Litmus", "All of these"],
        },
        {
          no: 28,
          text: "When an acid reacts with a base, the products formed are",
          options: [
            "Salt and water",
            "Oxygen and hydrogen",
            "Carbon dioxide and water",
            "Only salt",
          ],
        },
        {
          no: 29,
          text: "Which of the following is a chemical change?",
          options: [
            "Melting ice",
            "Tearing paper",
            "Rusting of iron",
            "Breaking glass",
          ],
        },
        {
          no: 30,
          text: "Which fibre is obtained from plants?",
          options: ["Silk", "Wool", "Cotton", "Nylon"],
        },

        {
          no: 31,
          text: "Which synthetic fibre is commonly used to make ropes?",
          options: ["Cotton", "Wool", "Nylon", "Silk"],
        },
        {
          no: 32,
          text: "Which of the following is a thermoplastic?",
          options: ["Bakelite", "Melamine", "PVC", "Glass"],
        },
        {
          no: 33,
          text: "Which gas is released when vinegar reacts with baking soda?",
          options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        },
        {
          no: 34,
          text: "Which substance neutralizes dilute hydrochloric acid?",
          options: ["Vinegar", "Baking soda", "Lemon juice", "Distilled water"],
        },
        {
          no: 35,
          text: "Why is galvanization done on iron objects?",
          options: [
            "To increase weight",
            "To prevent rusting",
            "To improve colour only",
            "To reduce hardness",
          ],
        },

        {
          no: 36,
          text: "A woollen sweater keeps us warm because it",
          options: [
            "produces heat",
            "traps air, which is a poor conductor of heat",
            "reflects heat",
            "absorbs water",
          ],
        },
        {
          no: 37,
          text: "Rusting is a chemical change requiring",
          options: [
            "oxygen only",
            "water only",
            "oxygen and moisture",
            "seawater only",
          ],
        },
        {
          no: 38,
          text: "Forests help in",
          options: [
            "increasing soil erosion",
            "maintaining ecological balance",
            "reducing rainfall",
            "increasing pollution",
          ],
        },
        {
          no: 39,
          text: "Which layer of atmosphere has most weather changes?",
          options: [
            "Stratosphere",
            "Mesosphere",
            "Troposphere",
            "Thermosphere",
          ],
        },
        {
          no: 40,
          text: "Greenhouse effect is mainly caused by",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        },

        {
          no: 41,
          text: "Deforestation mainly causes",
          options: [
            "increase in biodiversity",
            "soil erosion",
            "decrease in temperature everywhere",
            "more rainfall in all places",
          ],
        },
        {
          no: 42,
          text: "During which month was rainfall highest?",
          options: ["June", "July", "August", "September"],
        },
        {
          no: 43,
          text: "Which action conserves forests?",
          options: [
            "Excessive logging",
            "Afforestation",
            "Burning dry leaves",
            "Mining",
          ],
        },
        {
          no: 44,
          text: "To test sunlight effect on plant growth, which should remain constant?",
          options: [
            "Amount of sunlight",
            "Type of plant",
            "Experimental result",
            "Observation",
          ],
        },
        {
          no: 45,
          text: "Sugar dissolves faster at higher temperature because",
          options: [
            "Higher temperature speeds dissolving",
            "Sugar becomes lighter",
            "Water becomes acid",
            "No effect",
          ],
        },

        {
          no: 46,
          text: "Assertion: Plants release oxygen during photosynthesis. Reason: Photosynthesis occurs in chlorophyll cells.",
          options: [
            "Both true and correct explanation",
            "Both true but not explanation",
            "A true R false",
            "A false R true",
          ],
        },
        {
          no: 47,
          text: "Copper wires are used because",
          options: [
            "Both true and correct explanation",
            "Both true but not explanation",
            "A true R false",
            "Both false",
          ],
        },
        {
          no: 48,
          text: "Plant in darkness turns yellow because",
          options: [
            "Both stay green",
            "Darkness affects photosynthesis",
            "Both produce flowers",
            "Sun plant stops growing",
          ],
        },
        {
          no: 49,
          text: "Runner breathes faster because",
          options: [
            "Lungs enlarge",
            "More oxygen needed for respiration",
            "Blood stops",
            "Heart stops",
          ],
        },
        {
          no: 50,
          text: "Deforestation reduces rainfall because",
          options: [
            "Trees reduce soil fertility",
            "Trees support water cycle and climate",
            "Rain depends only wind",
            "Crops grow better",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "B",
      "C",
      "B",
      "C",
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
      "C",
      "B",
      "B",
      "C",
      "C",
      "B",
      "A",
      "B",
      "A",
      "C",
      "D",
      "A",
      "C",
      "C",
      "C",
      "C",
      "B",
      "B",
      "B",
      "B",
      "C",
      "B",
      "C",
      "C",
      "B",
      "B",
      "B",
      "B",
      "A",
      "A",
      "A",
      "A",
      "B",
      "B",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  science: <FaFlask />,
};

function PracticePaperClass7Science() {
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

export default PracticePaperClass7Science;

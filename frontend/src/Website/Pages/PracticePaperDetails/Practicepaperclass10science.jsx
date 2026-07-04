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
  classLabel: "X",
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
          text: "Which gas is released when zinc reacts with dilute HCl?",
          options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"],
        },
        {
          no: 2,
          text: "The functional unit of the kidney is:",
          options: ["Neuron", "Nephron", "Alveolus", "Villus"],
        },
        {
          no: 3,
          text: "A concave mirror always forms a virtual image when the object is placed:",
          options: ["At F", "Beyond C", "Between P and F", "At C"],
        },
        {
          no: 4,
          text: "The pH of a neutral solution is:",
          options: ["0", "14", "7", "1"],
        },
        {
          no: 5,
          text: "Which element has electronic configuration 2,8,1?",
          options: ["Sodium", "Magnesium", "Potassium", "Aluminium"],
        },

        {
          no: 6,
          text: "The energy stored in a stretched rubber band is:",
          options: ["Kinetic", "Chemical", "Potential", "Heat"],
        },
        {
          no: 7,
          text: "The unit of electric power is:",
          options: ["Joule", "Watt", "Volt", "Ampere"],
        },
        {
          no: 8,
          text: "Binary fission occurs in:",
          options: ["Hydra", "Amoeba", "Yeast", "Spirogyra"],
        },
        {
          no: 9,
          text: "Which is a biodegradable waste?",
          options: ["Plastic", "Glass", "Vegetable peels", "Aluminium can"],
        },
        {
          no: 10,
          text: "The image formed by a plane mirror is:",
          options: ["Real", "Inverted", "Diminished", "Virtual"],
        },

        {
          no: 11,
          text: "Which acid is present in vinegar?",
          options: [
            "Citric acid",
            "Acetic acid",
            "Sulphuric acid",
            "Hydrochloric acid",
          ],
        },
        {
          no: 12,
          text: "The focal length of a plane mirror is:",
          options: ["Infinite", "Zero", "One", "Negative"],
        },
        {
          no: 13,
          text: "Which hormone controls blood sugar?",
          options: ["Thyroxine", "Adrenaline", "Insulin", "Estrogen"],
        },
        {
          no: 14,
          text: "The SI unit of resistance is:",
          options: ["Ohm", "Volt", "Watt", "Ampere"],
        },
        {
          no: 15,
          text: "Which source of energy is non-renewable?",
          options: ["Solar", "Wind", "Coal", "Tidal"],
        },

        {
          no: 16,
          text: "The reaction CaO + H₂O → Ca(OH)₂ is:",
          options: [
            "Combination",
            "Displacement",
            "Neutralisation",
            "Decomposition",
          ],
        },
        {
          no: 17,
          text: "Which metal is extracted by electrolytic reduction?",
          options: ["Iron", "Copper", "Aluminium", "Mercury"],
        },
        {
          no: 18,
          text: "The power of a lens of focal length 50 cm is:",
          options: ["1 D", "2 D", "–2 D", "0.5 D"],
        },
        {
          no: 19,
          text: "Which blood vessel carries oxygenated blood from lungs?",
          options: ["Aorta", "Pulmonary vein", "Pulmonary artery", "Vena cava"],
        },
        {
          no: 20,
          text: "The magnetic field lines around a straight conductor are:",
          options: ["Elliptical", "Circular", "Straight", "Parabolic"],
        },

        {
          no: 21,
          text: "Ethanol and ethanoic acid react to form:",
          options: ["Ether", "Ester", "Alkene", "Salt"],
        },
        {
          no: 22,
          text: "The least reactive metal among these is:",
          options: ["Zn", "Fe", "Cu", "Mg"],
        },
        {
          no: 23,
          text: "Which gland secretes growth hormone?",
          options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        },
        {
          no: 24,
          text: "A current of 2 A flows through a resistor of 5 Ω. Potential difference is:",
          options: ["2 V", "5 V", "10 V", "20 V"],
        },
        {
          no: 25,
          text: "Which defect is corrected using a concave lens?",
          options: ["Hypermetropia", "Presbyopia", "Cataract", "Myopia"],
        },

        {
          no: 26,
          text: "Which organism occupies the first trophic level?",
          options: ["Herbivore", "Carnivore", "Producer", "Decomposer"],
        },
        {
          no: 27,
          text: "The atomic number of chlorine is:",
          options: ["17", "18", "35", "37"],
        },
        {
          no: 28,
          text: "The resistance of a conductor depends on:",
          options: [
            "Length only",
            "Area only",
            "Material only",
            "All of these",
          ],
        },
        {
          no: 29,
          text: "The process of loss of water through stomata is:",
          options: ["Respiration", "Transpiration", "Diffusion", "Guttation"],
        },
        {
          no: 30,
          text: "Which fuel has the highest calorific value?",
          options: ["Coal", "LPG", "Hydrogen", "Wood"],
        },

        {
          no: 31,
          text: "The number of covalent bonds in methane is:",
          options: ["1", "2", "4", "5"],
        },
        {
          no: 32,
          text: "A ray passing through the optical centre of a lens:",
          options: [
            "Deviates fully",
            "Emerges parallel",
            "Retraces path",
            "Passes undeviated",
          ],
        },
        {
          no: 33,
          text: "The equivalent resistance of 3 Ω and 6 Ω in parallel is:",
          options: ["2 Ω", "9 Ω", "4 Ω", "3 Ω"],
        },
        {
          no: 34,
          text: "Which phenomenon proves the particulate nature of light?",
          options: [
            "Dispersion",
            "Photoelectric effect",
            "Reflection",
            "Refraction",
          ],
        },
        {
          no: 35,
          text: "The DNA is present in:",
          options: ["Ribosome", "Vacuole", "Chromosomes", "Cytoplasm"],
        },

        {
          no: 36,
          text: "Which of the following is an oxidation reaction?",
          options: [
            "Addition of oxygen",
            "Removal of oxygen",
            "Addition of hydrogen",
            "Loss of electrons only",
          ],
        },
        {
          no: 37,
          text: "If a bulb rated 100 W operates for 5 h, energy consumed is:",
          options: ["0.5 kWh", "5 kWh", "50 kWh", "500 Wh"],
        },
        {
          no: 38,
          text: "The colour of methyl orange in a base is:",
          options: ["Red", "Orange", "Yellow", "Blue"],
        },
        {
          no: 39,
          text: "The image formed by a convex mirror is always:",
          options: [
            "Real and inverted",
            "Virtual and diminished",
            "Real and enlarged",
            "Virtual and enlarged",
          ],
        },
        {
          no: 40,
          text: "Which biogeochemical cycle has no atmospheric component?",
          options: [
            "Nitrogen cycle",
            "Oxygen cycle",
            "Carbon cycle",
            "Phosphorus cycle",
          ],
        },

        {
          no: 41,
          text: "Two resistors of 3 Ω and 6 Ω are connected in series to a 9 V battery. Current in the circuit is:",
          options: ["0.5 A", "1 A", "1.5 A", "2 A"],
        },
        {
          no: 42,
          text: "The image distance for an object at 30 cm in front of a convex lens of focal length 20 cm is:",
          options: ["60 cm", "30 cm", "15 cm", "120 cm"],
        },
        {
          no: 43,
          text: "If pH changes from 3 to 5, hydrogen ion concentration becomes:",
          options: [
            "10 times",
            "100 times less",
            "1000 times less",
            "Unchanged",
          ],
        },
        {
          no: 44,
          text: "In a food chain Grass → Grasshopper → Frog → Snake, if frogs disappear, grasshopper population will:",
          options: ["Decrease", "Remain same", "Increase", "Become extinct"],
        },
        {
          no: 45,
          text: "A person with hypermetropia has near point at 100 cm. Power of lens needed to read at 25 cm is:",
          options: ["+3 D", "+1 D", "+4 D", "+2 D"],
        },

        {
          no: 46,
          text: "Which pair forms an electrolytic refining set-up?",
          options: [
            "Pure metal–Cathode, impure metal–Anode",
            "Pure metal–Anode, impure metal–Cathode",
            "Both pure metals",
            "Both impure metals",
          ],
        },
        {
          no: 47,
          text: "The maximum wavelength of visible light corresponds to:",
          options: ["Violet", "Green", "Yellow", "Red"],
        },
        {
          no: 48,
          text: "A homozygous tall plant (TT) is crossed with a dwarf plant (tt). F₂ generation shows tall plants in the ratio:",
          options: ["1/4", "1/2", "3/4", "1"],
        },
        {
          no: 49,
          text: "The magnetic field at the centre of a circular coil depends on:",
          options: [
            "Current only",
            "Radius only",
            "Number of turns only",
            "All of these",
          ],
        },
        {
          no: 50,
          text: "A 60 W bulb and a 100 W bulb are connected in parallel to the same source. Which glows brighter?",
          options: [
            "60 W bulb",
            "Both equally",
            "100 W bulb",
            "Cannot be determined",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "B",
      "B",
      "C",
      "C",
      "A",
      "C",
      "B",
      "B",
      "C",
      "D",
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
      "B",
      "C",
      "D",
      "C",
      "A",
      "D",
      "B",
      "C",
      "C",
      "D",
      "A",
      "B",
      "C",
      "A",
      "A",
      "C",
      "B",
      "D",
      "B",
      "A",
      "B",
      "C",
      "B",
      "A",
      "D",
      "C",
      "D",
      "C",
    ],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  science: <FaFlask />,
};

function PracticePaperClass10Science() {
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

export default PracticePaperClass10Science;

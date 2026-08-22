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
  classLabel: "VIII",
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
          text: "Which microorganism is mainly used in the preparation of curd?",
          options: ["Virus", "Yeast", "Lactobacillus", "Amoeba"],
        },
        {
          no: 2,
          text: "Farmers rotate crops mainly to",
          options: [
            "increase rainfall",
            "improve soil fertility",
            "reduce sunlight",
            "increase pesticides",
          ],
        },
        {
          no: 3,
          text: "Which part of a plant cell is absent in animal cells?",
          options: ["Nucleus", "Cell membrane", "Cytoplasm", "Cell wall"],
        },
        {
          no: 4,
          text: "Adolescence is the period when",
          options: [
            "body stops growing",
            "reproductive organs mature",
            "teeth fall permanently",
            "bones disappear",
          ],
        },
        {
          no: 5,
          text: "Which microorganism fixes atmospheric nitrogen?",
          options: ["Rhizobium", "Amoeba", "Plasmodium", "Yeast"],
        },

        {
          no: 6,
          text: "Vaccination helps because it",
          options: [
            "kills all microbes instantly",
            "produces antibodies in advance",
            "destroys blood cells",
            "increases body temperature",
          ],
        },
        {
          no: 7,
          text: "Which practice prevents food poisoning?",
          options: [
            "Eating uncovered food",
            "Proper refrigeration",
            "Keeping food warm for many days",
            "Using dirty utensils",
          ],
        },
        {
          no: 8,
          text: "Which of the following is NOT a communicable disease?",
          options: ["Cholera", "Tuberculosis", "Diabetes", "Influenza"],
        },
        {
          no: 9,
          text: "Which hormone is mainly responsible for changes during puberty?",
          options: ["Insulin", "Adrenaline", "Sex hormones", "Thyroxine"],
        },
        {
          no: 10,
          text: "Which cell organelle is known as the powerhouse of the cell?",
          options: ["Ribosome", "Golgi body", "Mitochondrion", "Vacuole"],
        },

        {
          no: 11,
          text: "If all microorganisms disappeared, which process would be affected first?",
          options: [
            "Photosynthesis",
            "Decomposition of dead matter",
            "Evaporation",
            "Reflection of light",
          ],
        },
        {
          no: 12,
          text: "Yellowing of wheat plants despite watering is due to",
          options: [
            "Excess oxygen",
            "Deficiency of nitrogen",
            "Lack of carbon dioxide",
            "Too much sunlight",
          ],
        },
        {
          no: 13,
          text: "Pressure is maximum when",
          options: [
            "force is less",
            "area is greater",
            "area is smaller",
            "force is zero",
          ],
        },
        {
          no: 14,
          text: "SI unit of force is",
          options: ["Joule", "Newton", "Pascal", "Watt"],
        },
        {
          no: 15,
          text: "Friction always acts",
          options: [
            "in the direction of motion",
            "opposite to motion",
            "vertically upward",
            "downward",
          ],
        },

        {
          no: 16,
          text: "Sound cannot travel through",
          options: ["solids", "liquids", "gases", "vacuum"],
        },
        {
          no: 17,
          text: "Rear-view mirrors in vehicles are",
          options: [
            "Plane mirror",
            "Concave mirror",
            "Convex mirror",
            "Cylindrical mirror",
          ],
        },
        {
          no: 18,
          text: "Light travels fastest in",
          options: ["water", "glass", "air", "vacuum"],
        },
        {
          no: 19,
          text: "Tyres have grooves to",
          options: [
            "increase weight",
            "reduce friction",
            "increase friction",
            "save fuel",
          ],
        },
        {
          no: 20,
          text: "Highest pressure is when",
          options: [
            "standing on two feet",
            "standing on one foot",
            "lying on a bed",
            "sitting on a chair",
          ],
        },

        {
          no: 21,
          text: "Pitch of sound depends on",
          options: ["amplitude", "frequency", "speed", "loudness"],
        },
        {
          no: 22,
          text: "Sharp knives are effective because they",
          options: [
            "have larger area",
            "produce greater pressure",
            "reduce force",
            "increase friction only",
          ],
        },
        {
          no: 23,
          text: "Water pressure increases with depth because",
          options: [
            "decreases",
            "remains constant",
            "increases",
            "becomes zero",
          ],
        },
        {
          no: 24,
          text: "Higher pitch tuning fork is",
          options: [
            "256 Hz fork",
            "512 Hz fork",
            "same pitch",
            "depends on loudness",
          ],
        },
        {
          no: 25,
          text: "On smooth vs rough surface, equal force is applied. Which moves farther?",
          options: [
            "Both equal",
            "Rough surface",
            "Smooth surface",
            "Neither moves",
          ],
        },

        {
          no: 26,
          text: "Which is a non-metal?",
          options: ["Copper", "Iron", "Sulphur", "Aluminium"],
        },
        {
          no: 27,
          text: "Metal stored in kerosene is",
          options: ["Copper", "Iron", "Sodium", "Gold"],
        },
        {
          no: 28,
          text: "Coal is mainly composed of",
          options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
        },
        {
          no: 29,
          text: "Blue flame fuel is",
          options: ["Wood", "Coal", "LPG", "Kerosene lamp"],
        },
        {
          no: 30,
          text: "Exhaustible resource is",
          options: ["Air", "Sunlight", "Petroleum", "Wind"],
        },

        {
          no: 31,
          text: "Most metals are",
          options: [
            "poor conductor of heat",
            "brittle",
            "good conductor of electricity",
            "dull surface",
          ],
        },
        {
          no: 32,
          text: "Rusting is a",
          options: [
            "physical change",
            "chemical change",
            "temporary change",
            "reversible change",
          ],
        },
        {
          no: 33,
          text: "Essential gas for combustion is",
          options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        },
        {
          no: 34,
          text: "Metal that displaces copper is",
          options: ["Gold", "Silver", "Zinc", "Mercury"],
        },
        {
          no: 35,
          text: "Highest calorific value fuel is",
          options: ["Cow dung", "Coal", "LPG", "Hydrogen"],
        },

        {
          no: 36,
          text: "Iron glows red when heated because",
          options: [
            "it melts",
            "it emits light at high temperature",
            "oxygen escapes",
            "changes metal",
          ],
        },
        {
          no: 37,
          text: "Burning magnesium produces",
          options: [
            "Magnesium sulphate",
            "Magnesium oxide",
            "Magnesium nitrate",
            "Magnesium chloride",
          ],
        },
        {
          no: 38,
          text: "Main greenhouse gas is",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        },
        {
          no: 39,
          text: "Sustainable development means",
          options: [
            "use all resources rapidly",
            "meet present needs without harming future",
            "cut all forests",
            "increase pollution",
          ],
        },
        {
          no: 40,
          text: "Helps conserve biodiversity",
          options: ["Deforestation", "Afforestation", "Overgrazing", "Mining"],
        },

        {
          no: 41,
          text: "Acid rain mainly damages",
          options: ["monuments", "clouds", "sunlight", "stars"],
        },
        {
          no: 42,
          text: "Highest AQI day is",
          options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        {
          no: 43,
          text: "Best sustainable activity is",
          options: [
            "burning crops",
            "recycling aluminium",
            "cutting forests",
            "overuse groundwater",
          ],
        },
        {
          no: 44,
          text: "Independent variable is",
          options: [
            "constant",
            "dependent variable",
            "independent variable",
            "observation",
          ],
        },
        {
          no: 45,
          text: "Plant growth stabilizes because",
          options: [
            "water stopped",
            "plants reached maturity",
            "sunlight disappeared",
            "fertilizer harmful",
          ],
        },

        {
          no: 46,
          text: "Assertion-Reason (friction)",
          options: [
            "Both true & correct explanation",
            "Both true but no explanation",
            "A true R false",
            "A false R true",
          ],
        },
        {
          no: 47,
          text: "Vaccination prevents disease because",
          options: [
            "Both true & correct explanation",
            "Both true but no explanation",
            "A true R false",
            "Assertion false",
          ],
        },
        {
          no: 48,
          text: "Dark plant turns yellow because",
          options: [
            "both green",
            "lack of chlorophyll formation",
            "flowers grow",
            "soil acidic",
          ],
        },
        {
          no: 49,
          text: "Astronaut cannot hear sound on Moon because",
          options: [
            "low gravity",
            "no atmosphere",
            "light faster",
            "metals don't vibrate",
          ],
        },
        {
          no: 50,
          text: "Deforestation reduces fertility because",
          options: [
            "trees reduce fertility",
            "trees support water cycle & soil",
            "rain depends wind",
            "crops better without trees",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "C",
      "B",
      "D",
      "B",
      "A",
      "B",
      "B",
      "C",
      "C",
      "C",
      "B",
      "B",
      "C",
      "B",
      "B",
      "D",
      "C",
      "D",
      "C",
      "B",
      "B",
      "B",
      "C",
      "B",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "D",
      "B",
      "B",
      "B",
      "B",
      "B",
      "A",
      "C",
      "B",
      "C",
      "B",
      "A",
      "A",
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

function PracticePaperClass8Science() {
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

export default PracticePaperClass8Science;

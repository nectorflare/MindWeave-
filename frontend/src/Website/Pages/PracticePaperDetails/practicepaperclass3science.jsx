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
  classLabel: "III",
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
      columns: 1,
      questions: [
        {
          no: 1,
          text: "Which part of the plant absorbs water?",
          options: ["Stem", "Root", "Leaf", "Flower"],
        },
        {
          no: 2,
          text: "Which animal is a herbivore?",
          options: ["Tiger", "Cow", "Lion", "Wolf"],
        },
        {
          no: 3,
          text: "Which animal lives in water?",
          options: ["Camel", "Fish", "Monkey", "Rabbit"],
        },
        {
          no: 4,
          text: "Which part of a plant prepares food?",
          options: ["Root", "Stem", "Leaf", "Flower"],
        },
        {
          no: 5,
          text: "A frog lives in",
          options: ["Desert", "Water and land", "Trees only", "Snow"],
        },
        {
          no: 6,
          text: "Which animal eats only meat?",
          options: ["Goat", "Deer", "Lion", "Elephant"],
        },
        {
          no: 7,
          text: "Which plant part becomes a fruit?",
          options: ["Root", "Flower", "Stem", "Leaf"],
        },
        {
          no: 8,
          text: "Which is an insect?",
          options: ["Sparrow", "Butterfly", "Lizard", "Frog"],
        },
        {
          no: 9,
          text: "Birds use their ______ to fly.",
          options: ["Teeth", "Wings", "Tail", "Legs"],
        },
        {
          no: 10,
          text: "Which animal lays eggs?",
          options: ["Cat", "Cow", "Hen", "Dog"],
        },

        {
          no: 11,
          text: "Which animal has a hump?",
          options: ["Camel", "Horse", "Buffalo", "Goat"],
        },
        {
          no: 12,
          text: '"Ship of the Desert" is',
          options: ["Horse", "Camel", "Elephant", "Donkey"],
        },
        {
          no: 13,
          text: "Which animal has webbed feet?",
          options: ["Duck", "Cow", "Dog", "Goat"],
        },
        {
          no: 14,
          text: "Which animal sleeps in winter?",
          options: ["Bear", "Cow", "Goat", "Horse"],
        },
        {
          no: 15,
          text: "Which is not a living thing?",
          options: ["Tree", "Fish", "Rock", "Bird"],
        },

        {
          no: 16,
          text: "We smell with our",
          options: ["Eyes", "Nose", "Tongue", "Ears"],
        },
        {
          no: 17,
          text: "Healthy food helps us",
          options: [
            "Become sick",
            "Grow strong",
            "Sleep all day",
            "Forget things",
          ],
        },
        {
          no: 18,
          text: "We hear with our",
          options: ["Nose", "Eyes", "Ears", "Skin"],
        },
        {
          no: 19,
          text: "Which is a liquid?",
          options: ["Milk", "Stone", "Chair", "Pencil"],
        },
        {
          no: 20,
          text: "Air is a",
          options: ["Solid", "Liquid", "Gas", "Metal"],
        },

        {
          no: 21,
          text: "Which material floats on water?",
          options: ["Stone", "Wood", "Iron", "Brick"],
        },
        {
          no: 22,
          text: "Rainwater is an example of",
          options: ["Air", "Water", "Soil", "Fire"],
        },
        {
          no: 23,
          text: "We should save",
          options: ["Plastic", "Water", "Smoke", "Dust"],
        },
        {
          no: 24,
          text: "Summer is the",
          options: ["Cold season", "Hot season", "Rainy season", "Snow season"],
        },
        {
          no: 25,
          text: "Which season brings heavy rain?",
          options: ["Winter", "Summer", "Rainy", "Spring"],
        },

        {
          no: 26,
          text: "Soap helps us maintain",
          options: ["Noise", "Hygiene", "Pollution", "Heat"],
        },
        {
          no: 27,
          text: "Which is a solid?",
          options: ["Juice", "Air", "Ice", "Milk"],
        },
        {
          no: 28,
          text: "Which is needed for breathing?",
          options: ["Water", "Air", "Sand", "Soil"],
        },
        {
          no: 29,
          text: "Which one pollutes air?",
          options: ["Trees", "Smoke", "Rain", "Wind"],
        },
        {
          no: 30,
          text: "Which should be thrown in dustbin?",
          options: [
            "Banana peel",
            "Plastic bottle on road",
            "Paper on street",
            "Waste in river",
          ],
        },

        {
          no: 31,
          text: "Which machine helps wash clothes?",
          options: ["Fan", "Washing machine", "TV", "Radio"],
        },
        {
          no: 32,
          text: "Which machine keeps food cold?",
          options: ["Oven", "Refrigerator", "Fan", "Heater"],
        },
        {
          no: 33,
          text: "Safest way to cross road?",
          options: ["Run", "Use zebra crossing", "Play on road", "Jump"],
        },
        {
          no: 34,
          text: "Find the odd one",
          options: ["Dog", "Cat", "Mango", "Cow"],
        },
        {
          no: 35,
          text: "Complete: 2, 4, 6, 8, __",
          options: ["9", "10", "12", "14"],
        },

        {
          no: 36,
          text: "Which object is made of metal?",
          options: ["Spoon", "Balloon", "Cotton", "Leaf"],
        },
        {
          no: 37,
          text: "Which one is different?",
          options: ["Rose", "Mango tree", "Lotus", "Tiger"],
        },
        {
          no: 38,
          text: "Monday, Tuesday, Wednesday, __",
          options: ["Friday", "Thursday", "Sunday", "Saturday"],
        },
        {
          no: 39,
          text: "Used to observe tiny objects",
          options: ["Telescope", "Microscope", "Binoculars", "Camera"],
        },
        {
          no: 40,
          text: "Complete: 1, 3, 5, 7, __",
          options: ["8", "9", "10", "11"],
        },

        {
          no: 41,
          text: "Plant with spores is most likely",
          options: ["Rose", "Fern", "Mango tree", "Sunflower"],
        },
        {
          no: 42,
          text: "Group with omnivores",
          options: [
            "Cow, Goat, Deer",
            "Lion, Tiger, Wolf",
            "Bear, Crow, Human",
            "Rabbit, Horse, Elephant",
          ],
        },
        {
          no: 43,
          text: "Lightning seen before thunder because",
          options: [
            "Light travels faster than sound.",
            "Sound travels faster",
            "Same speed",
            "Thunder happens later",
          ],
        },
        {
          no: 44,
          text: "Odd one out",
          options: ["Ice", "Steam", "Water", "Wood"],
        },
        {
          no: 45,
          text: "Always true statement",
          options: [
            "All birds fly",
            "All fish live on land",
            "Plants need sunlight",
            "Animals eat only plants",
          ],
        },

        {
          no: 46,
          text: "Caterpillar to butterfly is",
          options: ["Germination", "Evaporation", "Metamorphosis", "Digestion"],
        },
        {
          no: 47,
          text: "TREE → USFF, LEAF =",
          options: ["MFBG", "MFZG", "MDFG", "MFBH"],
        },
        {
          no: 48,
          text: "Amit behind Neha but in front of Riya. Kabir behind Riya. First is",
          options: ["Amit", "Neha", "Riya", "Kabir"],
        },
        {
          no: 49,
          text: "Camel–snow adaptation correct pair",
          options: [
            "Camel–Thick fur",
            "Fish–Gills",
            "Tiger–Webbed feet",
            "Duck–Claws",
          ],
        },
        {
          no: 50,
          text: "Plant in dark box becomes weak due to",
          options: [
            "Too much water",
            "Lack of sunlight",
            "Too much soil",
            "Too much air",
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
      "C",
      "B",
      "C",
      "B",
      "B",
      "B",
      "C",
      "A",
      "B",
      "A",
      "A",
      "C",
      "B",
      "B",
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
      "B",
      "B",
      "A",
      "B",
      "B",
      "B",
      "C",
      "B",
      "A",
      "D",
      "B",
      "B",
      "B",
      "B",
      "C",
      "A",
      "D",
      "C",
      "C",
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

function PracticePaperClass3Science() {
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

export default PracticePaperClass3Science;

import React from "react";
import "./PracticePaperDetails.css"; // same design, koi nayi CSS nahi
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  FaTrophy,
  FaClipboardList,
  FaClock,
  FaStar,
  FaSpellCheck,
  FaBookOpen,
  FaBrain,
} from "react-icons/fa";

const paperData = {
  title: "International English Olympiad",
  classLabel: "III",
  testType: "Practice Test",
  totalQuestions: 50,
  timeAllotted: "60 Minutes",
  maxMarks: 50,

  sections: [
    {
      id: "A",
      title: "Grammar and Language",
      range: "Q. 1 – 20",
      color: "blue",
      icon: "grammar",
      columns: 4,
      questions: [
        {
          no: 1,
          text: "Which word is a noun?",
          options: ["quickly", "happy", "school", "jump"],
        },
        {
          no: 2,
          text: "Choose the correct pronoun. Rita has a doll. ____ loves it.",
          options: ["He", "She", "It", "They"],
        },
        {
          no: 3,
          text: "Which sentence is correct?",
          options: [
            "The dogs barks.",
            "The dog bark.",
            "The dog barks.",
            "Dog bark.",
          ],
        },
        {
          no: 4,
          text: "Choose the correct article. I saw ____ elephant.",
          options: ["a", "an", "the", "no article"],
        },
        {
          no: 5,
          text: "Which word is an adjective?",
          options: ["swim", "beautiful", "slowly", "under"],
        },
        {
          no: 6,
          text: "Choose the correct verb. The birds ____ in the sky.",
          options: ["flies", "fly", "flying", "flew"],
        },
        {
          no: 7,
          text: "Which sentence is in the past tense?",
          options: [
            "She sings.",
            "She will sing.",
            "She sang.",
            "She is singing.",
          ],
        },
        {
          no: 8,
          text: "Choose the correct preposition. The cat is ____ the table.",
          options: ["on", "run", "jump", "fast"],
        },
        {
          no: 9,
          text: "Which conjunction joins two ideas?",
          options: ["and", "under", "tall", "slowly"],
        },
        {
          no: 10,
          text: "Which sentence is punctuated correctly?",
          options: [
            "where are you going.",
            "Where are you going?",
            "where Are you going.",
            "Where are you going.",
          ],
        },
        {
          no: 11,
          text: "Which word should begin with a capital letter?",
          options: ["chair", "monday", "river", "school"],
        },
        {
          no: 12,
          text: "Choose the correct sentence.",
          options: [
            "He have a book.",
            "He has a book.",
            "He having a book.",
            "He haves a book.",
          ],
        },
        {
          no: 13,
          text: "Which word is a pronoun?",
          options: ["apple", "they", "blue", "jump"],
        },
        {
          no: 14,
          text: 'Which sentence uses "the" correctly?',
          options: [
            "I saw the moon.",
            "I ate the apple yesterday.",
            "She has the dog named Bruno.",
            "All are correct.",
          ],
        },
        {
          no: 15,
          text: "Which is a proper noun?",
          options: ["city", "river", "Delhi", "country"],
        },
        {
          no: 16,
          text: "Which sentence is correct?",
          options: [
            "We was playing.",
            "We were playing.",
            "We is playing.",
            "We am playing.",
          ],
        },
        {
          no: 17,
          text: "Choose the correct preposition. The bird flew ____ the tree.",
          options: ["over", "slowly", "bright", "happy"],
        },
        {
          no: 18,
          text: "Which word is a verb?",
          options: ["pencil", "dance", "happy", "beautiful"],
        },
        {
          no: 19,
          text: "Which sentence is correct?",
          options: [
            "My brother and I is friends.",
            "My brother and I are friends.",
            "My brother and I am friends.",
            "My brother and I be friends.",
          ],
        },
        {
          no: 20,
          text: "Choose the grammatically correct sentence.",
          options: [
            "Neither of the boys are late.",
            "Neither of the boys is late.",
            "Neither boys is late.",
            "Neither boys are late.",
          ],
        },
      ],
    },
    {
      id: "B",
      title: "Vocabulary",
      range: "Q. 21 – 32",
      color: "green",
      icon: "vocab",
      columns: 3,
      questions: [
        {
          no: 21,
          text: 'Synonym of "big" is',
          options: ["tiny", "huge", "short", "thin"],
        },
        {
          no: 22,
          text: 'Antonym of "happy" is',
          options: ["joyful", "cheerful", "sad", "smile"],
        },
        {
          no: 23,
          text: 'Homophone of "sea" is',
          options: ["see", "say", "sew", "so"],
        },
        {
          no: 24,
          text: 'Which word means "a person who teaches"?',
          options: ["teacher", "player", "singer", "painter"],
        },
        {
          no: 25,
          text: 'Synonym of "quick" is',
          options: ["slow", "fast", "weak", "dull"],
        },
        {
          no: 26,
          text: 'Antonym of "early" is',
          options: ["first", "before", "late", "quick"],
        },
        {
          no: 27,
          text: 'Homophone of "sun" is',
          options: ["son", "soon", "sound", "sand"],
        },
        {
          no: 28,
          text: 'Which word means "very small"?',
          options: ["tiny", "giant", "broad", "huge"],
        },
        {
          no: 29,
          text: "Choose the odd one out.",
          options: ["rose", "lotus", "mango", "lily"],
        },
        {
          no: 30,
          text: "One-word substitution: A person who writes books.",
          options: ["reader", "author", "artist", "actor"],
        },
        {
          no: 31,
          text: "Which pair are antonyms?",
          options: ["hot–cold", "big–large", "quick–fast", "tiny–small"],
        },
        {
          no: 32,
          text: "Which word does NOT belong?",
          options: ["whisper", "shout", "speak", "silent"],
        },
      ],
    },
    {
      id: "C",
      title: "Reading Comprehension",
      range: "Q. 33 – 40",
      color: "purple",
      icon: "reading",
      columns: 1,
      passage:
        "Riya planted a mango seed in her garden. She watered it every day. After many weeks, a tiny plant appeared. She protected it from goats and strong winds. After a few years, the tree gave sweet mangoes.",
      questions: [
        {
          no: 33,
          text: "What did Riya plant?",
          options: ["Rose", "Mango seed", "Apple seed", "Lily"],
        },
        {
          no: 34,
          text: "What did she do every day?",
          options: [
            "Played",
            "Watered the plant",
            "Cut the tree",
            "Climbed the tree",
          ],
        },
        {
          no: 35,
          text: "What appeared after many weeks?",
          options: ["Bird", "Flower", "Tiny plant", "Fruit"],
        },
        {
          no: 36,
          text: "She protected the plant from",
          options: ["rain only", "goats and strong winds", "birds", "children"],
        },
        {
          no: 37,
          text: "What did the tree finally give?",
          options: ["Apples", "Mangoes", "Flowers", "Leaves"],
        },
        {
          no: 38,
          text: "Which happened first?",
          options: [
            "Mangoes grew.",
            "Tiny plant appeared.",
            "She planted the seed.",
            "Tree became big.",
          ],
        },
        {
          no: 39,
          text: "Why did the plant become a tree?",
          options: ["Magic", "She cared for it.", "Luck", "Wind"],
        },
        {
          no: 40,
          text: "Which sentence best tells the main idea?",
          options: [
            "Mangoes are sweet.",
            "Caring patiently helps things grow.",
            "Gardens are beautiful.",
            "Goats eat plants.",
          ],
        },
      ],
    },
    {
      id: "D",
      title: "Verbal Reasoning & Logical Reasoning",
      range: "Q. 41 – 50",
      color: "orange",
      icon: "reasoning",
      columns: 4,
      questions: [
        {
          no: 41,
          text: "Dog : Puppy :: Cat : ?",
          options: ["Cub", "Kitten", "Calf", "Chick"],
        },
        {
          no: 42,
          text: "Pen : Write :: Brush : ?",
          options: ["Paint", "Eat", "Walk", "Read"],
        },
        {
          no: 43,
          text: "Find the odd one.",
          options: ["January", "Monday", "March", "June"],
        },
        {
          no: 44,
          text: "Complete the pattern. AB, BC, CD, ____",
          options: ["DE", "EF", "FG", "DA"],
        },
        {
          no: 45,
          text: "Which word comes next? Red, Blue, Green, ____",
          options: ["Table", "Yellow", "Tiger", "River"],
        },
        {
          no: 46,
          text: "If BOOK becomes CPPL, then CAT becomes",
          options: ["DBU", "DBT", "DAT", "EBU"],
        },
        {
          no: 47,
          text: "Find the odd one.",
          options: [
            "Finger : Hand",
            "Wheel : Car",
            "Wing : Bird",
            "Leaf : Flower",
          ],
        },
        {
          no: 48,
          text: "Arrange alphabetically. Apple, Ant, Axe, Air",
          options: [
            "Air, Ant, Apple, Axe",
            "Ant, Air, Apple, Axe",
            "Air, Apple, Ant, Axe",
            "Apple, Air, Ant, Axe",
          ],
        },
        {
          no: 49,
          text: "Which pair follows the same relationship? Cold : Ice :: Hot : ?",
          options: ["Snow", "Fire", "Rain", "Wind"],
        },
        {
          no: 50,
          text: "Which sentence is correct?",
          options: [
            "Every bird can fly because penguins are birds.",
            "Some birds cannot fly, yet they are birds.",
            "Penguins are not birds because they cannot fly.",
            "Flying is the only feature of birds.",
          ],
        },
      ],
    },
  ],

  // Har section ka answer key — index se match karta hai (0 = A, 1 = B, 2 = C, 3 = D)
  answerKey: {
    A: [
      "C",
      "B",
      "C",
      "B",
      "B",
      "B",
      "C",
      "A",
      "A",
      "B",
      "B",
      "B",
      "B",
      "D",
      "C",
      "B",
      "A",
      "B",
      "B",
      "B",
    ],
    B: ["B", "C", "A", "A", "B", "C", "A", "A", "C", "B", "A", "D"],
    C: ["B", "B", "C", "B", "B", "C", "B", "B"],
    D: ["B", "A", "B", "A", "B", "A", "D", "A", "B", "B"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass3English() {
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

export default PracticePaperClass3English;

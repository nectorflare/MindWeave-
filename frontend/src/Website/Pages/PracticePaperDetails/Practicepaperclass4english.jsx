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
  classLabel: "IV",
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
          text: "Which of the following is a proper noun?",
          options: ["city", "river", "London", "country"],
        },
        {
          no: 2,
          text: "Which sentence is correct?",
          options: [
            "The girls is singing.",
            "The girls are singing.",
            "The girls was singing.",
            "The girls has singing.",
          ],
        },
        {
          no: 3,
          text: "Choose the correct pronoun. Neither Riya nor Seema forgot ____ homework.",
          options: ["his", "her", "their", "our"],
        },
        {
          no: 4,
          text: "Which word is an adverb?",
          options: ["beautiful", "happily", "kindness", "honesty"],
        },
        {
          no: 5,
          text: "Choose the correct preposition. The airplane flew ____ the clouds.",
          options: ["above", "beside", "under", "into"],
        },
        {
          no: 6,
          text: "Which sentence is in the future tense?",
          options: [
            "They play cricket.",
            "They played cricket.",
            "They will play cricket.",
            "They are playing cricket.",
          ],
        },
        {
          no: 7,
          text: "Which conjunction best completes the sentence? I was tired, ____ I finished my homework.",
          options: ["because", "but", "so", "and"],
        },
        {
          no: 8,
          text: "Which is a collective noun?",
          options: ["team", "pencil", "run", "tall"],
        },
        {
          no: 9,
          text: "Choose the correct sentence.",
          options: [
            "Each of the boys have a bat.",
            "Each of the boys has a bat.",
            "Each of the boys are a bat.",
            "Each boys has a bat.",
          ],
        },
        {
          no: 10,
          text: "Which word is an abstract noun?",
          options: ["honesty", "chair", "school", "tiger"],
        },
        {
          no: 11,
          text: "Which sentence uses the correct tense?",
          options: [
            "She go to school daily.",
            "She goes to school daily.",
            "She going to school daily.",
            "She gone to school daily.",
          ],
        },
        {
          no: 12,
          text: "Which sentence is punctuated correctly?",
          options: [
            "Wow what a beautiful rainbow!",
            "Wow! What a beautiful rainbow!",
            "Wow, what a beautiful rainbow",
            "wow! What a beautiful rainbow!",
          ],
        },
        {
          no: 13,
          text: "Which word is a common noun?",
          options: ["India", "Amazon", "mountain", "Monday"],
        },
        {
          no: 14,
          text: "Fill in the blank. The baby is sleeping ____ the bed.",
          options: ["on", "in", "over", "into"],
        },
        {
          no: 15,
          text: "Choose the correct article. She bought ____ umbrella.",
          options: ["a", "an", "the", "no article"],
        },
        {
          no: 16,
          text: "Which sentence is correct?",
          options: [
            "Neither of the answers are right.",
            "Neither of the answers is right.",
            "Neither answers are right.",
            "Neither answer are right.",
          ],
        },
        {
          no: 17,
          text: "Which word is an adverb?",
          options: ["bright", "brightly", "brightness", "brighten"],
        },
        {
          no: 18,
          text: "Which sentence has the correct subject-verb agreement?",
          options: [
            "My friends enjoys football.",
            "My friends enjoy football.",
            "My friends enjoys footballs.",
            "My friends enjoying football.",
          ],
        },
        {
          no: 19,
          text: "Choose the correct pronoun. The children enjoyed ____ at the park.",
          options: ["himself", "herself", "themselves", "ourselves"],
        },
        {
          no: 20,
          text: "Which sentence is grammatically correct?",
          options: [
            "Everybody have completed the work.",
            "Everybody has completed the work.",
            "Everybody were completed the work.",
            "Everybody are completed the work.",
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
          text: 'Synonym of "brave" is',
          options: ["timid", "courageous", "weak", "lazy"],
        },
        {
          no: 22,
          text: 'Antonym of "ancient" is',
          options: ["old", "modern", "antique", "historic"],
        },
        {
          no: 23,
          text: "Choose the correct homophone. I ____ a bird singing.",
          options: ["here", "hear", "hair", "hare"],
        },
        {
          no: 24,
          text: "Which is a compound word?",
          options: ["notebook", "chair", "pencil", "window"],
        },
        {
          no: 25,
          text: 'What does the idiom "once in a blue moon" mean?',
          options: ["Every day", "Very rarely", "At night", "During winter"],
        },
        {
          no: 26,
          text: "Which pair are homonyms?",
          options: [
            "bat (animal) – bat (sports)",
            "hot – cold",
            "big – huge",
            "sea – ocean",
          ],
        },
        {
          no: 27,
          text: 'Synonym of "tiny" is',
          options: ["huge", "small", "wide", "long"],
        },
        {
          no: 28,
          text: 'Antonym of "accept" is',
          options: ["receive", "reject", "agree", "allow"],
        },
        {
          no: 29,
          text: "Which word does NOT belong?",
          options: ["carrot", "potato", "cabbage", "tiger"],
        },
        {
          no: 30,
          text: "Which compound word is correctly formed?",
          options: ["raincoat", "rain coat", "rain-coat", "raincoats"],
        },
        {
          no: 31,
          text: 'Choose the word closest in meaning to "glance."',
          options: ["stare", "look quickly", "sleep", "ignore"],
        },
        {
          no: 32,
          text: 'Which idiom means "to reveal a secret"?',
          options: [
            "Break the ice",
            "Spill the beans",
            "Hit the books",
            "Piece of cake",
          ],
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
        "Rahul loved collecting old coins. Every Sunday, he visited the local market with his grandfather. One day, he found a rare coin that was more than 100 years old. He carefully cleaned it and added it to his collection. His grandfather praised him for taking good care of such valuable things.",
      questions: [
        {
          no: 33,
          text: "What did Rahul like collecting?",
          options: ["Stamps", "Coins", "Books", "Toys"],
        },
        {
          no: 34,
          text: "Whom did Rahul visit the market with?",
          options: ["Father", "Mother", "Grandfather", "Friend"],
        },
        {
          no: 35,
          text: "How old was the rare coin?",
          options: ["50 years", "75 years", "More than 100 years", "10 years"],
        },
        {
          no: 36,
          text: "What did Rahul do with the coin?",
          options: [
            "Sold it",
            "Lost it",
            "Added it to his collection",
            "Gave it away",
          ],
        },
        {
          no: 37,
          text: "Why did his grandfather praise him?",
          options: [
            "He bought sweets.",
            "He cared for valuable things.",
            "He won a race.",
            "He found money.",
          ],
        },
        {
          no: 38,
          text: 'The word "rare" means',
          options: ["common", "difficult", "unusual", "broken"],
        },
        {
          no: 39,
          text: "Which quality does Rahul show?",
          options: [
            "Carelessness",
            "Patience and responsibility",
            "Anger",
            "Laziness",
          ],
        },
        {
          no: 40,
          text: "What is the main idea of the passage?",
          options: [
            "Markets are crowded.",
            "Collecting valuable things requires care.",
            "Grandfathers tell stories.",
            "Coins are expensive.",
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
          text: "Bird : Nest :: Bee : _____",
          options: ["Tree", "Hive", "Hole", "Forest"],
        },
        {
          no: 42,
          text: "Doctor : Hospital :: Teacher : _____",
          options: ["Library", "School", "Garden", "Market"],
        },
        {
          no: 43,
          text: "Find the odd one out.",
          options: ["Rose", "Lily", "Mango", "Lotus"],
        },
        {
          no: 44,
          text: "Complete the series. ACE, BDF, CEG, _____",
          options: ["DFH", "DEG", "EFG", "DGH"],
        },
        {
          no: 45,
          text: "Which pair has the same relationship? Eye : See :: Ear : _____",
          options: ["Smell", "Hear", "Taste", "Touch"],
        },
        {
          no: 46,
          text: "If CAT = DBU, then DOG = ?",
          options: ["EPH", "EOH", "DPH", "FPH"],
        },
        {
          no: 47,
          text: "Arrange alphabetically.",
          options: [
            "Anchor, Angle, Animal, Ant",
            "Anchor, Animal, Angle, Ant",
            "Animal, Anchor, Ant, Angle",
            "Angle, Anchor, Animal, Ant",
          ],
        },
        {
          no: 48,
          text: "Find the odd one.",
          options: [
            "Finger : Hand",
            "Wheel : Car",
            "Feather : Bird",
            "Root : Leaf",
          ],
        },
        {
          no: 49,
          text: "Complete the analogy. Book : Read :: Food : _____",
          options: ["Buy", "Eat", "Cook", "Smell"],
        },
        {
          no: 50,
          text: "Which sentence follows the same pattern? A fish swims.",
          options: [
            "A bird flies.",
            "A car drives.",
            "A book reads.",
            "A tree runs.",
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
      "B",
      "B",
      "A",
      "C",
      "C",
      "A",
      "B",
      "A",
      "B",
      "B",
      "C",
      "A",
      "B",
      "B",
      "B",
      "B",
      "C",
      "B",
    ],
    B: ["B", "B", "B", "A", "B", "A", "B", "B", "D", "A", "B", "B"],
    C: ["B", "C", "C", "C", "B", "C", "B", "B"],
    D: ["B", "B", "C", "A", "B", "A", "B", "D", "B", "A"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass4English() {
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

export default PracticePaperClass4English;

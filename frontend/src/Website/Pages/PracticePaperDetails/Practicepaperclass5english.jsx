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
  classLabel: "V",
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
          text: "She _____ to school every day.",
          options: ["go", "goes", "going", "gone"],
        },
        {
          no: 2,
          text: "They _____ football yesterday.",
          options: ["play", "played", "plays", "playing"],
        },
        {
          no: 3,
          text: "Choose the correct modal. You _____ finish your homework before playing.",
          options: ["should", "could", "might", "would"],
        },
        {
          no: 4,
          text: 'Passive voice of "The chef cooked the meal."',
          options: [
            "The meal cooked the chef.",
            "The meal was cooked by the chef.",
            "The chef was cooked.",
            "The meal is cooking.",
          ],
        },
        {
          no: 5,
          text: 'He said, "I am happy."',
          options: [
            "He said that he was happy.",
            "He said that I am happy.",
            "He says he happy.",
            "He told happy.",
          ],
        },
        {
          no: 6,
          text: "Which sentence is correct?",
          options: [
            "She don't like milk.",
            "She doesn't like milk.",
            "She doesn't likes milk.",
            "She not like milk.",
          ],
        },
        {
          no: 7,
          text: "Choose the correct determiner. _____ apples are sweet.",
          options: ["This", "These", "That", "A"],
        },
        {
          no: 8,
          text: "Which word is an adjective?",
          options: ["Quickly", "Beautiful", "Run", "Loudly"],
        },
        {
          no: 9,
          text: "Which sentence is in the Future Tense?",
          options: [
            "I went home.",
            "I will go home.",
            "I am going home yesterday.",
            "I have gone home.",
          ],
        },
        {
          no: 10,
          text: "Which sentence is correct?",
          options: [
            "The boys is playing.",
            "The boys are playing.",
            "The boys was playing.",
            "The boys has playing.",
          ],
        },
        {
          no: 11,
          text: "Which word is a pronoun?",
          options: ["Rahul", "Quickly", "They", "Happy"],
        },
        {
          no: 12,
          text: "Choose the correct article. She bought _____ umbrella.",
          options: ["a", "an", "the", "no article"],
        },
        {
          no: 13,
          text: "Which sentence is in passive voice?",
          options: [
            "Riya wrote a letter.",
            "A letter was written by Riya.",
            "Riya writes.",
            "Riya is writing.",
          ],
        },
        {
          no: 14,
          text: "Which is a verb?",
          options: ["Honest", "Jump", "Tall", "Beautiful"],
        },
        {
          no: 15,
          text: "Which sentence is correct?",
          options: [
            "Each boy have a book.",
            "Each boy has a book.",
            "Each boys has a book.",
            "Each boys have books.",
          ],
        },
        {
          no: 16,
          text: "Choose the correct preposition. The cat is hiding _____ the table.",
          options: ["under", "on", "into", "over"],
        },
        {
          no: 17,
          text: "Which sentence is in Present Perfect Tense?",
          options: [
            "I have completed my work.",
            "I completed my work.",
            "I complete my work.",
            "I had completed my work.",
          ],
        },
        {
          no: 18,
          text: "Which sentence is correct?",
          options: [
            "We was late.",
            "We were late.",
            "We is late.",
            "We be late.",
          ],
        },
        {
          no: 19,
          text: 'Synonym of "Huge" is:',
          options: ["Tiny", "Giant", "Small", "Narrow"],
        },
        {
          no: 20,
          text: 'Antonym of "Victory" is:',
          options: ["Success", "Defeat", "Prize", "Reward"],
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
          text: '"A piece of cake" means:',
          options: ["Easy", "Delicious", "Difficult", "Sweet"],
        },
        {
          no: 22,
          text: '"Look after" means:',
          options: ["Search", "Care for", "Throw away", "Hide"],
        },
        {
          no: 23,
          text: 'One-word substitution for "One who teaches":',
          options: ["Doctor", "Teacher", "Farmer", "Driver"],
        },
        {
          no: 24,
          text: "Which word has a prefix?",
          options: ["Replay", "Play", "Book", "Read"],
        },
        {
          no: 25,
          text: "Which word has a suffix?",
          options: ["Kindness", "Kind", "Happy", "Tree"],
        },
        {
          no: 26,
          text: '"Give up" means:',
          options: ["Continue", "Quit", "Begin", "Improve"],
        },
        {
          no: 27,
          text: 'Synonym of "Honest":',
          options: ["Truthful", "Lazy", "Clever", "Proud"],
        },
        {
          no: 28,
          text: 'Antonym of "Ancient":',
          options: ["Modern", "Old", "Historic", "Past"],
        },
        {
          no: 29,
          text: "Which is an idiom?",
          options: [
            "Red apple",
            "Spill the beans",
            "Tall building",
            "Blue sky",
          ],
        },
        {
          no: 30,
          text: "Which word is correctly spelled?",
          options: ["Beautifull", "Beautiful", "Beutiful", "Beautifulll"],
        },
        {
          no: 31,
          text: "Which sentence is correct?",
          options: [
            "He don't play.",
            "He doesn't play.",
            "He doesn't plays.",
            "He not plays.",
          ],
        },
        {
          no: 32,
          text: "Which sentence completes the paragraph?",
          options: [
            "An unrelated sentence",
            "A supporting sentence",
            "A joke",
            "A question",
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
        "Reading comprehension is an important skill. It helps students understand ideas, answer questions correctly, and improve vocabulary. Good readers focus on the main idea, identify important details, and understand the meaning of difficult words from the context.",
      questions: [
        {
          no: 33,
          text: "The main idea of a passage is:",
          options: [
            "The central thought",
            "The title",
            "The first word",
            "The last line",
          ],
        },
        {
          no: 34,
          text: "Which sentence is punctuated correctly?",
          options: ["Wow!", "Wow,", "Wow.", "Wow?"],
        },
        {
          no: 35,
          text: "Which is the odd one out?",
          options: ["Apple", "Mango", "Banana", "Car"],
        },
        {
          no: 36,
          text: "Bird : Nest :: Bee : _____",
          options: ["Hive", "Tree", "Sky", "Flower"],
        },
        {
          no: 37,
          text: "Which word comes first in dictionary order?",
          options: ["Brave", "Branch", "Bread", "Brick"],
        },
        {
          no: 38,
          text: "Complete the analogy. Book : Read :: Pen : _____",
          options: ["Write", "Eat", "Walk", "Sleep"],
        },
        {
          no: 39,
          text: "Which word does NOT belong?",
          options: ["Cat", "Dog", "Tiger", "Rose"],
        },
        {
          no: 40,
          text: "Which sentence is formal?",
          options: [
            "Please accept my application.",
            "Hey buddy!",
            "Cool!",
            "See you!",
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
          text: "Choose the correct sentence.",
          options: [
            "Neither of the girls have arrived.",
            "Neither of the girls has arrived.",
            "Neither girls has arrived.",
            "Neither girls have arrived.",
          ],
        },
        {
          no: 42,
          text: "Which sentence is grammatically correct?",
          options: [
            "Everybody enjoy the show.",
            "Everybody enjoys the show.",
            "Everybody enjoying the show.",
            "Everybody have enjoyed the show.",
          ],
        },
        {
          no: 43,
          text: 'Passive voice of "They have completed the project."',
          options: [
            "The project has been completed by them.",
            "The project was completed.",
            "The project is completed.",
            "The project completed them.",
          ],
        },
        {
          no: 44,
          text: 'Which idiom means "to reveal a secret"?',
          options: [
            "Hit the sack",
            "Spill the beans",
            "Break a leg",
            "Once in a blue moon",
          ],
        },
        {
          no: 45,
          text: "Which sentence uses the determiner correctly?",
          options: [
            "Much students came.",
            "Many students came.",
            "Many water.",
            "Much books.",
          ],
        },
        {
          no: 46,
          text: "Which pair is correctly matched?",
          options: [
            "Honest – Dishonest",
            "Brave – Bravery",
            "Happy – Happiness",
            "All of these",
          ],
        },
        {
          no: 47,
          text: 'Choose the correctly formed indirect speech. "I can swim," Ravi said.',
          options: [
            "Ravi said that he could swim.",
            "Ravi said he can swim.",
            "Ravi says he could swim.",
            "Ravi told could swim.",
          ],
        },
        {
          no: 48,
          text: "Doctor : Hospital :: Teacher : _____",
          options: ["School", "Market", "Airport", "Bank"],
        },
        {
          no: 49,
          text: "Which word is formed using both a prefix and a suffix?",
          options: ["Unhappiness", "Happiness", "Kindness", "Replay"],
        },
        {
          no: 50,
          text: "Choose the sentence with no grammatical error.",
          options: [
            "Hardly had the game begun when it started raining.",
            "Hardly the game had begun when it started raining.",
            "Hardly had the game begun than it started raining.",
            "Hardly game begun when it rained.",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "B",
      "B",
      "A",
      "B",
      "A",
      "B",
      "B",
      "B",
      "B",
      "B",
      "C",
      "B",
      "B",
      "B",
      "B",
      "A",
      "A",
      "B",
      "B",
      "B",
    ],
    B: ["A", "B", "B", "A", "A", "B", "A", "A", "B", "B", "B", "B"],
    C: ["A", "A", "D", "A", "A", "A", "D", "A"],
    D: ["B", "B", "A", "B", "B", "D", "A", "A", "A", "A"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass5English() {
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

export default PracticePaperClass5English;

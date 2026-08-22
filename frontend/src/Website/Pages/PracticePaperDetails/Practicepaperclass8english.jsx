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
  classLabel: "VIII",
  testType: "Practice Test",
  totalQuestions: 50,
  timeAllotted: "60 Minutes",
  maxMarks: 50,

  sections: [
    {
      id: "A",
      title: "Grammar and Language",
      range: "Q. 1 – 10",
      color: "blue",
      icon: "grammar",
      columns: 4,
      questions: [
        {
          no: 1,
          text: "Choose the correct sentence.",
          options: [
            "She do her homework daily.",
            "She does her homework daily.",
            "She doing her homework daily.",
            "She has do her homework daily.",
          ],
        },
        {
          no: 2,
          text: "Fill in the blank: I _____ a letter yesterday.",
          options: ["write", "writes", "wrote", "written"],
        },
        {
          no: 3,
          text: "Choose the correct article: _____ elephant is a huge animal.",
          options: ["A", "An", "The", "No article"],
        },
        {
          no: 4,
          text: "Which word is a pronoun?",
          options: ["Quickly", "Happy", "They", "Running"],
        },
        {
          no: 5,
          text: "Fill in the blank: She is afraid _____ dogs.",
          options: ["from", "with", "of", "by"],
        },
        {
          no: 6,
          text: "Choose the correct conjunction: Work hard _____ you will succeed.",
          options: ["and", "but", "because", "although"],
        },
        {
          no: 7,
          text: "Which sentence is interrogative?",
          options: [
            "Close the door.",
            "How beautiful!",
            "Are you ready?",
            "I am ready.",
          ],
        },
        {
          no: 8,
          text: 'Choose the correct passive voice: "The teacher praised the student."',
          options: [
            "The student is praised by the teacher.",
            "The student was praised by the teacher.",
            "The student had praised the teacher.",
            "The teacher was praised.",
          ],
        },
        {
          no: 9,
          text: "Identify the adjective: The blue sky looked beautiful.",
          options: ["sky", "looked", "blue", "beautiful"],
        },
        {
          no: 10,
          text: "Which sentence is exclamatory?",
          options: [
            "Please sit down.",
            "The sky is blue.",
            "What a lovely painting!",
            "Are you ready?",
          ],
        },
      ],
    },
    {
      id: "B",
      title: "Vocabulary",
      range: "Q. 11 – 20",
      color: "green",
      icon: "vocab",
      columns: 3,
      questions: [
        {
          no: 11,
          text: "Fill in the blank: I have lived here _____ five years.",
          options: ["since", "for", "from", "by"],
        },
        {
          no: 12,
          text: "Choose the correct modal: You _____ obey your parents.",
          options: ["should", "may", "can", "might"],
        },
        {
          no: 13,
          text: "Which word is an adverb?",
          options: ["Happiness", "Softly", "Clever", "Beauty"],
        },
        {
          no: 14,
          text: "Choose the correct sentence.",
          options: [
            "The children was playing.",
            "The children were playing.",
            "The children is playing.",
            "The children has playing.",
          ],
        },
        {
          no: 15,
          text: "Which of the following is a proper noun?",
          options: ["city", "river", "Delhi", "country"],
        },
        {
          no: 16,
          text: "Synonym of 'Honest' is:",
          options: ["Truthful", "Dishonest", "Lazy", "Proud"],
        },
        {
          no: 17,
          text: "Antonym of 'Victory' is:",
          options: ["Success", "Triumph", "Defeat", "Glory"],
        },
        {
          no: 18,
          text: "One-word substitution for 'A person who cannot hear' is:",
          options: ["Blind", "Dumb", "Deaf", "Lame"],
        },
        {
          no: 19,
          text: "'Once in a blue moon' means:",
          options: ["Daily", "Rarely", "Monthly", "Suddenly"],
        },
        {
          no: 20,
          text: "Choose the correctly spelt word.",
          options: ["Separate", "Seperate", "Separete", "Seperete"],
        },
      ],
    },
    {
      id: "C",
      title: "Reading Comprehension",
      range: "Q. 21 – 40",
      color: "purple",
      icon: "reading",
      columns: 1,
      questions: [
        {
          no: 21,
          text: "The opposite of 'Generous' is:",
          options: ["Kind", "Noble", "Selfish", "Helpful"],
        },
        {
          no: 22,
          text: "One-word substitution for 'A person who loves books.'",
          options: ["Bibliophile", "Author", "Reader", "Poet"],
        },
        {
          no: 23,
          text: "'A blessing in disguise' means:",
          options: [
            "A hidden enemy",
            "Something good at first",
            "Something good that seemed bad initially",
            "A secret gift",
          ],
        },
        {
          no: 24,
          text: "Synonym of 'Ancient' is:",
          options: ["New", "Old", "Modern", "Recent"],
        },
        {
          no: 25,
          text: "'Hit the nail on the head' means:",
          options: [
            "Strike a nail",
            "Speak exactly right",
            "Hurt someone",
            "Miss the point",
          ],
        },
        {
          no: 26,
          text: "Doctor : Hospital :: Teacher : ?",
          options: ["Book", "School", "Student", "Classroom"],
        },
        {
          no: 27,
          text: "Find the odd one out.",
          options: ["Rose", "Lily", "Lotus", "Potato"],
        },
        {
          no: 28,
          text: "Arrange logically: Egg → Caterpillar → Pupa → Butterfly",
          options: ["1,2,3,4", "2,1,3,4", "1,3,2,4", "4,3,2,1"],
        },
        {
          no: 29,
          text: "If CAT is coded as DBU, then BAT is coded as:",
          options: ["CBU", "DBU", "CBU", "CBU"],
        },
        {
          no: 30,
          text: "Which sentence contains a simile?",
          options: [
            "The classroom was a zoo.",
            "He fought like a lion.",
            "The stars danced.",
            "Time flies.",
          ],
        },
        {
          no: 31,
          text: "The figure of speech in 'The wind whispered' is:",
          options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
        },
        {
          no: 32,
          text: "Which word is closest in meaning to 'predict'?",
          options: ["Explain", "Foretell", "Observe", "Refuse"],
        },
        {
          no: 33,
          text: "Which pair shows antonyms?",
          options: [
            "Big–Large",
            "Happy–Joyful",
            "Buy–Purchase",
            "Brave–Cowardly",
          ],
        },
        {
          no: 34,
          text: "'The moon is a silver coin' is an example of:",
          options: ["Simile", "Metaphor", "Irony", "Hyperbole"],
        },
        {
          no: 35,
          text: "Which sentence is imperative?",
          options: [
            "What a beautiful day!",
            "Are you coming?",
            "Please open the window.",
            "The day is beautiful.",
          ],
        },
        {
          no: 36,
          text: "Find the odd one out.",
          options: ["Square", "Rectangle", "Circle", "Triangle"],
        },
        {
          no: 37,
          text: "'Break the ice' means:",
          options: [
            "Break something frozen",
            "Start a conversation",
            "End a friendship",
            "Feel cold",
          ],
        },
        {
          no: 38,
          text: "Which sentence is declarative?",
          options: [
            "Sit down.",
            "Are you ready?",
            "I like reading books.",
            "What a surprise!",
          ],
        },
        {
          no: 39,
          text: "Book : Author :: Poem : ?",
          options: ["Singer", "Poet", "Painter", "Dancer"],
        },
        {
          no: 40,
          text: "Which sentence contains personification?",
          options: [
            "The moon smiled at us.",
            "He is brave.",
            "She runs quickly.",
            "The moon is bright.",
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
          text: "Choose the sentence with correct subject-verb agreement.",
          options: [
            "Neither the players nor the captain are ready.",
            "Neither the captain nor the players is ready.",
            "Neither the captain nor the players are ready.",
            "Neither captain nor players is ready.",
          ],
        },
        {
          no: 42,
          text: "Which sentence contains an oxymoron?",
          options: [
            "Deafening silence filled the room.",
            "The room was quiet.",
            "The child laughed loudly.",
            "The river flowed gently.",
          ],
        },
        {
          no: 43,
          text: "Choose the correct sentence.",
          options: [
            "One of the boys have won the prize.",
            "One of the boys has won the prize.",
            "One of the boys were winning the prize.",
            "One of the boys are winners.",
          ],
        },
        {
          no: 44,
          text: "The phrase 'burn the midnight oil' means:",
          options: [
            "Waste electricity",
            "Work late into the night",
            "Start a fire",
            "Sleep late",
          ],
        },
        {
          no: 45,
          text: "Which sentence contains a metaphor?",
          options: [
            "He is as brave as a lion.",
            "He is a lion in battle.",
            "He fought bravely.",
            "He resembles a lion.",
          ],
        },
        {
          no: 46,
          text: "Which sentence is ambiguous?",
          options: [
            "I bought a new pen.",
            "Flying planes can be dangerous.",
            "The sun rises in the east.",
            "She is reading a book.",
          ],
        },
        {
          no: 47,
          text: "'The pen is mightier than the sword' uses:",
          options: ["Hyperbole", "Metonymy", "Simile", "Irony"],
        },
        {
          no: 48,
          text: "Which sentence has the correct parallel structure?",
          options: [
            "She likes singing, to dance and painting.",
            "She likes singing, dancing and painting.",
            "She likes to sing, dancing and painting.",
            "She likes singing, dancing and to paint.",
          ],
        },
        {
          no: 49,
          text: "Which sentence uses punctuation correctly?",
          options: [
            "However I agreed to his proposal.",
            "However, I agreed to his proposal.",
            "However; I agreed to his proposal.",
            "However I, agreed to his proposal.",
          ],
        },
        {
          no: 50,
          text: "Which sentence contains a restrictive clause?",
          options: [
            "My uncle, who lives in Mumbai, is a doctor.",
            "Students who work hard succeed.",
            "Mumbai, which is in Maharashtra, is a large city.",
            "Shakespeare, who wrote Hamlet, was English.",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: ["B", "C", "B", "C", "C", "A", "C", "B", "C", "C"],
    B: ["B", "A", "B", "B", "C", "A", "C", "C", "B", "A"],
    C: [
      "C",
      "A",
      "C",
      "B",
      "B",
      "B",
      "D",
      "A",
      "A",
      "B",
      "C",
      "B",
      "D",
      "B",
      "C",
      "C",
      "B",
      "C",
      "B",
      "A",
    ],
    D: ["C", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass8English() {
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

export default PracticePaperClass8English;

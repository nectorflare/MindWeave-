import React from "react";
import "./PracticePaperDetails.css";
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
  classLabel: "IX",
  testType: "Practice Test",
  totalQuestions: 50,
  timeAllotted: "60 Minutes",
  maxMarks: 50,

  sections: [
    {
      id: "A",
      title: "Grammar and Language",
      range: "Q. 1 – 25",
      color: "blue",
      icon: "grammar",
      columns: 4,
      questions: [
        {
          no: 1,
          text: "Choose the correct sentence.",
          options: [
            "Each of the boys have a bicycle.",
            "Each of the boys has a bicycle.",
            "Each of the boys are having a bicycle.",
            "Each boys have bicycles.",
          ],
        },
        {
          no: 2,
          text: "She _____ to school every day.",
          options: ["go", "goes", "going", "gone"],
        },
        {
          no: 3,
          text: 'Choose the correct passive voice: "They write letters."',
          options: [
            "Letters are written by them.",
            "Letters were written by them.",
            "Letters have been written by them.",
            "Letters are being written by them.",
          ],
        },
        {
          no: 4,
          text: 'Change into indirect speech: He said, "I am busy."',
          options: [
            "He said that he is busy.",
            "He said that I was busy.",
            "He said that he was busy.",
            "He said that he had been busy.",
          ],
        },
        {
          no: 5,
          text: "Choose the correct modal: You _____ wear a helmet while riding a bike.",
          options: ["may", "should", "can", "might"],
        },
        {
          no: 6,
          text: "Identify the adjective in: The intelligent student solved the puzzle.",
          options: ["student", "solved", "intelligent", "puzzle"],
        },
        {
          no: 7,
          text: "Choose the correctly punctuated sentence.",
          options: [
            "Yes I shall come tomorrow.",
            "Yes, I shall come tomorrow.",
            "Yes I, shall come tomorrow.",
            "Yes; I shall come tomorrow.",
          ],
        },
        {
          no: 8,
          text: "Fill in the blank: The train arrived _____ time.",
          options: ["in", "at", "on", "by"],
        },
        {
          no: 9,
          text: "Identify the adverb: He spoke softly.",
          options: ["He", "spoke", "softly", "none"],
        },
        {
          no: 10,
          text: "Which sentence is interrogative?",
          options: [
            "Shut the door.",
            "What a lovely day!",
            "Are you ready?",
            "I am happy.",
          ],
        },
        {
          no: 11,
          text: "Choose the correct conjunction: Work hard _____ you will succeed.",
          options: ["but", "and", "or", "because"],
        },
        {
          no: 12,
          text: "The opposite of 'victory' is:",
          options: ["success", "triumph", "defeat", "glory"],
        },
        {
          no: 13,
          text: "One-word substitution for 'A person who cannot read or write' is:",
          options: ["Scholar", "Literate", "Illiterate", "Author"],
        },
        {
          no: 14,
          text: "Choose the correctly spelt word.",
          options: ["Enviroment", "Environment", "Environmant", "Enviornment"],
        },
        {
          no: 15,
          text: "'Break down' means:",
          options: ["Repair", "Collapse", "Build", "Decorate"],
        },
        {
          no: 16,
          text: "Synonym of 'Brave':",
          options: ["Cowardly", "Courageous", "Weak", "Timid"],
        },
        {
          no: 17,
          text: "Antonym of 'Ancient':",
          options: ["Old", "Historic", "Modern", "Traditional"],
        },
        {
          no: 18,
          text: "'A blessing in disguise' means:",
          options: [
            "A hidden curse",
            "Something good appearing bad initially",
            "A fake blessing",
            "A surprise gift",
          ],
        },
        {
          no: 19,
          text: "One-word substitution for 'A person who loves mankind':",
          options: ["Philanthropist", "Miser", "Patriot", "Scientist"],
        },
        {
          no: 20,
          text: "Choose the odd one out.",
          options: ["Novel", "Drama", "Poem", "Dictionary"],
        },
        {
          no: 21,
          text: "Book : Author :: Painting : ?",
          options: ["Poet", "Artist", "Singer", "Dancer"],
        },
        {
          no: 22,
          text: "Find the correctly spelt word.",
          options: ["Privilege", "Priviledge", "Privelege", "Privilage"],
        },
        {
          no: 23,
          text: "'Hit the nail on the head' means:",
          options: [
            "To make a mistake",
            "To hurt someone",
            "To say exactly the right thing",
            "To hammer a nail",
          ],
        },
        {
          no: 24,
          text: "Choose the synonym of 'Generous'.",
          options: ["Selfish", "Kind", "Angry", "Mean"],
        },
        {
          no: 25,
          text: "'To bury the hatchet' means:",
          options: [
            "Dig a hole",
            "Start a fight",
            "End a quarrel",
            "Hide something",
          ],
        },
      ],
    },
    {
      id: "B",
      title: "Vocabulary",
      range: "Q. 26 – 50",
      color: "green",
      icon: "vocab",
      columns: 3,
      questions: [
        {
          no: 26,
          text: "Which word does not belong?",
          options: ["Rose", "Lily", "Lotus", "Mango"],
        },
        {
          no: 27,
          text: "Doctor : Hospital :: Teacher : ?",
          options: ["Student", "School", "Book", "Library"],
        },
        {
          no: 28,
          text: "Arrange logically: Seed → Plant → Flower → Fruit",
          options: ["1,2,3,4", "1,3,2,4", "2,1,3,4", "4,3,2,1"],
        },
        {
          no: 29,
          text: "If CAT is coded as DBU, then DOG is coded as:",
          options: ["EPH", "FQI", "EPH", "DPH"],
        },
        {
          no: 30,
          text: "Find the odd one out.",
          options: ["Square", "Rectangle", "Circle", "Triangle"],
        },
        {
          no: 31,
          text: '"The stars danced in the sky." The figure of speech is:',
          options: ["Simile", "Hyperbole", "Personification", "Metaphor"],
        },
        {
          no: 32,
          text: '"As busy as a bee" is an example of:',
          options: ["Simile", "Metaphor", "Irony", "Oxymoron"],
        },
        {
          no: 33,
          text: "Which sentence contains a metaphor?",
          options: [
            "He runs like a deer.",
            "He is a lion in battle.",
            "The moon is bright.",
            "She sings beautifully.",
          ],
        },
        {
          no: 34,
          text: '"The classroom was a zoo." The figure of speech is:',
          options: ["Metaphor", "Simile", "Irony", "Personification"],
        },
        {
          no: 35,
          text: "Which sentence is imperative?",
          options: [
            "What a lovely flower!",
            "Please close the window.",
            "Are you ready?",
            "I like music.",
          ],
        },
        {
          no: 36,
          text: 'Which word is closest in meaning to "predict"?',
          options: ["Explain", "Foretell", "Observe", "Refuse"],
        },
        {
          no: 37,
          text: "The phrase 'once in a blue moon' means:",
          options: ["Every day", "Very often", "Very rarely", "At night"],
        },
        {
          no: 38,
          text: "Which sentence is exclamatory?",
          options: [
            "Open the gate.",
            "How beautiful the rainbow is!",
            "Are you fine?",
            "The rainbow is beautiful.",
          ],
        },
        {
          no: 39,
          text: "Which pair shows antonyms?",
          options: [
            "Big–Large",
            "Honest–Truthful",
            "Buy–Purchase",
            "Victory–Defeat",
          ],
        },
        {
          no: 40,
          text: '"All the world\'s a stage" is an example of:',
          options: ["Simile", "Personification", "Metaphor", "Hyperbole"],
        },
        {
          no: 41,
          text: "Choose the sentence with correct subject-verb agreement.",
          options: [
            "Neither the teachers nor the principal are present.",
            "Neither the principal nor the teachers is present.",
            "Neither the principal nor the teachers are present.",
            "Neither principal nor teachers is present.",
          ],
        },
        {
          no: 42,
          text: "Identify the sentence containing a dangling modifier.",
          options: [
            "Walking through the park, the flowers looked beautiful.",
            "Walking through the park, I admired the flowers.",
            "I admired the flowers while walking.",
            "The flowers were beautiful.",
          ],
        },
        {
          no: 43,
          text: "Which sentence contains an oxymoron?",
          options: [
            "Deafening silence filled the room.",
            "The child laughed loudly.",
            "The moon shone brightly.",
            "The river flowed gently.",
          ],
        },
        {
          no: 44,
          text: '"The pen is mightier than the sword" uses:',
          options: ["Irony", "Hyperbole", "Metonymy", "Simile"],
        },
        {
          no: 45,
          text: "Which sentence uses the subjunctive mood correctly?",
          options: [
            "If I was a bird…",
            "If I were a bird…",
            "If I am a bird…",
            "If I had been a bird…",
          ],
        },
        {
          no: 46,
          text: "Choose the sentence with correct parallel structure.",
          options: [
            "She likes reading, dancing and to swim.",
            "She likes reading, dancing and swimming.",
            "She likes to read, dancing and swimming.",
            "She likes reading, to dance and swimming.",
          ],
        },
        {
          no: 47,
          text: 'In semantics, the relationship between "teacher" and "educator" is:',
          options: ["Antonymy", "Converseness", "Synonymy", "Hyponymy"],
        },
        {
          no: 48,
          text: "Which sentence contains a restrictive clause?",
          options: [
            "My brother, who lives in Jaipur, is a doctor.",
            "Students who practise regularly excel in sports.",
            "Jaipur, which is in Rajasthan, is famous for forts.",
            "Shakespeare, who wrote Hamlet, was English.",
          ],
        },
        {
          no: 49,
          text: "Which sentence is ambiguous?",
          options: [
            "The girl sang a song.",
            "Flying planes can be dangerous.",
            "I bought a new book.",
            "The sun rises in the east.",
          ],
        },
        {
          no: 50,
          text: '"Rarely had I witnessed such courage" illustrates:',
          options: ["Apposition", "Inversion", "Parallelism", "Ellipsis"],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "B",
      "B",
      "A",
      "C",
      "B",
      "C",
      "B",
      "C",
      "C",
      "C",
      "B",
      "C",
      "C",
      "B",
      "B",
      "B",
      "C",
      "B",
      "A",
      "D",
    ],
    B: [
      "B",
      "A",
      "C",
      "B",
      "C",
      "D",
      "B",
      "A",
      "A",
      "C",
      "C",
      "A",
      "B",
      "A",
      "B",
      "B",
      "C",
      "B",
      "D",
      "C",
    ],
    C: ["C", "A", "A", "C", "B", "B", "C", "B", "B", "B"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass9English() {
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

export default PracticePaperClass9English;

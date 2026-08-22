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
  classLabel: "X",
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
          text: "Fill in the blank. She _____ to school every day.",
          options: ["go", "goes", "going", "gone"],
        },
        {
          no: 3,
          text: "Choose the correct passive voice. 'They write letters.'",
          options: [
            "Letters are written by them.",
            "Letters were written by them.",
            "Letters have been written by them.",
            "Letters are being written by them.",
          ],
        },
        {
          no: 4,
          text: "Change into indirect speech. He said, 'I am busy.'",
          options: [
            "He said that he is busy.",
            "He said that I was busy.",
            "He said that he was busy.",
            "He said that he had been busy.",
          ],
        },
        {
          no: 5,
          text: "Choose the correct modal. You _____ wear a helmet while riding a bike.",
          options: ["may", "should", "can", "might"],
        },
        {
          no: 6,
          text: "Identify the adjective. 'The intelligent student solved the puzzle.'",
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
          text: "Fill in the blank. The train arrived _____ time.",
          options: ["in", "at", "on", "by"],
        },
        {
          no: 9,
          text: "Identify the adverb. 'He spoke softly.'",
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
          text: "Choose the correct conjunction.",
          options: ["but", "and", "or", "because"],
        },
        {
          no: 12,
          text: "The opposite of 'victory' is:",
          options: ["success", "triumph", "defeat", "glory"],
        },
        {
          no: 13,
          text: "One-word substitution for 'A person who cannot read or write'.",
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
          text: "Synonym of 'Brave'.",
          options: ["Cowardly", "Courageous", "Weak", "Timid"],
        },
        {
          no: 17,
          text: "Antonym of 'Ancient'.",
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
          text: "One-word substitution for 'A person who loves mankind'.",
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
          options: ["Artist", "Poet", "Singer", "Dancer"],
        },
        {
          no: 22,
          text: "Find the correctly spelt word.",
          options: ["Privilege", "Priviledge", "Privelege", "Privilage"],
        },
        {
          no: 23,
          text: "The phrase 'Hit the nail on the head' means:",
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
          text: "Arrange logically. Seed → Sapling → Plant → Tree",
          options: ["2,1,3,4", "1,2,3,4", "3,2,1,4", "4,3,2,1"],
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
          text: "The stars danced in the sky. Figure of speech:",
          options: ["Simile", "Hyperbole", "Personification", "Metaphor"],
        },
        {
          no: 32,
          text: "'As busy as a bee' is an example of:",
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
          text: "'The classroom was a zoo.' Figure of speech:",
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
          text: "Which word is closest in meaning to 'predict'?",
          options: ["Explain", "Foretell", "Observe", "Refuse"],
        },
        {
          no: 37,
          text: "Once in a blue moon means:",
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
          text: "All the world's a stage is an example of:",
          options: ["Simile", "Personification", "Metaphor", "Hyperbole"],
        },
        {
          no: 41,
          text: "Choose correct subject-verb agreement.",
          options: [
            "Neither the teachers nor the principal are present.",
            "Neither the teachers nor the principal was present.",
            "Neither the teachers nor the principal is present.",
            "Neither teachers nor principal were present.",
          ],
        },
        {
          no: 42,
          text: "Identify dangling modifier.",
          options: [
            "Walking down the road, I saw a peacock.",
            "Walking down the road, a peacock was seen.",
            "I saw a peacock walking down the road.",
            "While I was walking, I saw a peacock.",
          ],
        },
        {
          no: 43,
          text: "The word 'fast' (speed vs fasting) illustrates:",
          options: ["Synonymy", "Homonymy", "Antonymy", "Collocation"],
        },
        {
          no: 44,
          text: "Committee have disagreed means committee is viewed as:",
          options: [
            "A unit",
            "An institution",
            "Individuals acting separately",
            "A legal body",
          ],
        },
        {
          no: 45,
          text: "'Rarely have I seen such brilliance' illustrates:",
          options: ["Ellipsis", "Inversion", "Parallelism", "Apposition"],
        },
        {
          no: 46,
          text: "Choose restrictive clause sentence:",
          options: [
            "My brother, who lives in Delhi, is a doctor.",
            "Students who work hard succeed.",
            "Delhi, which is India's capital, is crowded.",
            "Shakespeare, who wrote Hamlet, was English.",
          ],
        },
        {
          no: 47,
          text: "'The pen is mightier than the sword' uses:",
          options: ["Metonymy", "Irony", "Hyperbole", "Euphemism"],
        },
        {
          no: 48,
          text: "Correct sentence:",
          options: [
            "Neither the teachers nor the principal were present.",
            "Neither the teachers nor the principal was present.",
            "Neither the teachers nor the principal are present.",
            "Neither teachers nor principal were present.",
          ],
        },
        {
          no: 49,
          text: "Buy : Sell is:",
          options: ["Synonymy", "Hyponymy", "Antonymy", "Converseness"],
        },
        {
          no: 50,
          text: "Correct subjunctive sentence:",
          options: [
            "If I was you, I would apologise.",
            "If I were you, I would apologise.",
            "If I am you, I would apologise.",
            "If I had been you, I would apologise.",
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
      "A",
      "C",
      "B",
      "D",
      "C",
    ],
    C: ["C", "A", "A", "C", "B", "B", "C", "B", "D", "B"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass10English() {
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

export default PracticePaperClass10English;

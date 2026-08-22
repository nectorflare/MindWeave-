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
  classLabel: "VII",
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
          text: "She _____ to school before it started raining.",
          options: ["goes", "went", "had gone", "has gone"],
        },
        {
          no: 2,
          text: 'The passive form of "They are building a bridge" is:',
          options: [
            "A bridge built by them.",
            "A bridge is being built by them.",
            "A bridge has been built.",
            "A bridge was built.",
          ],
        },
        {
          no: 3,
          text: 'He said, "I am tired."',
          options: [
            "He said that he was tired.",
            "He said that I am tired.",
            "He says he was tired.",
            "He told I was tired.",
          ],
        },
        {
          no: 4,
          text: "Neither the teacher nor the students _____ present.",
          options: ["was", "were", "is", "has"],
        },
        {
          no: 5,
          text: "If I _____ rich, I would travel the world.",
          options: ["am", "was", "were", "will be"],
        },
        {
          no: 6,
          text: "Identify the subordinate clause: I know that she is honest.",
          options: ["I know", "that she is honest", "she is", "honest"],
        },
        {
          no: 7,
          text: "Choose the correct sentence.",
          options: [
            "Each of the boys have a pen.",
            "Each of the boys has a pen.",
            "Each boys has a pen.",
            "Each boy have a pen.",
          ],
        },
        {
          no: 8,
          text: 'The correct passive voice of "Open the door."',
          options: [
            "Let the door be opened.",
            "Door is opened.",
            "Opened the door.",
            "Door has opened.",
          ],
        },
        {
          no: 9,
          text: "Which sentence is grammatically correct?",
          options: [
            "She don't like tea.",
            "She doesn't likes tea.",
            "She doesn't like tea.",
            "She not like tea.",
          ],
        },
        {
          no: 10,
          text: "Which is a conditional sentence?",
          options: [
            "I know him.",
            "If you work hard, you will succeed.",
            "She sings.",
            "We arrived yesterday.",
          ],
        },
        {
          no: 11,
          text: "Which sentence uses the present perfect tense?",
          options: [
            "I finished my work.",
            "I have finished my work.",
            "I finish my work.",
            "I had finished my work.",
          ],
        },
        {
          no: 12,
          text: "Choose the correct option.",
          options: [
            "The news are good.",
            "The news is good.",
            "The news were good.",
            "The news have good.",
          ],
        },
        {
          no: 13,
          text: "The opposite of active voice is:",
          options: ["Direct speech", "Passive voice", "Narration", "Clause"],
        },
        {
          no: 14,
          text: "Which sentence contains an adjective clause?",
          options: [
            "I know the boy who won.",
            "He runs fast.",
            "She sings sweetly.",
            "We laughed loudly.",
          ],
        },
        {
          no: 15,
          text: '"Had I known…" expresses:',
          options: [
            "Present fact",
            "Past unreal condition",
            "Future plan",
            "Habit",
          ],
        },
        {
          no: 16,
          text: "Which sentence is correct?",
          options: [
            "One of the girls are absent.",
            "One of the girls is absent.",
            "One of the girl are absent.",
            "One girls is absent.",
          ],
        },
        {
          no: 17,
          text: '"Unless you hurry, you will miss the bus." Means:',
          options: [
            "If you hurry",
            "If you do not hurry",
            "If you have hurried",
            "If you hurried",
          ],
        },
        {
          no: 18,
          text: "Which is an independent clause?",
          options: [
            "Because he was late",
            "Although it rained",
            "She completed her work",
            "When I arrived",
          ],
        },
        {
          no: 19,
          text: '"Break the ice" means:',
          options: [
            "Damage ice",
            "Start a conversation",
            "Win a prize",
            "Feel cold",
          ],
        },
        {
          no: 20,
          text: "One-word substitution for 'A person who loves mankind':",
          options: ["Philanthropist", "Miser", "Patriot", "Optimist"],
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
          text: '"Look after" means:',
          options: ["Search", "Care for", "Reject", "Escape"],
        },
        {
          no: 22,
          text: 'Root word of "Biology":',
          options: ["Bio", "Logy", "Biol", "Ology"],
        },
        {
          no: 23,
          text: 'Synonym of "Diligent":',
          options: ["Lazy", "Careless", "Hardworking", "Weak"],
        },
        {
          no: 24,
          text: 'Antonym of "Scarce":',
          options: ["Rare", "Plenty", "Few", "Small"],
        },
        {
          no: 25,
          text: '"Spill the beans" means:',
          options: [
            "Cook food",
            "Reveal a secret",
            "Waste food",
            "Plant seeds",
          ],
        },
        {
          no: 26,
          text: 'Which word contains the root meaning "write"?',
          options: ["Describe", "Predict", "Subscribe", "All of these"],
        },
        {
          no: 27,
          text: '"Call off" means:',
          options: ["Continue", "Cancel", "Start", "Delay"],
        },
        {
          no: 28,
          text: 'One-word substitution for "One who cannot read or write":',
          options: ["Scholar", "Illiterate", "Literate", "Author"],
        },
        {
          no: 29,
          text: 'The root "tele" means:',
          options: ["Earth", "Sound", "Distance", "Water"],
        },
        {
          no: 30,
          text: '"Hit the nail on the head" means:',
          options: [
            "Work hard",
            "Be exactly right",
            "Repair furniture",
            "Fail badly",
          ],
        },
        {
          no: 31,
          text: "Which is an error-free sentence?",
          options: [
            "She enjoy reading.",
            "She enjoys reading.",
            "She enjoying reading.",
            "She enjoyeds reading.",
          ],
        },
        {
          no: 32,
          text: 'Choose the correct transformation: "He is too weak to walk."',
          options: [
            "He is so weak that he cannot walk.",
            "He is weak enough to walk.",
            "He can walk.",
            "None",
          ],
        },
      ],
    },
    {
      id: "C",
      title: "Reading Comprehension",
      range: "Q. 33 – 44",
      color: "purple",
      icon: "reading",
      columns: 1,
      questions: [
        {
          no: 33,
          text: "The main idea of a passage is:",
          options: [
            "A small detail",
            "Central message",
            "Difficult word",
            "Title only",
          ],
        },
        {
          no: 34,
          text: "Inference means:",
          options: [
            "Guess based on evidence",
            "Memorization",
            "Copying",
            "Editing",
          ],
        },
        {
          no: 35,
          text: "Which sentence completes a paragraph logically?",
          options: ["Random idea", "Supporting idea", "Unrelated fact", "Joke"],
        },
        {
          no: 36,
          text: "Which punctuation is correct?",
          options: [
            "Lets eat, Grandma!",
            "Let's eat, Grandma!",
            "Lets eat Grandma.",
            "Lets, eat Grandma!",
          ],
        },
        {
          no: 37,
          text: "Error spotting: Each of the players have arrived.",
          options: ["Each", "players", "have", "arrived"],
        },
        {
          no: 38,
          text: "Which sentence is coherent?",
          options: [
            "It rained. Therefore, the roads became wet.",
            "It rained. Apples are fruits.",
            "Books are useful. I slept.",
            "None",
          ],
        },
        {
          no: 39,
          text: "Which word best completes the sentence: The speaker was _____ enough to convince everyone.",
          options: ["persuade", "persuasive", "persuasion", "persuading"],
        },
        {
          no: 40,
          text: "Which sentence is formal?",
          options: [
            "What's up?",
            "Kindly accept my application.",
            "Cool!",
            "See ya!",
          ],
        },
        {
          no: 41,
          text: "If neither of the proposals _____ accepted, the committee _____ reconsider the matter.",
          options: ["is, will", "are, will", "was, would", "has, shall"],
        },
        {
          no: 42,
          text: "Identify the sentence with the correct sequence of tenses.",
          options: [
            "He said he is coming.",
            "He said he was coming.",
            "He says he was coming yesterday.",
            "He said he comes.",
          ],
        },
        {
          no: 43,
          text: 'Which option correctly transforms: "No sooner had I reached than it started raining."',
          options: [
            "As soon as I reached, it started raining.",
            "Hardly I reached.",
            "After reaching.",
            "None",
          ],
        },
        {
          no: 44,
          text: "Choose the correctly punctuated sentence.",
          options: [
            "However if you insist I shall agree.",
            "However, if you insist, I shall agree.",
            "However if you insist, I shall agree",
            "However, if you insist I shall agree.",
          ],
        },
      ],
    },
    {
      id: "D",
      title: "Verbal Reasoning & Logical Reasoning",
      range: "Q. 45 – 50",
      color: "orange",
      icon: "reasoning",
      columns: 4,
      questions: [
        {
          no: 45,
          text: "Which sentence contains an elliptical clause?",
          options: [
            "She can play the guitar, and he can too.",
            "She played yesterday.",
            "He is reading.",
            "They arrived early.",
          ],
        },
        {
          no: 46,
          text: 'Which word is formed from the Latin root meaning "light"?',
          options: ["Illuminate", "Eliminate", "Illustrate", "Illegal"],
        },
        {
          no: 47,
          text: "Choose the sentence free from ambiguity.",
          options: [
            "Visiting relatives can be boring.",
            "The police arrested the thief with a gun.",
            "The committee approved the proposal unanimously.",
            "Flying planes can be dangerous.",
          ],
        },
        {
          no: 48,
          text: "Which option best completes the analogy? Ephemeral : Permanent :: Transparent : ?",
          options: ["Clear", "Opaque", "Bright", "Colourful"],
        },
        {
          no: 49,
          text: "Which sentence contains a mixed conditional?",
          options: [
            "If I study, I will pass.",
            "If I had studied, I would be confident now.",
            "If I were you, I would go.",
            "If it rains, we stay home.",
          ],
        },
        {
          no: 50,
          text: "Which sentence is grammatically and logically perfect?",
          options: [
            "Hardly had he entered when the bell rang.",
            "Hardly he had entered when the bell rang.",
            "Hardly had he entered than the bell rang.",
            "Hardly he entered than the bell rang.",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "C",
      "B",
      "A",
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
      "A",
      "B",
      "B",
      "B",
      "C",
      "B",
      "A",
    ],
    B: ["B", "A", "C", "B", "B", "D", "B", "B", "C", "B", "B", "A"],
    C: ["B", "A", "B", "B", "C", "A", "B", "B", "A", "B", "A", "B"],
    D: ["A", "C", "B", "B", "A"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass7English() {
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

export default PracticePaperClass7English;

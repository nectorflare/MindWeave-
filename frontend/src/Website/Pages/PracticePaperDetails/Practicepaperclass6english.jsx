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
  classLabel: "VI",
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
          text: "She _____ her homework before dinner.",
          options: ["complete", "completed", "had completed", "completing"],
        },
        {
          no: 2,
          text: 'The passive form of "The teacher praised the student" is:',
          options: [
            "The student praised the teacher.",
            "The student was praised by the teacher.",
            "The student is praised.",
            "The teacher was praised.",
          ],
        },
        {
          no: 3,
          text: 'He said, "I will help you."',
          options: [
            "He said that he will help me.",
            "He said that he would help me.",
            "He told he would help me.",
            "He says he would help me.",
          ],
        },
        {
          no: 4,
          text: "We _____ obey our parents.",
          options: ["should", "can", "might", "could"],
        },
        {
          no: 5,
          text: "Which sentence is correct?",
          options: [
            "She don't sing.",
            "She doesn't sings.",
            "She doesn't sing.",
            "She not sings.",
          ],
        },
        {
          no: 6,
          text: "Which is a phrase?",
          options: [
            "Because he was ill",
            "Running quickly",
            "When she arrived",
            "If I knew",
          ],
        },
        {
          no: 7,
          text: "Which is a clause?",
          options: [
            "In the park",
            "Running fast",
            "Because he was late",
            "After lunch",
          ],
        },
        {
          no: 8,
          text: "The opposite of active voice is:",
          options: ["Direct speech", "Passive voice", "Narration", "Tense"],
        },
        {
          no: 9,
          text: "Which sentence is in Present Perfect Tense?",
          options: [
            "I ate lunch.",
            "I have eaten lunch.",
            "I had eaten lunch.",
            "I eat lunch.",
          ],
        },
        {
          no: 10,
          text: 'Choose the correct modal. "You _____ wear a helmet while riding."',
          options: ["should", "may", "might", "could"],
        },
        {
          no: 11,
          text: "Which sentence is correct?",
          options: [
            "The team are winning.",
            "The team is winning.",
            "The team were winning.",
            "The team have winning.",
          ],
        },
        {
          no: 12,
          text: 'Passive form of "Close the window."',
          options: [
            "Let the window be closed.",
            "Window closed.",
            "Close the window.",
            "The window closes.",
          ],
        },
        {
          no: 13,
          text: "Which is an interrogative sentence?",
          options: [
            "Open the door.",
            "How beautiful!",
            "Where do you live?",
            "I live in Delhi.",
          ],
        },
        {
          no: 14,
          text: "Which word is a modal verb?",
          options: ["Run", "Should", "Happy", "Quickly"],
        },
        {
          no: 15,
          text: '"If I had money..." expresses:',
          options: ["Wish", "Command", "Question", "Habit"],
        },
        {
          no: 16,
          text: "Which sentence contains a phrase?",
          options: [
            "After the rain",
            "Because he came",
            "Since she arrived",
            "If you study",
          ],
        },
        {
          no: 17,
          text: "Which sentence is correct?",
          options: [
            "Everyone have a book.",
            "Everyone has a book.",
            "Everyone are reading.",
            "Everyone were happy.",
          ],
        },
        {
          no: 18,
          text: 'Which tense is used? "They were playing cricket."',
          options: [
            "Present Continuous",
            "Past Continuous",
            "Future Continuous",
            "Past Perfect",
          ],
        },
        {
          no: 19,
          text: 'Synonym of "Brave":',
          options: ["Coward", "Fearless", "Weak", "Shy"],
        },
        {
          no: 20,
          text: 'Antonym of "Ancient":',
          options: ["Old", "Modern", "Historic", "Traditional"],
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
          text: '"Once in a blue moon" means:',
          options: ["Every day", "Very rarely", "Always", "Suddenly"],
        },
        {
          no: 22,
          text: '"A blessing in disguise" means:',
          options: [
            "A hidden danger",
            "Something good that first seemed bad",
            "A surprise gift",
            "A secret",
          ],
        },
        {
          no: 23,
          text: 'One-word substitution for "A person who cannot hear":',
          options: ["Blind", "Deaf", "Dumb", "Lame"],
        },
        {
          no: 24,
          text: 'Which word has the root meaning "water"?',
          options: ["Hydrate", "Biology", "Telephone", "Geography"],
        },
        {
          no: 25,
          text: '"Look into" means:',
          options: ["Search carefully", "Investigate", "Ignore", "Escape"],
        },
        {
          no: 26,
          text: 'Which word means "very happy"?',
          options: ["Miserable", "Joyful", "Angry", "Lazy"],
        },
        {
          no: 27,
          text: '"Break down" means:',
          options: ["Repair", "Stop working", "Build", "Decorate"],
        },
        {
          no: 28,
          text: 'Which word has the prefix "un-"?',
          options: ["Useful", "Unhappy", "Careful", "Playing"],
        },
        {
          no: 29,
          text: "Proverbs are:",
          options: ["Poems", "Wise sayings", "Stories", "Jokes"],
        },
        {
          no: 30,
          text: '"At the eleventh hour" means:',
          options: ["Early", "At the last moment", "Tomorrow", "Very slowly"],
        },
        {
          no: 31,
          text: "Which sentence is correct?",
          options: [
            "He go to school.",
            "He goes to school.",
            "He going school.",
            "He gone school.",
          ],
        },
        {
          no: 32,
          text: "Error Spotting: She don't know the answer.",
          options: ["She", "don't", "know", "answer"],
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
      passage:
        "Reading comprehension is an important skill. It helps students understand ideas, answer questions correctly, and improve vocabulary. Good readers focus on the main idea, identify important details, and understand the meaning of difficult words from the context.",
      questions: [
        {
          no: 33,
          text: "Choose the correct sentence.",
          options: [
            "We was happy.",
            "We were happy.",
            "We is happy.",
            "We be happy.",
          ],
        },
        {
          no: 34,
          text: "The main idea of a passage is:",
          options: [
            "The title only",
            "Central thought",
            "Last sentence",
            "First word",
          ],
        },
        {
          no: 35,
          text: "An inference is:",
          options: [
            "A direct fact",
            "A conclusion based on clues",
            "A heading",
            "A quotation",
          ],
        },
        {
          no: 36,
          text: "Which punctuation is correct?",
          options: ["Wow!", "Wow.", "Wow?", "Wow,"],
        },
        {
          no: 37,
          text: "Which sentence is formal?",
          options: [
            "Hi buddy!",
            "Kindly send the documents.",
            "What's up?",
            "Cool!",
          ],
        },
        {
          no: 38,
          text: "Which sentence is correct?",
          options: [
            "The children plays.",
            "The children play.",
            "The children playing.",
            "The children is play.",
          ],
        },
        {
          no: 39,
          text: "Paragraph organization means:",
          options: [
            "Random sentences",
            "Logical order of ideas",
            "Copying",
            "Memorizing",
          ],
        },
        {
          no: 40,
          text: 'Which word fits? "The story was so _____ that everyone enjoyed it."',
          options: ["interest", "interesting", "interestedly", "interests"],
        },
        {
          no: 41,
          text: "Which sentence contains both a phrase and a clause?",
          options: [
            "Running fast, he won because he practised daily.",
            "He runs.",
            "After school.",
            "Quickly.",
          ],
        },
        {
          no: 42,
          text: 'Passive voice of "People speak English all over the world."',
          options: [
            "English speaks all over the world.",
            "English is spoken all over the world.",
            "English was spoken all over the world.",
            "English has spoken.",
          ],
        },
        {
          no: 43,
          text: "Which proverb best fits? 'Don't count your chickens before they hatch.'",
          options: [
            "Be patient.",
            "Don't expect success too early.",
            "Work hard.",
            "Never help others.",
          ],
        },
        {
          no: 44,
          text: "Which sentence is free from grammatical error?",
          options: [
            "Neither of the boys have arrived.",
            "Neither of the boys has arrived.",
            "Neither boys has arrived.",
            "Neither boys have arrived.",
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
          text: "Which word comes from the Greek root meaning 'life'?",
          options: ["Biology", "Geometry", "Geography", "Grammar"],
        },
        {
          no: 46,
          text: "He succeeded _____ hard work.",
          options: ["because", "because of", "due", "although"],
        },
        {
          no: 47,
          text: "Which sentence is in indirect speech?",
          options: [
            'She said, "I am ready."',
            "She said that she was ready.",
            'She says, "Ready!"',
            'She asked, "Ready?"',
          ],
        },
        {
          no: 48,
          text: "Which analogy is correct? Book : Read :: Food : _____",
          options: ["Eat", "Sleep", "Walk", "Write"],
        },
        {
          no: 49,
          text: "Which word does NOT belong?",
          options: ["Honest", "Truthful", "Sincere", "Dishonest"],
        },
        {
          no: 50,
          text: "Which sentence is grammatically perfect?",
          options: [
            "Hardly had the match begun when it started raining.",
            "Hardly the match had begun when it started raining.",
            "Hardly had the match begun than it started raining.",
            "Hardly match begun when it rained.",
          ],
        },
      ],
    },
  ],

  answerKey: {
    A: [
      "C",
      "B",
      "B",
      "A",
      "C",
      "B",
      "C",
      "B",
      "B",
      "A",
      "B",
      "A",
      "C",
      "B",
      "A",
      "A",
      "B",
      "B",
      "B",
      "B",
    ],
    B: ["B", "B", "B", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    C: ["B", "B", "B", "A", "B", "B", "B", "B"],
    D: ["A", "B", "B", "A", "D", "A"],
  },
};

const optionLetters = ["A", "B", "C", "D"];

const sectionIcons = {
  grammar: <FaSpellCheck />,
  vocab: <FaBookOpen />,
  reading: <FaBookOpen />,
  reasoning: <FaBrain />,
};

function PracticePaperClass6English() {
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

export default PracticePaperClass6English;

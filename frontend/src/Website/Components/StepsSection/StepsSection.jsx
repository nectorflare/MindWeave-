import "./StepsSection.css";

import registerImg from "../../../assets/register.png";
import studyKitImg from "../../../assets/study-kit.png";
import examImg from "../../../assets/exam.png";
import winnerImg from "../../../assets/winner.png";

const steps = [
  {
    id: "1",
    title: "Register Online",
    image: registerImg,
  },
  {
    id: "2",
    title: "Receive Study Kit",
    image: studyKitImg,
  },
  {
    id: "3",
    title: "Appear for Exam",
    image: examImg,
  },
  {
    id: "4",
    title: "Win & Celebrate",
    image: winnerImg,
  },
];

function StepsSection() {
  return (
    <section className="steps-section">
      <div className="steps-container">
        {/* LEFT SIDE */}
        <div className="steps-left">
          <h2>
            Four Simple
            <br />
            Steps to Start
          </h2>

          <p>
            Create an account, choose an olympiad, complete registration, and
            track schedules, admit cards, results, and certificates from your
            personal dashboard.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="steps-right">
          {steps.map((step, index) => (
            <div
              className="step-card"
              key={step.id}
              style={{
                top: `${100 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              <img src={step.image} alt={step.title} />

              <h3>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;

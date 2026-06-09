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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
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

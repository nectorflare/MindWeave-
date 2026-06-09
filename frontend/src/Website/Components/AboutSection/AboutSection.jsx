import "./AboutSection.css";
// import aboutImage from "../../../assets/about-image.png";
import logo from "../../../assets/logo.png";
import { Rocket } from "lucide-react";
import bulletIcon from "../../../assets/bullet-point.png";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={logo} alt="About MindWeave" />
        </div>

        <div className="about-right">
          <span className="about-tag">WHO WE ARE</span>

          <h2>
            Redefining What <span>Education</span>
            <br />
            Can Truly Achieve
          </h2>

          <p className="about-desc">
            Mind Weave Foundation runs India's most forward-thinking Olympiad
            exams — built not just to test knowledge, but to ignite curiosity,
            build real-world skills, and help every child discover their
            calling.
          </p>

          <div className="about-points">
            <div className="point">
              <img src={bulletIcon} alt="" className="bullet-icon" />
              <p>
                India's first AI Literacy Olympiad for students from Class KG
                upwards
              </p>
            </div>

            <div className="point">
              <img src={bulletIcon} alt="" className="bullet-icon" />
              <p>Recognized by 700,000+ educators across schools nationwide</p>
            </div>

            <div className="point">
              <img src={bulletIcon} alt="" className="bullet-icon" />
              <p>
                Assessments developed by experts from Amazon, Intel, GE & HSBC
              </p>
            </div>

            <div className="point">
              <img src={bulletIcon} alt="" className="bullet-icon" />
              <p>
                Summer (July–August) and Winter (January) exam seasons every
                year
              </p>
            </div>

            <div className="point">
              <img src={bulletIcon} alt="" className="bullet-icon" />
              <p>
                Scholarships, gold medals, and national-level recognition for
                toppers
              </p>
            </div>
          </div>

          <div className="about-buttons">
            <button className="register-btn">
              <Rocket size={18} />
              Register for 2026
            </button>

            <button className="story-btn">Our Story →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
// import "./AboutSection.css";
// import logo from "../../../assets/logo.png";
// import { Rocket, Diamond } from "lucide-react";

// function AboutSection() {
//   return (
//     <section className="about-section">
//       <div className="about-container">
//         <div className="about-left">
//           <img src={logo} alt="About MindWeave" />
//         </div>

//         <div className="about-right">
//           <span className="about-tag">WHO WE ARE</span>

//           <h2>
//             Redefining What <span>Education</span>
//             <br />
//             Can Truly Achieve
//           </h2>

//           <p className="about-desc">
//             Mind Weave Foundation runs India's most forward-thinking Olympiad
//             exams — built not just to test knowledge, but to ignite curiosity,
//             build real-world skills, and help every child discover their
//             calling.
//           </p>

//           <div className="about-points">
//             <div className="point">
//               <Diamond className="bullet-icon" />
//               <p>
//                 India's first AI Literacy Olympiad for students from Class KG
//                 upwards
//               </p>
//             </div>

//             <div className="point">
//               <Diamond className="bullet-icon" />
//               <p>Recognized by 700,000+ educators across schools nationwide</p>
//             </div>

//             <div className="point">
//               <Diamond className="bullet-icon" />
//               <p>
//                 Assessments developed by experts from Amazon, Intel, GE & HSBC
//               </p>
//             </div>

//             <div className="point">
//               <Diamond className="bullet-icon" />
//               <p>
//                 Summer (July–August) and Winter (January) exam seasons every
//                 year
//               </p>
//             </div>

//             <div className="point">
//               <Diamond className="bullet-icon" />
//               <p>
//                 Scholarships, gold medals, and national-level recognition for
//                 toppers
//               </p>
//             </div>
//           </div>

//           <div className="about-buttons">
//             <button className="register-btn">
//               <Rocket size={18} />
//               Register for 2026
//             </button>

//             <button className="story-btn">Our Story →</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;

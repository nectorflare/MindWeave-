import "./AboutUs.css";
import "./AboutUs.css";
import "../../Components/Breadcrumb/Breadcrumb.css";
import studentGroup from "../../../assets/student-group.jpg";
import buildingImage from "../../../assets/building.jpg";
import testimonialImage from "../../../assets/testimonial-user.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
const AboutUs = () => {
  const features = [
    {
      title: "National Reach",
      desc: "Connecting schools and students across every state in India through our growing Olympiad network.",
      icon: "🌍",
    },
    {
      title: "Expert Designed Programs",
      desc: "Curriculum crafted by educators and industry experts to match real-world skills and academic standards.",
      icon: "📚",
    },
    {
      title: "Practical Learning",
      desc: "Hands-on problem solving and application-based questions that go beyond rote memorization.",
      icon: "💡",
    },
    {
      title: "Merit Recognition",
      desc: "Celebrating every achiever with certificates, medals, and scholarships that motivate students to excel.",
      icon: "🏆",
    },
  ];

  const values = [
    "Excellence",
    "Integrity",
    "Innovation",
    "Collaboration",
    "Student First",
    "Continuous Growth",
  ];

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>

        <span className="breadcrumb-separator">›</span>

        <span className="breadcrumb-current">About Us</span>
      </div>
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              About <br />
              Mind Weaver <br />
              Foundation
            </h1>

            <p className="hero-text">
              Empowering students through knowledge, innovation and competitive
              excellence.
            </p>

            <div className="hero-buttons">
              <Link to="/olympiads-list">
                <button className="primary-btn">Explore Olympiads</button>
              </Link>

              <Link to="/contact-us">
                <button className="secondary-btn">Contact Us</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="journey">
          <div className="journey-image">
            <img src={buildingImage} alt="Building" />
          </div>
          <div className="journey-content">
            <span className="section-tag">OUR STORY</span>

            <h2>Our Journey</h2>

            <p>
              Mind Weaver Foundation was born from a simple belief — every
              student deserves a platform to discover their true potential.
              Starting from humble beginnings, we set out to bridge the gap
              between classroom learning and real-world skills.
            </p>

            <p>
              Over the years, we have grown into a trusted name across India,
              partnering with thousands of schools and empowering millions of
              students through structured Olympiad programs and career guidance
              initiatives.
            </p>

            <div className="stats">
              <div className="stat">
                <h3>42,000+</h3>
                <p>Schools Connected</p>
              </div>

              <div className="stat">
                <h3>7,00,000+</h3>
                <p>Students Participated</p>
              </div>

              <div className="stat">
                <h3>1,00,00,000+</h3>
                <p>Questions Solved</p>
              </div>

              <div className="stat">
                <h3>India</h3>
                <p>Presence Across India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission */}
        <section className="vision-mission">
          <div className="info-card">
            <div className="icon blue">👁</div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To be India's leading student empowerment platform — nurturing a
                generation of confident, curious, and future-ready learners who
                can compete and thrive on any national or global stage.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon gold">🎯</div>
            <div>
              <h3>Our Mission</h3>
              <p>
                To provide every student, regardless of background, access to
                high-quality competitive programs, career discovery tools, and
                merit-based recognition that inspires lifelong learning and
                excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose">
          <span className="section-tag">WHY CHOOSE US</span>

          <h2>Why Thousands of Students & Schools Trust Us</h2>

          <div className="feature-grid">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="core-values">
          <span className="section-tag">OUR CORE VALUES</span>

          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-item" key={index}>
                <div className="value-icon">⭐</div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="founder-section">
          <div className="founder-image">
            <img src={testimonialImage} alt="Testimonial" />
          </div>

          <div className="founder-content">
            <span className="founder-tag">MESSAGE FROM THE FOUNDER</span>

            <h2>A Message From The Founder</h2>

            <p className="founder-quote">
              "We believe every student has the potential to achieve
              extraordinary success when given the right guidance, resources,
              and opportunities."
            </p>

            <h3 className="founder-signature">Dr. Piyush Kumar Sharma</h3>

            <p className="founder-name">Dr. Piyush Kumar Sharma</p>

            <p className="founder-designation">
              Founder & Chairman
              <br />
              Mind Weaver Foundation
            </p>
          </div>
        </section>

        {/* Growth Journey */}

        <section className="timeline-section">
          <span className="section-tag">OUR GROWTH JOURNEY</span>

          <h2>Milestones That Shaped Our Journey</h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2020</span>
              <p>Foundation Established</p>
            </div>

            <div className="timeline-item">
              <span className="year">2021</span>
              <p>First Olympiad Program Launched</p>
            </div>

            <div className="timeline-item">
              <span className="year">2022</span>
              <p>National Expansion</p>
            </div>

            <div className="timeline-item">
              <span className="year">2023</span>
              <p>Digital Learning Platform</p>
            </div>

            <div className="timeline-item">
              <span className="year">2024</span>
              <p>Career Development Programs</p>
            </div>

            <div className="timeline-item">
              <span className="year">2025</span>
              <p>Pan India Student Network</p>
            </div>
          </div>
        </section>

        {/* Journey Gallery */}

        <section className="journey-gallery">
          <span className="section-tag">MOMENTS OF EXCELLENCE</span>

          <h2>Glimpses of Our Journey</h2>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img src={testimonialImage} alt="" />
              <p>Olympiad Events</p>
            </div>

            <div className="gallery-card">
              <img src={testimonialImage} alt="" />
              <p>Award Ceremonies</p>
            </div>

            <div className="gallery-card">
              <img src={testimonialImage} alt="" />
              <p>School Collaborations</p>
            </div>

            <div className="gallery-card">
              <img src={testimonialImage} alt="" />
              <p>Student Activities</p>
            </div>

            <div className="gallery-card">
              <img src={testimonialImage} alt="" />
              <p>Workshops</p>
            </div>

            <div className="gallery-card">
              <img src={testimonialImage} alt="" />
              <p>Success Stories</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

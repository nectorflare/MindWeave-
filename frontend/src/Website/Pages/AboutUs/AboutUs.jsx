import "./AboutUs.css";
import testimonialImage from "../../../assets/testimonial-user.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const jsonArray = (value) => {
  if (Array.isArray(value)) return value;
  try { const parsed = JSON.parse(value); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
};

const AboutUs = () => {
  const [journey, setJourney] = useState(null);
  const [journeyImageValid, setJourneyImageValid] = useState(true);

  useEffect(() => {
    api("/api/v1/public/about-journey").then((response) => {
      const data = response.data;
      if (!data) return setJourney(null);
      const paragraphs = jsonArray(data.paragraphs).filter((item) => typeof item === "string" && item.trim());
      const stats = jsonArray(data.stats).filter((item) => item?.value && item?.label);
      setJourney(data.title && data.imageUrl && paragraphs.length && stats.length ? { ...data, paragraphs, stats } : null);
      setJourneyImageValid(true);
    }).catch(() => setJourney(null));
  }, []);
  const features = [
    {
      title: "National Reach",
      desc: "Programs accessible to students and schools across India.",
      icon: "🌍",
    },
    {
      title: "Expert Designed Programs",
      desc: "Academic programs created with experienced educators.",
      icon: "📚",
    },
    {
      title: "Practical Learning",
      desc: "Resources that strengthen concepts through regular practice.",
      icon: "💡",
    },
    {
      title: "Merit Recognition",
      desc: "Certificates and achievements that celebrate student effort.",
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
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/home">Home</Link> &gt; <span>About Us</span>
            </div>

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
              <Link to="/olympiads-list" className="primary-btn">Explore Olympiads</Link>

              <Link to="/contact-us" className="secondary-btn">Contact Us</Link>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        {journey && journeyImageValid && <section className="journey">
          <div className="journey-image">
            <img src={journey.imageUrl} alt={journey.imageAlt || journey.title} onError={() => setJourneyImageValid(false)} />
          </div>
          <div className="journey-content">
            <span className="section-tag">{journey.sectionTag}</span>

            <h2>{journey.title}</h2>

            {journey.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <div className="stats">
              {journey.stats.map((stat) => <div className="stat" key={`${stat.value}-${stat.label}`}><h3>{stat.value}</h3><p>{stat.label}</p></div>)}
            </div>
          </div>
        </section>}

        {/* Vision Mission */}
        <section className="vision-mission">
          <div className="info-card">
            <div className="icon blue">👁</div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To help every learner discover their potential through fair,
                accessible, and engaging academic opportunities.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon gold">🎯</div>
            <div>
              <h3>Our Mission</h3>
              <p>
                To connect schools and students with trusted competitions,
                actionable feedback, quality resources, and meaningful recognition.
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

            <h3 className="founder-signature">Ankur Sharma</h3>

            <p className="founder-name">Ankur Sharma</p>

            <p className="founder-designation">
              Founder & Chairman
              <br />
              Mind Weaver Foundation
            </p>
          </div>
        </section>

        {/* Growth Journey */}

        {/* <section className="timeline-section">
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
        </section> */}

        {/* Journey Gallery */}

        {/* <section className="journey-gallery">
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
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

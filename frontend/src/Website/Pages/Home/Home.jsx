import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import AboutSection from "../../Components/AboutSection/AboutSection";
import SpotlightPrograms from "../../Components/SpotlightPrograms/SpotlightPrograms";
import StepsSection from "../../Components/StepsSection/StepsSection";
import StudyResources from "../../Components/StudyResources/StudyResources";
import AchieversGallery from "../../Components/AchieversGallery/AchieversGallery";
import Testimonials from "../../Components/Testimonials/Testimonials";
import CTASection from "../../Components/Testimonials/CTASection/CTASection";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <SpotlightPrograms />
      <StepsSection />
      <StudyResources />
      <AchieversGallery />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;

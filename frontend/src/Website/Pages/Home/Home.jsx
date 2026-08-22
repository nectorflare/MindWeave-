import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import AboutSection from "../../Components/AboutSection/AboutSection";
import SpotlightPrograms from "../../Components/SpotlightPrograms/SpotlightPrograms";
import StepsSection from "../../Components/StepsSection/StepsSection";
import StudyResources from "../../Components/StudyResources/StudyResources";
import AchieversGallery from "../../Components/AchieversGallery/AchieversGallery";
import HomeContact from "../../Components/HomeContact/HomeContact";
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
      <HomeContact />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;

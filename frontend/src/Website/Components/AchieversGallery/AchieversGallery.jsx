import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AchieversGallery.css";

import img1 from "../../../assets/testimonial-user.jpg";
import img2 from "../../../assets/testimonial-user.jpg";
import img3 from "../../../assets/testimonial-user.jpg";

const galleryData = [
  {
    image: img1,
    title: "Gallery of Achievers",
    description:
      "Thousands of bright minds celebrated across India — award ceremonies, olympiad halls, and proud moments that last forever.",
  },
  {
    image: img2,
    title: "National Olympiad Winners",
    description:
      "Recognizing outstanding students who achieved excellence in national level competitions.",
  },
  {
    image: img3,
    title: "Award Ceremony",
    description:
      "A memorable celebration of hard work, dedication, and achievement.",
  },
];

export default function AchieversGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => setActiveIndex((prev) => prev === galleryData.length - 1 ? 0 : prev + 1), 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section
      className="achievers-gallery"
      style={{
        backgroundImage: `url(${galleryData[activeIndex].image})`,
      }}
    >
      <div className="overlayachievers-gallery"></div>

      <div className="gallery-content">
        <div className="text-content">
          <h2>{galleryData[activeIndex].title}</h2>

          <p>{galleryData[activeIndex].description}</p>
          <Link className="gallery-link" to="/gallery" >Gallery</Link>
        </div>

        <div className="thumbnail-wrapper">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`thumb ${activeIndex === index ? "active-thumb" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

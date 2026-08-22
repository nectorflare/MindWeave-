import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Gallery.css";

// Gallery images gallary1 -> gallary23
// Your images live in src/assets as .jpeg files, so we use Vite's
// import.meta.glob to pull them in automatically (no manual import per file).
// Adjust the glob path below if Gallery.jsx is not inside src/Website/Pages/Gallery
const imageModules = import.meta.glob("../../../assets/gallary*.jpeg", {
  eager: true,
  import: "default",
});

const galleryImages = Array.from({ length: 23 }, (_, i) => {
  const num = i + 1;
  const key = Object.keys(imageModules).find((path) =>
    path.endsWith(`gallary${num}.jpeg`),
  );
  return {
    id: num,
    src: key ? imageModules[key] : "",
    alt: `Gallery image ${num}`,
    text: "MindWeave Foundation", // TODO: replace with real caption per image later
  };
});

export default function Gallery() {
  return (
    <>
      <Navbar />

      <section className="gallery-section">
        <div className="gallery-header">
          <span className="gallery-eyebrow">Moments</span>
          <h2 className="gallery-title">Our Gallery</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <div className="gallery-card" key={img.id}>
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">{img.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

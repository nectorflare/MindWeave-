import React, { useState, useMemo } from "react";
import "./SyllabusList.css";

import "../../Components/Breadcrumb/Breadcrumb.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import banner from "../../../assets/book-banner.jpg";
import bookImage from "../../../assets/book-banner.jpg";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const syllabusData = [
  {
    id: 1,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "3",
    popularity: 95,
    image: bookImage,
    path: "syllabus-3-math",
  },
  {
    id: 2,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "3",
    popularity: 90,
    image: bookImage,
    path: "syllabus-3-science",
  },
  {
    id: 3,
    title: "English Syllabus",
    subject: "English",
    classRange: "3",
    popularity: 85,
    image: bookImage,
    path: "syllabus-3-english",
  },

  {
    id: 4,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "4",
    popularity: 94,
    image: bookImage,
    path: "syllabus-4-math",
  },
  {
    id: 5,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "4",
    popularity: 89,
    image: bookImage,
    path: "syllabus-4-science",
  },
  {
    id: 6,
    title: "English Syllabus",
    subject: "English",
    classRange: "4",
    popularity: 83,
    image: bookImage,
    path: "syllabus-4-english",
  },

  {
    id: 7,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "5",
    popularity: 92,
    image: bookImage,
    path: "syllabus-5-math",
  },
  {
    id: 8,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "5",
    popularity: 88,
    image: bookImage,
    path: "syllabus-5-english",
  },
  {
    id: 9,
    title: "English Syllabus",
    subject: "English",
    classRange: "5",
    popularity: 82,
    image: bookImage,
    path: "syllabus-5-english",
  },

  {
    id: 10,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "6",
    popularity: 90,
    image: bookImage,
    path: "syllabus-6-math",
  },
  {
    id: 11,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "6",
    popularity: 87,
    image: bookImage,
    path: "syllabus-6-english",
  },
  {
    id: 12,
    title: "English Syllabus",
    subject: "English",
    classRange: "6",
    popularity: 80,
    image: bookImage,
    path: "syllabus-6-english",
  },

  {
    id: 13,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "7",
    popularity: 89,
    image: bookImage,
    path: "syllabus-7-math",
  },
  {
    id: 14,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "7",
    popularity: 86,
    image: bookImage,
    path: "syllabus-7-english",
  },
  {
    id: 15,
    title: "English Syllabus",
    subject: "English",
    classRange: "7",
    popularity: 78,
    image: bookImage,
    path: "syllabus-7-english",
  },

  {
    id: 16,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "8",
    popularity: 88,
    image: bookImage,
    path: "syllabus-8-math",
  },
  {
    id: 17,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "8",
    popularity: 85,
    image: bookImage,
    path: "syllabus-8-english",
  },
  {
    id: 18,
    title: "English Syllabus",
    subject: "English",
    classRange: "8",
    popularity: 77,
    image: bookImage,
    path: "syllabus-8-english",
  },

  {
    id: 19,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "9",
    popularity: 87,
    image: bookImage,
    path: "syllabus-9-math",
  },
  {
    id: 20,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "9",
    popularity: 84,
    image: bookImage,
    path: "syllabus-9-english",
  },
  {
    id: 21,
    title: "English Syllabus",
    subject: "English",
    classRange: "9",
    popularity: 75,
    image: bookImage,
    path: "syllabus-9-english",
  },

  {
    id: 22,
    title: "Mathematics Syllabus",
    subject: "Mathematics",
    classRange: "10",
    popularity: 86,
    image: bookImage,
    path: "syllabus-10-math",
  },
  {
    id: 23,
    title: "Science Syllabus",
    subject: "Science",
    classRange: "10",
    popularity: 83,
    image: bookImage,
    path: "syllabus-10-english",
  },
  {
    id: 24,
    title: "English Syllabus",
    subject: "English",
    classRange: "10",
    popularity: 74,
    image: bookImage,
    path: "syllabus-10-english",
  },
];

const subjects = ["All Subjects", "English", "Mathematics", "Science"];

const classes = ["All", "3", "4", "5", "6", "7", "8", "9", "10"];

function SyllabusList() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedClass, setSelectedClass] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredSyllabus = useMemo(() => {
    let filtered = [...syllabusData];

    if (selectedSubject !== "All Subjects") {
      filtered = filtered.filter((item) => item.subject === selectedSubject);
    }

    if (selectedClass !== "All") {
      filtered = filtered.filter((item) => item.classRange === selectedClass);
    }

    switch (sortBy) {
      case "chaptersLow":
        filtered.sort((a, b) => a.chapters - b.chapters);
        break;

      case "chaptersHigh":
        filtered.sort((a, b) => b.chapters - a.chapters);
        break;

      case "alphabet":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        filtered.sort((a, b) => b.popularity - a.popularity);
    }

    return filtered;
  }, [selectedSubject, selectedClass, sortBy]);

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Syllabus</span>
      </div>
      <div className="syllabus-page">
        <div className="hero-banner">
          <div className="hero-content">
            <h1>Syllabus</h1>
            <p>
              Explore subject-wise syllabus for every class to help you plan
              your studies better.
            </p>
          </div>

          <img src={banner} alt="" />
        </div>

        <div className="syllabus-container">
          <aside className="sidebar">
            <div className="filter-box">
              <h3>Subjects</h3>

              {subjects.map((item) => (
                <button
                  key={item}
                  className={selectedSubject === item ? "active" : ""}
                  onClick={() => setSelectedSubject(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="filter-box">
              <h3>Class / Grade</h3>

              {classes.map((item) => (
                <button
                  key={item}
                  className={selectedClass === item ? "active" : ""}
                  onClick={() => setSelectedClass(item)}
                >
                  {item === "All" ? "All" : `Class ${item}`}
                </button>
              ))}
            </div>
          </aside>

          <div className="syllabus-content">
            <div className="syllabus-list-top-bar">
              <p>
                Showing 1-{filteredSyllabus.length} of {syllabusData.length}{" "}
                results
              </p>

              <div className="sort-wrapper">
                <span>Sort By:</span>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Popular</option>
                  <option value="chaptersLow">Chapters Low to High</option>
                  <option value="chaptersHigh">Chapters High to Low</option>
                  <option value="alphabet">Alphabetical</option>
                </select>
              </div>
            </div>

            <div className="syllabus-grid">
              {filteredSyllabus.map((item) => (
                <div
                  className="syllabus-card"
                  key={item.id}
                  // onClick={() =>
                  //   navigate("/syllabus-details", {
                  //     state: {
                  //       syllabus: {
                  //         classLabel: item.classRange,
                  //         subject: item.subject,
                  //         totalTopics: item.chapters,
                  //         focusArea: "Language & Reasoning",
                  //         examLevel: "School Level",
                  //         description: `The syllabus for Class ${item.classRange} ${item.subject} is designed to build strong concepts and help students prepare effectively.`,
                  //         sections: [],
                  //       },
                  //     },
                  //   })
                  // }
                  onClick={() => navigate(`/${item.path}`)}
                >
                  <img src={item.image} alt={item.title} />

                  <h4>{item.title}</h4>

                  <p>Class {item.classRange}</p>

                  <h3>{item.chapters} Chapters</h3>

                  <button
                    className="view-syllabus-button"
                    onClick={(e) => {
                      e.stopPropagation(); // card click trigger nahi hoga
                      console.log("View syllabus");
                    }}
                  >
                    <FaBook />
                    View Syllabus
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SyllabusList;

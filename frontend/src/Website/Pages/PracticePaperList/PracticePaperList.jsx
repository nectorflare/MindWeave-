import React, { useState, useMemo } from "react";
import "./PracticePaperList.css";

import "../../Components/Breadcrumb/Breadcrumb.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import banner from "../../../assets/book-banner.jpg";
import bookImage from "../../../assets/book-image.jpg";
import { FaClipboardList } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";

const practicePaperData = [
  {
    id: 1,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "3",
    totalQuestions: 40,
    popularity: 95,
    image: bookImage,
    path: "/practice-paper/class-3-maths",
  },
  {
    id: 2,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "3",
    totalQuestions: 45,
    popularity: 90,
    image: bookImage,
    path: "/practice-paper/class-3-science",
  },

  {
    id: 3,
    title: "English Practice Paper",
    subject: "English",
    classRange: "3",
    totalQuestions: 50,
    popularity: 85,
    image: bookImage,
    path: "/practice-paper/class-3-english",
  },

  {
    id: 4,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "4",
    totalQuestions: 40,
    popularity: 94,
    image: bookImage,
    path: "/practice-paper/class-4-maths",
  },
  {
    id: 5,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "4",
    totalQuestions: 45,
    popularity: 89,
    image: bookImage,
    path: "/practice-paper/class-4-science",
  },
  {
    id: 6,
    title: "English Practice Paper",
    subject: "English",
    classRange: "4",
    totalQuestions: 50,
    popularity: 83,
    image: bookImage,
  },

  {
    id: 7,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "5",
    totalQuestions: 40,
    popularity: 92,
    image: bookImage,
    path: "/practice-paper/class-5-maths",
  },
  {
    id: 8,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "5",
    totalQuestions: 45,
    popularity: 88,
    image: bookImage,
    path: "/practice-paper/class-5-science",
  },
  {
    id: 9,
    title: "English Practice Paper",
    subject: "English",
    classRange: "5",
    totalQuestions: 50,
    popularity: 82,
    image: bookImage,
    path: "/practice-paper/class-5-english",
  },

  {
    id: 10,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "6",
    totalQuestions: 40,
    popularity: 90,
    image: bookImage,
    path: "/practice-paper/class-6-maths",
  },
  {
    id: 11,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "6",
    totalQuestions: 45,
    popularity: 87,
    image: bookImage,
    path: "/practice-paper/class-6-science",
  },
  {
    id: 12,
    title: "English Practice Paper",
    subject: "English",
    classRange: "6",
    totalQuestions: 50,
    popularity: 80,
    image: bookImage,
    path: "/practice-paper/class-6-english",
  },

  {
    id: 13,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "7",
    totalQuestions: 40,
    popularity: 89,
    image: bookImage,
    path: "/practice-paper/class-7-maths",
  },
  {
    id: 14,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "7",
    totalQuestions: 45,
    popularity: 86,
    image: bookImage,
    path: "/practice-paper/class-7-science",
  },
  {
    id: 15,
    title: "English Practice Paper",
    subject: "English",
    classRange: "7",
    totalQuestions: 50,
    popularity: 78,
    image: bookImage,
    path: "/practice-paper/class-7-english",
  },

  {
    id: 16,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "8",
    totalQuestions: 40,
    popularity: 88,
    image: bookImage,
    path: "/practice-paper/class-8-maths",
  },
  {
    id: 17,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "8",
    totalQuestions: 45,
    popularity: 85,
    image: bookImage,
    path: "/practice-paper/class-8-science",
  },
  {
    id: 18,
    title: "English Practice Paper",
    subject: "English",
    classRange: "8",
    totalQuestions: 50,
    popularity: 77,
    image: bookImage,
    path: "/practice-paper/class-8-english",
  },

  {
    id: 19,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "9",
    totalQuestions: 40,
    popularity: 87,
    image: bookImage,
    path: "/practice-paper/class-9-maths",
  },
  {
    id: 20,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "9",
    totalQuestions: 45,
    popularity: 84,
    image: bookImage,
    path: "/practice-paper/class-9-science",
  },
  {
    id: 21,
    title: "English Practice Paper",
    subject: "English",
    classRange: "9",
    totalQuestions: 50,
    popularity: 75,
    image: bookImage,
    path: "/practice-paper/class-9-english",
  },

  {
    id: 22,
    title: "Mathematics Practice Paper",
    subject: "Mathematics",
    classRange: "10",
    totalQuestions: 40,
    popularity: 86,
    image: bookImage,
    path: "/practice-paper/class-10-maths",
  },
  {
    id: 23,
    title: "Science Practice Paper",
    subject: "Science",
    classRange: "10",
    totalQuestions: 45,
    popularity: 83,
    image: bookImage,
    path: "/practice-paper/class-10-science",
  },
  {
    id: 24,
    title: "English Practice Paper",
    subject: "English",
    classRange: "10",
    totalQuestions: 50,
    popularity: 74,
    image: bookImage,
    path: "/practice-paper/class-10-english",
  },
];

const subjects = ["All Subjects", "Mathematics", "Science", "English"];

const classes = ["All", "3", "4", "5", "6", "7", "8", "9", "10"];

function PracticePaperList() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedClass, setSelectedClass] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredPapers = useMemo(() => {
    let filtered = [...practicePaperData];

    if (selectedSubject !== "All Subjects") {
      filtered = filtered.filter((item) => item.subject === selectedSubject);
    }

    if (selectedClass !== "All") {
      filtered = filtered.filter((item) => item.classRange === selectedClass);
    }

    switch (sortBy) {
      case "questionsLow":
        filtered.sort((a, b) => a.totalQuestions - b.totalQuestions);
        break;

      case "questionsHigh":
        filtered.sort((a, b) => b.totalQuestions - a.totalQuestions);
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
        <span className="breadcrumb-current">Practice Papers</span>
      </div>

      <div className="practice-paper-list-page">
        <div className="hero-banner">
          <div className="hero-content">
            <h1>Practice Papers</h1>
            <p>
              Practice with subject-wise Olympiad papers for every class and
              boost your exam preparation.
            </p>
          </div>

          <img src={banner} alt="" />
        </div>

        <div className="practice-paper-list-container">
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

          <div className="practice-paper-list-content">
            <div className="practice-paper-list-top-bar">
              <p>
                Showing 1-{filteredPapers.length} of {practicePaperData.length}{" "}
                results
              </p>

              <div className="sort-wrapper">
                <span>Sort By:</span>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Popular</option>
                  <option value="questionsLow">Questions Low to High</option>
                  <option value="questionsHigh">Questions High to Low</option>
                  <option value="alphabet">Alphabetical</option>
                </select>
              </div>
            </div>

            <div className="practice-paper-grid">
              {filteredPapers.map((item) => (
                <div
                  className="practice-paper-card"
                  key={item.id}
                  onClick={() =>
                    navigate(
                      item.path ||
                        `/practice-paper/class-${item.classRange}/${item.subject.toLowerCase()}`,
                    )
                  }
                >
                  <img src={item.image} alt={item.title} />

                  <h4>{item.title}</h4>

                  <p>Class {item.classRange}</p>

                  <h3>{item.totalQuestions} Questions</h3>

                  <button
                    className="view-practice-paper-button"
                    onClick={(e) => {
                      e.stopPropagation(); // card click trigger nahi hoga
                      navigate(
                        item.path ||
                          `/practice-paper/class-${item.classRange}/${item.subject.toLowerCase()}`,
                      );
                    }}
                  >
                    <FaClipboardList />
                    View Paper
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

export default PracticePaperList;

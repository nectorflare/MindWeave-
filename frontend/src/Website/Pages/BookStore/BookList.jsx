import React, { useState, useMemo } from "react";
import "./BookList.css";
import Navbar from "../../Components/Navbar/Navbar";
import banner from "../../../assets/book-banner.jpg";
import bookImage from "../../../assets/book-image.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
const booksData = [
  {
    id: 1,
    title: "International Science Olympiad",
    category: "Olympiad Books",
    classRange: "1-12",
    price: 450,
    popularity: 95,
    image: bookImage,
  },
  {
    id: 2,
    title: "International Mathematics Olympiad",
    category: "Olympiad Books",
    classRange: "1-12",
    price: 450,
    popularity: 90,
    image: bookImage,
  },
  {
    id: 3,
    title: "International English Olympiad",
    category: "Olympiad Books",
    classRange: "1-12",
    price: 450,
    popularity: 85,
    image: bookImage,
  },
  {
    id: 4,
    title: "Reasoning Olympiad Workbook",
    category: "Workbooks",
    classRange: "1-12",
    price: 350,
    popularity: 80,
    image: bookImage,
  },
  {
    id: 5,
    title: "Achiever Series Mathematics",
    category: "Achiever Series",
    classRange: "1-12",
    price: 399,
    popularity: 88,
    image: bookImage,
  },
  {
    id: 6,
    title: "Achiever Series Science",
    category: "Achiever Series",
    classRange: "1-12",
    price: 399,
    popularity: 84,
    image: bookImage,
  },
  {
    id: 7,
    title: "Practice Sets",
    category: "Practice Sets",
    classRange: "1-12",
    price: 299,
    popularity: 70,
    image: bookImage,
  },
];

const categories = [
  "All Books",
  "Olympiad Books",
  "Achiever Series",
  "Practice Sets",
  "Workbooks",
];

const classes = ["All", "1-2", "3-5", "6-8", "9-10", "11-12"];

function BookList() {
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [selectedClass, setSelectedClass] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredBooks = useMemo(() => {
    let filtered = [...booksData];

    if (selectedCategory !== "All Books") {
      filtered = filtered.filter((book) => book.category === selectedCategory);
    }

    if (selectedClass !== "All") {
      filtered = filtered.filter((book) => book.classRange === selectedClass);
    }

    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "alphabet":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        filtered.sort((a, b) => b.popularity - a.popularity);
    }

    return filtered;
  }, [selectedCategory, selectedClass, sortBy]);

  return (
    <>
      <Navbar />
      <div className="book-page">
        <div className="hero-banner">
          <div className="hero-content">
            <h1>Books Store</h1>
            <p>
              Explore our wide range of books designed to build knowledge and
              strengthen concepts.
            </p>
          </div>

          <img src={banner} alt="" />
        </div>

        <div className="book-container">
          <aside className="sidebar">
            <div className="filter-box">
              <h3>Categories</h3>

              {categories.map((item) => (
                <button
                  key={item}
                  className={selectedCategory === item ? "active" : ""}
                  onClick={() => setSelectedCategory(item)}
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
                  Class {item}
                </button>
              ))}
            </div>
          </aside>

          <div className="book-content">
            <div className="book-list-top-bar">
              <p>
                Showing 1-{filteredBooks.length} of {booksData.length} results
              </p>

              <div className="sort-wrapper">
                <span>Sort By:</span>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Popular</option>
                  <option value="priceLow">Price Low to High</option>
                  <option value="priceHigh">Price High to Low</option>
                  <option value="alphabet">Alphabetical</option>
                </select>
              </div>
            </div>

            <div className="book-grid">
              {filteredBooks.map((book) => (
                <div
                  className="book-card"
                  key={book.id}
                  onClick={() => navigate("/book-details")}
                >
                  <img src={book.image} alt={book.title} />

                  <h4>{book.title}</h4>

                  <p>Class {book.classRange}</p>

                  <h3>₹{book.price}</h3>

                  <button
                    className="add-to-cart-button"
                    onClick={(e) => {
                      e.stopPropagation(); // card click trigger nahi hoga
                      console.log("Add to cart");
                    }}
                  >
                    <FaShoppingCart />
                    Add to Cart
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

export default BookList;

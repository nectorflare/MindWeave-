import React, { useState } from "react";
import "./ContactUs.css";
import contactIllustration from "../../../assets/email-phone.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { FaHeadset } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (formData.phone && formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    alert("Message sent successfully!");
  };
  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>

        <span className="breadcrumb-separator">›</span>

        <span className="breadcrumb-active">Contact Us</span>
      </div>
      <div className="contact-page">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-heading">
            <h1>Contact Us</h1>

            <div className="title-divider">
              <span></span>★<span></span>
            </div>

            <p>
              We are here to help! Reach out to us for any queries,
              partnerships, or support.
            </p>
          </div>

          <div className="header-icon">
            <div className="header-icon">
              <img src={contactIllustration} alt="Contact Illustration" />
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon yellow">
              <FaMapMarkerAlt />
            </div>
            <h3>Our Office</h3>
            <p>
              A-1, Education Hub,
              <br />
              New Delhi, India - 110001
            </p>
          </div>

          <div className="contact-card">
            <div className="icon blue">
              <FaPhoneAlt />
            </div>
            <h3>Call Us</h3>
            <p>
              <a href="tel:+919540008894">+91 95400 08894</a>
            </p>
            <small>Mon - Sat (9:00 AM - 6:00 PM)</small>
          </div>

          <div className="contact-card">
            <div className="icon yellow">
              <FaMapMarkerAlt />
            </div>
            <h3>Our Office</h3>
            <p>
              Rohini Sector 21,
              <br />
              Delhi, India
            </p>
          </div>

          <div className="contact-card">
            <div className="icon purple">
              <FaClock />
            </div>
            <h3>Working Hours</h3>
            <p>Mon - Sat (9:00 AM - 6:00 PM)</p>
            <small>Sunday - Closed</small>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="contact-content">
          {/* Form */}
          <div className="contact-form-box">
            <h2>Send Us a Message</h2>
            <div className="underline"></div>

            <p>
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter 10-digit phone number"
                    value={formData.phone}
                    inputMode="numeric"
                    maxLength={10}
                    onChange={(e) => {
                      const val = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setFormData({ ...formData, phone: val });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  >
                    <option>Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="send-btn">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="map-box">
            <h2>Find Us</h2>
            <div className="underline"></div>

            <iframe
              title="location"
              src="https://www.google.com/maps?q=Rohini+Sector+21+Delhi&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <h4>Get Directions</h4>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="map-btn"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
      {/* FAQ CTA Section */}
      <div className="faq-section">
        <div className="faq-left">
          <div className="faq-icon">
            <FaHeadset />
          </div>

          <div className="faq-content">
            <h2>Still Have Questions?</h2>
            <p>Our support team is always ready to assist you.</p>
          </div>
        </div>

        <Link to="/faq" className="faq-btn">
          View FAQs
          <span>›</span>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

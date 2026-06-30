import React, { useState } from "react";
import {
  Trophy,
  User,
  FileText,
  Monitor,
  Search,
  Info,
  ShieldCheck,
  Laptop,
} from "lucide-react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./results.css";

export default function Results() {
  const [rollNumber, setRollNumber] = useState("");
  const [olympiad, setOlympiad] = useState("");
  const [examType, setExamType] = useState("");
  const [mode, setMode] = useState("");

  const handleViewResult = (e) => {
    e.preventDefault();
    if (!rollNumber || !olympiad || !examType || !mode) {
      alert("Please fill in all the fields to view your result.");
      return;
    }
    // TODO: call API to fetch result using rollNumber, olympiad, examType, mode
    console.log({ rollNumber, olympiad, examType, mode });
  };

  return (
    <>
      <Navbar />

      <div className="results-page">
        <div className="results-breadcrumb">
          <span className="breadcrumb-link">Home</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Results</span>
        </div>

        <div className="results-hero">
          <div className="results-hero-icon">
            <Trophy size={28} />
          </div>
          <h1>View Your Result</h1>
          <p>Enter your details below to view your olympiad result</p>
        </div>

        <form className="results-card" onSubmit={handleViewResult}>
          <h2>
            Enter Details to <span className="highlight">View Result</span>
          </h2>
          <p className="results-card-subtitle">
            Please provide the required information to access your result.
          </p>

          <div className="results-form-grid">
            <div className="form-field">
              <div className="field-icon">
                <User size={20} />
              </div>
              <label>Roll Number</label>
              <input
                type="text"
                placeholder="Enter your roll number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
              <span className="field-hint">
                Enter the roll number provided during registration
              </span>
            </div>

            <div className="form-field">
              <div className="field-icon">
                <Trophy size={20} />
              </div>
              <label>Select Olympiad</label>
              <select
                value={olympiad}
                onChange={(e) => setOlympiad(e.target.value)}
              >
                <option value="">-- Select Olympiad --</option>
                <option value="nso">National Science Olympiad</option>
                <option value="imo">International Mathematics Olympiad</option>
                <option value="ieo">International English Olympiad</option>
                <option value="cyber">Cyber Olympiad</option>
                <option value="gk">GK Olympiad</option>
              </select>
              <span className="field-hint">
                Choose the olympiad you appeared for
              </span>
            </div>

            <div className="form-field">
              <div className="field-icon">
                <FileText size={20} />
              </div>
              <label>Select Exam Type</label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
              >
                <option value="">-- Select Exam Type --</option>
                <option value="foundation">Foundation</option>
                <option value="school">School</option>
                <option value="other">Other</option>
              </select>
              <span className="field-hint">Select the type of exam</span>
            </div>

            <div className="form-field">
              <div className="field-icon">
                <Monitor size={20} />
              </div>
              <label>Select Mode</label>
              <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="">-- Select Mode --</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <span className="field-hint">Choose exam mode</span>
            </div>
          </div>

          <div className="results-submit-wrap">
            <button type="submit" className="view-result-btn">
              <Search size={18} />
              View Result
            </button>
          </div>
        </form>

        <div className="results-note">
          <Info size={18} />
          <p>
            <strong>Note:</strong> Please make sure you enter correct details to
            view your result.
          </p>
        </div>

        <div className="results-info-heading">
          <span className="line" />
          <h3>Important Information</h3>
          <span className="line" />
        </div>

        <div className="results-info-grid">
          <div className="info-card">
            <div className="info-icon blue">
              <ShieldCheck size={26} />
            </div>
            <h4>Keep Your Roll Number Handy</h4>
            <p>
              Enter the roll number exactly as provided during registration.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon green">
              <Trophy size={26} />
            </div>
            <h4>Select Correct Olympiad</h4>
            <p>Choose the exact olympiad for which you appeared.</p>
          </div>

          <div className="info-card">
            <div className="info-icon purple">
              <FileText size={26} />
            </div>
            <h4>Choose Exam Type</h4>
            <p>Select the correct exam type (Foundation/School/Other).</p>
          </div>

          <div className="info-card">
            <div className="info-icon orange">
              <Laptop size={26} />
            </div>
            <h4>Select Exam Mode</h4>
            <p>Choose the mode in which you appeared for the exam.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

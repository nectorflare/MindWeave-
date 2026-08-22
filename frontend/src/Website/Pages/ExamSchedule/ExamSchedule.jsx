import React, { useState } from "react";
import {
  Filter,
  Monitor,
  Building2,
  Clock,
  CalendarDays,
  Trophy,
  Info,
} from "lucide-react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProfileSidebar from "../../Components/ProfileSidebar/ProfileSidebar";
import "./ExamSchedule.css";

const exams = [
  {
    code: "NSO",
    codeColor: "#1f3b8c",
    name: "National Science Olympiad (NSO)",
    level: "Level 1",
    cls: "10",
    date: "12 May 2024",
    time: "10:00 AM - 12:00 PM",
    mode: "Online",
    duration: "2 Hours",
    status: "Confirmed",
  },
  {
    code: "IMO",
    codeColor: "#1c7a4d",
    name: "International Mathematics Olympiad (IMO)",
    level: "Level 1",
    cls: "10",
    date: "18 May 2024",
    time: "10:00 AM - 12:00 PM",
    mode: "Offline",
    duration: "2 Hours",
    status: "Confirmed",
  },
  {
    code: "IEO",
    codeColor: "#e07a1f",
    name: "International English Olympiad (IEO)",
    level: "Level 1",
    cls: "10",
    date: "25 May 2024",
    time: "10:00 AM - 12:00 PM",
    mode: "Online",
    duration: "2 Hours",
    status: "Upcoming",
  },
  {
    code: "NSO",
    codeColor: "#e0a91f",
    name: "National Science Olympiad (NSO)",
    level: "Level 2",
    cls: "10",
    date: "09 Jun 2024",
    time: "10:00 AM - 12:00 PM",
    mode: "Offline",
    duration: "2 Hours",
    status: "Upcoming",
  },
  {
    code: "CO",
    codeColor: "#d8531f",
    name: "Cyber Olympiad (CO)",
    level: "Level 1",
    cls: "10",
    date: "23 Jun 2024",
    time: "10:00 AM - 12:00 PM",
    mode: "Online",
    duration: "2 Hours",
    status: "Upcoming",
  },
  {
    code: "GK",
    codeColor: "#1c7a4d",
    name: "GK Olympiad",
    level: "Level 1",
    cls: "9",
    date: "30 Jun 2024",
    time: "10:00 AM - 11:00 AM",
    mode: "Offline",
    duration: "1 Hour",
    status: "Not Started",
  },
  {
    code: "SOF",
    codeColor: "#1f3b8c",
    name: "SOF International English Olympiad",
    level: "Level 1",
    cls: "9",
    date: "14 Jul 2024",
    time: "10:00 AM - 12:00 PM",
    mode: "Online",
    duration: "2 Hours",
    status: "Not Started",
  },
];

const statusClass = {
  Confirmed: "status-confirmed",
  Upcoming: "status-upcoming",
  "Not Started": "status-notstarted",
};

const sidebarLinks = [];

export default function ExamSchedule() {
  const [year, setYear] = useState("2024-25");
  const [cls, setCls] = useState("All Classes");
  const [mode, setMode] = useState("All Modes");
  const [status, setStatus] = useState("All Status");

  return (
    <>
      <Navbar />

      <div className="exam-schedule-page">
        <div className="exam-breadcrumb">
          <span className="breadcrumb-link">Home</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Exam Schedule</span>
        </div>

        <div className="exam-layout">
          {/* Sidebar */}
          <div className="exam-sidebar-wrap">
            <ProfileSidebar />

            <div className="sidebar-promo">
              <h4>Stay Prepared, Stay Ahead!</h4>
              <p>
                Check your upcoming Olympiad exams and never miss an important
                date.
              </p>
              <button className="sidebar-promo-btn">View Olympiads</button>
              <Trophy className="sidebar-promo-icon" size={56} />
            </div>
          </div>

          {/* Main content */}
          <main className="exam-main">
            <div className="exam-hero">
              <div className="exam-hero-icon">
                <CalendarDays size={26} />
              </div>
              <div>
                <h1>Exam Schedule</h1>
                <p>View all your scheduled Olympiad exams</p>
              </div>
            </div>

            <div className="exam-filters">
              <div className="filter-field">
                <label>Select Year</label>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option>2024-25</option>
                  <option>2023-24</option>
                </select>
              </div>

              <div className="filter-field">
                <label>Select Class</label>
                <select value={cls} onChange={(e) => setCls(e.target.value)}>
                  <option>All Classes</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                </select>
              </div>

              <div className="filter-field">
                <label>Select Mode</label>
                <select value={mode} onChange={(e) => setMode(e.target.value)}>
                  <option>All Modes</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>

              <div className="filter-field">
                <label>Select Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Upcoming</option>
                  <option>Not Started</option>
                </select>
              </div>

              <button className="filter-btn">
                <Filter size={16} />
                Filter
              </button>
            </div>

            <div className="exam-table-card">
              <h3>Scheduled Exams ({exams.length})</h3>

              <div className="exam-table-wrap">
                <table className="exam-table">
                  <thead>
                    <tr>
                      <th>Olympiad Name</th>
                      <th>Class</th>
                      <th>Exam Date &amp; Time</th>
                      <th>Mode</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exams.map((exam, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="exam-name-cell">
                            <span
                              className="exam-code"
                              style={{ background: exam.codeColor }}
                            >
                              {exam.code}
                            </span>
                            <div>
                              <div className="exam-name">{exam.name}</div>
                              <div className="exam-level">{exam.level}</div>
                            </div>
                          </div>
                        </td>
                        <td>{exam.cls}</td>
                        <td>
                          <div className="exam-date">
                            <CalendarDays size={14} />
                            {exam.date}
                          </div>
                          <div className="exam-time">{exam.time}</div>
                        </td>
                        <td>
                          <div className="exam-mode">
                            {exam.mode === "Online" ? (
                              <Monitor size={16} color="#21a14b" />
                            ) : (
                              <Building2 size={16} color="#e07a1f" />
                            )}
                            <span
                              className={
                                exam.mode === "Online"
                                  ? "mode-online"
                                  : "mode-offline"
                              }
                            >
                              {exam.mode}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="exam-duration">
                            <Clock size={14} />
                            {exam.duration}
                          </div>
                        </td>
                        <td>
                          <span
                            className={`status-pill ${statusClass[exam.status]}`}
                          >
                            {exam.status}
                          </span>
                        </td>
                        <td>
                          <button className="view-details-btn">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="exam-table-footer">
                <span>
                  Showing 1 to {exams.length} of {exams.length} exams
                </span>
                <div className="pagination">
                  <select defaultValue="10">
                    <option value="10">10 per page</option>
                    <option value="20">20 per page</option>
                  </select>
                  <button className="page-arrow">‹</button>
                  <button className="page-num active">1</button>
                  <button className="page-arrow">›</button>
                </div>
              </div>
            </div>

            <div className="exam-notes">
              <div className="exam-notes-text">
                <div className="exam-notes-title">
                  <Info size={18} />
                  Important Notes
                </div>
                <ul>
                  <li>Please check your exam mode and exam date carefully.</li>
                  <li>
                    For online exams, ensure your device and internet connection
                    are ready.
                  </li>
                  <li>
                    For offline exams, please reach the exam center 30 minutes
                    before the scheduled time.
                  </li>
                  <li>Carry a valid ID card for offline exams.</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}

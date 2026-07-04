import React, { useState } from "react";
import {
  Trophy,
  Calendar,
  Clock,
  Monitor,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./MyOlympiads.css";

// TEMPORARY: dummy data (backend ready hone tak testing ke liye)
const dummyOlympiads = [
  {
    examId: "EX1001",
    olympiadName: "Science Olympiad",
    level: "Level 1",
    class: "10",
    examDate: "2024-05-12",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Online",
    status: "upcoming",
  },
  {
    examId: "EX1002",
    olympiadName: "Mathematics Olympiad",
    level: "Level 1",
    class: "10",
    examDate: "2024-05-18",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Offline",
    status: "upcoming",
  },
  {
    examId: "EX1003",
    olympiadName: "English Olympiad",
    level: "Level 1",
    class: "10",
    examDate: "2024-03-10",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Online",
    status: "completed",
    obtainedMarks: 87,
    totalMarks: 100,
    resultStatus: "Qualified",
  },
  {
    examId: "EX1004",
    olympiadName: "Science Olympiad",
    level: "Level 1",
    class: "10",
    examDate: "2024-02-20",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Offline",
    status: "completed",
    obtainedMarks: 72,
    totalMarks: 100,
    resultStatus: "Qualified",
  },
];

export default function MyOlympiads() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingExams = dummyOlympiads.filter((e) => e.status === "upcoming");
  const completedExams = dummyOlympiads.filter((e) => e.status === "completed");

  const visibleExams =
    activeTab === "upcoming" ? upcomingExams : completedExams;

  return (
    <>
      <Navbar />

      <div className="my-olympiads-page">
        <div className="my-olympiads-header">
          <div className="my-olympiads-icon">
            <Trophy size={26} />
          </div>
          <div>
            <h1>My Olympiads</h1>
            <p>
              Track your upcoming exams and see the ones you've already taken
            </p>
          </div>
        </div>

        <div className="my-olympiads-tabs">
          <button
            className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming ({upcomingExams.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed ({completedExams.length})
          </button>
        </div>

        {visibleExams.length === 0 ? (
          <div className="empty-state">
            <Trophy size={32} />
            <p>
              {activeTab === "upcoming"
                ? "No upcoming olympiads right now."
                : "You haven't completed any olympiads yet."}
            </p>
          </div>
        ) : (
          <div className="olympiad-cards">
            {visibleExams.map((exam) => (
              <div className="olympiad-card" key={exam.examId}>
                <div className="olympiad-card-top">
                  <div>
                    <h3>{exam.olympiadName}</h3>
                    <span className="olympiad-level">
                      {exam.level} · Class {exam.class}
                    </span>
                  </div>
                  {exam.status === "upcoming" ? (
                    <span className="status-badge upcoming">Upcoming</span>
                  ) : (
                    <span className="status-badge completed">
                      <CheckCircle2 size={14} /> {exam.resultStatus}
                    </span>
                  )}
                </div>

                <div className="olympiad-card-details">
                  <span>
                    <Calendar size={15} /> {exam.examDate}
                  </span>
                  <span>
                    <Clock size={15} /> {exam.examTime}
                  </span>
                  <span>
                    {exam.mode === "Online" ? (
                      <Monitor size={15} />
                    ) : (
                      <Building2 size={15} />
                    )}{" "}
                    {exam.mode}
                  </span>
                </div>

                {exam.status === "completed" && (
                  <div className="olympiad-card-score">
                    Score:{" "}
                    <strong>
                      {exam.obtainedMarks}/{exam.totalMarks}
                    </strong>
                  </div>
                )}

                <div className="olympiad-card-action">
                  {exam.status === "upcoming" ? (
                    <button className="olympiad-btn">View Details</button>
                  ) : (
                    <button className="olympiad-btn outline">
                      View Result
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

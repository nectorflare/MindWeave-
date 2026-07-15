import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  Calendar,
  Clock,
  Monitor,
  Building2,
  CheckCircle2,
  School,
} from "lucide-react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./SchoolOlympiads.css";

const dummySchoolOlympiads = [
  {
    examId: "SC1001",
    olympiadName: "Science Olympiad",
    class: "Class 8",
    examDate: "2024-05-12",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Online",
    status: "upcoming",
  },
  {
    examId: "SC1002",
    olympiadName: "Mathematics Olympiad",
    class: "Class 9",
    examDate: "2024-05-18",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Offline",
    status: "upcoming",
  },
  {
    examId: "SC1003",
    olympiadName: "English Olympiad",
    class: "Class 10",
    examDate: "2024-03-10",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Online",
    status: "completed",
    obtainedMarks: 87,
    totalMarks: 100,
    resultStatus: "Qualified",
  },
  {
    examId: "SC1004",
    olympiadName: "Science Olympiad",
    class: "Class 8",
    examDate: "2024-02-20",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Offline",
    status: "completed",
    obtainedMarks: 72,
    totalMarks: 100,
    resultStatus: "Qualified",
  },
  {
    examId: "SC1005",
    olympiadName: "General Knowledge Olympiad",
    class: "Class 9",
    examDate: "2024-06-02",
    examTime: "10:00 AM - 12:00 PM",
    mode: "Online",
    status: "upcoming",
  },
];

export default function SchoolOlympiads() {
  const [activeClass, setActiveClass] = useState("All");
  const navigate = useNavigate();

  // unique class list derived from data (e.g. ["Class 8", "Class 9", "Class 10"])
  const classList = [
    "All",
    ...new Set(dummySchoolOlympiads.map((e) => e.class)),
  ];

  const visibleExams =
    activeClass === "All"
      ? dummySchoolOlympiads
      : dummySchoolOlympiads.filter((e) => e.class === activeClass);

  const handleViewResult = (exam) => {
    navigate("/results", { state: { examId: exam.examId } });
  };

  console.log(JSON.stringify(dummySchoolOlympiads, null, 2));

  return (
    <>
      <Navbar />

      <div className="school-olympiads-page">
        <div className="school-olympiads-header">
          <div className="school-olympiads-icon">
            <School size={26} />
          </div>
          <div>
            <h1>School Olympiads</h1>
            <p>View all olympiads happening across classes in your school</p>
          </div>
        </div>

        <div className="school-olympiads-tabs">
          {classList.map((cls) => (
            <button
              key={cls}
              className={`tab-btn ${activeClass === cls ? "active" : ""}`}
              onClick={() => setActiveClass(cls)}
            >
              {cls}
            </button>
          ))}
        </div>

        {visibleExams.length === 0 ? (
          <div className="empty-state">
            <Trophy size={32} />
            <p>No olympiads found for {activeClass}.</p>
          </div>
        ) : (
          <div className="olympiad-cards">
            {visibleExams.map((exam) => (
              <div className="olympiad-card" key={exam.examId}>
                <div className="olympiad-card-top">
                  <div>
                    <h3>{exam.olympiadName}</h3>
                    <span className="olympiad-level">Class: {exam.class}</span>
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
                    Score: <strong>{exam.obtainedMarks}</strong> /{" "}
                    {exam.totalMarks}
                  </div>
                )}

                {exam.status === "completed" && (
                  <div className="olympiad-card-action">
                    <button
                      className="olympiad-btn outline"
                      onClick={() => handleViewResult(exam)}
                    >
                      View Result
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

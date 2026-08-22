import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { api } from "../../../services/api";
import "./Portal.css";
export default function LiveExamSchedule(){const[exams,setExams]=useState([]),[error,setError]=useState("");useEffect(()=>{api("/api/v1/exams/schedules").then(r=>setExams(r.data||[])).catch(e=>setError(e.message))},[]);return <><Navbar/><main className="portal-page"><h1>Exam schedule</h1>{error&&<p className="portal-error">{error}</p>}{!error&&!exams.length&&<p>No scheduled exams found.</p>}<div className="portal-grid">{exams.map(exam=><article className="portal-card" key={exam.id}><h2>{exam.title}</h2><p>{exam.description}</p><p><strong>Mode:</strong> {exam.mode}</p><p><strong>Starts:</strong> {exam.startTime?new Date(exam.startTime).toLocaleString():"To be announced"}</p><p><strong>Duration:</strong> {exam.durationMins} minutes</p><p><strong>Status:</strong> {exam.status}</p></article>)}</div></main><Footer/></>}

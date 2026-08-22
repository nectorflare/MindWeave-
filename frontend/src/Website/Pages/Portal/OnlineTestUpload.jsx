import { useState } from "react";
import { api } from "../../../services/api";
import "./Portal.css";

export default function OnlineTestUpload() {
  const [paperName, setPaperName] = useState("");
  const [classLabel, setClassLabel] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const submit = async (event) => {
    event.preventDefault(); setUploading(true); setStatus("");
    const body = new FormData(); body.append("paperName", paperName); body.append("classLabel", classLabel); body.append("durationMinutes", durationMinutes); body.append("file", file);
    try { const response = await api("/api/v1/admin/question-papers/upload", { method: "POST", body }); setStatus(`Uploaded ${response.data.questionCount} questions. Test ID: ${response.data.examId}`); setPaperName(""); setClassLabel(""); setFile(null); event.currentTarget.reset(); }
    catch (error) { setStatus(error.message); }
    finally { setUploading(false); }
  };
  return <main className="portal-page"><h1>Upload online test</h1><section className="portal-card"><p>The first spreadsheet row must use the supplied template headings. Correct answers may contain A, B, C, D, or the full matching option text.</p><p><a href="/templates/online-test-template.csv" download>Download example CSV</a> · <a href="/templates/online-test-template.xlsx" download>Download example XLSX</a></p><form className="portal-form" onSubmit={submit}><label>Question paper name<input required value={paperName} onChange={(event) => setPaperName(event.target.value)} /></label><label>Class<input required value={classLabel} onChange={(event) => setClassLabel(event.target.value)} placeholder="Example: Class 5" /></label><label>Duration in minutes<input required type="number" min="1" value={durationMinutes} onChange={(event) => setDurationMinutes(event.target.value)} /></label><label>CSV or XLSX file<input required type="file" accept=".csv,.xlsx" onChange={(event) => setFile(event.target.files?.[0] || null)} /></label><button className="portal-button" disabled={uploading}>{uploading ? "Uploading…" : "Create online test"}</button></form>{status && <p role="status">{status}</p>}</section></main>;
}

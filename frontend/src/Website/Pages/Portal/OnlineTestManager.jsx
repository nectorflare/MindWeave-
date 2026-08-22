import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import "./Portal.css";

const emptyQuestion = { questionText: "", options: { A: "", B: "", C: "", D: "" }, correctOption: "A", marks: 1, displayOrder: 0, status: "PUBLISHED" };
export default function OnlineTestManager() {
  const [exams,setExams]=useState([]),[examId,setExamId]=useState(""),[questions,setQuestions]=useState([]),[draft,setDraft]=useState(JSON.stringify(emptyQuestion,null,2)),[edits,setEdits]=useState({}),[status,setStatus]=useState("");
  useEffect(()=>{api("/api/v1/admin/catalog/exams?upcoming=false").then(r=>setExams((r.data||[]).filter(exam=>exam.eligibilityCriteria?.onlineTest))).catch(e=>setStatus(e.message))},[]);
  const load=async id=>{setExamId(id);if(!id)return setQuestions([]);try{const r=await api(`/api/v1/admin/question-bank/questions?examId=${encodeURIComponent(id)}`);setQuestions(r.data||[]);setEdits(Object.fromEntries((r.data||[]).map(item=>[item.id,JSON.stringify(item,null,2)])))}catch(e){setStatus(e.message)}};
  const create=async()=>{try{await api("/api/v1/admin/question-bank/questions",{method:"POST",body:JSON.stringify({...JSON.parse(draft),examId})});setStatus("Question created.");load(examId)}catch(e){setStatus(e.message)}};
  const update=async item=>{try{await api(`/api/v1/admin/question-bank/questions/${item.id}`,{method:"PUT",body:JSON.stringify(JSON.parse(edits[item.id]))});setStatus("Question updated.");load(examId)}catch(e){setStatus(e.message)}};
  const remove=async item=>{if(!confirm("Delete this question?"))return;try{await api(`/api/v1/admin/question-bank/questions/${item.id}`,{method:"DELETE"});setStatus("Question deleted.");load(examId)}catch(e){setStatus(e.message)}};
  return <main className="portal-page"><h1>Manage online-test questions</h1><section className="portal-card"><label>Question paper<select value={examId} onChange={e=>load(e.target.value)}><option value="">Select a paper</option>{exams.map(exam=><option key={exam.id} value={exam.id}>{exam.title}</option>)}</select></label></section>{examId&&<section className="portal-card"><h2>Create question</h2><textarea rows="12" style={{width:"100%"}} value={draft} onChange={e=>setDraft(e.target.value)}/><button className="portal-button" onClick={create}>Create question</button></section>}{status&&<p>{status}</p>}<div className="portal-grid">{questions.map(item=><article className="portal-card" key={item.id}><textarea rows="16" style={{width:"100%"}} value={edits[item.id]||""} onChange={e=>setEdits(current=>({...current,[item.id]:e.target.value}))}/><button className="portal-button" onClick={()=>update(item)}>Save</button> <button className="portal-button danger" onClick={()=>remove(item)}>Delete</button></article>)}</div></main>;
}

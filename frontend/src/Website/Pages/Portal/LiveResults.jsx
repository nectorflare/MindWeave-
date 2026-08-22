import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { api } from "../../../services/api";
import "./Portal.css";
export default function LiveResults(){const{state}=useLocation(),[results,setResults]=useState([]),[error,setError]=useState("");useEffect(()=>{api("/api/v1/students/me/results").then(r=>{const rows=r.data||[];setResults(state?.examId?rows.filter(item=>(item.examId||item.exam_id)===state.examId):rows)}).catch(e=>setError(e.message))},[state?.examId]);return <><Navbar/><main className="portal-page"><h1>My results</h1>{error&&<p className="portal-error">{error}</p>}{!error&&!results.length&&<p>No published results found.</p>}<div className="portal-grid">{results.map((result,index)=><article className="portal-card" key={result.id||index}><h2>{result.examTitle||result.exam_title||"Olympiad result"}</h2><p><strong>Score:</strong> {result.resultScore??result.result_score??"Pending"}</p><p><strong>Status:</strong> {result.resultStatus||result.result_status||"Pending"}</p>{(result.certificateUrl||result.certificate_url)&&<a href={result.certificateUrl||result.certificate_url}>Download certificate</a>}</article>)}</div></main><Footer/></>}

import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { api, getAuthUser } from "../../../services/api";
import "./Portal.css";

const labels = { first_name:"First name",last_name:"Last name",class_grade:"Class",mobile_number:"Mobile",address_city:"City",address_state:"State",school_name:"School name",board_name:"Board",principal_name:"Principal",coordinator_email_id:"Coordinator email" };
const camel = (key) => key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
export default function AccountProfile({ type }) {
  const endpoint = `/api/v1/${type}s/me`;
  const [profile,setProfile]=useState(null),[error,setError]=useState(""),[saved,setSaved]=useState("");
  useEffect(()=>{api(endpoint).then(r=>setProfile(r.studentProfile||r.schoolProfile||r.data||r)).catch(e=>setError(e.message));},[endpoint]);
  const save=async(e)=>{e.preventDefault();setSaved("");try{const body=Object.fromEntries(Object.entries(profile).map(([key,value])=>[camel(key),value]));const r=await api(endpoint,{method:"PUT",body:JSON.stringify(body)});setProfile(r.studentProfile||r.schoolProfile||r.data||profile);setSaved("Profile saved.");}catch(err){setError(err.message)}};
  return <><Navbar/><main className="portal-page"><h1>{type === "student" ? "Student" : "School"} profile</h1>{error&&<p className="portal-error">{error}</p>}{profile&&<form className="portal-form" onSubmit={save}>
    <label>Email<input disabled value={getAuthUser()?.email||""}/></label>{Object.entries(labels).filter(([k])=>k in profile).map(([key,label])=><label key={key}>{label}<input value={profile[key]??""} onChange={e=>setProfile({...profile,[key]:e.target.value})}/></label>)}
    <button className="portal-button">Save profile</button>{saved&&<p>{saved}</p>}</form>}</main><Footer/></>;
}

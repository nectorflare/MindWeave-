import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { api } from "../../../services/api";
import "../Gallery/Gallery.css";
export default function LiveGallery(){const[items,setItems]=useState([]),[error,setError]=useState("");useEffect(()=>{api("/api/v1/public/gallery").then(r=>setItems(r.data||[])).catch(e=>setError(e.message))},[]);return <><Navbar/><section className="gallery-section"><div className="gallery-header"><span className="gallery-eyebrow">Moments</span><h1 className="gallery-title">Our Gallery</h1></div>{error&&<p role="alert">{error}</p>}{!error&&!items.length&&<p>No gallery images have been published.</p>}<div className="gallery-grid">{items.map(item=><div className="gallery-card" key={item.id}><img className="gallery-img" loading="lazy" src={item.imageUrl} alt={item.caption||"MindWeave gallery"}/>{item.caption&&<div className="gallery-overlay"><span className="gallery-overlay-text">{item.caption}</span></div>}</div>)}</div></section><Footer/></>}

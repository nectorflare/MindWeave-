import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { api } from "../../../services/api";
import "./Portal.css";

const humanize = (key) => key.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
const display = (value) => value == null ? "—" : typeof value === "object" ? JSON.stringify(value) : String(value);

export default function ResourcePage({ title, endpoint, empty = "No records found.", action }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => { api(endpoint).then((result) => setItems(Array.isArray(result.data) ? result.data : result.data?.items || (result.data && typeof result.data === "object" ? [result.data] : []))).catch((e) => setError(e.message)).finally(() => setLoading(false)); }, [endpoint]);
  return <><Navbar/><main className="portal-page"><div className="portal-head"><h1>{title}</h1>{action}</div>
    {loading && <p>Loading…</p>}{error && <p className="portal-error">{error}</p>}{!loading && !error && !items.length && <p>{empty}</p>}
    <div className="portal-grid">{items.map((item, index) => <article className="portal-card" key={item.id || index}>
      {Object.entries(item).filter(([,value]) => typeof value !== "object").slice(0,10).map(([key,value]) => <div className="portal-row" key={key}><span className="portal-muted">{humanize(key)}</span><strong>{display(value)}</strong></div>)}
    </article>)}</div></main><Footer/></>;
}

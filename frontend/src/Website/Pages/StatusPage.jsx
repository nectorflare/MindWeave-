import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function StatusPage({ title = "Page not found", message = "The requested page is not available." }) {
  return <><Navbar /><main style={{ minHeight: "55vh", display: "grid", placeItems: "center", textAlign: "center", padding: 32 }}>
    <div><h1>{title}</h1><p>{message}</p><Link to="/home">Return home</Link></div>
  </main><Footer /></>;
}

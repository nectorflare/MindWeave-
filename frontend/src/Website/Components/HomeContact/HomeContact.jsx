import { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import "./HomeContact.css";

const emptyForm = { name: "", email: "", message: "" };

export default function HomeContact() {
  const [settings, setSettings] = useState({});
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    api("/api/v1/public/contact-settings").then((response) => setSettings(response.data || {})).catch(() => {});
  }, []);

  const submit = async (event) => {
    event.preventDefault(); setSending(true); setStatus("");
    try {
      await api("/api/v1/public/inquiries", { method: "POST", body: JSON.stringify(form) });
      setForm(emptyForm); setStatus("Thanks—your message has been sent.");
    } catch (error) { setStatus(error.message); }
    finally { setSending(false); }
  };

  const phone = settings.phone || "+91 12345 67890";
  const email = settings.email || "info@mindweaverfoundation.org";
  const address = settings.address || "New Delhi, India";

  return <section className="home-contact" id="contact"><div className="home-contact-inner">
    <div className="home-contact-copy"><span>GET IN TOUCH</span><h2>Have a question? We’re here to help.</h2><p>Talk to our team about Olympiads, school partnerships, registrations, books, or student support.</p><div className="home-contact-details">
      <a href={`mailto:${email}`}><FaEnvelope /><div><small>Email us</small><strong>{email}</strong></div></a>
      <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}><FaPhoneAlt /><div><small>Call us</small><strong>{phone}</strong></div></a>
      <div><FaMapMarkerAlt /><div><small>Visit us</small><strong>{address}</strong></div></div>
    </div><Link to="/contact-us" className="home-contact-more">View full contact details</Link></div>
    <form className="home-contact-form" onSubmit={submit}><h3>Send us a message</h3><label>Full name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label><label>Email address<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label><label>How can we help?<textarea required rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Write your message" /></label><button disabled={sending}><FaPaperPlane /> {sending ? "Sending…" : "Send message"}</button>{status && <p className="home-contact-status" role="status">{status}</p>}</form>
  </div></section>;
}

import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { resourceActions } from "./adminResourceActions";
import "./Portal.css";

const templates = {
  "catalog/subjects": { name: "", code: "", description: "", status: "DRAFT" },
  "catalog/exams": { subjectId: "", title: "", mode: "ONLINE", startTime: "", durationMins: 60, totalMarks: 100, fee: 0 },
  books: { title: "", price: 0, stockQuantity: 0 },
  "cms/banners": { title: "", imageUrl: "", isActive: true },
  "cms/offers": { title: "", description: "", code: "", isActive: true },
  "cms/faqs": { question: "", answer: "", isActive: true },
  "cms/gallery": { imageUrl: "", caption: "", isActive: true },
  "cms/study-resources": { title: "", classRange: "Classes 1–12", description: "", color: "#10275e", previewPath: "/practice-papers", bookId: null, isActive: true, displayOrder: 0 },
  "cms/practice-papers": { title: "", subject: "", classLabel: "", description: "", durationMinutes: 60, maxMarks: 0, instructions: [], sections: [], color: "#0d225a", isActive: true, displayOrder: 0 },
  "cms/team-members": { name: "", title: "", details: "", imageUrl: "", imageAlt: "", isActive: true, displayOrder: 0 },
  roles: { name: "", description: "" },
  staff: { email: "", name: "", password: "" },
};

export default function AdminResource() {
  const { resource } = useParams();
  const path = decodeURIComponent(resource);
  const endpoint = `/api/v1/admin/${path}`;
  const actions = resourceActions(path);
  const [items, setItems] = useState([]);
  const [itemDrafts, setItemDrafts] = useState({});
  const [draft, setDraft] = useState(JSON.stringify(templates[path] || {}, null, 2));
  const [status, setStatus] = useState("");
  const load = useCallback(() => api(endpoint).then((response) => {
    const records = Array.isArray(response.data) ? response.data : response.data ? [response.data] : [];
    setItems(records);
    setItemDrafts(Object.fromEntries(records.map((item, index) => [item.id || index, JSON.stringify(item, null, 2)])));
  }).catch((error) => setStatus(error.message)), [endpoint]);
  useEffect(() => { load(); }, [load]);
  const create = async () => { try { await api(endpoint, { method: "POST", body: JSON.stringify(JSON.parse(draft)) }); setStatus("Created."); load(); } catch (error) { setStatus(error.message); } };
  const update = async (item, index) => { try { const edited = JSON.parse(itemDrafts[item.id || index]); await api(actions.updatePath(endpoint, item), { method: actions.updateMethod, body: JSON.stringify(actions.updateBody(edited)) }); setStatus("Updated."); load(); } catch (error) { setStatus(error.message); } };
  const remove = async (item) => { if (!confirm("Delete this record?")) return; try { await api(`${endpoint}/${item.id}`, { method: "DELETE" }); load(); } catch (error) { setStatus(error.message); } };
  return <main className="portal-page"><h1>{path.replace(/[/?=-]/g, " ")}</h1>{templates[path] && <section className="portal-card"><h2>Create</h2><textarea rows="8" style={{ width: "100%" }} value={draft} onChange={(event) => setDraft(event.target.value)} /><button className="portal-button" onClick={create}>Create record</button></section>}{status && <p>{status}</p>}<div className="portal-grid">{items.map((item, index) => <article className="portal-card" key={item.id || index}><textarea rows="16" readOnly={!actions.canUpdate} style={{ width: "100%" }} value={itemDrafts[item.id || index] || ""} onChange={(event) => setItemDrafts((current) => ({ ...current, [item.id || index]: event.target.value }))} />{item.id && <div>{actions.canUpdate && <button className="portal-button" onClick={() => update(item, index)}>Save</button>} {actions.canDelete && <button className="portal-button danger" onClick={() => remove(item)}>Delete</button>}</div>}</article>)}</div></main>;
}

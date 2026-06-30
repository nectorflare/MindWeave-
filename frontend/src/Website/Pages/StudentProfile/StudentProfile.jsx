import React, { useState, useEffect } from "react";
import "./StudentProfile.css";
import { Link, useNavigate } from "react-router-dom";
import EditProfilePanel from "../Editprofilepanel/Editprofilepanel";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProfileSidebar from "../../Components/ProfileSidebar/ProfileSidebar";
import "../../Components/Breadcrumb/Breadcrumb.css";

const statsData = [
  {
    icon: "🏆",
    label: "Olympiads Registered",
    value: 5,
    color: "#e8f4fd",
    iconColor: "#3b82f6",
  },
  {
    icon: "🛍️",
    label: "Orders Placed",
    value: 8,
    color: "#fff7ed",
    iconColor: "#f97316",
  },
  {
    icon: "🏅",
    label: "Certificates Earned",
    value: 3,
    color: "#fef2f2",
    iconColor: "#ef4444",
  },
  {
    icon: "⬇️",
    label: "Downloads",
    value: 12,
    color: "#f5f3ff",
    iconColor: "#8b5cf6",
  },
];

const olympiadsData = [
  {
    logo: "ISCO",
    color: "#1e40af",
    name: "International Science Olympiad (ISCO)",
    class: 10,
    examDate: "12 May 2024",
    status: "Completed",
    score: "65/100",
  },
  {
    logo: "IMO",
    color: "#15803d",
    name: "International Mathematics Olympiad (IMO)",
    class: 10,
    examDate: "18 Feb 2024",
    status: "Completed",
    score: "72/100",
  },
  {
    logo: "IEO",
    color: "#7c3aed",
    name: "International English Olympiad (IEO)",
    class: 10,
    examDate: "10 Dec 2023",
    status: "Completed",
    score: "68/100",
  },
  {
    logo: "NSO",
    color: "#b45309",
    name: "National Science Olympiad (NSO)",
    class: 9,
    examDate: "15 Oct 2023",
    status: "Completed",
    score: "60/100",
  },
  {
    logo: "CO",
    color: "#dc2626",
    name: "Cyber Olympiad (CO)",
    class: 9,
    examDate: "20 Aug 2023",
    status: "Completed",
    score: "70/100",
  },
];

const recentOrders = [
  {
    logo: "ISCO",
    color: "#1e40af",
    name: "International Science Olympiad (ISCO) Guide Book Class 10",
    orderId: "MWF11258",
    date: "20 Apr 2024",
    status: "Delivered",
    statusColor: "#16a34a",
    price: "₹450.00",
  },
  {
    logo: "Z",
    color: "#ca8a04",
    name: "Achiever Series Mathematics Class 10",
    orderId: "MWF11257",
    date: "18 Apr 2024",
    status: "Shipped",
    statusColor: "#2563eb",
    price: "₹399.00",
  },
  {
    logo: "P",
    color: "#15803d",
    name: "Practice Sets for Olympiads Class 9",
    orderId: "MWF11256",
    date: "15 Apr 2024",
    status: "Delivered",
    statusColor: "#16a34a",
    price: "₹299.00",
  },
];

const certificates = [
  { name: "International Science Olympiad (ISCO)", issued: "25 May 2024" },
  { name: "International Mathematics Olympiad (IMO)", issued: "02 Mar 2024" },
  { name: "International English Olympiad (IEO)", issued: "20 Dec 2023" },
];

const downloads = [
  {
    icon: "📄",
    color: "#dc2626",
    name: "ISCO Sample Paper",
    subtitle: "Class 10",
    date: "Downloaded on: 20 Apr 2024",
  },
  {
    icon: "📄",
    color: "#dc2626",
    name: "IMO Previous Year Paper",
    subtitle: "Class 10",
    date: "Downloaded on: 18 Apr 2024",
  },
  {
    icon: "📄",
    color: "#dc2626",
    name: "Olympiad Preparation Guide 2024",
    subtitle: "",
    date: "Downloaded on: 15 Apr 2024",
  },
];

export default function MyProfile() {
  const navigate = useNavigate();
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    name: "",
    email: "",
    mobile: "",
    classGrade: "",
    schoolName: "",
    city: "",
    state: "",
    cityState: "",
    gender: "",
    dob: "",
    memberSince: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/student-login");
      return;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));
    const userId = payload.userId;

    fetch(`${import.meta.env.VITE_API_URL}/api/students/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfileData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          name: `${data.firstName || ""} ${data.lastName || ""}`.trim(),
          email: data.emailId || "",
          mobile: data.mobileNumber || "",
          classGrade: data.classGrade || "",
          schoolName: data.schoolName || "",
          city: data.city || "",
          state: data.state || "",
          cityState: `${data.city || ""}, ${data.state || ""}`,
          gender: data.gender || "",
          dob: data.dateOfBirth || "",
          memberSince: data.createdAt
            ? new Date(data.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleNav = (path) => {
    navigate(path);
  };

  if (loading)
    return (
      <p
        style={{ textAlign: "center", marginTop: "100px", fontSize: "1.2rem" }}
      >
        Loading...
      </p>
    );

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">My Profile</span>
      </div>
      <div className="mp-root">
        <div className="mp-layout">
          {/* Sidebar (shared across all student dashboard pages) */}
          <ProfileSidebar />

          {/* Main Content */}
          <main className="mp-main">
            {/* Profile Information */}
            <section className="mp-card mp-profile-info">
              <h2 className="mp-section-title">Profile Information</h2>
              <div className="mp-profile-grid">
                <div className="mp-profile-field">
                  <span className="mp-field-icon">👤</span>
                  <div>
                    <div className="mp-field-label">Name</div>
                    <div className="mp-field-value">
                      {profileData.name || "—"}
                    </div>
                  </div>
                </div>
                <div className="mp-profile-field">
                  <span className="mp-field-icon">📚</span>
                  <div>
                    <div className="mp-field-label">Class / Grade</div>
                    <div className="mp-field-value">
                      {profileData.classGrade || "—"}
                    </div>
                  </div>
                </div>
                <div className="mp-profile-field">
                  <span className="mp-field-icon">📅</span>
                  <div>
                    <div className="mp-field-label">Member Since</div>
                    <div className="mp-field-value">
                      {profileData.memberSince || "—"}
                    </div>
                  </div>
                </div>
                <div className="mp-profile-field">
                  <span className="mp-field-icon">✉️</span>
                  <div>
                    <div className="mp-field-label">Email</div>
                    <div className="mp-field-value">
                      {profileData.email || "—"}
                    </div>
                  </div>
                </div>
                <div className="mp-profile-field">
                  <span className="mp-field-icon">🏫</span>
                  <div>
                    <div className="mp-field-label">School Name</div>
                    <div className="mp-field-value">
                      {profileData.schoolName || "—"}
                    </div>
                  </div>
                </div>
                <div className="mp-profile-field mp-edit-col">
                  <button
                    className="mp-edit-btn"
                    onClick={() => setIsEditPanelOpen(true)}
                  >
                    ✏️ Edit Profile
                  </button>
                </div>
                <div className="mp-profile-field">
                  <span className="mp-field-icon">📱</span>
                  <div>
                    <div className="mp-field-label">Mobile Number</div>
                    <div className="mp-field-value">
                      {profileData.mobile || "—"}
                    </div>
                  </div>
                </div>
                <div className="mp-profile-field">
                  <span className="mp-field-icon">📍</span>
                  <div>
                    <div className="mp-field-label">City / State</div>
                    <div className="mp-field-value">
                      {profileData.cityState || "—"}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="mp-stats-row">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="mp-stat-card"
                  style={{ background: stat.color }}
                >
                  <div
                    className="mp-stat-icon"
                    style={{ color: stat.iconColor }}
                  >
                    {stat.icon}
                  </div>
                  <div className="mp-stat-info">
                    <div className="mp-stat-label">{stat.label}</div>
                    <div className="mp-stat-value">{stat.value}</div>
                    <button
                      className="mp-stat-link"
                      onClick={() =>
                        handleNav(
                          `/student/${stat.label.toLowerCase().replace(/ /g, "-")}`,
                        )
                      }
                    >
                      View All
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* My Olympiads Table */}
            <section className="mp-card">
              <div className="mp-section-header">
                <h2 className="mp-section-title">My Olympiads</h2>
                <button
                  className="mp-view-all-link"
                  onClick={() => handleNav("/student/my-olympiads")}
                >
                  View All Registrations
                </button>
              </div>
              <div className="mp-table-wrapper">
                <table className="mp-table">
                  <thead>
                    <tr>
                      <th>Olympiad Name</th>
                      <th>Class</th>
                      <th>Exam Date</th>
                      <th>Status</th>
                      <th>Score</th>
                      <th>Certificate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {olympiadsData.map((o) => (
                      <tr key={o.name}>
                        <td>
                          <div className="mp-olympiad-name-cell">
                            <span
                              className="mp-olympiad-badge"
                              style={{ background: o.color }}
                            >
                              {o.logo}
                            </span>
                            <span>{o.name}</span>
                          </div>
                        </td>
                        <td>{o.class}</td>
                        <td>{o.examDate}</td>
                        <td>
                          <span className="mp-status-badge">{o.status}</span>
                        </td>
                        <td>{o.score}</td>
                        <td>
                          <button
                            className="mp-download-btn"
                            onClick={() =>
                              alert(`Downloading certificate for ${o.name}`)
                            }
                          >
                            ⬇️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bottom Row */}
            <div className="mp-bottom-row">
              {/* Recent Orders */}
              <section className="mp-card mp-bottom-card">
                <div className="mp-section-header">
                  <h2 className="mp-section-title">Recent Orders</h2>
                  <button
                    className="mp-view-all-link"
                    onClick={() => handleNav("/student/my-orders")}
                  >
                    View All Orders
                  </button>
                </div>
                <div className="mp-orders-list">
                  {recentOrders.map((order) => (
                    <div key={order.orderId} className="mp-order-item">
                      <span
                        className="mp-olympiad-badge mp-order-badge"
                        style={{ background: order.color }}
                      >
                        {order.logo}
                      </span>
                      <div className="mp-order-details">
                        <div className="mp-order-name">{order.name}</div>
                        <div className="mp-order-meta">
                          Order ID: {order.orderId}
                        </div>
                        <div className="mp-order-meta">
                          Ordered on: {order.date}
                        </div>
                      </div>
                      <div className="mp-order-right">
                        <span
                          className="mp-order-status"
                          style={{ color: order.statusColor }}
                        >
                          {order.status}
                        </span>
                        <div className="mp-order-price">{order.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="mp-view-all-btn"
                  onClick={() => handleNav("/student/my-orders")}
                >
                  View All Orders
                </button>
              </section>

              {/* Certificates */}
              <section className="mp-card mp-bottom-card">
                <div className="mp-section-header">
                  <h2 className="mp-section-title">My Certificates</h2>
                  <button
                    className="mp-view-all-link"
                    onClick={() => handleNav("/student/my-certificates")}
                  >
                    View All
                  </button>
                </div>
                <div className="mp-cert-list">
                  {certificates.map((cert) => (
                    <div key={cert.name} className="mp-cert-item">
                      <div className="mp-cert-info">
                        <div className="mp-cert-name">{cert.name}</div>
                        <div className="mp-cert-issued">
                          Issued on: {cert.issued}
                        </div>
                      </div>
                      <button
                        className="mp-download-btn"
                        onClick={() =>
                          alert(`Downloading ${cert.name} certificate`)
                        }
                      >
                        ⬇️
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Downloads */}
              <section className="mp-card mp-bottom-card">
                <div className="mp-section-header">
                  <h2 className="mp-section-title">My Downloads</h2>
                  <button
                    className="mp-view-all-link"
                    onClick={() => handleNav("/student/my-downloads")}
                  >
                    View All
                  </button>
                </div>
                <div className="mp-downloads-list">
                  {downloads.map((dl) => (
                    <div key={dl.name} className="mp-download-item">
                      <span
                        className="mp-dl-icon"
                        style={{ background: dl.color }}
                      >
                        PDF
                      </span>
                      <div className="mp-dl-info">
                        <div className="mp-dl-name">{dl.name}</div>
                        {dl.subtitle && (
                          <div className="mp-dl-sub">{dl.subtitle}</div>
                        )}
                        <div className="mp-dl-date">{dl.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Saved Addresses */}
            <section className="mp-card mp-addr-section">
              <div className="mp-section-header">
                <h2 className="mp-section-title">Saved Addresses</h2>
                <button
                  className="mp-view-all-link"
                  onClick={() => handleNav("/student/manage-addresses")}
                >
                  Manage Addresses
                </button>
              </div>
              <div className="mp-addr-grid">
                <div className="mp-addr-card">
                  <div className="mp-addr-header">
                    <span className="mp-addr-default-badge">Default</span>
                    <span className="mp-addr-label">Home</span>
                    <div className="mp-addr-actions">
                      <button
                        className="mp-addr-icon-btn"
                        onClick={() => alert("Edit Home address")}
                      >
                        ✏️
                      </button>
                      <button
                        className="mp-addr-icon-btn mp-addr-del"
                        onClick={() => alert("Delete Home address")}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="mp-addr-text">
                    A-1, Education Hub, Near Metro Station
                  </div>
                  <div className="mp-addr-text">
                    New Delhi, Delhi - 110001, India
                  </div>
                  <div className="mp-addr-phone">+91 98765 43210</div>
                </div>
                <div className="mp-addr-card">
                  <div className="mp-addr-header">
                    <span className="mp-addr-label">Hostel</span>
                    <div className="mp-addr-actions">
                      <button
                        className="mp-addr-icon-btn"
                        onClick={() => alert("Edit Hostel address")}
                      >
                        ✏️
                      </button>
                      <button
                        className="mp-addr-icon-btn mp-addr-del"
                        onClick={() => alert("Delete Hostel address")}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="mp-addr-text">
                    Room No. 302, Green Park Hostel
                  </div>
                  <div className="mp-addr-text">
                    Anand Vihar, New Delhi - 110092, India
                  </div>
                  <div className="mp-addr-phone">+91 98765 43210</div>
                </div>
                <button
                  className="mp-addr-add-card"
                  onClick={() => alert("Add New Address clicked")}
                >
                  <span className="mp-addr-add-icon">+</span>
                  <span className="mp-addr-add-label">Add New Address</span>
                </button>
              </div>
            </section>

            {/* Explore More */}
            <section className="mp-explore-section">
              <div className="mp-explore-left">
                <h3 className="mp-explore-title">
                  Explore More &amp; Achieve Excellence
                </h3>
                <p className="mp-explore-sub">
                  Continue your olympiad journey and unlock your potential.
                </p>
              </div>
              <div className="mp-explore-cards">
                <button
                  className="mp-explore-card"
                  onClick={() => handleNav("/olympiads")}
                >
                  <span className="mp-explore-emoji">🏆</span>
                  <div>
                    <div className="mp-explore-card-title">
                      Explore Olympiads
                    </div>
                    <div className="mp-explore-card-link">
                      View All Olympiads →
                    </div>
                  </div>
                </button>
                <button
                  className="mp-explore-card"
                  onClick={() => handleNav("/results")}
                >
                  <span className="mp-explore-emoji">📊</span>
                  <div>
                    <div className="mp-explore-card-title">View Results</div>
                    <div className="mp-explore-card-link">
                      Check Your Results →
                    </div>
                  </div>
                </button>
                <button
                  className="mp-explore-card"
                  onClick={() => handleNav("/books")}
                >
                  <span className="mp-explore-emoji">📗</span>
                  <div>
                    <div className="mp-explore-card-title">Books Store</div>
                    <div className="mp-explore-card-link">Browse Books →</div>
                  </div>
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
      <EditProfilePanel
        isOpen={isEditPanelOpen}
        onClose={() => setIsEditPanelOpen(false)}
        profile={profileData}
        onSave={(updatedData) => setProfileData(updatedData)}
      />
      <Footer />
    </>
  );
}

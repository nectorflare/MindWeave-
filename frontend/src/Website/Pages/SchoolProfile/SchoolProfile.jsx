import React, { useState, useEffect } from "react";
import "./SchoolProfile.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Breadcrumb/Breadcrumb.css";
import EditSchoolProfile from "../EditSchoolProfile/EditSchoolProfile";

// const initialProfileData = {
//   // School Info
//   schoolName: "ABC Public School",
//   schoolCode: "",
//   schoolType: "CBSE",
//   boardName: "CBSE",
//   affiliationNumber: "CBSE12345",
//   udiseCode: "09123456789",
//   establishedYear: "2020",
//   // Address
//   addressLine1: "Sector 15",
//   addressLine2: "Near City Mall",
//   city: "Noida",
//   district: "Noida",
//   state: "Uttar Pradesh",
//   pincode: "201301",
//   country: "India",
//   // Principal
//   principalName: "Sonam Sharma",
//   principalMobileNumber: "9876543210",
//   principalEmailId: "abc@gmail.com",
//   // Coordinator
//   olympiadCoordinatorName: "Rajesh Kumar",
//   designation: "Academic Coordinator",
//   mobileNumber: "9876543210",
//   whatsappNumber: "9876543211",
//   coordinatorEmailId: "coordinator@abcschool.com",
//   // School Contact
//   emailId: "school@abcschool.com",
//   memberSince: "15 March 2024",
// };

const statsData = [
  {
    icon: "🏆",
    label: "Olympiads Registered",
    value: 12,
    color: "#e8f4fd",
    iconColor: "#3b82f6",
  },
  {
    icon: "🛍️",
    label: "Orders Placed",
    value: 20,
    color: "#fff7ed",
    iconColor: "#f97316",
  },
  {
    icon: "🏅",
    label: "Certificates Earned",
    value: 8,
    color: "#fef2f2",
    iconColor: "#ef4444",
  },
  {
    icon: "⬇️",
    label: "Downloads",
    value: 35,
    color: "#f5f3ff",
    iconColor: "#8b5cf6",
  },
];

const olympiadsData = [
  {
    logo: "ISCO",
    color: "#1e40af",
    name: "International Science Olympiad (ISCO)",
    totalStudents: 45,
    examDate: "12 May 2024",
    status: "Completed",
    topScore: "88/100",
  },
  {
    logo: "IMO",
    color: "#15803d",
    name: "International Mathematics Olympiad (IMO)",
    totalStudents: 60,
    examDate: "18 Feb 2024",
    status: "Completed",
    topScore: "92/100",
  },
  {
    logo: "IEO",
    color: "#7c3aed",
    name: "International English Olympiad (IEO)",
    totalStudents: 38,
    examDate: "10 Dec 2023",
    status: "Completed",
    topScore: "85/100",
  },
  {
    logo: "NSO",
    color: "#b45309",
    name: "National Science Olympiad (NSO)",
    totalStudents: 52,
    examDate: "15 Oct 2023",
    status: "Completed",
    topScore: "79/100",
  },
  {
    logo: "CO",
    color: "#dc2626",
    name: "Cyber Olympiad (CO)",
    totalStudents: 30,
    examDate: "20 Aug 2023",
    status: "Completed",
    topScore: "82/100",
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
    price: "₹4,500.00",
  },
  {
    logo: "Z",
    color: "#ca8a04",
    name: "Achiever Series Mathematics Class 10 (Bulk)",
    orderId: "MWF11257",
    date: "18 Apr 2024",
    status: "Shipped",
    statusColor: "#2563eb",
    price: "₹3,990.00",
  },
  {
    logo: "P",
    color: "#15803d",
    name: "Practice Sets for Olympiads Class 9",
    orderId: "MWF11256",
    date: "15 Apr 2024",
    status: "Delivered",
    statusColor: "#16a34a",
    price: "₹2,990.00",
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

const navItems = [
  { icon: "🏫", label: "School Profile", path: "/school/my-profile" },
  { icon: "🏆", label: "My Olympiads", path: "/school/my-olympiads" },
  { icon: "📦", label: "My Orders", path: "/school/my-orders" },
  { icon: "🏅", label: "My Certificates", path: "/school/my-certificates" },
  { icon: "⬇️", label: "My Downloads", path: "/school/my-downloads" },
  {
    icon: "🔔",
    label: "Notifications",
    path: "/school/notifications",
    badge: 3,
  },
  { icon: "🔒", label: "Change Password", path: "/school/change-password" },
  { icon: "🚪", label: "Logout", path: "/logout" },
];

export default function SchoolProfile() {
  const [activePath, setActivePath] = useState("/school/my-profile");
  const [profileData, setProfileData] = useState({});
  const [editSliderOpen, setEditSliderOpen] = useState(false);
  useEffect(() => {
    const fetchSchool = async () => {
      const token = localStorage.getItem("token");
      const schoolId = localStorage.getItem("schoolId");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/schools/${schoolId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      setProfileData(data.schoolProfile);
    };

    fetchSchool();
  }, []);

  const handleNav = (path) => {
    setActivePath(path);
    window.history.pushState({}, "", path);
  };

  const handleProfileSave = (updatedData) => {
    setProfileData((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <>
      <Navbar />
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">School Profile</span>
      </div>
      <div className="sp-root">
        <div className="sp-layout">
          {/* Sidebar */}
          <aside className="sp-sidebar">
            {navItems.map((item) => (
              <button
                key={item.path}
                className={`sp-nav-item${activePath === item.path ? " sp-nav-active" : ""}`}
                onClick={() => handleNav(item.path)}
              >
                <span className="sp-nav-icon">{item.icon}</span>
                <span className="sp-nav-label">{item.label}</span>
                {item.badge && (
                  <span className="sp-nav-badge">{item.badge}</span>
                )}
              </button>
            ))}
          </aside>

          {/* Main Content */}
          <main className="sp-main">
            {/* ── SCHOOL PROFILE INFORMATION ── */}
            <section className="sp-card sp-profile-info">
              <div className="sp-section-header">
                <h2 className="sp-section-title">School Profile Information</h2>
                <button
                  className="sp-edit-btn"
                  onClick={() => setEditSliderOpen(true)}
                >
                  ✏️ Edit Profile
                </button>
              </div>

              {/* School Basic Info */}
              <div className="sp-profile-sub-heading">
                🏫 School Information
              </div>
              <div className="sp-profile-grid">
                <div className="sp-profile-field">
                  <span className="sp-field-icon">🏫</span>
                  <div>
                    <div className="sp-field-label">School Name</div>
                    <div className="sp-field-value">
                      {profileData.schoolName}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">📋</span>
                  <div>
                    <div className="sp-field-label">Board / Type</div>
                    <div className="sp-field-value">
                      {profileData.boardName} — {profileData.schoolType}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">🔢</span>
                  <div>
                    <div className="sp-field-label">Affiliation Number</div>
                    <div className="sp-field-value">
                      {profileData.affiliationNumber}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">🆔</span>
                  <div>
                    <div className="sp-field-label">UDISE Code</div>
                    <div className="sp-field-value">
                      {profileData.udiseCode}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">📅</span>
                  <div>
                    <div className="sp-field-label">Established Year</div>
                    <div className="sp-field-value">
                      {profileData.establishedYear}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">📅</span>
                  <div>
                    <div className="sp-field-label">Member Since</div>
                    <div className="sp-field-value">
                      {profileData.memberSince}
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="sp-profile-sub-heading">📍 Address</div>
              <div className="sp-profile-grid">
                <div className="sp-profile-field">
                  <span className="sp-field-icon">📍</span>
                  <div>
                    <div className="sp-field-label">Address</div>
                    <div className="sp-field-value">
                      {profileData.addressLine1}
                      {profileData.addressLine2
                        ? ", " + profileData.addressLine2
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">🏙️</span>
                  <div>
                    <div className="sp-field-label">City / District</div>
                    <div className="sp-field-value">
                      {profileData.city}, {profileData.district}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">🗺️</span>
                  <div>
                    <div className="sp-field-label">State / Pincode</div>
                    <div className="sp-field-value">
                      {profileData.state} — {profileData.pincode}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">🌍</span>
                  <div>
                    <div className="sp-field-label">Country</div>
                    <div className="sp-field-value">{profileData.country}</div>
                  </div>
                </div>
              </div>

              {/* Principal Info */}
              <div className="sp-profile-sub-heading">
                👤 Principal Information
              </div>
              <div className="sp-profile-grid">
                <div className="sp-profile-field">
                  <span className="sp-field-icon">👤</span>
                  <div>
                    <div className="sp-field-label">Principal Name</div>
                    <div className="sp-field-value">
                      {profileData.principalName}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">📱</span>
                  <div>
                    <div className="sp-field-label">Principal Mobile</div>
                    <div className="sp-field-value">
                      {profileData.principalMobileNumber}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">✉️</span>
                  <div>
                    <div className="sp-field-label">Principal Email</div>
                    <div className="sp-field-value">
                      {profileData.principalEmailId}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coordinator Info */}
              <div className="sp-profile-sub-heading">
                🎯 Olympiad Coordinator
              </div>
              <div className="sp-profile-grid">
                <div className="sp-profile-field">
                  <span className="sp-field-icon">👤</span>
                  <div>
                    <div className="sp-field-label">Coordinator Name</div>
                    <div className="sp-field-value">
                      {profileData.olympiadCoordinatorName}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">💼</span>
                  <div>
                    <div className="sp-field-label">Designation</div>
                    <div className="sp-field-value">
                      {profileData.designation}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">📱</span>
                  <div>
                    <div className="sp-field-label">Mobile Number</div>
                    <div className="sp-field-value">
                      {profileData.mobileNumber}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">💬</span>
                  <div>
                    <div className="sp-field-label">WhatsApp Number</div>
                    <div className="sp-field-value">
                      {profileData.whatsappNumber}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">✉️</span>
                  <div>
                    <div className="sp-field-label">Coordinator Email</div>
                    <div className="sp-field-value">
                      {profileData.coordinatorEmailId}
                    </div>
                  </div>
                </div>
                <div className="sp-profile-field">
                  <span className="sp-field-icon">✉️</span>
                  <div>
                    <div className="sp-field-label">School Email</div>
                    <div className="sp-field-value">{profileData.emailId}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="sp-stats-row">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="sp-stat-card"
                  style={{ background: stat.color }}
                >
                  <div
                    className="sp-stat-icon"
                    style={{ color: stat.iconColor }}
                  >
                    {stat.icon}
                  </div>
                  <div className="sp-stat-info">
                    <div className="sp-stat-label">{stat.label}</div>
                    <div className="sp-stat-value">{stat.value}</div>
                    <button
                      className="sp-stat-link"
                      onClick={() =>
                        handleNav(
                          `/school/${stat.label.toLowerCase().replace(/ /g, "-")}`,
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
            <section className="sp-card">
              <div className="sp-section-header">
                <h2 className="sp-section-title">My Olympiads</h2>
                <button
                  className="sp-view-all-link"
                  onClick={() => handleNav("/school/my-olympiads")}
                >
                  View All Registrations
                </button>
              </div>
              <div className="sp-table-wrapper">
                <table className="sp-table">
                  <thead>
                    <tr>
                      <th>Olympiad Name</th>
                      <th>Total Students</th>
                      <th>Exam Date</th>
                      <th>Status</th>
                      <th>Top Score</th>
                      <th>Certificate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {olympiadsData.map((o) => (
                      <tr key={o.name}>
                        <td>
                          <div className="sp-olympiad-name-cell">
                            <span
                              className="sp-olympiad-badge"
                              style={{ background: o.color }}
                            >
                              {o.logo}
                            </span>
                            <span>{o.name}</span>
                          </div>
                        </td>
                        <td>{o.totalStudents}</td>
                        <td>{o.examDate}</td>
                        <td>
                          <span className="sp-status-badge">{o.status}</span>
                        </td>
                        <td>{o.topScore}</td>
                        <td>
                          <button
                            className="sp-download-btn"
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
            <div className="sp-bottom-row">
              {/* Recent Orders */}
              <section className="sp-card sp-bottom-card">
                <div className="sp-section-header">
                  <h2 className="sp-section-title">Recent Orders</h2>
                  <button
                    className="sp-view-all-link"
                    onClick={() => handleNav("/school/my-orders")}
                  >
                    View All Orders
                  </button>
                </div>
                <div className="sp-orders-list">
                  {recentOrders.map((order) => (
                    <div key={order.orderId} className="sp-order-item">
                      <span
                        className="sp-olympiad-badge sp-order-badge"
                        style={{ background: order.color }}
                      >
                        {order.logo}
                      </span>
                      <div className="sp-order-details">
                        <div className="sp-order-name">{order.name}</div>
                        <div className="sp-order-meta">
                          Order ID: {order.orderId}
                        </div>
                        <div className="sp-order-meta">
                          Ordered on: {order.date}
                        </div>
                      </div>
                      <div className="sp-order-right">
                        <span
                          className="sp-order-status"
                          style={{ color: order.statusColor }}
                        >
                          {order.status}
                        </span>
                        <div className="sp-order-price">{order.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="sp-view-all-btn"
                  onClick={() => handleNav("/school/my-orders")}
                >
                  View All Orders
                </button>
              </section>

              {/* Certificates */}
              <section className="sp-card sp-bottom-card">
                <div className="sp-section-header">
                  <h2 className="sp-section-title">My Certificates</h2>
                  <button
                    className="sp-view-all-link"
                    onClick={() => handleNav("/school/my-certificates")}
                  >
                    View All
                  </button>
                </div>
                <div className="sp-cert-list">
                  {certificates.map((cert) => (
                    <div key={cert.name} className="sp-cert-item">
                      <div className="sp-cert-info">
                        <div className="sp-cert-name">{cert.name}</div>
                        <div className="sp-cert-issued">
                          Issued on: {cert.issued}
                        </div>
                      </div>
                      <button
                        className="sp-download-btn"
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
              <section className="sp-card sp-bottom-card">
                <div className="sp-section-header">
                  <h2 className="sp-section-title">My Downloads</h2>
                  <button
                    className="sp-view-all-link"
                    onClick={() => handleNav("/school/my-downloads")}
                  >
                    View All
                  </button>
                </div>
                <div className="sp-downloads-list">
                  {downloads.map((dl) => (
                    <div key={dl.name} className="sp-download-item">
                      <span
                        className="sp-dl-icon"
                        style={{ background: dl.color }}
                      >
                        PDF
                      </span>
                      <div className="sp-dl-info">
                        <div className="sp-dl-name">{dl.name}</div>
                        {dl.subtitle && (
                          <div className="sp-dl-sub">{dl.subtitle}</div>
                        )}
                        <div className="sp-dl-date">{dl.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Saved Addresses */}
            <section className="sp-card sp-addr-section">
              <div className="sp-section-header">
                <h2 className="sp-section-title">Saved Addresses</h2>
                <button
                  className="sp-view-all-link"
                  onClick={() => handleNav("/school/manage-addresses")}
                >
                  Manage Addresses
                </button>
              </div>
              <div className="sp-addr-grid">
                <div className="sp-addr-card">
                  <div className="sp-addr-header">
                    <span className="sp-addr-default-badge">Default</span>
                    <span className="sp-addr-label">School</span>
                    <div className="sp-addr-actions">
                      <button
                        className="sp-addr-icon-btn"
                        onClick={() => alert("Edit School address")}
                      >
                        ✏️
                      </button>
                      <button
                        className="sp-addr-icon-btn sp-addr-del"
                        onClick={() => alert("Delete School address")}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="sp-addr-text">
                    {profileData.addressLine1}
                    {profileData.addressLine2
                      ? ", " + profileData.addressLine2
                      : ""}
                  </div>
                  <div className="sp-addr-text">
                    {profileData.city}, {profileData.state} -{" "}
                    {profileData.pincode}, {profileData.country}
                  </div>
                  <div className="sp-addr-phone">
                    {profileData.mobileNumber}
                  </div>
                </div>
                <button
                  className="sp-addr-add-card"
                  onClick={() => alert("Add New Address clicked")}
                >
                  <span className="sp-addr-add-icon">+</span>
                  <span className="sp-addr-add-label">Add New Address</span>
                </button>
              </div>
            </section>

            {/* Explore More */}
            <section className="sp-explore-section">
              <div className="sp-explore-left">
                <h3 className="sp-explore-title">
                  Explore More &amp; Achieve Excellence
                </h3>
                <p className="sp-explore-sub">
                  Continue your school's olympiad journey and unlock student
                  potential.
                </p>
              </div>
              <div className="sp-explore-cards">
                <button
                  className="sp-explore-card"
                  onClick={() => handleNav("/olympiads")}
                >
                  <span className="sp-explore-emoji">🏆</span>
                  <div>
                    <div className="sp-explore-card-title">
                      Explore Olympiads
                    </div>
                    <div className="sp-explore-card-link">
                      View All Olympiads →
                    </div>
                  </div>
                </button>
                <button
                  className="sp-explore-card"
                  onClick={() => handleNav("/results")}
                >
                  <span className="sp-explore-emoji">📊</span>
                  <div>
                    <div className="sp-explore-card-title">View Results</div>
                    <div className="sp-explore-card-link">
                      Check School Results →
                    </div>
                  </div>
                </button>
                <button
                  className="sp-explore-card"
                  onClick={() => handleNav("/books")}
                >
                  <span className="sp-explore-emoji">📗</span>
                  <div>
                    <div className="sp-explore-card-title">Books Store</div>
                    <div className="sp-explore-card-link">Browse Books →</div>
                  </div>
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>

      <EditSchoolProfile
        key={editSliderOpen}
        isOpen={editSliderOpen}
        onClose={() => setEditSliderOpen(false)}
        onSave={handleProfileSave}
        profileData={profileData}
      />

      <Footer />
    </>
  );
}

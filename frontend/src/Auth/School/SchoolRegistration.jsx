import { useState } from "react";
import "./SchoolRegistration.css";

import { useNavigate, Link } from "react-router-dom";

import Navbar from "../../Website/Components/Navbar/Navbar";
import Footer from "../../Website/Components/Footer/Footer";

// ── Icons ──
const SCHOOL_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const LOCATION_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const USER_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const PHONE_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9.1 10.6a16 16 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 23 18z" />
  </svg>
);
const EMAIL_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);
const WHATSAPP_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 11.5A8.38 8.38 0 0 0 12.6 3C7.8 3 3.9 6.9 3.9 11.6c0 1.6.4 3.1 1.2 4.4L3 21l5.1-1.3a8.5 8.5 0 0 0 4.4 1.2c4.7 0 8.5-3.8 8.5-8.5z" />
  </svg>
);
const LOCK_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const EYE_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const EYE_OFF_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const COORD_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const INFO_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const ADDRESS_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
];

const schoolTypes = [
  "Private",
  "Government",
  "Government Aided",
  "International",
];
const boards = ["CBSE", "ICSE", "State Board", "IB", "IGCSE", "Other"];

// ── Reusable Components ──
function InputField({
  icon,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  inputMode,
  maxLength,
}) {
  return (
    <div className="input-wrapper">
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        maxLength={maxLength}
        className={icon ? "has-icon" : ""}
      />
    </div>
  );
}

function SelectField({ icon, name, value, onChange, children }) {
  return (
    <div className="input-wrapper">
      {icon && <span className="input-icon">{icon}</span>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={icon ? "has-icon" : ""}
      >
        {children}
      </select>
    </div>
  );
}

function SectionHeading({ icon, title }) {
  return (
    <div className="section-heading">
      <span className="section-icon">{icon}</span>
      <span>{title}</span>
    </div>
  );
}

// ── Main Component ──
export default function SchoolRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolType: "",
    boardName: "",
    affiliationNumber: "",
    udiseCode: "",
    establishedYear: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    country: "India",
    principalName: "",
    principalMobileNumber: "",
    principalEmailId: "",
    olympiadCoordinatorName: "",
    designation: "",
    mobileNumber: "",
    whatsappNumber: "",
    coordinatorEmailId: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  // };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "pincode") {
      const numericValue = value.replace(/\D/g, "").slice(0, 6);
      setFormData({ ...formData, pincode: numericValue });
      return;
    }

    if (
      ["principalMobileNumber", "mobileNumber", "whatsappNumber"].includes(name)
    ) {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
      return;
    }

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async () => {
    if (!emailRegex.test(formData.principalEmailId)) {
      alert("Principal Email is invalid");
      return;
    }
    if (!emailRegex.test(formData.coordinatorEmailId)) {
      alert("Coordinator Email is invalid");
      return;
    }
    if (!emailRegex.test(formData.emailId)) {
      alert("School Email is invalid");
      return;
    }
    if (formData.principalMobileNumber.length !== 10) {
      alert("Principal Mobile must be 10 digits");
      return;
    }
    if (formData.mobileNumber.length !== 10) {
      alert("Coordinator Mobile must be 10 digits");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/iam/register-school`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("School Registered Successfully");
        console.log(data);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-bg">
        {/* Breadcrumb */}

        <div className="breadcrumb">
          <span className="breadcrumb-home" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="breadcrumb-sep"> &rsaquo; </span>
          <span
            className="breadcrumb-home"
            onClick={() => navigate("/school-login")}
          >
            Login
          </span>
          <span className="breadcrumb-sep"> &rsaquo; </span>
          <span className="breadcrumb-current">School Registration</span>
        </div>

        {/* Page Title */}
        <div className="page-title-block">
          <h1 className="page-title">School Registration</h1>
          <div className="title-divider">
            <span className="divider-star">★</span>
          </div>
          <p className="page-subtitle">
            Register your school and empower students with Mind Weaver
            Foundation
          </p>
        </div>

        <div className="main-layout">
          {/* ── LEFT SIDEBAR ── */}
          <aside className="sidebar">
            <div className="sidebar-illustration">
              <svg
                viewBox="0 0 220 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="grad-svg"
              >
                {/* Building base */}
                <rect
                  x="35"
                  y="100"
                  width="150"
                  height="80"
                  rx="4"
                  fill="#1e3a5f"
                  opacity="0.85"
                />
                {/* Roof / Triangle */}
                <polygon points="110,30 20,100 200,100" fill="#172a45" />
                {/* Door */}
                <rect
                  x="92"
                  y="138"
                  width="36"
                  height="42"
                  rx="3"
                  fill="#f59e0b"
                />
                {/* Windows */}
                <rect
                  x="48"
                  y="112"
                  width="28"
                  height="22"
                  rx="3"
                  fill="#f0f4f8"
                  opacity="0.7"
                />
                <rect
                  x="144"
                  y="112"
                  width="28"
                  height="22"
                  rx="3"
                  fill="#f0f4f8"
                  opacity="0.7"
                />
                {/* Flag pole */}
                <line
                  x1="110"
                  y1="30"
                  x2="110"
                  y2="10"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <polygon points="110,10 130,18 110,26" fill="#f59e0b" />
                {/* Steps */}
                <rect
                  x="80"
                  y="178"
                  width="60"
                  height="8"
                  rx="2"
                  fill="#f59e0b"
                  opacity="0.6"
                />
                <rect
                  x="70"
                  y="186"
                  width="80"
                  height="8"
                  rx="2"
                  fill="#f59e0b"
                  opacity="0.4"
                />
              </svg>
            </div>

            <h2 className="sidebar-headline">
              Build a Brighter <br />
              <span className="sidebar-highlight">Future Together</span>
            </h2>
            <p className="sidebar-desc">
              Partner with us to give your students access to national
              Olympiads, recognition, and academic excellence.
            </p>
            <div className="sidebar-divider" />

            {[
              {
                icon: "🏫",
                title: "Connect Your School",
                desc: "Bring Olympiad opportunities directly to your students.",
              },
              {
                icon: "🏆",
                title: "National Recognition",
                desc: "Your school gets featured among top participating institutions.",
              },
              {
                icon: "📋",
                title: "Easy Coordination",
                desc: "Manage registrations and results from one dashboard.",
              },
              {
                icon: "🛡️",
                title: "Secure & Trusted",
                desc: "Your school's data is fully protected with us.",
              },
            ].map((item) => (
              <div className="sidebar-feature" key={item.title}>
                <div className="feature-icon-circle">{item.icon}</div>
                <div>
                  <div className="feature-title">{item.title}</div>
                  <div className="feature-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </aside>

          {/* ── RIGHT FORM ── */}
          <div className="form-card">
            {/* ── School Information ── */}
            <SectionHeading icon={INFO_ICON} title="School Information" />
            <div className="grid-2">
              <div className="field-group full-span">
                <label>
                  School Name <span className="req">*</span>
                </label>
                <InputField
                  icon={SCHOOL_ICON}
                  name="schoolName"
                  placeholder="Enter school name"
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  School Type <span className="req">*</span>
                </label>
                <SelectField
                  name="schoolType"
                  value={formData.schoolType}
                  onChange={handleChange}
                >
                  <option value="">Select School Type</option>
                  {schoolTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </SelectField>
              </div>
              <div className="field-group">
                <label>
                  Board Name <span className="req">*</span>
                </label>
                <SelectField
                  name="boardName"
                  value={formData.boardName}
                  onChange={handleChange}
                >
                  <option value="">Select Board</option>
                  {boards.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </SelectField>
              </div>
              <div className="field-group">
                <label>Affiliation Number</label>
                <InputField
                  name="affiliationNumber"
                  placeholder="Enter affiliation number"
                  value={formData.affiliationNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>UDISE Code</label>
                <InputField
                  name="udiseCode"
                  placeholder="Enter UDISE code"
                  value={formData.udiseCode}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>Established Year</label>
                <InputField
                  name="establishedYear"
                  placeholder="e.g. 1995"
                  value={formData.establishedYear}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ── School Address ── */}
            <SectionHeading icon={ADDRESS_ICON} title="School Address" />
            <div className="grid-2">
              <div className="field-group full-span">
                <label>
                  Address Line 1 <span className="req">*</span>
                </label>
                <InputField
                  icon={LOCATION_ICON}
                  name="addressLine1"
                  placeholder="Street / Building name"
                  value={formData.addressLine1}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group full-span">
                <label>Address Line 2</label>
                <InputField
                  icon={LOCATION_ICON}
                  name="addressLine2"
                  placeholder="Area / Landmark (optional)"
                  value={formData.addressLine2}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  City <span className="req">*</span>
                </label>
                <InputField
                  icon={LOCATION_ICON}
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  District <span className="req">*</span>
                </label>
                <InputField
                  name="district"
                  placeholder="Enter district"
                  value={formData.district}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  State <span className="req">*</span>
                </label>
                <SelectField
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  {indianStates.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </SelectField>
              </div>
              <div className="field-group">
                <label>
                  Pincode <span className="req">*</span>
                </label>
                {/* <InputField
                  name="pincode"
                  placeholder="Enter pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                /> */}
                <InputField
                  name="pincode"
                  placeholder="Enter 6-digit pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={6}
                />
              </div>
              <div className="field-group">
                <label>
                  Country <span className="req">*</span>
                </label>
                <InputField
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ── Principal Details ── */}
            <SectionHeading icon={USER_ICON} title="Principal Details" />
            <div className="grid-2">
              <div className="field-group">
                <label>
                  Principal Name <span className="req">*</span>
                </label>
                <InputField
                  icon={USER_ICON}
                  name="principalName"
                  placeholder="Enter principal name"
                  value={formData.principalName}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  Mobile Number <span className="req">*</span>
                </label>
                <InputField
                  icon={PHONE_ICON}
                  name="principalMobileNumber"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.principalMobileNumber}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>
              <div className="field-group full-span">
                <label>
                  Email ID <span className="req">*</span>
                </label>
                <InputField
                  icon={EMAIL_ICON}
                  name="principalEmailId"
                  placeholder="Enter email address"
                  value={formData.principalEmailId}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ── Coordinator Details ── */}
            <SectionHeading
              icon={COORD_ICON}
              title="Olympiad Coordinator Details"
            />
            <div className="grid-2">
              <div className="field-group">
                <label>
                  Coordinator Name <span className="req">*</span>
                </label>
                <InputField
                  icon={USER_ICON}
                  name="olympiadCoordinatorName"
                  placeholder="Enter coordinator name"
                  value={formData.olympiadCoordinatorName}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  Designation <span className="req">*</span>
                </label>
                <InputField
                  name="designation"
                  placeholder="e.g. Teacher, HOD"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  Mobile Number <span className="req">*</span>
                </label>
                <InputField
                  icon={PHONE_ICON}
                  name="mobileNumber"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>
              <div className="field-group">
                <label>WhatsApp Number</label>
                <InputField
                  icon={WHATSAPP_ICON}
                  name="whatsappNumber"
                  placeholder="Enter 10-digit WhatsApp number"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>
              <div className="field-group full-span">
                <label>
                  Email ID <span className="req">*</span>
                </label>
                <InputField
                  icon={EMAIL_ICON}
                  name="coordinatorEmailId"
                  placeholder="Enter email address"
                  value={formData.coordinatorEmailId}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ── Login Credentials ── */}
            <SectionHeading icon={LOCK_ICON} title="Login Credentials" />
            <div className="grid-2">
              <div className="field-group full-span">
                <label>
                  School Email ID <span className="req">*</span>
                </label>
                <InputField
                  icon={EMAIL_ICON}
                  name="emailId"
                  placeholder="Enter school email address"
                  value={formData.emailId}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  Password <span className="req">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">{LOCK_ICON}</span>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    className="has-icon has-toggle"
                  />
                  <button
                    type="button"
                    className="eye-toggle"
                    onClick={() => setShowPass((v) => !v)}
                  >
                    {showPass ? EYE_OFF_ICON : EYE_ICON}
                  </button>
                </div>
              </div>
              <div className="field-group">
                <label>
                  Confirm Password <span className="req">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">{LOCK_ICON}</span>
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="has-icon has-toggle"
                  />
                  <button
                    type="button"
                    className="eye-toggle"
                    onClick={() => setShowConfirm((v) => !v)}
                  >
                    {showConfirm ? EYE_OFF_ICON : EYE_ICON}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="terms-row">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label htmlFor="agreeTerms" className="terms-label">
                I agree to the{" "}
                <Link to="/terms-and-conditions" className="terms-link">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="terms-link">
                  Privacy Policy
                </Link>
                <span className="req">*</span>
              </label>
            </div>

            {/* Submit */}
            <button className="submit-btn" onClick={handleSubmit}>
              <span className="btn-icon">{SCHOOL_ICON}</span>
              Register School
            </button>

            <p className="login-link">
              Already have an account?{" "}
              <Link to="/school-login" className="terms-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

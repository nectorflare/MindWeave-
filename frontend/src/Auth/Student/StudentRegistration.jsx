import { useState } from "react";
import "./StudentRegistration.css";
import Navbar from "../../Website/Components/Navbar/Navbar";
import Footer from "../../Website/Components/Footer/Footer";
import { Link } from "react-router-dom";

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
const CALENDAR_ICON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
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
const ACADEMIC_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
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

const grades = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

function InputField({
  icon,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  children,
  inputMode,
  maxLength,
  min,
  max,
}) {
  return (
    <div className="input-wrapper">
      {icon && <span className="input-icon">{icon}</span>}
      {children || (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          inputMode={inputMode}
          maxLength={maxLength}
          min={min}
          max={max}
          className={icon ? "has-icon" : ""}
        />
      )}
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

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    classGrade: "",
    schoolName: "",
    city: "",
    state: "",
    fatherName: "",
    motherName: "",
    parentMobileNumber: "",
    emailId: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    addressCity: "",
    addressState: "",
    pincode: "",
    agreeTerms: false,
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "pincode") {
      const numericValue = value.replace(/\D/g, "").slice(0, 6);
      setFormData((prev) => ({ ...prev, pincode: numericValue }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.agreeTerms) {
      alert("Please agree to Terms & Conditions and Privacy Policy.");
      return;
    }

    // ADD THIS BLOCK HERE
    if (!formData.emailId || !formData.mobileNumber || !formData.password) {
      alert("Please fill required fields (Email, Mobile, Password)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.emailId)) {
      alert("Please enter a valid email address");
      return;
    }
    if (formData.dateOfBirth) {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();

      const minDate = new Date(today);
      minDate.setFullYear(today.getFullYear() - 50);

      const maxDate = new Date(today);
      maxDate.setFullYear(today.getFullYear() - 5);

      if (dob < minDate) {
        alert("Date of Birth cannot be more than 50 years ago");
        return;
      }
      if (dob > maxDate) {
        alert("Student must be at least 5 years old");
        return;
      }
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match.");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/iam/register-user`,
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
        alert("Registration successful!");
        console.log("Response:", data);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    }
  };
  return (
    <>
      <Navbar />

      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home">
          Home
        </Link>

        <span className="breadcrumb-sep">›</span>

        <span className="breadcrumb-current">Student Registration</span>
      </div>
      <div className="page-bg">
        {/* Breadcrumb */}

        {/* Page Title */}
        <div className="page-title-block">
          <h1 className="page-title">Student Registration</h1>
          <div className="title-divider">
            <span className="divider-star">★</span>
          </div>
          <p className="page-subtitle">
            Create your account to get started with Mind Weaver Foundation
          </p>
        </div>

        <div className="main-layout">
          {/* LEFT SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-illustration">
              {/* Graduation cap SVG illustration */}
              <svg
                viewBox="0 0 220 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="grad-svg"
              >
                {/* Books stack */}
                <rect
                  x="40"
                  y="130"
                  width="130"
                  height="22"
                  rx="4"
                  fill="#1e3a5f"
                  opacity="0.85"
                />
                <rect
                  x="48"
                  y="110"
                  width="122"
                  height="22"
                  rx="4"
                  fill="#2d5282"
                  opacity="0.9"
                />
                <rect
                  x="55"
                  y="90"
                  width="108"
                  height="22"
                  rx="4"
                  fill="#f59e0b"
                />
                {/* Pencil */}
                <rect
                  x="155"
                  y="65"
                  width="8"
                  height="50"
                  rx="2"
                  fill="#f59e0b"
                  transform="rotate(-15 155 65)"
                />
                <polygon
                  points="159,113 163,113 161,122"
                  fill="#1e3a5f"
                  transform="rotate(-15 161 113)"
                />
                {/* Graduation Cap */}
                <ellipse cx="110" cy="62" rx="52" ry="12" fill="#1e3a5f" />
                <polygon points="110,30 162,62 110,74 58,62" fill="#172a45" />
                <rect
                  x="106"
                  y="62"
                  width="8"
                  height="28"
                  rx="2"
                  fill="#1e3a5f"
                />
                <rect
                  x="155"
                  y="60"
                  width="4"
                  height="22"
                  rx="2"
                  fill="#1e3a5f"
                />
                <circle cx="157" cy="84" r="6" fill="#f59e0b" />
                {/* Tassel line */}
                <line
                  x1="157"
                  y1="60"
                  x2="140"
                  y2="72"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h2 className="sidebar-headline">
              Join Thousands of <br />
              <span className="sidebar-highlight">Young Achievers</span>
            </h2>
            <p className="sidebar-desc">
              Register today and unlock a world of opportunities with Olympiads,
              certificates, and more.
            </p>
            <div className="sidebar-divider" />

            {[
              {
                icon: "🏆",
                title: "Participate in Prestigious Olympiads",
                desc: "Test your knowledge and compete at national level.",
              },
              {
                icon: "📜",
                title: "Earn Certificates",
                desc: "Boost your academic profile with achievement certificates.",
              },
              {
                icon: "📊",
                title: "Track Your Progress",
                desc: "Monitor your performance and improve continuously.",
              },
              {
                icon: "🛡️",
                title: "Secure & Trusted Platform",
                desc: "Your data is safe with us always.",
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

          {/* RIGHT FORM */}
          <div className="form-card">
            {/* ── Personal Information ── */}
            <SectionHeading icon={USER_ICON} title="Personal Information" />

            <div className="grid-2">
              <div className="field-group">
                <label>
                  First Name <span className="req">*</span>
                </label>
                <InputField
                  icon={USER_ICON}
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label>
                  Last Name <span className="req">*</span>
                </label>
                <InputField
                  icon={USER_ICON}
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>
                  Date of Birth <span className="req">*</span>
                </label>
                <InputField
                  icon={CALENDAR_ICON}
                  name="dateOfBirth"
                  type="date"
                  placeholder="DD / MM / YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  min={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 50),
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                  max={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 5),
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                />
              </div>
              <div className="field-group">
                <label>
                  Gender <span className="req">*</span>
                </label>
                <SelectField
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </SelectField>
              </div>

              <div className="field-group full-span">
                <label>
                  Email Address <span className="req">*</span>
                </label>
                <InputField
                  icon={EMAIL_ICON}
                  name="emailId"
                  placeholder="Enter email address"
                  value={formData.emailId}
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
                  placeholder="Enter mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ── Academic Information ── */}
            <SectionHeading icon={ACADEMIC_ICON} title="Academic Information" />

            <div className="grid-2">
              <div className="field-group">
                <label>
                  Class / Grade <span className="req">*</span>
                </label>
                <SelectField
                  name="classGrade"
                  value={formData.classGrade}
                  onChange={handleChange}
                >
                  <option value="">Select Class / Grade</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}{" "}
                  {/* {grades.map((g) => (
                    <option key={g}>{g}</option>
                  ))} */}
                </SelectField>
              </div>
              <div className="field-group">
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
            </div>

            <SectionHeading icon={USER_ICON} title="Parent Details" />

            <div className="grid-2">
              <div className="field-group">
                <label>
                  Father Name <span className="req">*</span>
                </label>
                <InputField
                  name="fatherName"
                  placeholder="Enter father name"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label>
                  Mother Name <span className="req">*</span>
                </label>
                <InputField
                  name="motherName"
                  placeholder="Enter mother name"
                  value={formData.motherName}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group full-span">
                <label>Parent Mobile Number</label>
                <InputField
                  icon={PHONE_ICON}
                  name="parentMobileNumber"
                  placeholder="Enter parent mobile number"
                  value={formData.parentMobileNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <SectionHeading icon={LOCATION_ICON} title="Address Information" />

            <div className="grid-2">
              <div className="field-group full-span">
                <label>
                  Address <span className="req">*</span>
                </label>
                <InputField
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label>
                  City <span className="req">*</span>
                </label>
                <InputField
                  name="addressCity"
                  placeholder="Enter city"
                  value={formData.addressCity}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label>
                  State <span className="req">*</span>
                </label>
                <SelectField
                  name="addressState"
                  value={formData.addressState}
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
                <InputField
                  name="pincode"
                  placeholder="Enter 6-digit pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={6}
                />
              </div>
            </div>

            {/* ── Account Information ── */}
            <SectionHeading icon={LOCK_ICON} title="Account Information" />

            <div className="grid-2">
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
                <a href="#" className="terms-link">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="terms-link">
                  Privacy Policy
                </a>{" "}
                <span className="req">*</span>
              </label>
            </div>

            {/* Submit */}
            <button className="submit-btn" onClick={handleSubmit}>
              <span className="btn-icon">{USER_ICON}</span>
              Create Account
            </button>

            <p className="login-link">
              Already have an account?{" "}
              <Link to="/student-login" className="terms-link">
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

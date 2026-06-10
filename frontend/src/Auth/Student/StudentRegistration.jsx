// import { useState } from "react";
// import "./StudentRegistration.css";

// function StudentRegistration() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     gender: "",
//     dateOfBirth: "",

//     classGrade: "",

//     schoolName: "",
//     city: "",
//     state: "",

//     fatherName: "",
//     motherName: "",
//     parentMobileNumber: "",

//     emailId: "",
//     mobileNumber: "",
//     password: "",
//     confirmPassword: "",

//     address: "",
//     addressCity: "",
//     addressState: "",
//     pincode: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log(JSON.stringify(formData, null, 2));

//     if (formData.password !== formData.confirmPassword) {
//       alert("Password and Confirm Password must match");
//       return;
//     }

//     alert("Data printed in console");
//   };

//   return (
//     <div className="form-container">
//       <div className="form-card">
//         <h2>Student Registration</h2>

//         <h3>Personal Details</h3>

//         <div className="grid">
//           <input
//             name="firstName"
//             placeholder="First Name *"
//             onChange={handleChange}
//           />

//           <input
//             name="lastName"
//             placeholder="Last Name *"
//             onChange={handleChange}
//           />

//           <select name="gender" onChange={handleChange}>
//             <option value="">Gender *</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>

//           <input type="date" name="dateOfBirth" onChange={handleChange} />
//         </div>

//         <h3>Academic Details</h3>

//         <div className="grid">
//           <input
//             name="classGrade"
//             placeholder="Class / Grade *"
//             onChange={handleChange}
//           />
//         </div>

//         <h3>School Details</h3>

//         <div className="grid">
//           <input
//             name="schoolName"
//             placeholder="School Name"
//             onChange={handleChange}
//           />

//           <input name="city" placeholder="City" onChange={handleChange} />

//           <input name="state" placeholder="State" onChange={handleChange} />
//         </div>

//         <h3>Parent / Guardian Details</h3>

//         <div className="grid">
//           <input
//             name="fatherName"
//             placeholder="Father Name *"
//             onChange={handleChange}
//           />

//           <input
//             name="motherName"
//             placeholder="Mother Name *"
//             onChange={handleChange}
//           />

//           <input
//             name="parentMobileNumber"
//             placeholder="Parent Mobile Number *"
//             onChange={handleChange}
//           />
//         </div>

//         <h3>Login Details</h3>

//         <div className="grid">
//           <input
//             name="emailId"
//             placeholder="Email ID *"
//             onChange={handleChange}
//           />

//           <input
//             name="mobileNumber"
//             placeholder="Mobile Number *"
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password *"
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password *"
//             onChange={handleChange}
//           />
//         </div>

//         <h3>Address Details</h3>

//         <div className="grid">
//           <input name="address" placeholder="Address" onChange={handleChange} />

//           <input
//             name="addressCity"
//             placeholder="City *"
//             onChange={handleChange}
//           />

//           <input
//             name="addressState"
//             placeholder="State *"
//             onChange={handleChange}
//           />

//           <input
//             name="pincode"
//             placeholder="Pincode *"
//             onChange={handleChange}
//           />
//         </div>

//         <button onClick={handleSubmit}>Register Student</button>
//       </div>
//     </div>
//   );
// }

// export default StudentRegistration;
import { useState } from "react";
import "./StudentRegistration.css";
import Navbar from "../../Website/Components/Navbar/Navbar";
import Footer from "../../Website/Components/Footer/Footer";

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

const nationalities = [
  "Indian",
  "American",
  "British",
  "Canadian",
  "Australian",
  "Other",
];

function InputField({
  icon,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  children,
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
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    emailId: "",
    mobileNumber: "",
    whatsappNumber: "",
    classGrade: "",
    schoolName: "",
    city: "",
    state: "",
    fatherName: "",
    motherName: "",
    parentMobileNumber: "",
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
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    if (!formData.agreeTerms) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match.");
      return;
    }
    console.log(JSON.stringify(formData, null, 2));
    alert("Registration successful! Data printed in console.");
  };

  return (
    <>
      <Navbar />
      <div className="page-bg">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span className="breadcrumb-home">Home</span>
          <span className="breadcrumb-sep"> &rsaquo; </span>
          <span className="breadcrumb-current">Student Registration</span>
        </div>

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
                  Full Name <span className="req">*</span>
                </label>
                <InputField
                  icon={USER_ICON}
                  name="fullName"
                  placeholder="Enter full name"
                  value={formData.fullName}
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
              <div className="field-group">
                <label>
                  Nationality <span className="req">*</span>
                </label>
                <SelectField
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                >
                  <option value="">Select Nationality</option>
                  {nationalities.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
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
              <div className="field-group">
                <label>WhatsApp Number</label>
                <InputField
                  icon={WHATSAPP_ICON}
                  name="whatsappNumber"
                  placeholder="Enter WhatsApp number"
                  value={formData.whatsappNumber}
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
                    <option key={g}>{g}</option>
                  ))}
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
              <a href="#" className="terms-link">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

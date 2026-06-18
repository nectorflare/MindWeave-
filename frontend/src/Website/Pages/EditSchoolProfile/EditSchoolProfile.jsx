// import React, { useState, useEffect } from "react";
// import "./EditSchoolProfile.css";

// const initialData = {
//   schoolName: "Delhi Public School",
//   email: "dps.delhi@email.com",
//   mobile: "+91 98765 43210",
//   principalName: "Dr. Anjali Mehta",
//   affiliation: "CBSE Affiliated",
//   city: "New Delhi",
//   state: "Delhi",
//   udiseCode: "09030200101",
// };

// export default function EditSchoolProfile({ isOpen, onClose, onSave }) {
//   const [form, setForm] = useState(initialData);
//   const [editingField, setEditingField] = useState(null);
//   const [errors, setErrors] = useState({});

//   // Reset form when opened
//   useEffect(() => {
//     if (isOpen) {
//       setForm(initialData);
//       setEditingField(null);
//       setErrors({});
//     }
//   }, [isOpen]);

//   // Close on Escape key
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     if (isOpen) document.addEventListener("keydown", handleKey);
//     return () => document.removeEventListener("keydown", handleKey);
//   }, [isOpen, onClose]);

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev) => ({ ...prev, [field]: "" }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!form.email.includes("@"))
//       newErrors.email = "Enter a valid email address.";
//     if (form.mobile.replace(/\D/g, "").length < 10)
//       newErrors.mobile = "Enter a valid 10-digit mobile number.";
//     if (!form.principalName.trim())
//       newErrors.principalName = "Principal name is required.";
//     if (!form.city.trim()) newErrors.city = "City is required.";
//     if (!form.state.trim()) newErrors.state = "State is required.";
//     return newErrors;
//   };

//   const handleSave = () => {
//     const newErrors = validate();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     onSave && onSave(form);
//     onClose();
//   };

//   const Field = ({ label, fieldKey, placeholder, locked, required }) => {
//     const isEditing = editingField === fieldKey;
//     return (
//       <div className="esp-field-group">
//         <label className="esp-field-label">
//           {label} {required && <span className="esp-required">*</span>}
//         </label>
//         <div
//           className={`esp-field-row${locked ? " esp-locked" : ""}${isEditing ? " esp-editing" : ""}`}
//         >
//           <input
//             className="esp-input"
//             type="text"
//             value={form[fieldKey]}
//             placeholder={placeholder}
//             disabled={locked || !isEditing}
//             onChange={(e) => handleChange(fieldKey, e.target.value)}
//           />
//           {locked ? (
//             <span className="esp-lock-badge">🔒 Cannot be changed</span>
//           ) : (
//             <button
//               className="esp-edit-inline-btn"
//               onClick={() => setEditingField(isEditing ? null : fieldKey)}
//             >
//               {isEditing ? "✓ Done" : "✏️ Edit"}
//             </button>
//           )}
//         </div>
//         {errors[fieldKey] && (
//           <span className="esp-error">{errors[fieldKey]}</span>
//         )}
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`esp-overlay${isOpen ? " esp-overlay-visible" : ""}`}
//         onClick={onClose}
//       />

//       {/* Slider Panel */}
//       <div className={`esp-panel${isOpen ? " esp-panel-open" : ""}`}>
//         {/* Header */}
//         <div className="esp-header">
//           <div className="esp-header-left">
//             <div className="esp-header-icon">✏️</div>
//             <div>
//               <h2 className="esp-title">Edit School Profile</h2>
//               <p className="esp-subtitle">
//                 Click ✏️ Edit next to any field to update it
//               </p>
//             </div>
//           </div>
//           <button
//             className="esp-close-btn"
//             onClick={onClose}
//             aria-label="Close"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Scrollable Body */}
//         <div className="esp-body">
//           {/* School Information Section */}
//           <div className="esp-section">
//             <div className="esp-section-header">
//               <span className="esp-section-icon">🏫</span>
//               <span className="esp-section-title">School Information</span>
//             </div>

//             <Field
//               label="School Name"
//               fieldKey="schoolName"
//               placeholder="School Name"
//               locked
//             />
//             <Field
//               label="UDISE Code"
//               fieldKey="udiseCode"
//               placeholder="UDISE Code"
//               locked
//             />
//             <Field
//               label="Affiliation"
//               fieldKey="affiliation"
//               placeholder="e.g. CBSE Affiliated"
//               required
//             />
//             <Field
//               label="Principal Name"
//               fieldKey="principalName"
//               placeholder="Principal's full name"
//               required
//             />
//           </div>

//           {/* Contact Information Section */}
//           <div className="esp-section">
//             <div className="esp-section-header">
//               <span className="esp-section-icon">📞</span>
//               <span className="esp-section-title">Contact Information</span>
//             </div>

//             <Field
//               label="Email Address"
//               fieldKey="email"
//               placeholder="school@email.com"
//               required
//             />
//             <Field
//               label="Mobile Number"
//               fieldKey="mobile"
//               placeholder="+91 XXXXX XXXXX"
//               required
//             />
//           </div>

//           {/* Location Section */}
//           <div className="esp-section">
//             <div className="esp-section-header">
//               <span className="esp-section-icon">📍</span>
//               <span className="esp-section-title">Location</span>
//             </div>

//             <div className="esp-two-col">
//               <Field label="City" fieldKey="city" placeholder="City" required />
//               <Field
//                 label="State"
//                 fieldKey="state"
//                 placeholder="State"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* Footer Buttons */}
//         <div className="esp-footer">
//           <button className="esp-cancel-btn" onClick={onClose}>
//             Cancel
//           </button>
//           <button className="esp-save-btn" onClick={handleSave}>
//             💾 Save Changes
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import "./EditSchoolProfile.css";

export default function EditSchoolProfile({
  isOpen,
  onClose,
  onSave,
  profileData,
}) {
  const [form, setForm] = useState(profileData || {});
  const [editingField, setEditingField] = useState(null);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (isOpen) {
      setForm(profileData || {});
      setEditingField(null);
      setErrors({});
      setPasswords({ password: "", confirmPassword: "" });
    }
  }, [isOpen, profileData]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleChange = (field, value) => {
    if (field === "pincode") {
      const numericValue = value.replace(/\D/g, "").slice(0, 6);
      setForm((prev) => ({ ...prev, pincode: numericValue }));
      setErrors((prev) => ({ ...prev, pincode: "" }));
      return;
    }
    if (
      ["principalMobileNumber", "mobileNumber", "whatsappNumber"].includes(
        field,
      )
    ) {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [field]: numericValue }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
      return;
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.principalEmailId))
      newErrors.principalEmailId = "Enter a valid email.";
    if (!emailRegex.test(form.coordinatorEmailId))
      newErrors.coordinatorEmailId = "Enter a valid email.";
    if (!emailRegex.test(form.emailId))
      newErrors.emailId = "Enter a valid email.";
    if (form.principalMobileNumber?.replace(/\D/g, "").length !== 10)
      newErrors.principalMobileNumber = "Enter valid 10-digit number.";
    if (form.mobileNumber?.replace(/\D/g, "").length !== 10)
      newErrors.mobileNumber = "Enter valid 10-digit number.";
  };

  const handleSave = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const saveData = { ...form };
    if (passwords.password) saveData.password = passwords.password;
    onSave && onSave(saveData);
    onClose();
  };

  // Locked field (read-only)
  const LockedField = ({ label, fieldKey }) => (
    <div className="esp-field-group">
      <label className="esp-field-label">{label}</label>
      <div className="esp-field-row esp-locked">
        <input
          className="esp-input"
          type="text"
          value={form[fieldKey] || ""}
          disabled
        />
        <span className="esp-lock-badge">🔒 Cannot be changed</span>
      </div>
    </div>
  );

  // Editable field
  const Field = ({ label, fieldKey, placeholder, required, type = "text" }) => {
    const isEditing = editingField === fieldKey;
    return (
      <div className="esp-field-group">
        <label className="esp-field-label">
          {label} {required && <span className="esp-required">*</span>}
        </label>
        <div className={`esp-field-row${isEditing ? " esp-editing" : ""}`}>
          {/* <input
            className="esp-input"
            type={type}
            value={form[fieldKey] || ""}
            placeholder={placeholder}
            disabled={!isEditing}
            onChange={(e) => handleChange(fieldKey, e.target.value)}
          /> */}
          <input
            className="esp-input"
            type={type}
            value={form[fieldKey] || ""}
            placeholder={placeholder}
            disabled={!isEditing}
            onChange={(e) => handleChange(fieldKey, e.target.value)}
            inputMode={
              [
                "pincode",
                "principalMobileNumber",
                "mobileNumber",
                "whatsappNumber",
              ].includes(fieldKey)
                ? "numeric"
                : undefined
            }
            maxLength={
              fieldKey === "pincode"
                ? 6
                : [
                      "principalMobileNumber",
                      "mobileNumber",
                      "whatsappNumber",
                    ].includes(fieldKey)
                  ? 10
                  : undefined
            }
          />
          <button
            className="esp-edit-inline-btn"
            onClick={() => setEditingField(isEditing ? null : fieldKey)}
          >
            {isEditing ? "✓ Done" : "✏️ Edit"}
          </button>
        </div>
        {errors[fieldKey] && (
          <span className="esp-error">{errors[fieldKey]}</span>
        )}
      </div>
    );
  };

  // Password field
  const PasswordField = ({ label, fieldKey, show, setShow }) => {
    const isEditing = editingField === fieldKey;
    return (
      <div className="esp-field-group">
        <label className="esp-field-label">{label}</label>
        <div className={`esp-field-row${isEditing ? " esp-editing" : ""}`}>
          <input
            className="esp-input"
            type={show ? "text" : "password"}
            value={passwords[fieldKey]}
            placeholder={
              fieldKey === "password"
                ? "Enter new password"
                : "Confirm new password"
            }
            disabled={!isEditing}
            onChange={(e) => handlePasswordChange(fieldKey, e.target.value)}
          />
          {isEditing && (
            <button
              className="esp-eye-btn"
              onClick={() => setShow(!show)}
              type="button"
            >
              {show ? "🙈" : "👁️"}
            </button>
          )}
          <button
            className="esp-edit-inline-btn"
            onClick={() => setEditingField(isEditing ? null : fieldKey)}
          >
            {isEditing ? "✓ Done" : "✏️ Edit"}
          </button>
        </div>
        {errors[fieldKey] && (
          <span className="esp-error">{errors[fieldKey]}</span>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        className={`esp-overlay${isOpen ? " esp-overlay-visible" : ""}`}
        onClick={onClose}
      />
      <div className={`esp-panel${isOpen ? " esp-panel-open" : ""}`}>
        {/* Header */}
        <div className="esp-header">
          <div className="esp-header-left">
            <div className="esp-header-icon">✏️</div>
            <div>
              <h2 className="esp-title">Edit School Profile</h2>
              <p className="esp-subtitle">
                Click ✏️ Edit next to any field to update it
              </p>
            </div>
          </div>
          <button
            className="esp-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="esp-body">
          {/* School Information — locked */}
          <div className="esp-section">
            <div className="esp-section-header">
              <span className="esp-section-icon">🏫</span>
              <span className="esp-section-title">School Information</span>
            </div>
            <LockedField label="School Name" fieldKey="schoolName" />
            <LockedField label="UDISE Code" fieldKey="udiseCode" />
            <LockedField
              label="Affiliation Number"
              fieldKey="affiliationNumber"
            />
            <LockedField label="Board / Type" fieldKey="boardName" />
            <LockedField label="Established Year" fieldKey="establishedYear" />
          </div>

          {/* Address */}
          <div className="esp-section">
            <div className="esp-section-header">
              <span className="esp-section-icon">📍</span>
              <span className="esp-section-title">Address</span>
            </div>
            <Field
              label="Address Line 1"
              fieldKey="addressLine1"
              placeholder="Street / Area"
              required
            />
            <Field
              label="Address Line 2"
              fieldKey="addressLine2"
              placeholder="Landmark (optional)"
            />
            <div className="esp-two-col">
              <Field label="City" fieldKey="city" placeholder="City" required />
              <Field
                label="District"
                fieldKey="district"
                placeholder="District"
              />
            </div>
            <div className="esp-two-col">
              <Field
                label="State"
                fieldKey="state"
                placeholder="State"
                required
              />
              <Field
                label="Pincode"
                fieldKey="pincode"
                placeholder="Pincode"
                required
              />
            </div>
            <Field label="Country" fieldKey="country" placeholder="Country" />
          </div>

          {/* Principal Information */}
          <div className="esp-section">
            <div className="esp-section-header">
              <span className="esp-section-icon">👤</span>
              <span className="esp-section-title">Principal Information</span>
            </div>
            <Field
              label="Principal Name"
              fieldKey="principalName"
              placeholder="Full name"
              required
            />
            <Field
              label="Principal Mobile"
              fieldKey="principalMobileNumber"
              placeholder="+91 XXXXX XXXXX"
              required
            />
            <Field
              label="Principal Email"
              fieldKey="principalEmailId"
              placeholder="principal@school.com"
              required
            />
          </div>

          {/* Coordinator Information */}
          <div className="esp-section">
            <div className="esp-section-header">
              <span className="esp-section-icon">🎯</span>
              <span className="esp-section-title">Olympiad Coordinator</span>
            </div>
            <Field
              label="Coordinator Name"
              fieldKey="olympiadCoordinatorName"
              placeholder="Full name"
              required
            />
            <Field
              label="Designation"
              fieldKey="designation"
              placeholder="e.g. Academic Coordinator"
            />
            <div className="esp-two-col">
              <Field
                label="Mobile Number"
                fieldKey="mobileNumber"
                placeholder="Mobile"
                required
              />
              <Field
                label="WhatsApp Number"
                fieldKey="whatsappNumber"
                placeholder="WhatsApp"
              />
            </div>
            <Field
              label="Coordinator Email"
              fieldKey="coordinatorEmailId"
              placeholder="coordinator@school.com"
              required
            />
            <Field
              label="School Email"
              fieldKey="emailId"
              placeholder="school@school.com"
              required
            />
          </div>

          {/* Change Password */}
          <div className="esp-section">
            <div className="esp-section-header">
              <span className="esp-section-icon">🔒</span>
              <span className="esp-section-title">Change Password</span>
            </div>
            <PasswordField
              label="New Password"
              fieldKey="password"
              show={showPassword}
              setShow={setShowPassword}
            />
            <PasswordField
              label="Confirm New Password"
              fieldKey="confirmPassword"
              show={showConfirmPassword}
              setShow={setShowConfirmPassword}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="esp-footer">
          <button className="esp-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="esp-save-btn" onClick={handleSave}>
            💾 Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

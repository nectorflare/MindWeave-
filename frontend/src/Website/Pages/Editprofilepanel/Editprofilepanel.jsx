import React, { useState, useEffect, useRef } from "react";
import "./EditProfilePanel.css";

/**
 * EditProfilePanel
 * Props:
 *   isOpen   – boolean, controls visibility
 *   onClose  – fn called when panel closes
 *   profile  – current profile object
 *   onSave   – fn(updatedProfile) called on Save
 */
export default function EditProfilePanel({ isOpen, onClose, profile, onSave }) {
  const [form, setForm] = useState({ ...profile });
  const [editingField, setEditingField] = useState(null); // which field is in edit mode
  const [showToast, setShowToast] = useState(false);
  const panelRef = useRef(null);

  // Sync form when profile prop changes
  useEffect(() => {
    setForm({ ...profile });
  }, [profile]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFieldSave = (field) => {
    setEditingField(null);
  };

  const handleSaveAll = () => {
    onSave(form);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 1800);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // ─── Reusable: inline-editable text field ────────────────────────────────
  const InlineField = ({
    fieldKey,
    label,

    type = "text",
    placeholder,
    required = false,
    readOnly = false,
    readOnlyNote,
  }) => {
    const isEditing = editingField === fieldKey;

    return (
      <div className="ep-field">
        <label className="ep-label">
          {label}
          {required && <span className="ep-required">*</span>}
        </label>
        <div className="ep-input-wrap">
          {/* {icon && <span className="ep-input-icon">{icon}</span>} */}
          <input
            type={type}
            className="ep-input"
            value={form[fieldKey] || ""}
            disabled={!isEditing || readOnly}
            placeholder={placeholder}
            onChange={(e) => handleChange(fieldKey, e.target.value)}
          />
          {!readOnly && (
            <button
              className={`ep-inline-edit-btn${isEditing ? " ep-inline-save-btn" : ""}`}
              onClick={() =>
                isEditing
                  ? handleFieldSave(fieldKey)
                  : setEditingField(fieldKey)
              }
            >
              {isEditing ? <>✓ Done</> : <>✏️ Edit</>}
            </button>
          )}
        </div>
        {readOnly && readOnlyNote && (
          <span className="ep-readonly-note">🔒 {readOnlyNote}</span>
        )}
      </div>
    );
  };

  // ─── Reusable: inline-editable select ────────────────────────────────────
  const InlineSelect = ({
    fieldKey,
    label,
    icon,
    options,
    required = false,
  }) => {
    const isEditing = editingField === fieldKey;

    return (
      <div className="ep-field">
        <label className="ep-label">
          {label}
          {required && <span className="ep-required">*</span>}
        </label>
        <div className="ep-input-wrap">
          {icon && <span className="ep-input-icon">{icon}</span>}
          <select
            className="ep-select"
            value={form[fieldKey] || ""}
            disabled={!isEditing}
            onChange={(e) => handleChange(fieldKey, e.target.value)}
          >
            <option value="">Select {label}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            className={`ep-inline-edit-btn${isEditing ? " ep-inline-save-btn" : ""}`}
            onClick={() =>
              isEditing ? handleFieldSave(fieldKey) : setEditingField(fieldKey)
            }
          >
            {isEditing ? <>✓ Done</> : <>✏️ Edit</>}
          </button>
        </div>
      </div>
    );
  };

  const classOptions = Array.from({ length: 12 }, (_, i) => ({
    value: `Class ${i + 1}`,
    label: `Class ${i + 1}`,
  }));

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
    { value: "Prefer not to say", label: "Prefer not to say" },
  ];

  const stateOptions = [
    "Andhra Pradesh",
    "Delhi",
    "Gujarat",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pradesh",
    "West Bengal",
  ].map((s) => ({ value: s, label: s }));

  return (
    <>
      {/* Overlay */}
      <div className="ep-overlay" onClick={handleOverlayClick} />

      {/* Slide Panel */}
      <aside className="ep-panel" ref={panelRef} aria-label="Edit Profile">
        {/* Header */}
        <div className="ep-header">
          <div className="ep-header-left">
            <div className="ep-header-icon">✏️</div>
            <div>
              <h2 className="ep-header-title">Edit Profile</h2>
              <p className="ep-header-sub">
                Click ✏️ Edit next to any field to update it
              </p>
            </div>
          </div>
          <button className="ep-close-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="ep-body">
          {/* ── Personal Information ── */}
          <div className="ep-section">
            <div className="ep-section-header">
              <span className="ep-section-icon">👤</span>
              <span className="ep-section-title">Personal Information</span>
            </div>
            <div className="ep-fields">
              <div className="ep-row">
                <InlineField
                  fieldKey="firstName"
                  label="First Name"
                  readOnly
                  readOnlyNote="Name cannot be changed."
                />
                <InlineField
                  fieldKey="lastName"
                  label="Last Name"
                  readOnly
                  readOnlyNote="Name cannot be changed."
                />
              </div>

              <div className="ep-row">
                <InlineField
                  fieldKey="dob"
                  label="Date of Birth"
                  type="date"
                  required
                />
                <InlineSelect
                  fieldKey="gender"
                  label="Gender"
                  options={genderOptions}
                  required
                />
              </div>

              <InlineField
                fieldKey="email"
                label="Email Address"
                type="email"
                placeholder="Enter email address"
                required
              />

              <InlineField
                fieldKey="mobile"
                label="Mobile Number"
                type="tel"
                placeholder="Enter mobile number"
                required
              />
            </div>
          </div>

          {/* ── Academic Information ── */}
          <div className="ep-section">
            <div className="ep-section-header">
              <span className="ep-section-icon">🎓</span>
              <span className="ep-section-title">Academic Information</span>
            </div>
            <div className="ep-fields">
              <div className="ep-row">
                <InlineSelect
                  fieldKey="classGrade"
                  label="Class / Grade"
                  icon="📚"
                  options={classOptions}
                  required
                />
                <InlineField
                  fieldKey="schoolName"
                  label="School Name"
                  placeholder="Enter school name"
                  required
                />
              </div>

              <div className="ep-row">
                <InlineField
                  fieldKey="city"
                  label="City"
                  placeholder="Enter city"
                  required
                />
                <InlineSelect
                  fieldKey="state"
                  label="State"
                  options={stateOptions}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="ep-footer">
          <button className="ep-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="ep-save-btn" onClick={handleSaveAll}>
            💾 Save Changes
          </button>
        </div>
      </aside>

      {/* Toast notification */}
      {showToast && (
        <div className="ep-toast">
          <span className="ep-toast-icon">✅</span>
          Profile updated successfully!
        </div>
      )}
    </>
  );
}

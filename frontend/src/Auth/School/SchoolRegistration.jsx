import { useState } from "react";
import "./SchoolRegistration.css";

function SchoolRegistration() {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolCode: "",
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
    country: "",

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
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(formData, null, 2));

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }

    alert("Data printed in console");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>School Registration</h2>

        <h3>School Information</h3>

        <div className="grid">
          <input
            name="schoolName"
            placeholder="School Name *"
            onChange={handleChange}
          />

          <select name="schoolType" onChange={handleChange}>
            <option value="">School Type *</option>
            <option>Private</option>
            <option>Government</option>
            <option>CBSE</option>
            <option>ICSE</option>
            <option>State Board</option>
          </select>

          <input
            name="boardName"
            placeholder="Board Name *"
            onChange={handleChange}
          />

          <input
            name="affiliationNumber"
            placeholder="Affiliation Number"
            onChange={handleChange}
          />

          <input
            name="udiseCode"
            placeholder="UDISE Code"
            onChange={handleChange}
          />

          <input
            name="establishedYear"
            placeholder="Established Year"
            onChange={handleChange}
          />
        </div>

        <h3>School Address</h3>

        <div className="grid">
          <input
            name="addressLine1"
            placeholder="Address Line 1 *"
            onChange={handleChange}
          />

          <input
            name="addressLine2"
            placeholder="Address Line 2"
            onChange={handleChange}
          />

          <input name="city" placeholder="City *" onChange={handleChange} />

          <input
            name="district"
            placeholder="District *"
            onChange={handleChange}
          />

          <input name="state" placeholder="State *" onChange={handleChange} />

          <input
            name="pincode"
            placeholder="Pincode *"
            onChange={handleChange}
          />

          <input
            name="country"
            placeholder="Country *"
            onChange={handleChange}
          />
        </div>

        <h3>Principal Details</h3>

        <div className="grid">
          <input
            name="principalName"
            placeholder="Principal Name *"
            onChange={handleChange}
          />

          <input
            name="principalMobileNumber"
            placeholder="Principal Mobile Number *"
            onChange={handleChange}
          />

          <input
            name="principalEmailId"
            placeholder="Principal Email ID *"
            onChange={handleChange}
          />
        </div>

        <h3>Coordinator Details</h3>

        <div className="grid">
          <input
            name="olympiadCoordinatorName"
            placeholder="Olympiad Coordinator Name *"
            onChange={handleChange}
          />

          <input
            name="designation"
            placeholder="Designation *"
            onChange={handleChange}
          />

          <input
            name="mobileNumber"
            placeholder="Mobile Number *"
            onChange={handleChange}
          />

          <input
            name="whatsappNumber"
            placeholder="WhatsApp Number"
            onChange={handleChange}
          />

          <input
            name="coordinatorEmailId"
            placeholder="Email ID *"
            onChange={handleChange}
          />
        </div>

        <h3>Login Credentials</h3>

        <div className="grid">
          <input
            name="emailId"
            placeholder="Email ID *"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password *"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password *"
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit}>Register School</button>
      </div>
    </div>
  );
}

export default SchoolRegistration;

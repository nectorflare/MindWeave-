import { useState } from "react";
import "./StudentRegistration.css";

function StudentRegistration() {
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
        <h2>Student Registration</h2>

        <h3>Personal Details</h3>

        <div className="grid">
          <input
            name="firstName"
            placeholder="First Name *"
            onChange={handleChange}
          />

          <input
            name="lastName"
            placeholder="Last Name *"
            onChange={handleChange}
          />

          <select name="gender" onChange={handleChange}>
            <option value="">Gender *</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input type="date" name="dateOfBirth" onChange={handleChange} />
        </div>

        <h3>Academic Details</h3>

        <div className="grid">
          <input
            name="classGrade"
            placeholder="Class / Grade *"
            onChange={handleChange}
          />
        </div>

        <h3>School Details</h3>

        <div className="grid">
          <input
            name="schoolName"
            placeholder="School Name"
            onChange={handleChange}
          />

          <input name="city" placeholder="City" onChange={handleChange} />

          <input name="state" placeholder="State" onChange={handleChange} />
        </div>

        <h3>Parent / Guardian Details</h3>

        <div className="grid">
          <input
            name="fatherName"
            placeholder="Father Name *"
            onChange={handleChange}
          />

          <input
            name="motherName"
            placeholder="Mother Name *"
            onChange={handleChange}
          />

          <input
            name="parentMobileNumber"
            placeholder="Parent Mobile Number *"
            onChange={handleChange}
          />
        </div>

        <h3>Login Details</h3>

        <div className="grid">
          <input
            name="emailId"
            placeholder="Email ID *"
            onChange={handleChange}
          />

          <input
            name="mobileNumber"
            placeholder="Mobile Number *"
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

        <h3>Address Details</h3>

        <div className="grid">
          <input name="address" placeholder="Address" onChange={handleChange} />

          <input
            name="addressCity"
            placeholder="City *"
            onChange={handleChange}
          />

          <input
            name="addressState"
            placeholder="State *"
            onChange={handleChange}
          />

          <input
            name="pincode"
            placeholder="Pincode *"
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit}>Register Student</button>
      </div>
    </div>
  );
}

export default StudentRegistration;

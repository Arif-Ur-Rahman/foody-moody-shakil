import React, { useState } from "react";
import "./Gift.css";
import Banner from "../../../assets/Food_Image/special_day_Gift.jpg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../../container/Footer/Footer";

function Gift() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    contactNumber: "",
    address: "",
    anniversaryDate: "",
    specialGift: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <>
      <div className="gift-container">
        <Navbar />
        <div className="hero-banner">
          <img src={Banner} alt="Special Day Banner" />
        </div>
        <h1 className="gift-header">Special Day Gift</h1>
        <p className="gift-description">
          Select a special date in a year to receive your auto gift!
        </p>
        <form className="gift-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="anniversaryDate">Anniversary Date:</label>
          <input
            type="date"
            id="anniversaryDate"
            name="anniversaryDate"
            value={formData.anniversaryDate}
            onChange={handleChange}
            required
          />
          <label htmlFor="specialGift">Select Special Gift:</label>
          <select
            id="specialGift"
            name="specialGift"
            value={formData.specialGift}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Anniversary Gift">Anniversary Gift</option>
            <option value="Birthday Gift">Birthday Gift</option>
          </select>
          <button type="submit" className="gift-submit-btn">Submit</button>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default Gift;

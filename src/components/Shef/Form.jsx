// Form.jsx

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Form.css';
import Shef1Image from '../../assets/Shef1.png';
import Shef2Image from '../../assets/Shef2.png';
import Shef3Image from '../../assets/Shef3.png';

const chefsList = [
  { name: 'Mr. Shef 1', image: Shef1Image },
  { name: 'Mr. Shef 2', image: Shef2Image },
  { name: 'Mr. Shef 3', image: Shef3Image },
  { name: 'Mr. Shef 4', image: Shef1Image },
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    event: '',
    selectedChef: '',
    specialNote: '',
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      alert('Please verify the reCAPTCHA.');
      return;
    }
    // Your submit logic here, like sending formData to the server
    console.log('Form submitted:', formData);
  };

  const handleChefSelect = (e) => {
    const selectedChefName = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      selectedChef: selectedChefName,
    }));
  };

  return (
    <div className="form-container py-10">
        <h1 className="form-title">Request a Chef</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="event" className="form-label">
            Event
          </label>
          <input
            type="text"
            id="event"
            name="event"
            value={formData.event}
            onChange={handleChange}
            placeholder="Enter the event details"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedChef" className="form-label">
            Select Chef
          </label>
          <select
            id="selectedChef"
            name="selectedChef"
            value={formData.selectedChef}
            onChange={handleChefSelect}
            className="form-input"
            required
          >
            <option value="">Select a chef</option>
            {chefsList.map((chef, index) => (
              <option key={index} value={chef.name}>
                {chef.name}
              </option>
            ))}
          </select>
          {formData.selectedChef && (
            <img src={chefsList.find((chef) => chef.name === formData.selectedChef)?.image} alt="Chef" className="chef-image" />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="specialNote" className="form-label">
            Any Special Note
          </label>
          <textarea
            id="specialNote"
            name="specialNote"
            value={formData.specialNote}
            onChange={handleChange}
            placeholder="Enter any special note here"
            rows={4}
            className="form-textarea"
          />
        </div>
        {/* Google reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LeZAKApAAAAADIDKMBS_b0nhKqsNWLQB04fgP9a"
          onChange={(value) => setIsCaptchaVerified(value)}
          className="recaptcha-container"
        />
        <div className="form-group">
          <button type="submit" className="form-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

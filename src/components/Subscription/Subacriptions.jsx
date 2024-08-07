import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../../container";
import "./Subacriptions.css";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon from react-icons
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA component

const Subscriptions = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [selectedPlan, setSelectedPlan] = useState("");
  const [planPrice, setPlanPrice] = useState(0);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleSubscribeClick = (plan, price) => {
    setSelectedPlan(plan);
    setPlanPrice(price);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Form submission logic here, including sending data to server or API
    console.log("Form data:", formData);
    console.log("Selected Plan:", selectedPlan);
    console.log("Plan Price:", planPrice);
    console.log("ReCAPTCHA Token:", recaptchaToken);
    // Reset form and state after submission
    setFormData({
      name: "",
      email: "",
      contact: "",
      address: "",
    });
    setSelectedPlan("");
    setPlanPrice(0);
    setRecaptchaToken("");
    setShowForm(false);

    alert("Thanks for subscribing! We will get back to you soon.");
  };

  return (
    <>
      <Navbar />

      <div className="wrap">
        <h1 className="pen-title">We Have 3 Subscription systems</h1>

        <section className="pricing-section">
          <div className="pricing pricing-theme">
            <div className="pricing-item">
              <h3 className="pricing-title">Basic</h3>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>9.90
              </div>
              <p className="pricing-sentence">Become Our Regular Client</p>
              <ul className="pricing-feature-list">
                <li className="pricing-feature">Order Anytime</li>
                <li className="pricing-feature">Multiple Food Order</li>
                <li className="pricing-feature">Food-Order for Occasion</li>
              </ul>
              <button 
                className="pricing-action"
                onClick={() => handleSubscribeClick("Basic", 9.9)}
              >
                Subscribe
              </button>
            </div>

            <div className="pricing-item">
              <h3 className="pricing-title">Standard</h3>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>29.90
              </div>
              <p className="pricing-sentence">Become Our Standard Client</p>
              <ul className="pricing-feature-list">
                <li className="pricing-feature">Order Anytime</li>
                <li className="pricing-feature">Multiple Food Order</li>
                <li className="pricing-feature">Food-Order for Occasion</li>
                <li className="pricing-feature">Birthday/Anniversary Gift</li>
                <li className="pricing-feature">7 Days Order Bonus</li>
              </ul>
              <a
                className="pricing-action"
                onClick={() => handleSubscribeClick("Standard", 29.9)}
              >
                Subscribe
              </a>
            </div>

            <div className="pricing-item">
              <h3 className="pricing-title">Premium</h3>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>59.90
              </div>
              <p className="pricing-sentence">Gigantic business solution</p>
              <ul className="pricing-feature-list">
                <li className="pricing-feature">Order Anytime</li>
                <li className="pricing-feature">Multiple Food Order</li>
                <li className="pricing-feature">Food-Order for Occasion</li>
                <li className="pricing-feature">Birthday/Anniversary Gift</li>
                <li className="pricing-feature">7 Days Order Bonus</li>
                <li className="pricing-feature">Food of The Day</li>
                <li className="pricing-feature">Chef-At-Home Service</li>
              </ul>
              <a
                className="pricing-action"
                onClick={() => handleSubscribeClick("Premium", 59.9)}
              >
                Subscribe
              </a>
            </div>
          </div>
        </section>
      </div>

      {showForm && (
        <div className="subscription-form-overlay">
          <div className="subscription-form">
            <AiOutlineClose className="close-icon" onClick={handleCloseForm} />
            <h2>Subscription Form</h2>
            <p>Selected Plan: {selectedPlan}</p>
            <p>Plan Price: ${planPrice}</p>
            <form onSubmit={handleSubmitForm}>
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

              <label htmlFor="contact">Contact:</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
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

              <ReCAPTCHA
                sitekey="6LeZAKApAAAAADIDKMBS_b0nhKqsNWLQB04fgP9a"
                onChange={handleRecaptchaChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Subscriptions;

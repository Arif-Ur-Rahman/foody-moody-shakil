import React from "react";
import "./Cashback.css";
import cashback from "../../assets/Food_Image/Cashback.webp";
import Navbar from "../../components/Navbar/Navbar";
import PreLoader from "../preLoader/PreLoader";

function Cashback() {
  return (
    <>
      <PreLoader title1="200%" title2="Cash-Back" title3="Offer" />
      <Navbar />
      <div className="cashback-container">
        <div className="cashback-banner">
          <img src={cashback} alt="Cashback Banner" />
        </div>
        <h1 className="cashback-title">200% Cashback Offer</h1>
        <div className="cashback-content">
          <p className="cashback-description">
            Enjoy our exclusive 200% cashback offer on every full payment order!
            Earn euro points in your account that can be used later, with the
            flexibility to use up to 50% of the euro points from your future
            order amount.
          </p>
          <p className="cashback-info">
            Points are valid for 6 months. When using cashback in an order, no
            additional cashback is earned. Take advantage of this amazing offer
            and save on your next meal!
          </p>
        </div>
        <div className="cashback-footer">
          <p className="cashback-terms">
            Terms and conditions apply. Visit our website for more details.
          </p>
          <p className="cashback-note">
            <strong>Note:</strong> Offer subject to change without prior notice.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cashback;

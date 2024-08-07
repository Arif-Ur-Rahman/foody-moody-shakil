import React from 'react';
import './SevenOrder.css';
import OfferBanner from '../../../assets/Banner/7_Day_order_in_a_row_Bonus.webp';
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../container/Footer/Footer"

function SevenOrder() {
  return (
    <div className="seven-order-container">
        <Navbar />
      <div className="offer-banner">
        <img src={OfferBanner} alt="Offer Banner" className="banner-image" />
        <h1 className="offer-header">Bonus Food Offer!</h1>
        <p className="offer-description">Order 7 times in a row and get a bonus food item for free!</p>
      </div>
      <div className="bonus-food">
        <h2 className="bonus-header">Bonus Food Details:</h2>
        <ul className="bonus-list">
          <li>Special Bonus Food Item</li>
          <li>Free of charge</li>
          <li>Available for 7 consecutive orders</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default SevenOrder;

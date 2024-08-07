import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../container/Footer/Footer';
import offerimg from '../../assets/Banner/Image.png';
import './Deal.css';
import { Link } from 'react-router-dom';

const Deal = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <h1 className="hero-heading">Exclusive Deal of the Day</h1>
        <p className="hero-subheading">Don't miss out on our special offer!</p>
        <Link to="/BanglaFood" className="get-deal-link">Get Deal Now</Link>
      </div>
      <div className="deal-container">
        <h2 className="deal-heading">Special Offer</h2>
        <div className="deal-details">
          <div className="deal-image">
            <img src={ offerimg } alt="Deal of the Day" />
          </div>
          <div className="deal-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <p>
              In hac habitasse platea dictumst. Maecenas ullamcorper, odio vel suscipit
              lobortis, elit erat tempus arcu, vitae posuere justo turpis ut felis.
            </p>
            <p className="deal-price">Price: $XX.XX</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deal;

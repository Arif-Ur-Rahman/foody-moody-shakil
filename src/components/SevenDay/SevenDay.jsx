import React from 'react';
import './SevenDay.css';

function SevenDay() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/path/to/hero-image.jpg" alt="Seven Days Bonus" />
        <h1 className="hero-heading">Exclusive Seven Days Bonus</h1>
        <p className="hero-subheading">Order for 7 days in a row and get a special bonus!</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="section-heading">How It Works</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <ul>
          <li>Order for 7 consecutive days.</li>
          <li>Receive your special bonus on the 8th day.</li>
          <li>Enjoy exclusive benefits!</li>
        </ul>
        <div className="bonus-details">
          <h3 className="bonus-heading">Bonus Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SevenDay;

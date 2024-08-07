import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../../assets/About/about-item.png"; 
import "./Hero.css";
import "./responsive.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-heading">
            <h1 className="main-heading">
              Foody Moody: Every Bite Tell A Story!
            </h1>
            <p className="sub-heading">
              Foody Moody is a vibrant and trendy restaurant known for its
              eclectic menu featuring a fusion of international cuisines. With a
              cozy ambiance and top-notch service.
            </p>
            <a href="../Feature" className="action-btn">
              Our Features <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImage} className="hero-menu-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

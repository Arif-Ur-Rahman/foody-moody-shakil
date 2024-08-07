import React from "react";
import Image from "../../../assets/About/about-item-menu.png";
import "../responsive.css";
import "./More.css";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <section className="about">
      <img
        src="../../../assets/About/about-item-menu.png"
        className="about-site-img"
        alt=""
      />
      <div className="about-container">
        <div className="about-img-container">
          <img src={Image} className="about-image" alt="" />
        </div>
        <div className="about-text-container">
          <div className="about-headings">
            <h1 className="about-main-heading">
              Tasty Food Is Challenge And Foody Moody Assures That
            </h1>
            <p className="about-sub-heading">
              Indulge in Culinary Adventures with Foody Moody: Where Tasty Food
              is a Triumph. Embark on a Flavorful Journey with Foody Moody:
              Where Every Bite is a Delicious Challenge Met!
            </p>
            
            
            <div className="about-btns">
              <Link to="/shef" className="action-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;

import React, { useState, useEffect } from "react";
import "./Hero.css";
import HeroSlider from "./HeroCard";
import { Link } from "react-router-dom";

const Hero = () => {
  // ---------> event animation  <-------------
  const texts = [
    "Subscription",
    "200% Cashback",
    "Special day gift",
    "7 days Order",
  ];
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setOpacity(1);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, texts.length]);
  return (
    <div className="bg-dark">
      <div className="container-fluid ">
        <div className="row">
          <div className="hero">
            <div className="hero-text">
              <div className="tex-head">
                <h1 className="fw-bold text-light" data-aos="fade-right">
                  Our Features
                  <br />
                  <span style={{ opacity, transition: "opacity 0.5s ease" }}>
                    {texts[index]}
                  </span>{" "}
                </h1>
              </div>
              <hr />
              <div className="text-primary hero-btn-middle fw-medium">
                <Link
                  to="/feature"
                  className="custom__button"
                  style={{ marginTop: "2rem" }}
                >
                  Buy Now
                </Link>
                {/* <button
                  type="button"
                  className="custom__button"
                  style={{ marginTop: "2rem" }}
                >
                  Buy Now
                </button> */}
                <p></p>
              </div>
            </div>
            <div className="slide-main" data-aos="fade-left">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

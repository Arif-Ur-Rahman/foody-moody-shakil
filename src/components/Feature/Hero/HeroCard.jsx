import React, { useState, useEffect } from "react";
import "./Hero.css";
import "./HeroCard.css";
import slide1 from "../../../assets/Food_Image/food2.jpg";
import slide2 from "../../../assets/food1.png";
import slide3 from "../../../assets/food3.png";
import slide4 from "../../../assets/food4.png";
import slide5 from "../../../assets/award01.png";
import slide6 from "../../../assets/award02.png";
import sports1 from "../../../assets/award03.png";
import sports2 from "../../../assets/biryani5.png";
import sports3 from "../../../assets/award05.png";
import sports4 from "../../../assets/chef.png";
import sports5 from "../../../assets/gallery02.png";
import sports6 from "../../../assets/food1.png";
import sports7 from "../../../assets/biryani3.png";
import sports8 from "../../../assets/biryani2.png";
import poll1 from "../../../assets/biryani.png";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  // Define image arrays for each stack
  const stack1Images = [slide1, slide2, slide3, slide4, slide5, slide6];
  const stack2Images = [slide2, slide3, slide4, slide1];
  const stack3Images = [
    sports1,
    sports2,
    sports3,
    sports4,
    sports5,
    sports6,
    sports7,
    sports8,
    poll1,
  ];

  // State to track the current image index for each stack
  const [currentStack1Index, setCurrentStack1Index] = useState(0);
  const [currentStack2Index, setCurrentStack2Index] = useState(0);
  const [currentStack3Index, setCurrentStack3Index] = useState(0);

  // Function to change the image for each stack
  const changeStack1Image = () => {
    setCurrentStack1Index((prevIndex) => (prevIndex + 1) % stack1Images.length);
  };

  const changeStack2Image = () => {
    setCurrentStack2Index((prevIndex) => (prevIndex + 1) % stack2Images.length);
  };

  const changeStack3Image = () => {
    setCurrentStack3Index((prevIndex) => (prevIndex + 1) % stack3Images.length);
  };

  // useEffect to change the image for each stack at different intervals
  useEffect(() => {
    const interval1 = setInterval(changeStack1Image, 5000);
    const interval2 = setInterval(changeStack2Image, 4000);
    const interval3 = setInterval(changeStack3Image, 3000);

    // Clear intervals on component unmount
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="hero-slider">
      {/* Stack 1 */}
      <div className="stack stack-rotate1 position-relative">
        <div className="slide-card">
          <Link to="/Cashback">
            <div className="image">
              <img
                src={stack1Images[currentStack1Index]}
                alt=""
                className="fade-image"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Stack 2 */}
      <div className="stack stack-rotate2 position-relative">
        <div className="slide-card">
          <Link to="/Gift">
            <div className="image">
              <img
                src={stack2Images[currentStack2Index]}
                alt=""
                className="fade-image"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Stack 3 */}
      <div className="stack stack-rotate3 position-relative">
        <div className="slide-card">
          <Link to="/SevenOrder">
            <div className="image">
              <img
                src={stack3Images[currentStack3Index]}
                alt=""
                className="fade-image"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

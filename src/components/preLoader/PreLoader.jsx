import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/Animations";
import "./preloader.css";
const PreLoader = ({ title1, title2, title3 }) => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>{title1}</span>
        <span>{title2}</span>
        <span>{title3}</span>
      </div>
    </div>
  );
};

export default PreLoader;

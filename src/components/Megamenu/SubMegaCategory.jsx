import React from "react";
import "./Megamenu.css";
const SubMegaCategory = ({ img, title, subTitle }) => {
  return (
    <div className="sub-items">
      <div className="sub-item-img">
        <img src={img} alt="" />
      </div>
      <div className="sub-items-title">
        <h6>{title}</h6>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default SubMegaCategory;

import React from "react";
import "./button.css";
const Button = (props) => {
  console.log(props.link);
  return (
    <button type="button" className="btn btn-design">
      <a className="text-light text-uppercase" href="{{props.link}}">
        {props.title}
      </a>
    </button>
  );
};

export default Button;

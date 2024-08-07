import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <section className="question">
      <div className="question-container">
        <div className="question-headings">
          <h1 className="question-main-heading">Have Question In Mind?</h1>
          <p className="question-sub-heading">
            If you any question, Please feel free to ask. We are open 24/7.
          </p>
        </div>
        <div className="question-item">
          <div className="question-item-list">
            <form className="subscription">
              <input
                className="add-email"
                type="email"
                placeholder="youremail@gmail.com"
              />
              <a href="/" className="submit-email">
                <span className="before-submit">Send</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;

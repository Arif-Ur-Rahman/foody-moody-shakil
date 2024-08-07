import React from "react";
import "./ReservationCard.css";
const ReservationCard = () => {
  const reservation = [
    {
      day: "Monday To Friday",
      time: "7AM - 9PM",
    },
    {
      day: "Saturday & Sunday",
      time: "Close",
    },
  ];
  return (
    <div className="">
      <div className="ft-fixed-area">
        <div className="reservation-box">
          <div className="reservation-wrap">
            <h3 className="res-title">Open Hour</h3>
            {reservation.map((data, index) => (
              <div key={index} className="res-date-time">
                <div className="res-date-time-item">
                  <div className="res-date">
                    <div className="res-date-item">
                      <div className="res-date-text">
                        <p>{data.day}:</p>
                      </div>
                      <div className="res-date-dot">.....</div>
                    </div>
                  </div>
                </div>
                <div className="res-date-time-item">
                  <div className="res-time">
                    <div className="res-time-item">
                      <p>{data.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <h3 className="res-title">Reservation Numbers</h3>
            <p className="res-number">(617)-276-8031</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;

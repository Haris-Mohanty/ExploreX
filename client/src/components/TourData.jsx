import React from "react";
import "./TourStyles.css";

const TourData = (props) => {
  return (
    <>
      <div className="t-card">
        <div className="t-image">
          <img src={props.image} alt="Recent Tours" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default TourData;

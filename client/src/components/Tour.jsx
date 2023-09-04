import React from "react";
import "./TourStyles.css";
import TourData from "./TourData";
import Tour1 from "../Assets/sydney.png";
import Tour2 from "../Assets/rome.png";
import Tour3 from "../Assets/8.jpg";

const Tour = () => {
  return (
    <>
      <div className="tour d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Recent Tours</h1>
        <p className="font-sofias">
          Unveiling Our World, One Journey at a Time!
        </p>
        <div className="tourCard">
          <TourData
            image={Tour1}
            heading="Sydney Sojourns"
            text="Explore Sydney's iconic landmarks, stunning beaches, and vibrant culture on our unforgettable guided tour."
          />
          <TourData
            image={Tour2}
            heading="Rome Unveiled"
            text="Discover ancient wonders, Renaissance art, and vibrant culture on our unforgettable Rome tour."
          />
          <TourData
            image={Tour1}
            heading="Rome Unveiled"
            text="Discover ancient wonders, Renaissance art, and vibrant culture on our unforgettable Rome tour."
          />
        </div>
      </div>
    </>
  );
};

export default Tour;

import React from "react";
import "./Destination.css";
import parisPic1 from "../Assets/paris1.jpg";
import parisPic2 from "../Assets/paris-2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Popular Destination</h1>
        <p className="font-sofias tagline">
          Where adventure awaits at every turn!
        </p>
        <DestinationData
          heading="Paris, France: The City of Love"
          text="Experience the timeless allure of Paris, France. Walk along the
            romantic Seine River, under the iconic Eiffel Tower's shadow.
            Immerse yourself in world-renowned art at the Louvre Museum and be
            captivated by the charm of Montmartre's winding streets. Indulge in
            exquisite cuisine at cozy bistros, savoring delicate pastries and
            rich wines. From the historical grandeur of Notre-Dame Cathedral to
            the chic boutiques along the Champs-Élysées, Paris seamlessly blends
            history, culture, and sophistication. Discover the magic of the City
            of Love as you explore its cobblestone lanes, witness unforgettable
            sunsets over the cityscape, and create cherished memories that will
            linger forever."
          img1={parisPic1}
          img2={parisPic2}
        />
      </div>
    </>
  );
};

export default Destination;

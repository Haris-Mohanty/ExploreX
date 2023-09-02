import React, { Component } from "react";
import "./Destination.css";
import parisPic1 from "../Assets/paris1.jpg";
import parisPic2 from "../Assets/paris-2.jpg";

class DestinationData extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    return (
      <div className="first-desc">
        <div className="des-text">
          <h3 className="mt-3">{this.props.heading}</h3>
          <p className="font-lato ms-3">{this.props.text}</p>
        </div>
        <div className="image">
          <img src={parisPic1} alt="Paris Pic" />
          <img src={parisPic2} alt="Paris Pic" />
        </div>
      </div>
    );
  }
}

export default DestinationData;

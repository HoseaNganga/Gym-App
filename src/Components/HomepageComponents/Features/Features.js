import React from "react";
import "./Features.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";

const Features = () => {
  return (
    <div className="featuresContainer">
      <div className="featuresHeader">
        <div className="featuresHeaderImage">
          <img src={image1} alt="features Header" />
          <h2>our featured classes</h2>
        </div>
        <h3>We Are Offering Best Flexible Classes</h3>
      </div>
      <div className="featuresBodyGrid">
        <div className="item item1">
          <div className="itemDescription">
            <h3>Cycling</h3>
            <p>Wednesday: 9:00am-10:00am</p>
          </div>
        </div>
        <div className="item item2">
          <div className="itemDescription">
            <h3>Karate</h3>
            <p>Friday: 10:00am-11:00am</p>
          </div>
        </div>
        <div className="item item3">
          <div className="itemDescription">
            <h3>Meditation</h3>
            <p>Friday: 1:00pm-2:00pm</p>
          </div>
        </div>
        <div className="item item4">
          <div className="itemDescription">
            <h3>Power</h3>
            <p>Friday: 1:00pm-2:00pm</p>
          </div>
        </div>
        <div className="item item5">
          <div className="itemDescription">
            <h3>Martial Arts</h3>
            <p>Sunday: 6:00pm-7:00pm</p>
          </div>
        </div>
        <div className="item item6">
          <div className="itemDescription">
            <h3>Work Out</h3>
            <p>Monday: 4:00pm-5:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

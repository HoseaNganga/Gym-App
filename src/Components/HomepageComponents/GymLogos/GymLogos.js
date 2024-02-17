import React from "react";
import "./GymLogos.css";
import logo1 from "../../../ImageAssets/testimonials/logo1.png";
import logo2 from "../../../ImageAssets/testimonials/logo2.png";
import logo3 from "../../../ImageAssets/testimonials/logo3.png";
import logo4 from "../../../ImageAssets/testimonials/logo4.png";
import logo5 from "../../../ImageAssets/testimonials/logo5.png";

const GymLogos = () => {
  return (
    <div className="gymLogosContainer">
      <div className="logo">
        <img src={logo1} alt="logo1" />
      </div>
      <div className="logo">
        <img src={logo2} alt="logo2" />
      </div>
      <div className="logo">
        <img src={logo3} alt="logo3" />
      </div>
      <div className="logo">
        <img src={logo4} alt="logo4" />
      </div>
      <div className="logo">
        <img src={logo5} alt="logo5" />
      </div>
    </div>
  );
};

export default GymLogos;

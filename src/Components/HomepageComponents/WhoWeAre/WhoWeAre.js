import React from "react";
import "./WhoWeAre.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";
import image2 from "../../../ImageAssets/who-we-are/equpments.png";
import image3 from "../../../ImageAssets/who-we-are/gym.png";
import image4 from "../../../ImageAssets/who-we-are/weightlifter.png";
import image5 from "../../../ImageAssets/who-we-are/girl-run.png";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="aboutUsHomeContainer">
      <div className="aboutUsHomeHeader">
        <div className="aboutUsHomeHeaderImage">
          <img src={image1} alt="backgroundTitle" />
          <h2>who we are</h2>
        </div>
        <h3>Take Your Health And Body To Next Level</h3>
        <p>
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className="aboutUsHomeEquipments">
          <div className="equipment">
            <div className="equipmentImage">
              <img src={image2} alt="equipment" />
            </div>
            <h2>professional trainers</h2>
          </div>
          <div className="equipment">
            <div className="equipmentImage">
              <img src={image3} alt="equipment" />
            </div>
            <h2>modern equipments</h2>
          </div>
          <div className="equipment">
            <div className="equipmentImage">
              <img src={image4} alt="equipment" />
            </div>
            <h2>fancy gym machines</h2>
          </div>
        </div>
        <div className="aboutUsHomeBtn">
          <Link to={"/classes"}>Take a tour</Link>
        </div>
      </div>
      <div className="aboutUsHomeBody">
        <div className="aboutUsHomeBodyImage">
          <img src={image5} alt="girl Running" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

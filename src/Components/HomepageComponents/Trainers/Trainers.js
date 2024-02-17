import React from "react";
import "./Trainers.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";
import image2 from "../../../ImageAssets/trainers/trainer1.png";
import image3 from "../../../ImageAssets/trainers/trainer2.png";
import image4 from "../../../ImageAssets/trainers/trainer3.png";
import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa6";

const Trainers = () => {
  return (
    <div className="trainersContainer">
      <div className="trainersHeader">
        <div className="trainersHeaderImage">
          <img src={image1} alt="trainersImg" />
          <h2>gym trainers</h2>
        </div>
        <h3>Team Of Expert Coaches</h3>
        <p>
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
      </div>
      <div className="trainersBody">
        <div className="trainer">
          <div className="trainerBodyImage">
            <img src={image2} alt="trainer1" />
          </div>
          <div className="trainerDescription">
            <h3>Jonathan Lewis</h3>
            <p>Yoga Trainer</p>
            <div className="trainerSocials">
              <FaLinkedin />
              <FaEnvelope />
              <FaTwitter />
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className="trainer">
          <div className="trainerBodyImage">
            <img src={image3} alt="trainer2" />
          </div>
          <div className="trainerDescription">
            <h3>Jonathan Doe</h3>
            <p>CrossFit Trainer</p>
            <div className="trainerSocials">
              <FaLinkedin />
              <FaEnvelope />
              <FaTwitter />
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className="trainer">
          <div className="trainerBodyImage">
            <img src={image4} alt="trainer3" />
          </div>
          <div className="trainerDescription">
            <h3>Ana June</h3>
            <p>Personal Trainer</p>
            <div className="trainerSocials">
              <FaLinkedin />
              <FaEnvelope />
              <FaTwitter />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;

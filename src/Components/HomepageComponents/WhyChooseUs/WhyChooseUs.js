import React from "react";
import "./WhyChooseUs.css";
import image1 from "../../../ImageAssets/choose-us/main-img.png";
import image2 from "../../../ImageAssets/choose-us/play.png";
import image3 from "../../../ImageAssets/hero/title-bg.svg";
import image4 from "../../../ImageAssets/choose-us/bench-press.png";
import image5 from "../../../ImageAssets/choose-us/bottle-of-water.png";
import image6 from "../../../ImageAssets/choose-us/gym-bag.png";
import image7 from "../../../ImageAssets/choose-us/training.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="chooseUsContainer">
      <div className="chooseUsHeader">
        <div className="chooseUsHeaderImage">
          <img src={image1} alt="ChooseUs" className="chooseUsImg" />
          <div className="placeIcon">
            <img src={image2} alt="playIcon" width={30} />
          </div>
        </div>
      </div>
      <div className="chooseUsBody">
        <div className="chooseUsBodyImage">
          <img src={image3} alt="ChooseIcon" />
          <h2>Why Choose Us</h2>
        </div>
        <h3>We Can Give A Shape Of Your Body Here!</h3>
        <p>
          At Gymate, we are dedicated to helping you achieve the body of your
          dreams. Our expert trainers and nutritionists will work with you to
          create a personalized fitness and nutrition plan that helps you reach
          your specific goals.
        </p>
        <div className="chooseUsIcons">
          <div className="flexChooseIcons">
            <div className="flexChooseIconsImage">
              <img src={image4} alt="bench Press" />
            </div>
            <h4>Modern Gym Equipments</h4>
          </div>
          <div className="flexChooseIcons">
            <div className="flexChooseIconsImage">
              <img src={image5} alt="waterbottle" />
            </div>
            <h4>Fresh Water Bottle</h4>
          </div>
          <div className="flexChooseIcons">
            <div className="flexChooseIconsImage">
              <img src={image6} alt="gym bag" />
            </div>
            <h4>Gym Bag Equipments</h4>
          </div>
          <div className="flexChooseIcons">
            <div className="flexChooseIconsImage">
              <img src={image7} alt="fitness" />
            </div>
            <h4>Free Fitness Training</h4>
          </div>
        </div>
        <div className="chooseUsLinkClass">
          <Link to={"/classes"}>
            Our Classes <FaArrowRight color="purple" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

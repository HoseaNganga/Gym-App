import React from "react";
import "./HeroSection.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="heroSectionContainer">
      <div className="heroSectionInnerContainer">
        <div className="heroSectionHeader">
          <div className="heroSectionHeaderContainer">
            <div className="heroSectionHeaderImage">
              <img src={image1} alt="image1" />
              <p>find your energy</p>
            </div>
            <h3>MAKE YOUR BODY FIT & PERFECT</h3>
            <div className="heroLinkClass">
              <Link to={"/classes"}>
                Our Classes <FaArrowRight color="purple" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="heroSectionBody">
          <div className="heroSectionBodyContainer">
            <h4>Share</h4>
            <span className="styleColor"></span>
            <div className="netIcons">
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

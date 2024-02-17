import React from "react";
import "./Footer.css";
import image1 from "../../../ImageAssets/logo/logo-footer.svg";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerHeader">
        <div className="footerHeaderImage">
          <img src={image1} alt="footerImg" />
        </div>
        <p>
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className="flexFooterIcons">
          <FaLinkedin size={22} />
          <FaEnvelope size={22} />
          <FaInstagram size={22} />
          <FaTwitter size={22} />{" "}
        </div>
        <p>Privacy Policy | © 2024 Gymate</p>
        <p>Design by RadiusTheme</p>
      </div>
      <div className="footerLinksContainer">
        <div className="footerDiv">
          <div className="flexFooterDivHeader">
            <h3>Our Classes</h3>
            <p className="styleFooterp"></p>
          </div>

          <div className="footerLinks">
            <p>Fitness Classes</p>
            <p>Aerobics Classes</p>
            <p>Power Yoga</p>
            <p>Learn Machines</p>
            <p>Full Body Strength</p>
          </div>
        </div>
        <div className="footerDiv">
          <div className="flexFooterDivHeader">
            <h3>Working Hours</h3>
            <p className="styleFooterp"></p>
          </div>
          <div className="footerLinks">
            <div className="hoursDiv">
              <h4>Monday-Friday</h4>
              <p>7:00am - 21:00pm</p>
            </div>
            <div className="hoursDiv">
              <h4>Saturday</h4>
              <p>7:00am - 21:00pm</p>
            </div>
            <div className="hoursDiv">
              <h4>Sunday</h4>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

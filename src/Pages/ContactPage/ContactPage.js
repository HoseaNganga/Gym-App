import React from "react";
import "./ContactPage.css";
import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa6";
import { Footer } from "../../Components/HomepageComponents/Import";

const ContactPage = () => {
  return (
    <div className="contactPageContainer">
      <div className="contactPageHeader">
        <div className="aboutPageHeader">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="contactPageBody">
        <div className="contactPageBodySection1">
          <h2>We are here for help you! To Shape Your Body.</h2>
          <p>
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="flexContactSection1">
            <div>
              <h3>New York City, USA</h3>
              <p className="styleFooterp"></p>
              <p>85 Briston Mint Street, London, E1 8LG, USA</p>
            </div>
            <div>
              <h3>Opening Hours</h3>
              <p className="styleFooterp"></p>
              <p>Mon to Fri: 7:30 am — 1:00 am</p>
            </div>
            <div>
              <h3>Informations</h3>
              <p className="styleFooterp"></p>
              <p>+800-123-4567 gymat@gymail.com</p>
            </div>
            <div className="contactSocials">
              <h3>Follow Us On</h3>
              <p className="styleFooterp"></p>
              <p className="flexsocials">
                <FaLinkedin />
                <FaEnvelope />
                <FaTwitter />
                <FaFacebook />
              </p>
            </div>
          </div>
        </div>
        <form className="leaveInfoForm">
          <div>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name*"
              required
              autoComplete="on"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              required
              autoComplete="on"
            />
          </div>
          <div>
            <select id="select" required>
              <option value="">Select Class</option>
              <option value="ka">Karate</option>
              <option value="Bo">BodyBuilding</option>
              <option value="yo">Yoga</option>
              <option value="cf">CrossFit</option>
              <option value="me">Meditation</option>
              <option value="po">Power</option>
              <option value="wo">WorkOut</option>
              <option value="cy">Cycling</option>
              <option value="box">Boxing</option>
            </select>
          </div>
          <div>
            <textarea
              id="comment"
              cols="30"
              rows="10"
              placeholder="Comment"
              required
            ></textarea>
          </div>
          <button className="contactBtn">SUBMIT NOW</button>
        </form>
      </div>
      <div className="contactPageFooter"></div>

      <Footer />
    </div>
  );
};

export default ContactPage;

import React from "react";
import "./AboutPage.css";
import { WhoWeAre } from "../../Components/HomepageComponents/Import";
import image1 from "../../ImageAssets/AboutPage/mountain.png";
import image2 from "../../ImageAssets/AboutPage/target.png";
import Footer from "../../Components/HomepageComponents/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      <div className="aboutPageHeader">
        <h2>About Us</h2>
      </div>
      <WhoWeAre />
      <div className="aboutPageGrid">
        <div className="aboutPageGridItem gridItem1">
          <div className="gridItem1Image">
            <img src={image2} alt="target" width={150} />
          </div>
          <h3>Our History</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat.
          </p>
        </div>
        <div className="aboutPageGridItem gridItem2"></div>
        <div className="aboutPageGridItem gridItem3"></div>
        <div className="aboutPageGridItem gridItem4">
          <div className="gridItem1Image">
            <img src={image1} alt="mountain" />
          </div>
          <h3>Our History</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

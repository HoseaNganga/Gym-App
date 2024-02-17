import React from "react";
import "./HomePricing.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";
import image2 from "../../../ImageAssets/pricing/img1.jpg";
import image3 from "../../../ImageAssets/pricing/img2.jpg";
import image4 from "../../../ImageAssets/pricing/img3.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const HomePricing = () => {
  return (
    <div className="pricingContainer">
      <div className="pricingContainerHeader">
        <div className="pricingContainerHeaderImage">
          <img src={image1} alt="pricing Img" />
          <h2>pricing chart</h2>
        </div>
        <h3>Exclusive Pricing Plan</h3>
        <p>
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
      </div>
      <div className="pricingContainerBody">
        <div className="pricingDiv beginner">
          <div className="pricingDivImage">
            <img src={image2} alt="pricing img2" />
          </div>
          <div className="pricingDescription">
            <h2>Beginners</h2>
            <h3>
              $ <span className="stylePrice">39</span>p/m{" "}
            </h3>
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
            <div className="contactLinkPricing">
              <Link to={"/contact"}>
                purchase now <FaArrowRight size={22} color="purple" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="pricingDiv intermediate">
          <div className="pricingDivImage">
            <img src={image3} alt="pricing img3" />
          </div>
          <div className="pricingDescription">
            <h2>Intermediate</h2>
            <h3>
              $ <span className="stylePrice">65</span>p/m{" "}
            </h3>
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
            <div className="contactLinkPricing">
              <Link to={"/contact"}>
                purchase now <FaArrowRight size={22} color="purple" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="pricingDiv advanced">
          <div className="pricingDivImage">
            <img src={image4} alt="pricing img4" />
          </div>
          <div className="pricingDescription">
            <h2>Advanced</h2>
            <h3>
              $ <span className="stylePrice">100</span>p/m{" "}
            </h3>
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
            <div className="contactLinkPricing">
              <Link to={"/contact"}>
                purchase now <FaArrowRight size={22} color="purple" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePricing;

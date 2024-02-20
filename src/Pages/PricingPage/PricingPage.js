import React from "react";
import { HomePricing } from "../../Components/HomepageComponents/Import";
import { Footer } from "../../Components/HomepageComponents/Import";
import "./PricingPage.css";

const PricingPage = () => {
  return (
    <div className="pricingPageContainer">
      <div className="pricingPageHeader">
        <div className="aboutPageHeader">
          <h2>Pricing</h2>
        </div>
      </div>
      <HomePricing />

      <Footer />
    </div>
  );
};

export default PricingPage;

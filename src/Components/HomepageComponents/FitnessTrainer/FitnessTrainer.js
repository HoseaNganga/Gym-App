import React from "react";
import "./FitnessTrainer.css";
import { Link } from "react-router-dom";

const FitnessTrainer = () => {
  return (
    <div className="fitnessTrainerContainer">
      <h2>Need a Fitness Trainer</h2>
      <p>
        {" "}
        <span className="styleCall">Call:</span>+123-456789
      </p>
      <div className="contactLinkHome">
        <Link to={"/contact"}>purchase now</Link>
      </div>
    </div>
  );
};

export default FitnessTrainer;

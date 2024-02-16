import React from "react";
import "./ProgressSection.css";
import image1 from "../../../ImageAssets/who-we-are/progresion.png";
import image2 from "../../../ImageAssets/who-we-are/nutritions.png";
import image3 from "../../../ImageAssets/who-we-are/workout.png";

const ProgressSection = () => {
  return (
    <div className="progressContainer">
      <div className="clockProgression">
        <div className="clockProgressionImage">
          <img src={image1} alt="clockProgressionImage" />
        </div>
        <h3>Progression</h3>
        <p>
          Our team of experts will work with you to create a customized plan
          that helps you achieve success one step at a time.
        </p>
      </div>
      <div className="workProgression">
        <div className="workProgressionImage">
          <img src={image3} alt="workProgressionImage" />
        </div>
        <h3>WorkOut</h3>
        <p>
          With a variety of workouts to choose from, you'll have everything you
          need to get into the best shape of your life.
        </p>
      </div>
      <div className="nutritionProgression">
        <div className="nutritionProgressionImage">
          <img src={image2} alt="nutritionProgressionImage" />
        </div>
        <h3>Nutrition</h3>
        <p>
          Our team will work with you to create a personalized meal plan that
          helps you reach your specific health goals.
        </p>
      </div>
    </div>
  );
};

export default ProgressSection;

import React from "react";
import "./Bmi.css";
import { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const handleClick = () => {
    const convertWeight = Number(weight);
    const convertHeight = Math.pow(Number(height) / 100, 2);
    const bmiVal = (convertWeight / convertHeight).toFixed(2);
    const spanEl1 = document.querySelector(`.spanBmi`);
    const spaneEl2 = document.querySelector(`.spanBmiWeight`);
    spanEl1.textContent = bmiVal;

    if (bmiVal >= 25) {
      spaneEl2.textContent = "OverWeight";
    } else {
      spaneEl2.textContent = `Normal`;
    }
    setWeight("");
    setHeight("");
  };

  return (
    <div className="bmiContainer">
      <h2>
        Let's Calculate Your <span className="styleSpanh2">BMI</span>
      </h2>
      <p>
        Easily determine your body mass index with our accurate calculation
        tool.
      </p>
      <form className="flexBmiForm" onSubmit={(e) => e.preventDefault()}>
        <div className="weight">
          <input
            type="number"
            id="weightInput"
            placeholder="Weight/Kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="height">
          <input
            type="number"
            id="heightInput"
            placeholder="Height/cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </form>
      <button onClick={handleClick} className="calculateBmiBtn">
        Calculate
      </button>
      <div className="revealBmi">
        <div>
          Your Bmi is <span className="spanBmi"></span>
        </div>
        <div>
          Your weight is <span className="spanBmiWeight"></span>
        </div>
      </div>
    </div>
  );
};

export default Bmi;

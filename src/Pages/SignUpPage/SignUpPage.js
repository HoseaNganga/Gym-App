import React from "react";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const history = useNavigate();
  const handleClick = () => {
    const signUpBtn = document.querySelector(`.signUpPageBtn`);
    signUpBtn.classList.toggle(`signup`);
    if (signUpBtn.classList.contains(`signup`)) {
      signUpBtn.textContent = "Sign Up";
    } else {
      signUpBtn.textContent = "Sign In";
    }
  };
  const handleSubmit = () => {
    const mail = document.getElementById(`signUpEmail`);
    const password = document.getElementById(`signUpPassword`);
    if (mail.value && password.value) {
      history("/");
    }
  };
  return (
    <div className="signUpContainer">
      <div className="signUpHeader">
        <div className="aboutPageHeader">
          <h2>Sign Up</h2>
        </div>
      </div>
      <div className="signupBody">
        <div className="holdGrid">
          <form className="signForm" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="signUpEmail">Email</label>
              <input
                type="email"
                id="signUpEmail"
                placeholder="gymate@gmail.com"
                required
                autoComplete="on"
              />
            </div>
            <div>
              <label htmlFor="signUpPassword">Password</label>
              <input
                type="text"
                id="signUpPassword"
                placeholder="password"
                required
                autoComplete="on"
              />
            </div>
            <button onClick={handleSubmit} className="signUpPageBtn signup">
              Sign Up
            </button>
          </form>
          <div className="signUpFooter">
            Already have an account ?{" "}
            <button onClick={handleClick} className="signInPageBtn">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

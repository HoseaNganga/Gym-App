import React from "react";
import "./NavBar.css";
import image1 from "../../../ImageAssets/logo/logo.svg";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleHamburger = () => {
    const hamburger = document.querySelector(`.hamburger`);
    hamburger.classList.toggle("is-active");
    const ulContainer = document.querySelector(`.navLinks`);
    ulContainer.classList.toggle(`is-active`);
  };

  return (
    <nav className="nav">
      <div className="navHeader">
        <img src={image1} alt="" />
      </div>
      <ul className="navLinks">
        <li className="linkItem">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="linkItem">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="linkItem">
          <Link to={"/gallery"}>Gallery</Link>
        </li>
        <li className="linkItem">
          <Link to={"/schedule"}>Schedule</Link>
        </li>
        <li className="linkItem">
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li className="linkItem">
          <Link to={"/pricing"}>Pricing</Link>
        </li>
        <li className="linkItem">
          <Link to={"/classes"}>Classes</Link>
        </li>
        <li className="linkItem">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="navBody">
        <div className="signInDiv">
          <Link to={"/signin"}>
            <FaUser size={25} />{" "}
          </Link>
        </div>

        <div className="linkClass">
          <div className="rotateDiv">
            <Link to={"/classes"}>+</Link>
          </div>

          <h5 className="navHeaderLv5">
            <Link to={"/classes"}>join classes now</Link>
          </h5>
        </div>
      </div>
      <button className="hamburger" onClick={handleHamburger}>
        <div className="bar"></div>
      </button>
    </nav>
  );
};

export default NavBar;

import React from "react";
import "./ClassesPage.css";
import ClassesPageArray from "./ClassesPageArray/ClassesPageArray";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Footer } from "../../Components/HomepageComponents/Import";

const ClassesPage = () => {
  const classes = ClassesPageArray();
  return (
    <div className="classPageContainer">
      <div className="classPageHeader">
        <div className="aboutPageHeader">
          <h2>Classes</h2>
        </div>
      </div>
      <div className="classPageBody">
        <div className="classesPageGrid">
          {Array.from(classes).map((val) => (
            <div className="classesPageDiv" key={val.id}>
              <div className="childClassPageDiv">
                <img src={val.image} alt={val.title} />
              </div>
              <div className="classGridItemdescription">
                <div className="classGridItemDescriptionHeader">
                  <h4>{val.title}</h4>
                  <p className="styleFooterp"></p>
                </div>
                <div className="classGridItemDescriptionBody">
                  <h5>
                    {val.userIcon} {val.trainer} {val.clockIcon} {val.timeStamp}{" "}
                  </h5>
                </div>
                <div className="classesContactLink">
                  <Link to={"/contact"}>
                    Join Now <FaArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClassesPage;

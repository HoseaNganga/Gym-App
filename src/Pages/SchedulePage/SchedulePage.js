import React from "react";
import { Link } from "react-router-dom";
import "./SchedulePage.css";
import { Footer } from "../../Components/HomepageComponents/Import";

const SchedulePage = ({ schedule }) => {
  const handleClick = (id) => {
    const getEL = Array.from(schedule).find((val) => val.id === id);
    console.log(getEL);
  };
  return (
    <div className="scheduleContainer">
      <div className="scheduleContainerHeader">
        <div className="aboutPageHeader">
          <h2>About Us</h2>
        </div>
        <div className="scheduleBody">
          <ul className="scheduleDayContainer">
            <div className="flexScheduleContainer">
              {Array.from(schedule).map((val) => (
                <li key={val.id} onClick={(e) => handleClick(val)}>
                  <Link to={`/schedule/${val.id}`}>{val.day}</Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SchedulePage;

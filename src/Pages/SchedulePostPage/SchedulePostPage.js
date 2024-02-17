import React from "react";
import "./SchedulePostPage.css";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/HomepageComponents/Import";
const SchedulePostPage = ({ schedule }) => {
  return (
    <div className="schedulePostPageContainer">
      <div className="schedulePostPageHeader">
        <div className="aboutPageHeader">
          <h2>About Us</h2>
        </div>
        <div className="scheduleBody">
          <ul className="scheduleDayContainer">
            <div className="flexScheduleContainer">
              {Array.from(schedule).map((val) => (
                <li key={val.id}>
                  <Link to={`/schedule/${val.id}`}>{val.day}</Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchedulePostPage;

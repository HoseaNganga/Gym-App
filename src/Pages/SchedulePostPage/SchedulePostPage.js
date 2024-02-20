import React from "react";
import "./SchedulePostPage.css";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/HomepageComponents/Import";
import { useParams } from "react-router-dom";
const SchedulePostPage = ({ schedule }) => {
  const { id } = useParams();
  const post = Array.from(schedule).find((val) => val.id === id);
  return (
    <div className="schedulePostPageContainer">
      {post && (
        <>
          <div className="schedulePostPageHeader">
            <div className="aboutPageHeader">
              <h2>About Us</h2>
            </div>
            <div className="scheduleBody">
              <ul className="scheduleDayContainer">
                <div className="flexScheduleContainer">
                  {Array.from(schedule).map((val) => (
                    <>
                      <li key={val.id}>
                        <Link to={`/schedule/${val.id}`}>{val.day}</Link>
                      </li>
                    </>
                  ))}
                </div>
                <div className="dailySchedule">
                  <div className="dailyContainer">
                    <div className="className">
                      <p>Class Name</p>
                      <h3>{post.class1}</h3>
                    </div>
                    <div className="classTime">
                      <p>Time</p>
                      <h3>{post.class1time}</h3>
                    </div>
                    <div className="scheduleTrainer">
                      <p>Trainer</p>
                      <h3>{post.class1trainer}</h3>
                    </div>
                    <div className="schedulePostPageContactLink">
                      <Link to={"/contact"}>Join Now</Link>
                    </div>
                  </div>
                  <div className="dailyContainer">
                    <div className="className">
                      <p>Class Name</p>
                      <h3>{post.class2}</h3>
                    </div>
                    <div className="classTime">
                      <p>Time</p>
                      <h3>{post.class2time}</h3>
                    </div>
                    <div className="scheduleTrainer">
                      <p>Trainer</p>
                      <h3>{post.class2trainer}</h3>
                    </div>
                    <div className="schedulePostPageContactLink">
                      <Link to={"/contact"}>Join Now</Link>
                    </div>
                  </div>
                  <div className="dailyContainer">
                    <div className="className">
                      <p>Class Name</p>
                      <h3>{post.class3}</h3>
                    </div>
                    <div className="classTime">
                      <p>Time</p>
                      <h3>{post.class3time}</h3>
                    </div>
                    <div className="scheduleTrainer">
                      <p>Trainer</p>
                      <h3>{post.class3trainer}</h3>
                    </div>
                    <div className="schedulePostPageContactLink">
                      <Link to={"/contact"}>Join Now</Link>
                    </div>
                  </div>
                  <div className="dailyContainer">
                    <div className="className">
                      <p>Class Name</p>
                      <h3>{post.class4}</h3>
                    </div>
                    <div className="classTime">
                      <p>Time</p>
                      <h3>{post.class4time}</h3>
                    </div>
                    <div className="scheduleTrainer">
                      <p>Trainer</p>
                      <h3>{post.class4trainer}</h3>
                    </div>
                    <div className="schedulePostPageContactLink">
                      <Link to={"/contact"}>Join Now</Link>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default SchedulePostPage;

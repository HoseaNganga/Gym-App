import React from "react";
import "./HomeBlogs.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";
import { Link } from "react-router-dom";
import HomeBlogsArray from "./HomeBlogsArray";
import { FaArrowRight } from "react-icons/fa6";

const HomeBlogs = () => {
  const blogs = HomeBlogsArray();
  return (
    <div className="homeBlogsContainer">
      <div className="homeBlogsHeader">
        <div className="homeBlogsHeaderImage">
          <img src={image1} alt="blogheaderImage" />
          <h2>latest blogs</h2>
        </div>
        <h3>Our Recent News</h3>
        <p>
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
      </div>
      <div className="homeBlogsBody">
        <ul className="blogsContainer">
          {blogs.map((val) => (
            <li className="blogItem" key={val.title}>
              <div className="holdBlogItem">
                <p className="styledatetime">{val.datetime}</p>
                <h3>{val.title}</h3>
                <p>{val.about}</p>
              </div>
              <div className="blogLinkHome">
                <Link to={"/blog"}>
                  read more <FaArrowRight color="purple" size={22} />{" "}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeBlogs;

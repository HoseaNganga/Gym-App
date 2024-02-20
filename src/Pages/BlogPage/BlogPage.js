import React from "react";
import BlogPageArray from "./BlogPageArray/BlogPageArray";
import "./BlogPage.css";
import { FaAngleRight } from "react-icons/fa6";
import image1 from "../../ImageAssets/blogpage/recent1.jpg";
import image2 from "../../ImageAssets/blogpage/recent2.jpg";
import image3 from "../../ImageAssets/blogpage/recent3.jpg";
import image4 from "../../ImageAssets/blogpage/recent4.jpg";
import image5 from "../../ImageAssets/blogpage/recent5.jpg";
import image6 from "../../ImageAssets/blogpage/recent6.jpg";
import image7 from "../../ImageAssets/blogpage/sidebar1.png";
import { Footer } from "../../Components/HomepageComponents/Import";

const BlogPage = () => {
  const blogs = BlogPageArray();
  return (
    <div className="blogPageContainer">
      <div className="blogPageHeader">
        <div className="aboutPageHeader">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="blogPageBody">
        <div className="blogPageBodySection1">
          <ul className="blogPageListContainer">
            {Array.from(blogs).map((blog) => (
              <li className="blogPageItem" key={blog.id}>
                <div className="blogPageItemHeader">
                  <div className="blogPageItemHeaderImage">
                    <img src={blog.image} alt="blogImage" />
                  </div>
                  <div className="flexblogPageHighlight">
                    <h4>By {blog.author}</h4>
                    <h5>{blog.timestamp}</h5>
                  </div>
                </div>
                <div className="blogPageItemBody">{blog.body}</div>
                <button className="blogPageItemBtn">Purchase Now</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="blogPageSideBar">
          <div className="blogPageCategories">
            <div className="blogPageCategoriesHeader">
              <h3>Categories</h3>
              <p className="styleFooterp"></p>
            </div>
            <div className="blogPageCategoriesBody">
              <div className="categoryItem">
                <div>
                  {" "}
                  <FaAngleRight />{" "}
                </div>
                <h3>Body Building</h3>
                <p>(4)</p>
              </div>
              <div className="categoryItem">
                <div>
                  {" "}
                  <FaAngleRight />{" "}
                </div>
                <h3>Boxing</h3>
                <p>(4)</p>
              </div>
              <div className="categoryItem">
                <div>
                  {" "}
                  <FaAngleRight />{" "}
                </div>
                <h3>CrossFit</h3>
                <p>(4)</p>
              </div>
              <div className="categoryItem">
                <div>
                  {" "}
                  <FaAngleRight />{" "}
                </div>
                <h3>Fitness</h3>
                <p>(4)</p>
              </div>
              <div className="categoryItem">
                <div>
                  {" "}
                  <FaAngleRight />{" "}
                </div>
                <h3>Meditation</h3>
                <p>(4)</p>
              </div>
              <div className="categoryItem">
                <div>
                  {" "}
                  <FaAngleRight />{" "}
                </div>
                <h3>Yoga</h3>
                <p>(4)</p>
              </div>
            </div>
          </div>
          <div className="blogPageRecentPosts">
            <div className="blogPageRecentPostsHeader">
              <h3>Recent Posts</h3>
              <p className="styleFooterp"></p>
            </div>
            <div className="recentPostContainer">
              <div className="recentPost">
                <div className="recentPostImage">
                  <img src={image1} alt="recentPost" />
                </div>
                <div className="recentPostDescription">
                  <p>March 22, 2022</p>
                  <h3>Yoga For Everyone in 2022</h3>
                </div>
              </div>
              <div className="recentPost">
                <div className="recentPostImage">
                  <img src={image2} alt="recentPost" />
                </div>
                <div className="recentPostDescription">
                  <p>April 22, 2022</p>
                  <h3>Getting Back Into CrossFit</h3>
                </div>
              </div>
              <div className="recentPost">
                <div className="recentPostImage">
                  <img src={image3} alt="recentPost" />
                </div>
                <div className="recentPostDescription">
                  <p>August 22, 2022</p>
                  <h3>Meet Fitness Abassador Grace</h3>
                </div>
              </div>
              <div className="recentPost">
                <div className="recentPostImage">
                  <img src={image4} alt="recentPost" />
                </div>
                <div className="recentPostDescription">
                  <p>September 22, 2022</p>
                  <h3>The best are European Meditation Practitioner</h3>
                </div>
              </div>
              <div className="recentPost">
                <div className="recentPostImage">
                  <img src={image5} alt="recentPost" />
                </div>
                <div className="recentPostDescription">
                  <p>October 22, 2022</p>
                  <h3>Learn Boxing With Our Trainer John</h3>
                </div>
              </div>
              <div className="recentPost">
                <div className="recentPostImage">
                  <img src={image6} alt="recentPost" />
                </div>
                <div className="recentPostDescription">
                  <p>December 22, 2022</p>
                  <h3>How To Get Lean For The Summer</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="blogPagePopularTags">
            <div className="blogPagePopularTagHeader">
              <h3>Popular Tags</h3>
              <p className="styleFooterp"></p>
            </div>
            <div className="popularTags">
              <p>#CrossFit</p>
              <p>#Fitness</p>
              <p>#Gym</p>
              <p>#Meditation</p>
              <p>#Running</p>
              <p>#Yoga</p>
              <p>#Boxing</p>
              <p>#Workout</p>
            </div>
          </div>
          <div className="sideBarImage">
            <div className="sideBarImageDiv">
              <img src={image7} alt="sidebarImage" />
              <h3>34% discount</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;

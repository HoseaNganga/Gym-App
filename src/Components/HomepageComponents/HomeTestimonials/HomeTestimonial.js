import React from "react";
import "./HomeTestimonial.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";
import image2 from "../../../ImageAssets/testimonials/testimonial-new.jpg";

const HomeTestimonial = () => {
  return (
    <div className="homeTestimonialContainer">
      <div className="homeTestimonialHeader">
        <div className="homeTestimonialHeaderImage">
          <img src={image1} alt="testimonialImg" />
          <h2>Testimonials</h2>
        </div>
      </div>
      <div className="homeTestimonialBody">
        <div className="homeTestimonialBodyImage">
          <img src={image2} alt="testimonialImg" />
        </div>
        <div className="homeTestimonialDescription">
          <div className="flexTestimonialDescription">
            <p>
              “I've been a member of Gymate for the past 6 months and it has
              been an amazing experience. The trainers are knowledgeable and
              supportive, the equipment is top-notch, and the community of
              members is friendly and encouraging.”
            </p>
            <div className="person">
              <h3>Harry Potter</h3>
              <h4>CEO of Hogwarts</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;

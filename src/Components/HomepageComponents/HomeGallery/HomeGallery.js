import React from "react";
import "./HomeGallery.css";
import image1 from "../../../ImageAssets/hero/title-bg.svg";

const HomeGallery = () => {
  return (
    <div className="homeGalleryContainer">
      <div className="homeGalleryHeader">
        <div className="homeGalleryHeaderImage">
          <img src={image1} alt="galleryHeaderImg" />
          <h2>gymat gallery</h2>
        </div>
        <h3>Our Workplace Gallery</h3>
        <p>
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. Attracts talents and showcases company's work atmosphere.
        </p>
      </div>
      <div className="homeGalleryGrid">
        <div className="galleryImage galleryImage1"></div>
        <div className="galleryImage galleryImage2"></div>
        <div className="galleryImage galleryImage3"></div>
        <div className="galleryImage galleryImage4"></div>
        <div className="galleryImage galleryImage5"></div>
        <div className="galleryImage galleryImage6"></div>
      </div>
    </div>
  );
};

export default HomeGallery;

import React from "react";
import "./GalleryPage.css";
import { Footer } from "../../Components/HomepageComponents/Import";

const GalleryPage = () => {
  return (
    <div className="galleryPageContainer">
      <div className="galleryPageHeader">
        <div className="aboutPageHeader">
          <h2>Gallery</h2>
        </div>
      </div>
      <div className="galleryPageGrid">
        <div className="galleryPageDiv galleryItem1"></div>
        <div className="galleryPageDiv galleryItem2"></div>
        <div className="galleryPageDiv galleryItem3"></div>
        <div className="galleryPageDiv galleryItem4"></div>
        <div className="galleryPageDiv galleryItem5"></div>
        <div className="galleryPageDiv galleryItem6"></div>
        <div className="galleryPageDiv galleryItem7"></div>
        <div className="galleryPageDiv galleryItem8"></div>
        <div className="galleryPageDiv galleryItem9"></div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;

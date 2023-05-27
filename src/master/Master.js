import React from "react";
import "./style/style.main.css";
export const Master = () => {
  return (
    <div>
      <div className="wrapper-item">
        <div className="main-img">
          <div className="nav-items">
            <h2 className="header-logo">Terra Blooms</h2>
            <div className="header-menu">
              <div className="">Terrarium</div>
              <div className="">Plants</div>
              <div className="">Natural Aquarium</div>
              <div className="">Customize</div>
              <div className="">Blogs</div>
              <div className="">About Us</div>
            </div>
            <div className="heder-menu-icon">
              <div>k</div>
              <div>f</div>
              <div>g</div>
            </div>
          </div>
          <div className="overlay">
            <h1>
              I’m rooting for my
              <br />
              flowers to grow.
            </h1>
          </div>
          <div className="overlay-button">
            <button className="overlay-shope-button">
              <span>Shop Now</span>
            </button>
            <button className="overlay-shope-button-right">
              <span>Customize</span>
            </button>
          </div>
        </div>
      </div>
      {/* hero section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-section-Service">
            <h1>Best Ever Service</h1>
          </div>
          <div className="site-Services">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { LandingPage } from "modules";
import {
  our_work,
  Service1,
  Service2,
  Service3,
  sm_product_1,
  sm_product_2,
  leaf_overlay,
  new_arrival_1,
  new_arrival_2,
  new_arrival_3,
  leaf_overlay2,
  sm_product_1_overlay,
  sm_product_2_overlay,
} from "assests";
import "./style/style.main.css";

export const Master = () => {
  return (
    <div>
      <LandingPage />
      {/* hero section */}
      <div className="hero-overlay-leaf">
        <img src={leaf_overlay} alt="image" />
      </div>
      <div className="container">
        <div className="hero-section">
          <div className="hero-section-Service">
            <h1>Best Ever Service</h1>
          </div>
          <div className="site-Services-logo">
            <div>
              <img src={Service1} alt="" />
            </div>
            <div>
              <img src={Service2} alt="" />
            </div>
            <div>
              <img src={Service3} alt="" />
            </div>
          </div>

          <div className="site-Services-header">
            <div>
              <h3>Customer Support</h3>{" "}
            </div>
            <div>
              <h3>
                Customize terrarium&
                <br />
                Natural aquariums
              </h3>
            </div>
            <div>
              <h3>Home Delivery</h3>
            </div>
          </div>
          <div className="site-Services-description">
            <div>
              <span>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. s`}
              </span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          <div className="smaple-prodect-item col-md-12">
            <div style={{ position: "relative" }}>
              <img className="main-image " src={sm_product_1} alt="image" />
              <img
                className="sub-image"
                src={sm_product_1_overlay}
                alt="image"
              />
              <h5 className="smaple-prodect-item-details">
                Faux watermelon peperomia plant in a gray pot
              </h5>
              <h6 className="smaple-prodect-item-offer">
                Discount up to 30% off today
              </h6>
            </div>
            <div style={{ position: "relative" }}>
              <img className="main-image-2 " src={sm_product_2} alt="image" />
              <img
                className="sub-image-2 "
                src={sm_product_2_overlay}
                alt="image"
              />
              <h5 className="smaple-prodect_2-item-details">
                Faux watermelon peperomia plant in a gray pot
              </h5>
              <h6 className="smaple-prodect-item-offer">
                Discount up to 30% off today
              </h6>
            </div>
            <div style={{ position: "relative" }}>
              <img className="main-image-2 " src={sm_product_2} alt="image" />
              <img
                className="sub-image-2 "
                src={sm_product_2_overlay}
                alt="image"
              />
              <h5 className="smaple-prodect_2-item-details">
                Faux watermelon peperomia plant in a gray pot
              </h5>
              <h6 className="smaple-prodect-item-offer">
                Discount up to 30% off today
              </h6>
            </div>
          </div>
          <div className="new-arrivals ">
            <h1>New Arrivals</h1>
            <div className="new-arrivals-item d-flex mt-4">
              <div>
                <img src={new_arrival_1} alt="image" />
                <div>
                  <h3 className="text-center">Hoya Carnosa</h3>
                </div>
                <div className="text-center">
                  <h6>
                    <del className="pe-2 text-danger">
                      <span style={{ color: "black" }}>₹1000</span>
                    </del>
                    ₹800
                  </h6>
                </div>
              </div>
              <div>
                <img src={new_arrival_2} alt="image" />
                <div>
                  <h3 className="text-center">Regrow Spring Onions in Water</h3>
                </div>
                <div className="text-center">
                  <h6>₹300</h6>
                </div>
              </div>
              <div>
                <img src={new_arrival_3} alt="image" />
                <div>
                  <h3 className="text-center">Hoya Carnosa</h3>
                </div>
                <div className="text-center">
                  <h6>₹1500</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-section-our_work">
            <img src={our_work} alt="image" />
            <div className="hero-section-our_work-description">
              <h1>
                Our <span style={{ color: "#246e4b" }}> Works</span>
              </h1>
              <div className="our_work-description">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  facilisis eu turpis vitae ullamcorper. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Aliquam consequat
                  volutpat semper. Pellentesque nunc est, euismod sed dui sed,
                  finibus dictum purus. Curabitur euismod rhoncus sapien,
                  consequat tempor
                </span>
              </div>
              <div className="mt-3">
                <button>
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

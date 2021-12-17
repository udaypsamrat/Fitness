import React from "react";
import Footer from "../../Containers/Footer";
import "./style.css";

function Franchise() {
  return (
    <div>
      <div className="franchise">
        <h1>Strength Of The fitness gym Brand</h1>
        <p>
          The fitness gym is the most recognized name in fitness & the largest
          co-ed gym chain in the world. We’ve got 50 years of history behind us
          and a very bright future ahead of us. No other gym concept can rival
          the global brand strength of The fitness gym.
        </p>
        <div className="franchise-map">
          <div className="india">
            <img
              src={require("../../assets/india-map.jpg").default}
              alt="india map"
            />

            <h2>25 States</h2>
          </div>
          <div className="city">
            <img
              src={require("../../assets/city.jpg").default}
              alt="india map"
            />

            <h2>75 City</h2>
          </div>
          <div className="globe">
            <img
              src={require("../../assets/globe-map.jpg").default}
              alt="globe map"
            />
            <h2>8 Countries</h2>
          </div>
        </div>
        <div className="franchise-info">
          <div className="million">
            <h6>Over</h6>
            <h3>3 Million</h3>
            <samp>Members World Wide</samp>
          </div>
          <div className="brand-95">
            <h6>Over</h6>
            <h3>95%</h3>
            <samp>Aided Brand Awarness</samp>
          </div>
          <div className="brand-69">
            <h6>Over</h6>
            <h3>69%</h3>
            <samp>UnAided Brand Awarness</samp>
          </div>
          <div className="Billion-1">
            <h6>Over</h6>
            <h3>1 Billion</h3>
            <samp>Annual PR Impressions</samp>
          </div>
          <div className="Celebrities">
            <h6>Unparalleled</h6>
            <h3>Celebrities</h3>
            <samp>Community</samp>
          </div>
          <div className="Largest">
            <h6>Worlds</h6>
            <h3>Largest</h3>
            <samp>Online Fitness Community</samp>
          </div>
          <div className="Largest-fb">
            <h6>Worlds</h6>
            <h3>Largest</h3>
            <samp>Fitness Community Facebook</samp>
          </div>
          <div className="Million-2">
            <h6>A Consumer Website With Over</h6>
            <h3>2.5 Million</h3>
            <samp>Annual PR Impressions</samp>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Franchise;

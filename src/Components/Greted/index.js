import React from "react";
import Footer from "../../Containers/Footer";
import "./style.css";

function Started() {
  return (
    <div className="great">
      <div className="fit">
        <div className="fit-left">
          <h4>-:- Be a fit -:-</h4>
          <p>
            Make this your year. Come and try our 5000 ft gym, one of our boxing
            sessions or high intensity studio classes. There is something for
            everyone. So come and try us and get your Free Day Pass below.{" "}
          </p>

          <button>7-Day free trial now!</button>
        </div>
        <div className="fit-right">
          <img
            src={require("../../assets/muscular-bodybuilder.jpg").default}
            alt="img"
          />
        </div>
      </div>

      <h2>Member Reviews</h2>
      <div className="navbar-reviews">
        <div className="reviews-left">
          <p>
            Amazing gym, especially for lifting boxing and <br /> MMA at a great
            price. Owners are top and <br />
            always helpful!
          </p>
          <samp>— G Sattu</samp>
        </div>
        <div className="reviews-main">
          <p>
            10/10 equipment, great staff and atmosphere. <br />
            By far the best gym I’ve been to!
            <br />
            100% recommended
          </p>
          <samp>— Laddu F</samp>
        </div>
        <div className="reviews-right">
          <p>
            Love this place, huge spacious gym with plenty <br /> of brand new
            high tech equipment available.
            <br /> Well ventilated too.
          </p>
          <samp>— L Molu </samp>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Started;

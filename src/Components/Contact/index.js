import React from "react";
import "./style.css";
import Footer from "../../Containers/Footer";

function Contact() {
  return (
    <div className="contact">
      <h1 style={{ color: "green" }}>-:-Contact us-:-</h1>
      <div className="time-contact">
        <div className="time-left">
          <ul>
            <h5 style={{ color: "green", fontSize: "25px", fontWeight: "400" }}>
              Time
            </h5>
            <li>Monday–Friday 6am–11pm</li>
            <li>Saturday 7am–10pm</li>
            <li>Sunday 9am–9pm</li>

            <br />
            <li>+91-0000000000</li>
            <li className="email">info@thefitness.in</li>
          </ul>
        </div>
        <div className="time-right">
          The fitness gym has been leading the fitness movement and redefining
          strength since 1965 when Joe opened the original, The fitness gym in
          Vanarasi, Banaras . Long before the modern-day health club existed,
          the original, The fitness gym featured three simple ingredients: The
          best equipment, a passion for fitness and an unparalleled dedication
          to results. It was an instant hit.
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;

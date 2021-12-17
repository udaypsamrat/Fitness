import React from "react";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <h5> The fitness</h5>
        <ul className="links">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
        <h5>info@thefitness.in</h5>
      </div>

      <div className="rights">
        {" "}
        <samp>&copy;{new Date().getFullYear()} all rights reserved. !</samp>
      </div>
    </div>
  );
}

export default Footer;

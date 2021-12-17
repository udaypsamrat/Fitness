import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import { IoIosFitness } from "react-icons/io";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => setShowLinks(!showLinks);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <IoIosFitness />
        <Link to="/">
          <h3>The fitness</h3>
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/" onClick={handleClick}>
            Get Started
          </Link>
          <Link to="/membership" onClick={handleClick}>
            Membership
          </Link>
          <Link to="/programs" onClick={handleClick}>
            Programs
          </Link>
          <Link to="/franchise" onClick={handleClick}>
            Franchise
          </Link>
          <Link to="/contact-us" onClick={handleClick}>
            Contact Us
          </Link>
        </ul>
        <button onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

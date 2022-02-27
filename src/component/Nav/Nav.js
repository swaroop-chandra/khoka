import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav_container">
      <div className="nav_menue">
        <Link to="/home">
          <img
            src={window.location.origin + "/images/menu.svg"}
            alt="profile"
            className="profile_image1"
          />
        </Link>
      </div>
      <div className="nav_logo">
        <img
          src={window.location.origin + "/images/khoka.svg"}
          alt="profile"
          className="profile_image1"
        />
      </div>
    </div>
  );
}

export default Nav;

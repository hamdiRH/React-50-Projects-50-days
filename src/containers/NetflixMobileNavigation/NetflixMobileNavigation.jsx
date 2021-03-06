import React, { useState } from "react";
import { Link } from "react-router-dom";
const NetflixMobileNavigation = () => {
  const [toggle, settoggle] = useState(true);
  return (
    <div className="netflix-mobile-navigation">
      <button className="nav-btn open-btn" onClick={() => settoggle(false)}>
        <i className="fas fa-bars"></i>
      </button>

      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
        alt="Logo"
        className="logo"
      />

      <p className="text">Mobile Navigation</p>

      <div className={toggle ? "nav nav-black" : "nav nav-black visible"}>
        <div className={toggle ? "nav nav-red" : "nav nav-red visible"}>
          <div className={toggle ? "nav nav-white" : "nav nav-white visible"}>
            <button
              className="nav-btn close-btn"
              onClick={() => settoggle(true)}
            >
              <i className="fas fa-times"></i>
            </button>

            <img
              src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
              alt="Logo"
              className="logo"
            />

            <ul className="list">
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Life at Netflix</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Netflix culture memo</a>
                  </li>
                  <li>
                    <a href="#">Work life balance</a>
                  </li>
                  <li>
                    <a href="#">Inclusion & diversity</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="back">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
      </Link>
    </div>
  );
};

export default NetflixMobileNavigation;

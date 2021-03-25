import React, { useState } from "react";
import { Link } from "react-router-dom";
const SplitLandingPage = () => {
  const [classList, setclassList] = useState("container");
  const left = () => setclassList("container hover-left");
  const right = () => setclassList("container hover-right");
  return (
    <div className="split-landing-page">
      <div className={classList}>
        <div className="split left" onMouseLeave={left} onMouseEnter={left}>
          <h1>Playstation 5</h1>
          <Link to="/" className="btn">
            Buy Now
          </Link>
        </div>
        <div className="split right" onMouseLeave={right} onMouseEnter={right}>
          <h1>XBox Series X</h1>
          <Link to="/" className="btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplitLandingPage;

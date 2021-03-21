import React, { useState } from "react";
import { Link } from "react-router-dom";
const SplitLandingPage = () => {
  const [classList, setclassList] = useState("container");
  const left = () => setclassList("container hover-left");
  const right = () => setclassList("container hover-right");
  // const left = document.querySelector('.left')
  // const right = document.querySelector('.right')
  // const container = document.querySelector('.container')

  // left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
  // left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

  // right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
  // right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
  return (
    <div className="split-landing-page">
      <div class={classList}>
        <div class="split left" onMouseLeave={left} onMouseEnter={left}>
          <h1>Playstation 5</h1>
          <Link to="/" class="btn">
            Buy Now
          </Link>
        </div>
        <div class="split right" onMouseLeave={right} onMouseEnter={right}>
          <h1>XBox Series X</h1>
          <Link to="/" class="btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplitLandingPage;

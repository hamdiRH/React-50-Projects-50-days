import React, { useState } from "react";

const BackgroundSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const bg = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  ];
  const handleRightBtn = () => {
    setActiveSlide(Math.abs((activeSlide + 1) % bg.length));
    // if (activeSlide > 4) setActiveSlide(0);
  };
  const handleLefttBtn = () => {
    activeSlide === 0
      ? setActiveSlide(bg.length - 1)
      : setActiveSlide(Math.abs((activeSlide - 1) % bg.length));
  };
  return (
    <div
      className="background-slider"
      style={{
        backgroundImage: `url(${bg[activeSlide]})`,
      }}
    >
      <div className="slider-container">
        {bg.map((el, i) => (
          <div
            className={activeSlide === i ? "slide active" : "slide"}
            key={i}
            style={{
              backgroundImage: `url(${el})`,
            }}
          ></div>
        ))}


        <button className="arrow left-arrow" id="left" onClick={handleLefttBtn}>
          <i className="fas fa-arrow-left"></i>
        </button>

        <button
          className="arrow right-arrow"
          id="right"
          onClick={handleRightBtn}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;

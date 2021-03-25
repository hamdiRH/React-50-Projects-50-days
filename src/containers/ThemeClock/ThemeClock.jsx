import React from "react";

const ThemeClock = () => {
  return (
    <div className="theme-clock">
      <button className="toggle">Dark mode</button>

      <div className="clock-container">
        <div className="clock">
          <div className="needle hour"></div>
          <div className="needle minute"></div>
          <div className="needle second"></div>
          <div className="center-point"></div>
        </div>

        <div className="time"></div>
        <div className="date"></div>
      </div>
    </div>
  );
};

export default ThemeClock;

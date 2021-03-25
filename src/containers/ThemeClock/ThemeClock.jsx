import React, { useState, useEffect } from "react";

const ThemeClock = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [hourElTransform, sethourElTransform] = useState();
  const [minuteElTransform, setminuteElTransform] = useState();
  const [secondElTransform, setsecondElTransform] = useState();
  const [timeEl, settimeEl] = useState();
  const [dateEl, setdateEl] = useState();
  const handleToggle = (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      e.target.innerHTML = "Dark mode";
    } else {
      html.classList.add("dark");
      e.target.innerHTML = "Light mode";
    }
  };
  const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    sethourElTransform(
      `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    );
    setminuteElTransform(
      `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    );
    setsecondElTransform(
      `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    );

    settimeEl(
      `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    );
    setdateEl(
      `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    );
  };

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="theme-clock">
      <button className="toggle" onClick={handleToggle}>
        Dark mode
      </button>

      <div className="clock-container">
        <div className="clock">
          <div
            className="needle hour"
            style={{ transform: hourElTransform }}
          ></div>
          <div
            className="needle minute"
            style={{ transform: minuteElTransform }}
          ></div>
          <div
            className="needle second"
            style={{ transform: secondElTransform }}
          ></div>
          <div className="center-point"></div>
        </div>

        <div className="time">{timeEl}</div>
        <div
          className="date"
          dangerouslySetInnerHTML={{ __html: dateEl }}
        ></div>
      </div>
    </div>
  );
};

export default ThemeClock;

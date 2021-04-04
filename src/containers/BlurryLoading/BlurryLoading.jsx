import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
const BlurryLoading = () => {
  const [load, setload] = useState(0);

  useEffect(() => {
    if (load < 99) {
      const interval = setInterval(() => {
        setload(load + 1);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [load]);
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  return (
    <div className="blurry-loading">
      <section
        className="bg"
        style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}
      ></section>
      <div
        className="loading-text"
        style={{ opacity: scale(load, 0, 100, 1, 0) }}
      >
        {load}%
      </div>
      <Link to="/">
        <button className="back">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
      </Link>
    </div>
  );
};

export default BlurryLoading;

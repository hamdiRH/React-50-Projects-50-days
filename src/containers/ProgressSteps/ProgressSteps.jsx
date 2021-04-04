import React, { useState } from "react";
import { Link } from "react-router-dom";
const ProgressSteps = () => {
  const [classList, setclassList] = useState(1);
  return (
    <div className="progress-steps">
      <div className="container">
        <div className="progress-container">
          <div
            className="progress"
            id="progress"
            style={{ width: ((classList - 1) / 3) * 100 + "%" }}
          ></div>
          <div className={classList >= 1 ? "circle active" : "circle"}>1</div>
          <div className={classList >= 2 ? "circle active" : "circle"}>2</div>
          <div className={classList >= 3 ? "circle active" : "circle"}>3</div>
          <div className={classList >= 4 ? "circle active" : "circle"}>4</div>
        </div>

        <button
          className="btn"
          id="prev"
          disabled={classList === 1}
          onClick={() => {
            setclassList(classList - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn"
          id="next"
          onClick={() => {
            setclassList(classList + 1);
          }}
          disabled={classList === 4}
        >
          Next
        </button>
      </div>
      <Link to="/">
        <button className="back">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
      </Link>
    </div>
  );
};

export default ProgressSteps;

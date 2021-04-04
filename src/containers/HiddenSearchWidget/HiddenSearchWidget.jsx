import React, { useState } from "react";
import { Link } from "react-router-dom";
const HiddenSearchWidget = () => {
  const [active, setactive] = useState(false);
  return (
    <div className="hidden-search-widget">
      <div className={`search ${active && "active"}`}>
        <input
          type="text"
          className="input"
          placeholder="Search..."
          autoFocus
        />
        <button className="btn" onClick={() => setactive(!active)}>
          <i
            className="fas fa-search"
            style={{ color: "#333", marginLeft: "-10px" }}
          />
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

export default HiddenSearchWidget;

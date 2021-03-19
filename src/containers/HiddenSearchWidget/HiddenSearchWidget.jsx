import React, { useState } from "react";
// const search = document.querySelector('.search')
// const btn = document.querySelector('.btn')
// const input = document.querySelector('.input')

// btn.addEventListener('click', () => {
//     search.classList.toggle('active')
//     input.focus()
// })
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
    </div>
  );
};

export default HiddenSearchWidget;

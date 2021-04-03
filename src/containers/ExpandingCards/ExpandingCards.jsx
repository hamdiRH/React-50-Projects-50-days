import { useState } from "react";
import { Link } from "react-router-dom";
const ExpandingCards = () => {
  const [classList, setclassList] = useState(1);
  return (
    <div className="expanding-card">
      <div className="container">
        <div
          className={classList === 1 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={() => setclassList(1)}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className={classList === 2 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={() => setclassList(2)}
        >
          <h3>Wild Forest</h3>
        </div>
        <div
          className={classList === 3 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
          }}
          onClick={() => setclassList(3)}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div
          className={classList === 4 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
          }}
          onClick={() => setclassList(4)}
        >
          <h3>City on Winter</h3>
        </div>
        <div
          className={classList === 5 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={() => setclassList(5)}
        >
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
      <Link to="/">
        <button className="back">
          <i className="fas fa-arrow-circle-left" />
        </button>
      </Link>
    </div>
  );
};

export default ExpandingCards;

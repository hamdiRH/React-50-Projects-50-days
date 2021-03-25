import React, { useState, useEffect, useRef } from "react";

const IncrementingCounter = () => {
  const [counter1, setcounter1] = useState(1);
  const [counter2, setcounter2] = useState(1);
  const [counter3, setcounter3] = useState(1);
  const refCounter1 = useRef();
  const refCounter2 = useRef();
  const refCounter3 = useRef();
  useEffect(() => {
    const increment1 = counter1 / 200;
    const increment2 = counter2 / 200;
    const increment3 = counter3 / 200;

    if (counter1 < refCounter1.current.getAttribute("data-target"))
      setcounter1(Math.ceil(counter1 + increment1));
    if (counter1 < refCounter2.current.getAttribute("data-target"))
      setcounter2(Math.ceil(counter2 + increment2));
    if (counter1 < refCounter3.current.getAttribute("data-target"))
      setcounter3(Math.ceil(counter3 + increment3));
  }, [counter1, counter2, counter3]);

  return (
    <div className="incrementing-counter">
      <div className="counter-container">
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter" data-target="12000" ref={refCounter1}>
          {counter1}
        </div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-container">
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter" data-target="5000" ref={refCounter2}>
          {counter2}
        </div>
        <span>YouTube Subscribers</span>
      </div>

      <div className="counter-container">
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter" data-target="7500" ref={refCounter3}>
          {counter3}
        </div>
        <span>Facebook Fans</span>
      </div>
    </div>
  );
};

export default IncrementingCounter;

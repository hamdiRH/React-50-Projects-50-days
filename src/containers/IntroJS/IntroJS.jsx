import React, { useState } from "react";
import { Steps, Hints } from "intro.js-react";
import "intro.js/introjs.css";

const IntroJS = () => {
  const [intro, setintro] = useState({
    stepsEnabled: true,
    initialStep: 0,
    steps: [
      {
        element: ".hello",
        intro: "Hello step",
      },
      {
        element: ".world",
        intro: "World step",
      },
    ],
    hintsEnabled: true,
    hints: [
      {
        element: ".hello",
        hint: "Hello hint",
        hintPosition: "middle-right",
      },
    ],
  });

  const onExit = () => {
    setintro({ ...intro, stepsEnabled: false });
  };

  const toggleSteps = () => {
    setintro({ ...intro, stepsEnabled: !intro.stepsEnabled });
  };

  const addStep = () => {
    const newStep = {
      element: ".alive",
      intro: "Alive step",
    };
    setintro({ ...intro, steps: [...intro.steps, newStep] });
  };

  const toggleHints = () => {
    setintro({ ...intro, hintsEnabled: !intro.hintsEnabled });
  };

  const addHint = () => {
    const newHint = {
      element: ".alive",
      hint: "Alive hint",
      hintPosition: "middle-right",
    };
    setintro({ ...intro, hints: [...intro.hints, newHint] });
  };
  const { stepsEnabled, steps, initialStep, hintsEnabled, hints } = intro;

  return (
    <div className="intro">
      <div>
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={onExit}
          
        />
        <Hints enabled={hintsEnabled} hints={hints} />

        <div className="controls">
          <div>
            <button onClick={toggleSteps}>Toggle Steps</button>
            <button onClick={addStep}>Add Step</button>
          </div>
          <div>
            <button onClick={toggleHints}>Toggle Hints</button>
            <button onClick={addHint}>Add Hint</button>
          </div>
        </div>

        <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
        <h1 className="alive">It's alive!</h1>
      </div>
    </div>
  );
};

export default IntroJS;

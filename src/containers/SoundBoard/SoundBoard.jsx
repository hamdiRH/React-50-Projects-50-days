import React from "react";
import { Link } from "react-router-dom";
import Applause from "./sounds/applause.mp3";
import Boo from "./sounds/boo.mp3";
import Gasp from "./sounds/gasp.mp3";
import Tada from "./sounds/tada.mp3";
import Victory from "./sounds/victory.mp3";
import Wrong from "./sounds/wrong.mp3";

const SoundBoard = () => {
  const applause = new Audio(Applause);
  const boo = new Audio(Boo);
  const gasp = new Audio(Gasp);
  const tada = new Audio(Tada);
  const victory = new Audio(Victory);
  const wrong = new Audio(Wrong);

  const stop = () => {
    console.log(applause);
    applause.pause();
    boo.pause();
    gasp.pause();
    tada.pause();
    victory.pause();
    wrong.pause();

    applause.currentTime = 0;
    boo.currentTime = 0;
    gasp.currentTime = 0;
    tada.currentTime = 0;
    victory.currentTime = 0;
    wrong.currentTime = 0;
  };

  return (
    <div className="sound-board">
      <div id="buttons">
        <button
          className="btn"
          onClick={() => {
            stop();
            applause.play();
          }}
        >
          applause
        </button>
        <button
          className="btn"
          onClick={() => {
            stop();
            boo.play();
          }}
        >
          boo
        </button>
        <button
          className="btn"
          onClick={() => {
            stop();
            gasp.play();
          }}
        >
          gasp
        </button>
        <button
          className="btn"
          onClick={() => {
            stop();
            tada.play();
          }}
        >
          tada
        </button>
        <button
          className="btn"
          onClick={() => {
            stop();
            victory.play();
          }}
        >
          victory
        </button>
        <button
          className="btn"
          onClick={() => {
            stop();
            wrong.play();
          }}
        >
          wrong
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

export default SoundBoard;

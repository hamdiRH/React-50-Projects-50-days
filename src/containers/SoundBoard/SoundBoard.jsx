const SoundBoard = () => {
  const applause = new Audio("../../assets/sounds/applause.mp3");
  const boo = new Audio("../../assets/sounds/boo.mp3");
  const gasp = new Audio("../../assets/sounds/gasp.mp3");
  const tada = new Audio("../../assets/sounds/tada.mp3");
  const victory = new Audio("../../assets/sounds/victory.mp3");
  const wrong = new Audio("../../assets/sounds/wrong.mp3");
  const stop = () => {
    applause.stop();
    boo.stop();
    gasp.stop();
    tada.stop();
    victory.stop();
    wrong.stop();
  };
  return (
    <div className="sound-board">
      <audio id="applause" src="../assets/sounds/applause.mp3"></audio>
      <audio id="boo" src="../assets/sounds/boo.mp3"></audio>
      <audio id="gasp" src="../assets/sounds/gasp.mp3"></audio>
      <audio id="tada" src="../assets/sounds/tada.mp3"></audio>
      <audio id="victory" src="../assets/sounds/victory.mp3"></audio>
      <audio id="wrong" src="../assets/sounds/wrong.mp3"></audio>

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
    </div>
  );
};

export default SoundBoard;

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const VerifyAccountUi = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();

  const handleKeyDown = (e, i) => {
    if (e.key >= 0 && e.key <= 9) {
      //   eval(`input${i}`).current.value = "";
      if (i === 6) {
        alert(
          input1.current.value +
            input2.current.value +
            input3.current.value +
            input4.current.value +
            input5.current.value +
            e.key
        );
      } else setTimeout(() => eval(`input${i + 1}`).current.focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => eval(`input${i - 1}`).current.focus(), 10);
    }
  };
  useEffect(() => {
    input1.current.focus();
  }, [input1]);
  return (
    <>
      <div className="verify-account-ui">
        <div className="container">
          <h1 className="title">Verify Your Account</h1>
          <p className="para">
            We emailed you the six digit code to cool_guy@email.com <br /> Enter
            the code below to confirm your email address.
          </p>
          <div className="code-container">
            <input
              type="number"
              className="code"
              placeholder="0"
              min="0"
              max="9"
              onKeyDown={(e) => handleKeyDown(e, 1)}
              required
              ref={input1}
            />
            <input
              type="number"
              className="code"
              placeholder="0"
              min="0"
              max="9"
              onKeyDown={(e) => handleKeyDown(e, 2)}
              required
              ref={input2}
            />
            <input
              type="number"
              className="code"
              placeholder="0"
              min="0"
              max="9"
              onKeyDown={(e) => handleKeyDown(e, 3)}
              required
              ref={input3}
            />
            <input
              type="number"
              className="code"
              placeholder="0"
              min="0"
              max="9"
              onKeyDown={(e) => handleKeyDown(e, 4)}
              required
              ref={input4}
            />
            <input
              type="number"
              className="code"
              placeholder="0"
              min="0"
              max="9"
              onKeyDown={(e) => handleKeyDown(e, 5)}
              required
              ref={input5}
            />
            <input
              type="number"
              className="code"
              placeholder="0"
              min="0"
              max="9"
              onKeyDown={(e) => handleKeyDown(e, 6)}
              required
              ref={input6}
            />
          </div>
          <small className="info">
            This is design only. We didn't actually send you an email as we
            don't have your email, right?
          </small>
        </div>
      </div>
      <Link to="/">
        <button className="back">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
      </Link>
    </>
  );
};

export default VerifyAccountUi;

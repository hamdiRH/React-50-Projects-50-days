import React from "react";

const FormWave = () => {
  return (
    <div className="form-wave">
      <div className="container">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input type="text" required />
            {/* <label>Email</label> */}
            <label>
              {[..."Email"].map((el, i) => (
                <span style={{ transitionDelay: i * 50 + "ms" }}>{el}</span>
              ))}
            </label>
          </div>

          <div className="form-control">
            <input type="password" required />
            <label>
              {[..."Password"].map((el, i) => (
                <span style={{ transitionDelay: i * 50 + "ms" }}>{el}</span>
              ))}
            </label>
          </div>

          <button className="btn" style={{ color: "black" }}>
            Login
          </button>

          <p className="text">
            Don't have an account? <a href="#">Register</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormWave;

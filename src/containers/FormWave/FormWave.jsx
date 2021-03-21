import React from "react";

const FormWave = () => {
  return (
    <div className="form-wave">
      <div class="container">
        <h1>Please Login</h1>
        <form>
          <div class="form-control">
            <input type="text" required />
            {/* <label>Email</label> */}
            <label>
              {[..."Email"].map((el, i) => (
                <span style={{ transitionDelay: i * 50 + "ms" }}>{el}</span>
              ))}
            </label>
          </div>

          <div class="form-control">
            <input type="password" required />
            <label>
              {[..."Password"].map((el, i) => (
                <span style={{ transitionDelay: i * 50 + "ms" }}>{el}</span>
              ))}
            </label>
          </div>

          <button class="btn" style={{ color: "black" }}>
            Login
          </button>

          <p class="text">
            Don't have an account? <a href="#">Register</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormWave;

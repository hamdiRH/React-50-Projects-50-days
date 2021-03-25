import React from "react";
import htmlCssJs from "../assets/html-css-js.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-a">
          <div>
            <h2>About The Course</h2>
            <p>
              This is a pure, practical and fun
              <strong> project based </strong> course. Every project is
              different and while we use do use some repeated practices, they
              are each meant to teach you something new. It is recommended that
              you do one project per day, however you can do them as you please.
              By the end, you will have a stronger foundation in JS as well as
              HTML/CSS and should be able to move on and build your own
              projects..
            </p>
            <p></p>
          </div>

          <a
            className="repo"
            href="https://github.com/hamdiRH/50-Projects-In-50-Days---HTML-CSS-JS"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-4x" aria-hidden="true"></i>
            <p>Github Repo For All Projects</p>
          </a>
        </div>

        <div className="about-b">
          <h2>What You Should Know</h2>
          <p>
            A very basic understanding of HTML, CSS, JavaScript &amp; React is
            all that you need to know before taking this course. Things like
            common HTML5 tags, basic styling, JS variables, conditionals, etc
          </p>
          <div>
            <img src={htmlCssJs} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

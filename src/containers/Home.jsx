import React from "react";
import { data as projects } from "../helpers/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="projects" id="projects">
      {projects.map((el, i) => (
        <div key={i}>
          <span class="day">Day {String(i + 1).padStart(2, "0")}</span>
          <img
            src={require(`./assets/images/${el.img}`).default}
            alt="expanding-cards"
          />
          <div class="content">
            <h4>{el.name}</h4>
            <Link
              href="./Expanding Cards/"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
              onClick={(event) => {
                event.preventDefault();
                window.open(this.makeHref("route"));
              }}
            >
              Live Demo
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;

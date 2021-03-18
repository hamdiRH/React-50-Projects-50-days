import React from "react";
import { data as projects } from "../../helpers/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="projects" id="projects">
      {projects.map((el, i) => (
        <div key={i}>
          <span class="day">Day {String(i + 1).padStart(2, "0")}</span>
          <img
            src={require(`../../assets/images/${el.img}`).default}
            alt="expanding-cards"
          />
          <div class="content">
            <h4>{el.name}</h4>
            <Link to={el.link} class="btn btn-primary">
              Live Demo
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;

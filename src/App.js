// import { Fragment } from "react";
// import { Link } from "react-router-dom";
// import htmlCssJs from "./assets/html-css-js.png";
// import { data as projects } from "./helpers/data";
// function App() {
//   return (
//     <Fragment>
//       <nav className="main-nav">
//         <div className="container">
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div className="logo-circles">
//               <div></div>
//               <div></div>
//               <div></div>
//               <span></span>
//             </div>
//             <h1 className="logo">
//               Hamdi<span>RH</span>
//             </h1>
//           </div>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="#projects">Projects</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <header class="showcase bg-primary">
//         <div class="container">
//           <h2>50 Projects in 50 Days</h2>
//           <h1>
//             50 unique mini-projects to sharpen your HTML, CSS, JavaScript &amp;
//             React skills
//           </h1>
//         </div>
//       </header>

//       <section class="projects" id="projects">
//         {projects.map((el, i) => (
//           <div key={i}>
//             <span class="day">Day {String(i + 1).padStart(2, "0")}</span>
//             <img
//               src={require(`./assets/images/${el.img}`).default}
//               alt="expanding-cards"
//             />
//             <div class="content">
//               <h4>{el.name}</h4>
//               <Link
//                 href="./Expanding Cards/"
//                 target="_blank"
//                 rel="noreferrer"
//                 class="btn btn-primary"
//                 onClick={(event) => {
//                   event.preventDefault();
//                   window.open(this.makeHref("route"));
//                 }}
//               >
//                 Live Demo
//               </Link>
//             </div>
//           </div>
//         ))}
//       </section>
//       <section class="about" id="about">
//         <div class="container">
//           <div class="about-a">
//             <div>
//               <h2>About The Course</h2>
//               <p>
//                 This is a pure, practical and fun
//                 <strong> project based </strong> course. Every project is
//                 different and while we use do use some repeated practices, they
//                 are each meant to teach you something new. It is recommended
//                 that you do one project per day, however you can do them as you
//                 please. By the end, you will have a stronger foundation in JS as
//                 well as HTML/CSS and should be able to move on and build your
//                 own projects..
//               </p>
//               <p></p>
//             </div>

//             <a
//               class="repo"
//               href="https://github.com/hamdiRH/50-Projects-In-50-Days---HTML-CSS-JS"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <i class="fab fa-github fa-4x" aria-hidden="true"></i>
//               <p>Github Repo For All Projects</p>
//             </a>
//           </div>

//           <div class="about-b">
//             <h2>What You Should Know</h2>
//             <p>
//               A very basic understanding of HTML, CSS, JavaScript &amp; React is
//               all that you need to know before taking this course. Things like
//               common HTML5 tags, basic styling, JS variables, conditionals, etc
//             </p>
//             <div>
//               <img src={htmlCssJs} alt="" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer class="main-footer bg-primary">
//         <p>Copyright © 2021 All Rights Reserved by Hamdi Rahal</p>
//       </footer>
//     </Fragment>
//   );
// }

// export default App;
import React from 'react'
import Layout from './Layout/Layout'

const App = () => {
  return (
    <Layout>
      <h1>Hello</h1>
    </Layout>
  )
}

export default App

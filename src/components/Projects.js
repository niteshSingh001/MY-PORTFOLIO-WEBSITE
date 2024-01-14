import React from "react";
import IMG1 from "../assets/img/portfolio1.png";
import IMG2 from "../assets/img/portfolio2.png";
import IMG3 from "../assets/img/portfolio3.png";
import IMG4 from "../assets/img/portfolio4.png";

//DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "YelpCamp",
    github: "https://github.com/niteshSingh001/YelpCamp",
    demo: "https://yelp-camp-jade.vercel.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "CRUD App",
    github: "https://github.com/niteshSingh001/CRUD-APP",
    demo: "https://crud-mern-app-two.vercel.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Tic Tac Toe Game",
    github: "https://github.com/niteshSingh001/TIC-TAC-TOE-GAME",
    demo: "https://tic-tac-toe-game-beryl.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather App",
    github: "https://github.com/niteshSingh001/WEATHER-WEB-APP",
    demo: "https://niteshsingh001.github.io/",
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <h1 className="project_header">Projects</h1>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="project_btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="project_btn" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

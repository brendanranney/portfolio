import React from "react";


const projects = [
  {
    id: 1,
    title: "HTML Portfolio",
    link: "https://brendanranney.github.io/HTML-Portfolio/",
  },
  {
    id: 2,
    title: "Tindog Project",
    link: "https://brendanranney.github.io/TinDog-Project/",
  },

  {
    id: 3,
    title: "Personal Site Project",
    link: "https://brendanranney.github.io/Personal-Website/",
  },

  {
    id: 4,
    title: "Dice Game Project",
    link: "https://brendanranney.github.io/Dice-Game/",
  },

  {
    id: 5,
    title: "Joke API Project",
    link: "https://brendanranney.github.io/JokeAPI/",
  },

  {
  id: 6,
    title: "Keeper App Project",
    link: "https://brendanranney.github.io/keeper-app/",
  },
  
  {
    id: 7,
      title: "Pricing Table Project",
      link: "https://brendanranney.github.io/pricing-table-project/",
    },

    {
    id: 8,
    title: "Web Design Agency Project",
    link: "https://brendanranney.github.io/web-design-agency-project/",
  },

  {
    id: 9,
    title: "CSS Flag Project",
    link: "https://brendanranney.github.io/css-flag-project/",
  },


];

function Portfolio() {
  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <div className="portfolio-card" key={project.id}>
          <iframe
            src={project.link}
            title={project.title}
            className="portfolio-preview"
            loading="lazy"
          ></iframe>
          <h3>{project.title}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Page
          </a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

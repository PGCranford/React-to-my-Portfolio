/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Project from "../Project";
import styles from "./style.module.css";

const projects = [
  {
    name: "Rent A Ride ",
    link1: "https://github.com/PGCranford/Rent-A-Ride-",
    link2: "https://sleepy-cove-56868.herokuapp.com/",
    imagePath: require("../../assets/projects/0.jpg"),
  },
  {
    name: "Brews and Clues",
    link1: "https://github.com/PGCranford/Brew-s-Clues-",
    link2: "https://pgcranford.github.io/Brew-s-Clues-/ ",
    imagePath: require("../../assets/projects/1.jpg"),
  },
  {
    name: "Hyieia Fitness ",
    link1: "https://github.com/PGCranford/Hygieia-Fitness",
    link2: "https://hygieia-fitness-p3g6.herokuapp.com/ ",
    imagePath: require("../../assets/projects/P3.jpg"),
  },
  {
    name: "Horiseon",
    link1: "https://github.com/PGCranford/Horiseon-Code-Refactor-",
    link2: "https://pgcranford.github.io/MOD1-/",
    imagePath: require("../../assets/projects/3.jpg"),
  },
  {
    name: "Work Day Scheduler",
    link1: "https://github.com/PGCranford/Work-Day-Scheduler-",
    link2: "https://pgcranford.github.io/Work-Day-Scheduler-/",
    imagePath: require("../../assets/projects/4.jpg"),
  },
  {
    name: "Note Taker",
    link1: "https://github.com/PGCranford/Take-a-note-Leave-a-note-",
    link2: "https://dry-cove-43814.herokuapp.com/ ",
    imagePath: require("../../assets/projects/2.jpg"),
  },
];

const Portfolio = () => {
  return (
    <div className={styles["project-display"]}>
      {projects.map(({ name, link1, link2, imagePath }) => (
        <Project
          imagePath={imagePath}
          name={name}
          link1={link1}
          link2={link2}
          key={name}
        />
      ))}
    </div>
  );
};

export default Portfolio;

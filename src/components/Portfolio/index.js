import React from "react";
import Project from "../Project";
import styles from "./style.module.css";

const projects = [
    {
        name: "Rent A Ride ",
        links: "https://github.com/PGCranford/Rent-A-Ride- https://sleepy-cove-56868.herokuapp.com/",
        imagePath: require("../../assets/projects/0.jpg")
    },
    {
        name: "Brews and Clues",
        links: "https://github.com/PGCranford/Brew-s-Clues- https://pgcranford.github.io/Brew-s-Clues-/ ",
        imagePath: require("../../assets/projects/1.jpg")
    },
    {
        name: "Note Taker",
        links: "https://github.com/PGCranford/Take-a-note-Leave-a-note https://dry-cove-43814.herokuapp.com/ ",
        imagePath: require("../../assets/projects/2.jpg")
    },
    {
        name: "Horiseon",
        links: "https://github.com/PGCranford/Horiseon-Code-Refactor https://pgcranford.github.io/MOD1-/",
        imagePath: require("../../assets/projects/3.jpg")
    },
    {
        name: "Work Day Scheduler",
        links: "https://github.com/PGCranford/Work-Day-Scheduler- https://pgcranford.github.io/Work-Day-Scheduler-/",
        imagePath: require("../../assets/projects/4.jpg")
    },
    {
        name: "Run Buddy",
        links: "https://github.com/PGCranford/RB  https://lernantino.github.io/run-buddy/",
        imagePath: require("../../assets/projects/5.jpg")
    }
];

const Portfolio = () => {
    return (
        <div className={styles["project-display"]} >
            {
                projects.map(({ name, links, imagePath }) => (
                    <Project
                        name={name}
                        links={links}
                        imagePath={imagePath}
                        key={name}
                    />
                ))
            }
        </div >
    );
};

export default Portfolio;

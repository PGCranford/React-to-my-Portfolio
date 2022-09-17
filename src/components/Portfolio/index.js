import React, { useState } from "react";
import Project from "../Project";
import styles from "./style.module.css";

const projects = [
    {
        name: "Rent A Ride ",
        links: "https://github.com/PGCranford/Rent-A-Ride-",
        imagePath: require("../../assets/projects/0.jpg")
    },
    {
        name: "Brews and Clues",
        links: "",
        imagePath: require("../../assets/projects/1.jpg")
    },
    {
        name: "Note Taker",
        links: "",
        imagePath: require("../../assets/projects/2 .jpg")
    }
    // {
    //     name: "",
    //     links: "",
    //     imagePath: require("../../assets/projects/")
    // },
    // {
    //     name: "",
    //     links: "",
    //     imagePath: require("../../assets/images/")
    // },
    // {
    //     name: "",
    //     links: "",
    //     imagePath: require("../../assets/images/")
    // }
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

import React from "react";
import styles from "./style.module.css";

const Project = ({ name, link1, link2, imagePath }) => {

    return (
        <div className={styles["project-image"]}>
            <img src={imagePath} alt={name} />

            <div className={styles["overlay"]}>
                <h3>{name}</h3>
                <a href={link1}>{link1}</a>
                <a href={link2}></a>
            </div>
        </div >
    );
};

export default Project;




import React from "react";
import styles from "./style.module.css";

const Project = ({ name, link1, link2, imagePath }) => {

    return (
        <div className={styles["project-image"]}>
            <img src={imagePath} alt={name} />

            <div className={styles["overlay"]}>
                <h3>{name}</h3>
                <p> {link1}</p>
                <p>{link2}</p>
            </div>
        </div >
    );
};

export default Project;




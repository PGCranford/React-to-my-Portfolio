import React from "react";
import styles from "./style.module.css";

const Project = ({ name, links, imagePath }) => {

    return (
        <div className={styles["project-image"]}>
            <img src={imagePath} alt={name} />

            <div className={styles["overlay"]}>
                <h3>{name}</h3>
                <p> {links} </p>
            </div>
        </div >
    );
};

export default Project;




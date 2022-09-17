import React from "react";
import styles from "./style.module.css";

const Project = ({ name, description, imagePath }) => {

    return (

        <div class={styles['project-image']}>
            <img src={imagePath} alt={description} />

            <div>
                <h3>{name}</h3>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default Project;




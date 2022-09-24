import React from "react";
import styles from "./style.module.css";



function Resume() {

    return (
        <section className={styles["resume"]}>
            <a className={styles["resume-link"]} href="https://docs.google.com/document/d/149r0ZQtq28xd6zszK5IMEyq1MGJ2kAdNmVzKNMYLhAY/edit?usp=sharing" >Resume</a>
            <div className={styles["resume-list"]}>
                <div>Language Proficiencies</div>
                <div>Node.Js |  Express | JavaScript |  jQuery | React | GIT | GitHub </div>
                <div>| MongoDB | MySQL | Handlebars | HTML | CSS | Bootstrap | Media Queries</div>
                <div>| API’s | Microsoft | Heroku | RESTful API’s | Mongoose | JSON | Excel</div>
            </div>
        </section>
    )
};

export default Resume;

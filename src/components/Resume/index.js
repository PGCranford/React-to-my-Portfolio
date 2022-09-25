import React from "react";
import styles from "./style.module.css";



function Resume() {

    return (

        <section class="hero is-fullheight" className={styles["resume-image"]}>
            <div class="hero-body">
                <div class="has-text-centered" >
                    <a className={styles["resume-link"]} href="https://docs.google.com/document/d/149r0ZQtq28xd6zszK5IMEyq1MGJ2kAdNmVzKNMYLhAY/edit?usp=sharing" >Resume</a>
                </div>
                <div className={styles["resume-header"]} >Language Proficiencies</div>
                <div >
                    <div className={styles["resume-skills"]}>
                        Node.Js |  Express | JavaScript |  jQuery | React | GIT | GitHub
                        | MongoDB | MySQL | Handlebars | HTML | CSS | Bootstrap
                        | Media Queries| API’s | Microsoft | Heroku | RESTful API’s | Mongoose | JSON | Excel| </div>
                </div>
            </div>

        </section >
    )

};

export default Resume;

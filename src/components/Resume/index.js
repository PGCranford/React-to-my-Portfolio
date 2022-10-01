import React from "react";
import styles from "./style.module.css";



function Resume() {

    return (

        <section class="hero is-fullheight" className={styles["resume-image"]}>
            <div class="hero-body">
                <div class="has-text-centered" >
                    <a class=" is-size-3-mobile" className={styles["resume-link"]} href="https://docs.google.com/document/d/149r0ZQtq28xd6zszK5IMEyq1MGJ2kAdNmVzKNMYLhAY/edit?usp=sharing" > 🖱️Resume🖱️</a>
                </div>
                <div className={styles["resume-header"]} >
                    <p class=" is-size-5-mobile">Language Proficiencies</p></div>
                <div >
                    <div className={styles["resume-skills"]}>
                        <p class=" is-size-6-mobile" >
                            Node.Js |  Express | JavaScript |  jQuery | React | GIT | GitHub
                            | MongoDB | MySQL | Handlebars | HTML | CSS | Bootstrap
                            | Media Queries| API’s | Microsoft | Heroku | RESTful API’s | Mongoose | JSON | Excel|</p> </div>
                </div>
            </div>

        </section >
    )

};

export default Resume;

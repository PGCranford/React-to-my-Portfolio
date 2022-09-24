import React from "react";
import styles from "./style.module.css";
import coding from "../../assets/images/coding.jpg"


function Resume() {

    return (

        <section className={styles["resume"]}>
            <div className={styles["resume-page"]}>
                <img src={coding} className={styles["cover-image"]} style={{ width: "100%", height: "50%" }} alt="cover" />
                <div className={styles["resume-section"]}>
                    <a className={styles["resume-link"]} href="https://docs.google.com/document/d/149r0ZQtq28xd6zszK5IMEyq1MGJ2kAdNmVzKNMYLhAY/edit?usp=sharing" >Resume</a>
                    <div className={styles["resume-title"]}>Language Proficiencies</div>
                    <div className={styles["resume-list"]}>
                        <div>Node.Js |  Express | JavaScript |  jQuery | React | GIT | GitHub
                            | MongoDB | MySQL | Handlebars | HTML | CSS | Bootstrap
                            | Media Queries| API’s | Microsoft | Heroku | RESTful API’s | Mongoose | JSON | Excel</div>
                    </div>
                </div>
            </div>
        </section >
    )
};

export default Resume;

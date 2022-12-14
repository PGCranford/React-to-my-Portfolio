import React from "react";
import styles from "./style.module.css";
import avatar from "../../assets/images/chimp.jpg"

function About() {
    return (


        <section class="hero is-fullheight " className={styles["image"]}>
            <div class="hero-body " >
                <div class="container" className={styles["about"]}>
                    <img className={styles["avatar"]} src={avatar} alt="avatar"></img>

                    <p class="title has-text-white has-text-right is-size-7-mobile" >Patrick Cranford - Web Developer</p>
                </div>

                <p class="subtitle has-text-white has-text-centered is-size-7-mobile ">
                    Bringing my newly acquired full stack web develop certificate and years of retail and leadership experience to build an accessible and functional experience for any type of web application. My biggest interests are in database building and manipulation, SQL and GraphQl most notably.   Graduating from the Trilogy program through UNC-Charlotte with both front and back-end knowledge with a passion for back-end, I am excited to start my career in web development. Having spent time in group projects working on API’s and building MySQL databases to creating the CSS and HTML to display the information, making a functional and easy to use application drives me. Managing the team’s Github and creating Power Point presentations helped me become part of the team in unique way. I look forward to using the skills I have gathered throughout my life and more recently, Coding, to be a part of a fast-paced, driven and detailed web development team.
                </p>

            </div>

        </section >

    )
}

export default About; 
import React from "react";
import styles from "./style.module.css";

import beam from '../../assets/images/beam.jpg'

function About() {
    return (

        <section class="container card">
            <img class="has-ration" src={beam} alt="beam" />
            <div class="card-content is-overlay"  >
                <div className={styles["bio"]}>
                    <h1 class=" is-size-1-mobile has-text-centered" >Patrick Cranford - Web Developer</h1>
                    <div  >
                        <p class="is-size-1-mobile has-text-centered">
                            Bringing my newly acquired full stack web develop certificate and years of retail and leadership experience to build an accessible and functional experience for any type of web application. Graduating from the Trilogy program through UNC-Charlotte with both front and back-end knowledge with a passion for back-end, I am excited to start my career in web development. Having spent time in group projects working on API’s and building MySQL databases to creating the CSS and HTML to display the information, making a functional and easy to use application drives me. Managing the team’s Github and creating Power Point presentations helped me become part of the team in unique way. I look forward to using the skills I have gathered throughout my life and more recently, Coding, to be a part of a fast-paced, driven and detailed web development team.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About; 
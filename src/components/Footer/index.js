import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./style.module.css";





function Footer() {
    return (
        <footer className="flex-row footerMain">
            <h3 className={styles["footer-display"]}>
                <a href="https://github.com/PGCranford"> <SocialIcon network="github" style={{ height: 25, width: 25 }} alt="Git Hub Logo" /></a>
                <a href="https://www.linkedin.com/in/patrick-cranford-320b70216?trk=people-guest_people_search-card"> < SocialIcon network="linkedin" style={{ height: 25, width: 25 }} alt="LinkedIn Logo" /></a>
                <a href="https://stackoverflow.com/users/18899130/pgcranford"><SocialIcon network="stackoverflow" style={{ height: 25, width: 25 }} alt="stack overflow logo" /></a>
            </h3>
        </footer >
    )
}

export default Footer;

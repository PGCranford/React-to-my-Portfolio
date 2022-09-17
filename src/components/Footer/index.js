import React from "react";
import gitHub from "../../assets/images/gitHub.png";
import linkedIn from "../../assets/images/Linked.png";




function Footer() {
    return (
        <footer className="flex-row footerMain">
            <h3 id="footer">
                <a href="https://github.com/PGCranford"> <img src={gitHub} alt="Git Hub Logo"></img></a>
                <a href="https://www.linkedin.com/in/patrick-cranford-320b70216?trk=people-guest_people_search-card"> <img src={linkedIn} alt="LinkedIn Logo"></img></a>
            </h3>
        </footer>
    )
}

export default Footer;

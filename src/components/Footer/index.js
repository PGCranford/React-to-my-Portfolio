import React from "react";
import { SocialIcon } from "react-social-icons";





function Footer() {
    return (
        <footer className="flex-row footerMain">
            <h3 id="footer">
                <a href="https://github.com/PGCranford"> <SocialIcon network="github" style={{ height: 25, width: 25 }} alt="Git Hub Logo" /></a>
                <a href="https://www.linkedin.com/in/patrick-cranford-320b70216?trk=people-guest_people_search-card"> < SocialIcon network="linkedin" style={{ height: 25, width: 25 }} alt="LinkedIn Logo" /></a>
            </h3>
        </footer >
    )
}

export default Footer;

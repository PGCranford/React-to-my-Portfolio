import React from "react";
import gitHub from "../../assets/images/gitHub.jpg";
import linkedIn from "../../assets/images/Thumb.jpg";




function Footer() {
    return (
        <footer className="flex-row footerMain">
            <h3 id="footer">
                <a href="https://github.com/PGCranford"> <img src={gitHub} alt="Git Hub Logo"></img></a>
                <a href="https://www.linkedin.com/feed/"> <img src={linkedIn} alt="LinkedIn Logo"></img></a>
            </h3>
        </footer>
    )
}

export default Footer;

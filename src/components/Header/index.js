import React, { useState } from "react";
import Navigation from "../Navigation";

function Header() {
    const [contactSelected, setContactSelected] = useState(false);
    const [aboutSelected, setAboutSelected] = useState(false);
    const [portfolioSelected, setPortfolioSelected] = useState(false);
    const [resumeSelected, setResumeSelected] = useState(false)

    return (
        <header className="flex-row headerMain">
            <h2 id="header">
                <a id="link" href="/">
                    <span role="img" aria-label="banana">🍌 </span>Patrick Cranford
                </a>
                <Navigation
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                    aboutSelected={aboutSelected}
                    setAboutSelected={setAboutSelected}
                    portfolioSelected={portfolioSelected}
                    setPortfolioSelected={setPortfolioSelected}
                    resumeSelected={resumeSelected}
                    setResumeSelected={setResumeSelected}
                ></Navigation>
            </h2>
        </header >

    );
}

export default Header
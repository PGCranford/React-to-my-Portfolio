import React from "react";



function Navigation(props) {

    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected

    } = props
    return (
        <nav>
            <ul className="nav-row">
                <li className={`mx-2 ${contactSelected && portfolioSelected && resumeSelected && 'navActive'}`}>
                    <a id="about" href="#about" onClick={() => setAboutSelected(true)}>
                        About me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && aboutSelected && resumeSelected && 'navActive'}`}>
                    <a id="portfolio" href="#portfolio" onClick={() => setPortfolioSelected(true)}>
                        Portfolio
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && aboutSelected && portfolioSelected && 'navActive'}`}>
                    <a id="resume" href="#resume" onClick={() => setResumeSelected(true)}>
                        Resume
                    </a>
                </li>
                <li className={`mx-2 ${aboutSelected && portfolioSelected && resumeSelected && 'navActive'}`}>
                    <a id="contact" href="#contact" onClick={() => setContactSelected(true)}>
                        Contact
                    </a>
                </li>

            </ul>
        </nav >
    );
}

export default Navigation;
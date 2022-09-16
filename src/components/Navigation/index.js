import React from "react";



function Navigation(props) {
    const {
        contactSelected,
        setContactSelected
    } = props
    return (

        <nav>
            <ul className="flex-row">
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <a id="about" href="#about" onClick={() => setContactSelected(false)}>
                        About me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <a id="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
                        Portfolio
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <a id="resume" href="#resume" onClick={() => setContactSelected(false)}>
                        Resume
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <a id="contact" href="#contact" onClick={() => setContactSelected(true)}>
                        Contact
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;
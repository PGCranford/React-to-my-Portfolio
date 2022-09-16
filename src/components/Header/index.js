import React from "react";
import Navigation from "../Navigation";

function Header() {
    return (
        <header className="flex-row headerMain">
            <h2 id="header">
                <a id="link" href="/">
                    <span role="img" aria-label="banana">🍌 </span>Patrick Cranford
                </a>
            </h2>
            <Navigation></Navigation>


        </header >
    );
}

export default Header
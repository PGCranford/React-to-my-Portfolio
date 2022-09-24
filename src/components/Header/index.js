import React from "react";
import Navigation from "../Navigation";
import styles from "./style.module.css";


function Header() {


    return (
        <header className={styles["headerMain"]}>

            <h2 id="header" className={styles["headerRow"]} >
                <a id="link" href="/">
                    <span role="img" aria-label="banana">🍌 </span>Patrick Cranford
                </a>
                <Navigation
                ></Navigation>
            </h2>
        </header >

    );
}

export default Header
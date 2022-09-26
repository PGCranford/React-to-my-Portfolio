import React from "react";
import Navigation from "../Navigation";
import styles from "./style.module.css";


function Header() {


    return (
        <header className={styles["header"]}>
            <h2 >
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
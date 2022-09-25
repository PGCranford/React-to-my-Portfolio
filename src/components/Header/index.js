import React from "react";
import { Link } from 'react-router-dom';
import Navigation from "../Navigation";
import styles from "./style.module.css";


function Header() {


    return (
        <header className={styles["header"]}>
            <h2 >
                <ul className={styles["header"]}>
                    <Link
                        to={`/App`}
                    >
                        <li className={styles["links"]} > Patrick Cranford
                        </li>
                    </Link>
                    <Navigation
                    ></Navigation>
                </ul>
            </h2>
        </header >

    );
}

export default Header
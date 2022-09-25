import React from "react";
import { Link } from 'react-router-dom';
import styles from "./style.module.css";



function Navigation() {
    return (
        <nav>
            <ul className={styles["nav-row"]}>
                <Link
                    to={`/About`}
                >
                    <li className={styles["links"]} > About Me
                    </li>
                </Link>
                <Link
                    to={'/Portfolio'}
                >
                    <li className={styles["links"]}> Portfolio
                    </li>
                </Link>
                <Link
                    to={'/Resume'}
                >
                    <li className={styles["links"]}>Resume
                    </li>
                </Link>
                <Link
                    to={'/Contact'}
                >
                    <li className={styles["links"]}> Contact
                    </li>
                </Link>
            </ul>
        </nav >
    );
}

export default Navigation;
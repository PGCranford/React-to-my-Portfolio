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
                    <li className="links"> Portfolio
                    </li>
                </Link>
                <Link
                    to={'/Resume'}
                >
                    <li className="links">Resume
                    </li>
                </Link>
                <Link
                    to={'/Contact'}
                >
                    <li className="links"> Contact
                    </li>
                </Link>
            </ul>
        </nav >
    );
}

export default Navigation;
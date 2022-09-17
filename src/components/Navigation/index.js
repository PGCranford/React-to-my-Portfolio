import React from "react";
import About from "../About";
import { Link } from 'react-router-dom';



function Navigation() {
    return (
        <nav>
            <ul className="nav-row">
                <Link
                    to={`/About`}
                >

                    <li className="links">About Me
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
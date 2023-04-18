import React from "react";
import Navigation from "../Navigation";
import styles from "./style.module.css";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles["header"]}>
      {/* <Link to={`/Home`}>
        <li className={styles["links"]}>🍌Patrick Cranford </li>
      </Link> */}
      <h2>
        <a id="link" href="../../App.js">
          <span role="img" aria-label="banana">
            🍌{" "}
          </span>
          Patrick Cranford
        </a>
        <Navigation></Navigation>
      </h2>
    </header>
  );
}

export default Header;

import React from "react";
import Navigation from "../Navigation";
import styles from "./style.module.css";

function Header() {
  return (
    <header className={styles["header"]}>
      <h2>
        <p>
          <span role="img" aria-label="banana">
            🍌{" "}
          </span>
          Patrick Cranford
        </p>
        <Navigation></Navigation>
      </h2>
    </header>
  );
}

export default Header;

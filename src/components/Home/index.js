import React from "react";
import coverImage from '../../assets/images/curtains.jpg'
import styles from "./style.module.css";



function Home() {

    return (


        <img src={coverImage} className={styles["cover-image"]} style={{ width: "100%", height: "80%" }} alt="cover" />


    );
}

export default Home;
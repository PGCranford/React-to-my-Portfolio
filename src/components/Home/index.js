import React from "react";
import coverImage from '../../assets/images/curtains.jpg'

function Home() {

    return (

        <img src={coverImage} className="coverImage" style={{ width: "100%" }} alt="cover" />

    );
}

export default Home;
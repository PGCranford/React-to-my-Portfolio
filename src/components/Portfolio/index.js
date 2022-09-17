import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from "../Project";

const projects = [
    {
        name: "",
        description: "",
        imagePath: require("../../assets/images/")
    },
    {
        name: "",
        description: "",
        imagePath: require("../../assets/images/")
    },
    {
        name: "",
        description: "",
        imagePath: require("../../assets/images/")
    },
    {
        name: "",
        description: "",
        imagePath: require("../../assets/images/")
    },
    {
        name: "",
        description: "",
        imagePath: require("../../assets/images/")
    },
    {
        name: "",
        description: "",
        imagePath: require("../../assets/images/")
    }
];

const Portfolio = () => {
    return (
        <>
            {projects.map(({ name, description, imagePath }) => (
                <Project
                    name={name}
                    description={description}
                    imagePath={imagePath}
                    key={name}
                />
            ))}
        </>
    );
};

export default Portfolio;

import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photos from "../../assets/projects";

const Project = ({ category }) => {
    const [currentPhoto, setCurrentPhoto] = useState()

    const [photos] = useState([
        {
            name: 'Horiseon',
            description: 'First time correcting code that was not working as expected'
        },
        {
            name: 'Rent A Ride',
            description: 'Second Group Project using Node and Express, Handlebars, MYSQL and Sequelize'
        },
        {
            name: 'Run Buddy',
            description: 
        }



    ])
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="flex-row">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/projects/${i}.jpg`).default}
                        alt={image.name}
                        className="thumbnail mx-1"

                        key={image.name}


                    />
                ))};

            </div>
        </div>
    );
};

export default Project;




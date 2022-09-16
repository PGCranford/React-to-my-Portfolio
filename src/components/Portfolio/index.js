import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Hover from '../Hover'

const Portfolio = ({ category }) => {
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Horiseon',
            category: 'Project',
            description: 'First time correcting code that was not working as expected'
        },
        {
            name: 'Rent A Ride',
            category: 'Project',
            description: 'Second Group Project using Node and Express, Handlebars, MYSQL and Sequelize'
        },
        {
            name: 'Run Buddy',
            category: 'Project',
            description: 'Beginning of my coding journey, basic HTML and CSS'
        }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const [isHovering, setIsHovering] = useState(false);

    // const handleMouseOver = () => {
    //     setIsHovering(true);
    // };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const hoverOver = (image, i) => {
        setCurrentPhoto({ ...image, index: i });

    }

    return (
        <div className="flex-row">
            {isHovering && (
                <Hover onClose={handleMouseOut} currentPhoto={currentPhoto} />
            )}
            <div>

                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/projects/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="thumbnail mx-1"
                        isHovering={() => hoverOver(image, i)}
                        key={image.name}


                    />
                ))};
            </div>

        </div >
    );
};

export default Portfolio;

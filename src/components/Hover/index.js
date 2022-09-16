import React, { useState } from "react";

const Hover = ({ currentPhoto }) => {
    const { name, description, index } = currentPhoto

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="hoverScreen">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

            </div>

            {isHovering && <h3 className="hoverTitle">{name}{description}</h3>}
        </div>
    )


};

export default Hover
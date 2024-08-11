import React, { useState, useEffect } from 'react'
import './Card.css'

const Card = (props) => {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        function handleMouseMove(e) {
            if (!isHovering) {
                setXAxis((window.innerWidth / 2 - e.pageX) / 100);
                setYAxis((window.innerHeight / 2 - e.pageY) / 45);
            }
        }
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovering]);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `rotateY(${isHovering ? 0 : xAxis}deg) rotateX(${isHovering ? 0 : yAxis
                    }deg)`,
            }}
        >
            <div className="card-content">
                <img src={props.imgsrc} alt="This is image" />
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
            </div>
        </div>
    );
};

export default Card
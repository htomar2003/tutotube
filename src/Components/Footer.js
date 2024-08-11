import React from 'react'
import "./Footer.css"

const Footer = () => {

    const top = () => {
        window.scrollTo({
            top: 0
        });
    }

    return (
        <div className='footer'>
            <p>@2023 Tutotube, Inc.</p>
            <div className="terms">
                <a href="">Privacy Policy</a>
                <a href="">Terms of Use</a>
            </div>
            <button onClick={top}>Back to top</button>
        </div>
    )
}

export default Footer
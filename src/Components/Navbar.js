import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ isLoggedIn, user, handleLogout }) => {
    const [show, setshow] = useState();

    const showcredit = () => {
        setshow(!show);
    }
    var imgsrc;
    if (user) {
        imgsrc = user.imgsrc;
    } else {
        imgsrc = null;
    }
    return (
        <div id="navbar">
            <a href="" style={{ textDecoration: "none" }}>
                <div id="logo">
                    <img src="logo.png" alt="logo" />
                    <h1>Tutotube</h1>
                </div>
            </a>
            <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
            <label htmlFor="navbar-toggle" className="navbar-toggle-icons">
                <div className="navbar-toggle-icon"></div>
                <div className="navbar-toggle-icon"></div>
                <div className="navbar-toggle-icon"></div>
            </label>
            <label htmlFor="navbar-toggle-label" className="navbar-toggle-label">
                <li className="active">
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="contact">Contact</NavLink></li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="about">About</NavLink>
                </li>
            </label>
            <ul>
                <li className="active">
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="contact">Contact</NavLink></li>
                <li>
                    <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="about">About</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    {!isLoggedIn ? (
                        <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="signin">Signin</NavLink>
                    ) : (
                        <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" onClick={handleLogout}>LogOut</NavLink>
                    )}
                </li>
                {!user ? (
                    <li className='tryfree'>
                        <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="signup">Try Free</NavLink>
                    </li>
                ) : (
                    <li className='tryfree tryfree-logo' onClick={showcredit}>
                        <img src={imgsrc} alt="logo" className='tryfree-logo' />
                        {show && (
                            <ul className="credit-list">
                                {user.credits} Credits left
                            </ul>
                        )}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Navbar
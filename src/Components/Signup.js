import React, { useState } from 'react'
import './Signup.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { NavLink } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios'


const Signup = () => {
    const [show, setshow] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const toggle = () => {
        setshow(!show);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleGoogleSignup = async () => {
        window.location.href = "https://tutotube-backend.onrender.com/auth/google";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://tutotube-backend.onrender.com/signup', formData);
            console.log(response.data);
            if (response.data.redirectUrl) {
                window.location.href = response.data.redirectUrl;
            } else {
                window.location.href = 'https://tutotube-backend.onrender.com/error';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='signup'>
            <div className="container">
                <div className="img-text">
                    <img src="logo.png" alt="" />
                    <h1>Tutotube</h1>
                </div>
                <p>Create your Tutotube account</p>
                <button className="google-signup" onClick={handleGoogleSignup}>
                    <GoogleIcon />
                    Continue with Google
                </button>
                <p style={{ fontWeight: "100" }}>
                    or
                </p>
                <form action="" className='signup-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-input" placeholder='Email address'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="password">
                        <input
                            type={show ? 'text' : 'password'}
                            className="form-input" placeholder='Enter Password'
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
                        {
                            show ? (<VisibilityOutlinedIcon style={{ color: "white", cursor: "pointer" }} onClick={toggle} />) : (<VisibilityOffOutlinedIcon style={{ color: "white", cursor: "pointer" }} onClick={toggle} />)
                        }
                    </div>
                    <button type="submit" className='signup-submit'>
                        Continue
                    </button>
                </form>
                <p style={{ fontWeight: "300" }}>
                    Already have an account ? &nbsp;
                    <NavLink className="nav-link" aria-current="page" to="/signin">Signin</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Signup
import React, { useState, useEffect } from 'react'
import './Signup.css'
import CryptoJS from 'crypto-js';

const Signupform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const encryptedData = urlParams.get('data');
        // const encodedEncryptedData = urlParams.get('data');
        // const encryptedData = decodeURIComponent(encodedEncryptedData);
        // Decrypt the data using the secret key
        const secretKey = 'Shahil';
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setFormData(prevState => ({
            ...prevState,
            email: decryptedData.email,
            password: decryptedData.password
        }));
    }, [])
    console.log(formData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = formData.email;
        const password = formData.password;
        const name = formData.name;
        const response = await fetch("http://localhost:3001/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
        })
        if (response.redirected) {
            window.location.href = response.url; // Redirect to the provided URL
        }
    }

    return (
        <div className='signup'>
            <div className="container">
                <form action="" className='signup-form' onSubmit={handleSubmit}>
                    <h1>Create your profile</h1>
                    <h5>Please tell us a bit about yourself so that you can collaborate with others on Tutotube</h5>
                    <p>Email</p>
                    <input
                        type="text"
                        className="form-input" placeholder='Enter Name'
                        name="email"
                        value={formData.email}
                        readOnly
                    />
                    <p>What should we call you ?</p>
                    <input
                        type="text"
                        className="form-input" placeholder='Enter Name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <button type="submit" className='signup-submit'>
                        Create Profile
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signupform
import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios';

const Contact = () => {
  const [submit, setsubmit] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevdata => ({
      ...prevdata,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(formData);
      const data = response.data;
      console.log(data);
      if (response.data == "Email sent successfully") {
        setsubmit(!submit);
      } else {
        console.log("Error Occured");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='contact-div'>
      {
        submit ? (
          <h1 className='success-response'>Thanks for contacting us. We will reach up to you soon.</h1>
        ) : (
          <>
            <h1>Contact us</h1>
            <p>Tell us about yourself.</p>
            <form action="" className="contact-form" onSubmit={handleSubmit}>
              <div className="name-num">
                <input
                  type="text"
                  className="form-input" placeholder='Enter name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="form-input" placeholder='Enter phone no'
                  name="phone"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <input
                type="email"
                className="form-input" placeholder='Email address'
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                type="text"
                className="form-input" placeholder='Enter message'
                name="message"
                rows={8}
                cols={40}
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className='signup-submit'>
                Submit
              </button>
            </form>
          </>
        )
      }
    </div>
  )
}

export default Contact
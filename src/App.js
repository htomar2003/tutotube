import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
import Signin from './Components/Signin';
import Signupform from './Components/Signupform';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './Components/Signup';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://tutotube-backend.onrender.com/userdata", { withCredentials: true });
        const data = response.data;
        if (response.status === 200) {
          setIsLoggedIn(true);
          setUser(data);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [location]);

  const handleLogout = async () => {
    try {
      await axios.get("https://tutotube-backend.onrender.com/logout", { withCredentials: true });
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };
  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} user={user} />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/createprofile" element={<Signupform />} />
      </Routes>
    </div>
  );
}

export default App;

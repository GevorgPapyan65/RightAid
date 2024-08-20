import React, { useState } from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Popup from '../popup/Popup';
import logo from './bglogo1.png'; // Import the logo image

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState(null); // State to store the registered user

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleRegistrationSuccess = (username) => {
    setUser(username);
    closePopup();
  };

  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" /> {/* Use the imported image here */}
      </div>
      <nav className='nav'>
        <ul>
          <li>
            <a href='#'>About Us</a>
            <ul className='dropdown'>
              <li><a href='#'>Our Mission</a></li>
              <li><a href='#'>Our Team</a></li>
            </ul>
          </li>
          <li>
            <a href='#'>Our Service</a>
            <ul className='dropdown'>
              <li><a href='#'>Find The Lawyer</a></li>
            </ul>
          </li>

          <li>
            <a href='#'>Blog</a>
            <ul className='dropdown'>
            </ul>
          </li>

          <li>
            <a href='#'>Contact Us</a>
            <ul className='dropdown'>
              <li><a href='#'>Our Location</a></li>
              <li><a href='#'>Our Team</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className='header-right'>
        {user ? (
          <div className='welcome-message'>
            Welcome, {user}!
          </div>
        ) : (
          <button className='sign' onClick={openPopup}>
            <PersonIcon style={{ marginRight: '8px' }} />
            Registration
          </button>
        )}
        {isPopupOpen && <Popup closeForm={closePopup} onRegisterSuccess={handleRegistrationSuccess} />}
      </div>
    </div>
  );
}

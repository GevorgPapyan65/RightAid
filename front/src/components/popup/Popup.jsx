import React, { useState } from 'react';
import './popup.css';


const Popup = ({ closeForm, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    lastname: '',
    surname: '',
    organization: '',
    birthday: '',
    email: '',
    phone: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.msg || 'User registered successfully!');
        setError(null);
        setFormData({
          fullname: '',
          lastname: '',
          surname: '',
          organization: '',
          birthday: '',
          email: '',
          phone: '',
          password: ''
        });
        
        if (typeof onRegisterSuccess === 'function') {
          onRegisterSuccess(formData.fullname); // Pass the username to the parent
        }
      } else {
        setError(data.errors ? data.errors[0].msg : data.msg || 'Failed to register user');
        setSuccess(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error occurred while submitting the form.');
      setSuccess(null);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">Register</h2>
        <form onSubmit={handleSubmit} className="popup-form">
          

<label className="popup-label">
            Full Name:
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <label className="popup-label">
            First Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <label className="popup-label">
            Surname:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <label className="popup-label">
            Organization:
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <label className="popup-label">
            Birthday:
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <label className="popup-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <label className="popup-label">
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <label className="popup-label">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="popup-input"
              required
            />
          </label>
          <button type="submit" className="popup-submit-button">Register</button>
        </form>
        {error && <p className="popup-error">{error}</p>}
        {success && <p className="popup-success">{success}</p>}
        <button onClick={closeForm} className="popup-close-button">Close</button>
      </div>
    </div>
  );
};

export default Popup;















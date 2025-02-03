import React, { useState } from 'react';
import './Popup.css';

const SignupPopup = ({ onClose, onSubmit }) => {
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(signupData);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={signupData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SignupPopup;

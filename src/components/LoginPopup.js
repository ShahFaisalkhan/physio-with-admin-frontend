import React, { useState } from 'react';
import './Popup.css';

const LoginPopup = ({ onClose, onSignupLinkClick, onSubmit }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(loginData);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Not registered?{' '}
          <span className="link" onClick={onSignupLinkClick}>
            Sign up here
          </span>
        </p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;

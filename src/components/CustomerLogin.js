// src/components/CustomerLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerDashboard.css';
const CustomerLogin = ({ setCustomer }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/customers/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('result in customer login is',result)
      if (response.ok) {
        localStorage.setItem('token', result.token); // Save the token
        // setCustomer(result.name); // Set customer in state
        navigate('/customer-dashboard'); // Redirect to dashboard
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="customer-login">
      <h2>Customer Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CustomerLogin;

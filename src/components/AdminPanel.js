import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome to the admin panel. Only authenticated users can see this.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPanel;

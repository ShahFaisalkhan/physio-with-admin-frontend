// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token'); // Check if the user is authenticated

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;
// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ isLoggedIn, isAdmin, adminOnly, children }) => {
//   // If the user is not logged in, redirect to the login page
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   // If the route is admin-only and the user is not an admin, redirect to customer dashboard
//   if (adminOnly && !isAdmin) {
//     return <Navigate to="/customer-dashboard" />;
//   }

//   // Render the protected component if conditions are met
//   return children;
// };

// export default PrivateRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ adminOnly, children }) => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Ensure boolean value

  // If the user is not logged in, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the route is admin-only and the user is not an admin, redirect to customer dashboard
  if (adminOnly && !isAdmin) {
    return <Navigate to="/customer-dashboard" />;
  }

  return children; // Render the protected component
};

export default PrivateRoute;

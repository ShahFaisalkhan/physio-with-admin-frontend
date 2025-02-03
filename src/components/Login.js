// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsLoggedIn, setIsAdmin }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', result.token); // Save token
//         setIsLoggedIn(true);
//         setIsAdmin(result.isAdmin);
//         navigate(result.isAdmin ? '/admin' : '/customer-dashboard'); // Redirect based on role
//       } else {
//         setError(result.error);
//       }
//     } catch (err) {
//       setError('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// working fine code
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css'; // Add this file for styling

// const Login = ({ setIsLoggedIn, setIsAdmin }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await fetch('http://localhost:5000/api/login', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const result = await response.json();
//   //     if (response.ok) {
//   //       localStorage.setItem('token', result.token); // Save token
//   //       setIsLoggedIn(true);
//   //       setIsAdmin(result.isAdmin);
//   //       navigate(result.isAdmin ? '/admin' : '/customer-dashboard'); // Redirect based on role
//   //     } else {
//   //       setError(result.error);
//   //     }
//   //   } catch (err) {
//   //     setError('Login failed. Please try again.');
//   //   }
//   // };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
  
//   //   try {
//   //     const response = await fetch('http://localhost:5000/api/login', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(formData),
//   //     });
  
//   //     const result = await response.json();
//   //     if (response.ok) {
//   //       localStorage.setItem('token', result.token); // Save token
//   //       localStorage.setItem('isAdmin', result.isAdmin); // Save isAdmin status
//   //       setIsLoggedIn(true);
//   //       setIsAdmin(result.isAdmin);
//   //       navigate(result.isAdmin ? '/admin' : '/customer-dashboard'); // Redirect based on role
//   //     } else {
//   //       setError(result.error);
//   //     }
//   //   } catch (err) {
//   //     setError('Login failed. Please try again.');
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', result.token); // Save token
//         localStorage.setItem('isAdmin', result.isAdmin); // Save isAdmin status
//         setIsLoggedIn(true);
//         setIsAdmin(result.isAdmin);
//         navigate(result.isAdmin ? '/admin' : '/customer-dashboard');
//       } else {
//         setError(result.error);
//       }
//     } catch (err) {
//       setError('Login failed. Please try again.');
//     }
//   };
    
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <p className="signup-link">
//           Not registered? <Link to="/register">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const { login } = useContext(AuthContext);  // ✅ Ensure AuthContext is working
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (data.token) {
//         login(data.token);  // ✅ Updates AuthContext
//         navigate("/customer-dashboard");  // ✅ Redirects after login
//       } else {
//         alert("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState, useContext } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const { login } = useContext(AuthContext);  // ✅ Use login function from AuthContext
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (data.token) {
//         login(data.token, data.isAdmin);  // ✅ Pass isAdmin to context
//         if (data.isAdmin) {
//           navigate("/admin");  // ✅ Redirect admin users
//         } else {
//           navigate("/customer-dashboard");  // ✅ Redirect customers
//         }
//       } else {
//         alert("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Login</button>
//         <p className="signup-link">
//          Not registered? <Link to="/register">Sign up here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css"; // Import the new CSS file for styling

const Login = () => {
  const { login } = useContext(AuthContext);  // Use login function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        login(data.token, data.isAdmin);  // Pass isAdmin to context
        if (data.isAdmin) {
          navigate("/admin");  // Redirect admin users
        } else {
          navigate("/customer-dashboard");  // Redirect customers
        }
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-header">Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
            className="login-input"
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Not registered? <Link to="/register">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

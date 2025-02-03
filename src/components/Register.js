// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess(false);

//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setSuccess(true);
//         setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
//       } else {
//         setError(result.error);
//       }
//     } catch (err) {
//       setError('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Sign Up</h2>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">Registration successful! Redirecting to login...</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Register.css"; // Import the new CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Registration successful! Redirecting to login...</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="register-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="register-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="register-input"
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
         <p className="signup-link">
                  Already registered? <Link to="/login">Login here</Link>
                </p>
      </div>
    </div>
  );
};

export default Register;

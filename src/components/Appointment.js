// import React, { useState, useEffect } from 'react';
// import './Appointment.css';

// const Appointment = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     message: '',
//   });

//   const [slots, setSlots] = useState([]); // Holds all slots with availability

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//     // Fetch slots when a date is selected
//     if (e.target.name === 'date') {
//       fetch(`http://localhost:5000/api/slots?date=${e.target.value}`)
//         .then((res) => res.json())
//         .then((data) => setSlots(data.slots))
//         .catch((err) => console.error(err));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/appointments', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//         setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       console.error('Error submitting appointment:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <section className="appointment">
//       <h2 className="appointment-title">Book Your Appointment</h2>
//       <form className="appointment-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Your Phone"
//           required
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />
//         {slots.length > 0 && (
//           <select
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select a time slot</option>
//             {slots.map((slot) => (
//               <option key={slot.time} value={slot.time} disabled={!slot.isAvailable}>
//                 {slot.time} {!slot.isAvailable ? '(Unavailable)' : ''}
//               </option>
//             ))}
//           </select>
//         )}
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your Message (Optional)"
//         />
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </section>
//   );
// };

// export default Appointment;

//login pop and buttons working but booking appointment not working
// import React, { useState, useContext } from 'react';
// import './Appointment.css';
// import LoginPopup from './LoginPopup';
// import SignupPopup from './SignupPopup';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// const Appointment = () => {
//   const { isLoggedIn, login } = useContext(AuthContext); // Access global login function
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     message: '',
//   });

//   const [slots, setSlots] = useState([]);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [showSignupPopup, setShowSignupPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleFieldClick = () => {
//     if (!isLoggedIn) {
//       setShowLoginPopup(true); // Show login popup if not logged in
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//     if (e.target.name === 'date' && isLoggedIn) {
//       fetch(`http://localhost:5000/api/slots?date=${e.target.value}`)
//         .then((res) => res.json())
//         .then((data) => setSlots(data.slots))
//         .catch((err) => console.error(err));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLoggedIn) {
//       setShowLoginPopup(true);
//       return;
//     }
//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//     if (!token) {
//       alert('You must be logged in to book an appointment.');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5000/api/appointments', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, // Include the token in the header
//            },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//         setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
//         navigate('/customer-dashboard'); // Redirect to customer dashboard

//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       console.error('Error submitting appointment:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };
//   const handleSignupSubmit = async (signupData) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(signupData),
//       });
  
//       const result = await response.json();
  
//       if (response.ok) {
//         alert('Registration successful! Please log in.');
//         setShowSignupPopup(false); // Close the signup popup
//         setShowLoginPopup(true); // Open the login popup
//       } else {
//         alert(result.error || 'Registration failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       alert('An error occurred while registering.');
//     }
//   };
  
//   const handleLoginSubmit = async (loginData) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(loginData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         login(); // Update global auth state
//         setShowLoginPopup(false); // Close login popup
//         alert('Login successful!');
//       } else {
//         alert(result.error || 'Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred while logging in.');
//     }
//   };

//   return (
//     <section className="appointment">
//       <h2 className="appointment-title">Book Your Appointment</h2>
//       <form className="appointment-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           onClick={handleFieldClick}
//           placeholder="Your Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           onClick={handleFieldClick}
//           placeholder="Your Email"
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           onClick={handleFieldClick}
//           placeholder="Your Phone"
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           onClick={handleFieldClick}
//           required
//         />
//         {slots.length > 0 && (
//           <select
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             onClick={handleFieldClick}
//             required
//           >
//             <option value="">Select a time slot</option>
//             {slots.map((slot) => (
//               <option key={slot.time} value={slot.time} disabled={!slot.isAvailable}>
//                 {slot.time} {!slot.isAvailable ? '(Unavailable)' : ''}
//               </option>
//             ))}
//           </select>
//         )}
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           onClick={handleFieldClick}
//           placeholder="Your Message (Optional)"
//         />
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>

//       {/* Login Popup */}
//       {showLoginPopup && (
//         <LoginPopup
//           onClose={() => setShowLoginPopup(false)} // Close popup handler
//           onSignupLinkClick={() => {
//             setShowLoginPopup(false);
//             setShowSignupPopup(true); // Open signup popup
//           }}
//           onSubmit={handleLoginSubmit} // Pass the login handler
//         />
//       )}

//       {/* Signup Popup */}
//       {showSignupPopup && (
//   <SignupPopup
//     onClose={() => setShowSignupPopup(false)} // Close popup handler
//     onSubmit={handleSignupSubmit} // Pass the signup handler
//   />
// )}
//     </section>
//   );
// };

// export default Appointment;
//animation added
import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./Appointment.css";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Appointment = () => {
  const { isLoggedIn, login } = useContext(AuthContext); // Access global login function
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [slots, setSlots] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Component re-rendered! Auth state:", isLoggedIn);
  }, [isLoggedIn]);  // This should trigger without refresh
  const handleFieldClick = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true); // Show login popup if not logged in
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "date" && isLoggedIn) {
      fetch(`http://localhost:5000/api/slots?date=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => setSlots(data.slots))
        .catch((err) => console.error(err));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isLoggedIn) {
      setShowLoginPopup(true);
      return;
    }
  
    // Debug: Log token before sending request
    console.log("Token before sending appointment request:", localStorage.getItem("token"));
  
    const token = localStorage.getItem("token");
  
    if (!token) {
      alert("You must be logged in to book an appointment.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log("Appointment API Response:", result); // Debugging
  
      if (response.ok) {
        alert(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        });
        navigate("/customer-dashboard");
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  
  const handleSignupSubmit = async (signupData) => {
        try {
          const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData),
          });
      
          const result = await response.json();
      
          if (response.ok) {
            alert('Registration successful! Please log in.');
            setShowSignupPopup(false); // Close the signup popup
            setShowLoginPopup(true); // Open the login popup
          } else {
            alert(result.error || 'Registration failed. Please try again.');
          }
        } catch (error) {
          console.error('Registration error:', error);
          alert('An error occurred while registering.');
        }
      };
      
      // const handleLoginSubmit = async (loginData) => {
      //   try {
      //     const response = await fetch('http://localhost:5000/api/login', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify(loginData),
      //     });
    
      //     const result = await response.json();
    
      //     if (response.ok) {
      //       login(); // Update global auth state
      //       setShowLoginPopup(false); // Close login popup
      //       alert('Login successful!');
      //     } else {
      //       alert(result.error || 'Login failed. Please check your credentials.');
      //     }
      //   } catch (error) {
      //     console.error('Login error:', error);
      //     alert('An error occurred while logging in.');
      //   }
      // };
      // const handleLoginSubmit = async (loginData) => {
      //   try {
      //     const response = await fetch("http://localhost:5000/api/login", {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify(loginData),
      //     });
      
      //     const result = await response.json();
      //     console.log("Login API Response:", result); // Debugging: Log API response
      
      //     if (response.ok) {
      //       if (!result.token) {
      //         console.error("No token received from backend");
      //         alert("Login failed: No token received.");
      //         return;
      //       }
      
      //       // Store token in localStorage
      //       localStorage.setItem("token", result.token);
      //       console.log("Token stored in localStorage:", localStorage.getItem("token")); // Immediate check
      
      //       // 🔥 Add multiple checks with different delays
      //       setTimeout(() => {
      //         console.log("Token after 500ms:", localStorage.getItem("token"));
      //       }, 500);
      
      //       setTimeout(() => {
      //         console.log("Token after 2s:", localStorage.getItem("token"));
      //       }, 2000);
      
      //       setTimeout(() => {
      //         console.log("Token after 5s:", localStorage.getItem("token"));
      //       }, 5000);
            
      //       login(); // Update global auth state
      //       setShowLoginPopup(false);
      //       alert("Login successful!");
      //     } else {
      //       alert(result.error || "Login failed. Please check your credentials.");
      //     }
      //   } catch (error) {
      //     console.error("Login error:", error);
      //     alert("An error occurred while logging in.");
      //   }
      // };
      const handleLoginSubmit = async (loginData) => {
        try {
          const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
          });
      
          const result = await response.json();
          console.log("Login API Response:", result);
      
          if (response.ok) {
            if (!result.token) {
              console.error("No token received from backend");
              alert("Login failed: No token received.");
              return;
            }
      
            // Store token in localStorage
            localStorage.setItem("token", result.token);
            console.log("Token stored in localStorage:", localStorage.getItem("token"));
      
            login(result.token); // ✅ Pass token to login()
            setShowLoginPopup(false);
            alert("Login successful!");
          } else {
            alert(result.error || "Login failed. Please check your credentials.");
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("An error occurred while logging in.");
        }
      };
                                       
  return (
    <motion.section
      className="appointment"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="appointment-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Book Your Appointment
      </motion.h2>

      <motion.form
        className="appointment-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {["name", "email", "phone", "date"].map((field, index) => (
          <motion.input
            key={field}
            type={field === "date" ? "date" : field === "phone" ? "tel" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            onClick={handleFieldClick}
            placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
            required
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          />
        ))}

        {slots.length > 0 && (
          <motion.select
            name="time"
            value={formData.time}
            onChange={handleChange}
            onClick={handleFieldClick}
            required
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <option value="">Select a time slot</option>
            {slots.map((slot) => (
              <option key={slot.time} value={slot.time} disabled={!slot.isAvailable}>
                {slot.time} {!slot.isAvailable ? "(Unavailable)" : ""}
              </option>
            ))}
          </motion.select>
        )}

        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onClick={handleFieldClick}
          placeholder="Your Message (Optional)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        <motion.button
          type="submit"
          className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </motion.form>

      {/* Login Popup */}
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)} // Close popup handler
          onSignupLinkClick={() => {
            setShowLoginPopup(false);
            setShowSignupPopup(true); // Open signup popup
          }}
          onSubmit={handleLoginSubmit} // Pass the login handler
        />
      )}

      {/* Signup Popup */}
      {showSignupPopup && (
        <SignupPopup
          onClose={() => setShowSignupPopup(false)} // Close popup handler
          onSubmit={handleSignupSubmit} // Pass the signup handler
        />
      )}
    </motion.section>
  );
};

export default Appointment;

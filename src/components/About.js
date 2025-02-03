// src/components/About.js
// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <section className="about">
//       <div className="about-content">
//         <h2 className="about-title">About Us</h2>
//         <p className="about-text">
//         Welcome to Syed Ghulam Hussain Physiotherapy, where we help people move better, feel better, and live pain-free.

// Our clinic is led by Syed Ghulam Hussain, a skilled physiotherapist with 25 years of experience in the Pakistan Army. He has treated countless patients, helping them recover from injuries, surgeries, and chronic pain.        </p>
//          <p className="about-text">
// With his deep knowledge and caring approach, he provides treatments that are effective and personalized for each patient.

// Whether you are dealing with pain, recovering from an injury, or just want to improve your movement, we are here to help. We use proven physiotherapy techniques to make sure you get the best care possible.

// At Syed Ghulam Hussain Physiotherapy, your health and well-being are our top priorities. Let us help you get back to doing what you love!         </p> 
//       </div>
//       <div className="about-image">
//         <img src="/images/360_F_81970673_QthJqnNNzceOiYeyQFZPkrA1rOBB4TZK.jpg" alt="About Us" />
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Welcome to <strong>Syed Ghulam Hussain Physiotherapy</strong>, where we help people move better, feel better, and live pain-free.
        </p>
        <p className="about-text">
          Our clinic is led by <strong>Syed Ghulam Hussain</strong>, a skilled physiotherapist with 25 years of experience in the Pakistan Army. He has treated countless patients, helping them recover from injuries, surgeries, and chronic pain.
        </p>
        <p className="about-text">
          With his deep knowledge and caring approach, he provides treatments that are effective and personalized for each patient.
        </p>
        <p className="about-text">
          Whether you are dealing with pain, recovering from an injury, or just want to improve your movement, we are here to help. We use proven physiotherapy techniques to make sure you get the best care possible.
        </p>
        <p className="about-text">
          At <strong>Syed Ghulam Hussain Physiotherapy</strong>, your health and well-being are our top priorities. Let us help you get back to doing what you love!
        </p>
      </motion.div>

      <motion.div 
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/images/360_F_81970673_QthJqnNNzceOiYeyQFZPkrA1rOBB4TZK.jpg" alt="About Us" />
      </motion.div>
    </section>
  );
};

export default About;

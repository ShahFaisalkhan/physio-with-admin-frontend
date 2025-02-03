// src/components/Testimonials.js
// import React from 'react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: 'Ali',
//       feedback: 'Thanks to Syed Ghulam Hussain Physio, I can finally run again without pain. The personalized care was exceptional!',
//       photo: 'images/testomonial 1.jpg',
//     },
//     {
//       id: 2,
//       name: 'Abass',
//       feedback: 'The staff was compassionate and professional. My back pain is gone, and I feel like myself again!',
//       photo: 'images/testomonial 2.jpg',
//     },
//     {
//       id: 3,
//       name: 'Muhammad',
//       feedback: 'Post-surgery rehabilitation was a breeze with Syed Ghulam Hussain Pyhsio. Highly recommend their services!',
//       photo: 'images/testomonial 3.jpg',
//     },
//   ];

//   return (
//     <section className="testimonials">
//       <h2 className="testimonials-title">What Our Clients Say</h2>
//       <div className="testimonials-grid">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="testimonial-card">
//             <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
//             <h3 className="testimonial-name">{testimonial.name}</h3>
//             <p className="testimonial-feedback">"{testimonial.feedback}"</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Ali",
    feedback: "Thanks to Syed Ghulam Hussain Physio, I can finally run again without pain. The personalized care was exceptional!",
    photo: "images/testomonial 1.jpg",
  },
  {
    id: 2,
    name: "Abass",
    feedback: "The staff was compassionate and professional. My back pain is gone, and I feel like myself again!",
    photo: "images/testomonial 2.jpg",
  },
  {
    id: 3,
    name: "Muhammad",
    feedback: "Post-surgery rehabilitation was a breeze with Syed Ghulam Hussain Physio. Highly recommend their services!",
    photo: "images/testomonial 3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <motion.h2
        className="testimonials-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

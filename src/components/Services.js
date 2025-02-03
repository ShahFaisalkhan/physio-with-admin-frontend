// src/components/Services.js
// import React from 'react';
// import './Services.css';

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       title: 'Sports Injury Recovery',
//       description: 'Helping athletes recover and return to peak performance.',
//       icon: '🏋️‍♂️',
//     },
//     {
//       id: 2,
//       title: 'Chronic Pain Management',
//       description: 'Personalized plans to reduce chronic pain and improve mobility.',
//       icon: '💊',
//     },
//     {
//       id: 3,
//       title: 'Post-Surgical Rehabilitation',
//       description: 'Rebuild strength and regain independence after surgery.',
//       icon: '🩺',
//     },
//     {
//       id: 4,
//       title: 'Workplace Ergonomics',
//       description: 'Optimize your workspace to prevent injury and discomfort.',
//       icon: '💻',
//     },
//   ];

//   return (
//     <section className="services">
//       <h2 className="services-title">Our Services</h2>
//       <div className="services-grid">
//         {services.map((service) => (
//           <div key={service.id} className="service-card">
//             <div className="service-icon">{service.icon}</div>
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-description">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
// import React from "react";
// import "./Services.css";

// const services = [

//   {
//     title: "Stroke Rehabilitation",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/Physiotherapy-Hospital-For-Stroke-Patients.jpg",
//   },
//   {
//     title: "Bell's Palsey Therapy",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/bell palsey.jpg",
//   },
//   {
//     title: "Back Pain Therapy",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/back pain therapy.jpg",
//   },
//   {
//     title: "Neck Pain Therapy",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/neck pain therapy.jpg",
//   },
//   {
//     title: "Knee Pain Therapy",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/knee pain therapy.jpg",
//   },
//   {
//     title: "Muscle Pain Therapy",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/muscle pain therapy.jpg",
//   },
//   {
//     title: "Disk Slip Treatment",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/disk slip therapy.jpg",
//   },
//   {
//     title: "Spinal Pain Treatment",
//     description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
//     image: "images/spinal pain.jpg",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="services">
//       <div className="services-wrapper">
//         <h2 className="services-title">Our Services</h2>
//         <div className="services-container">
//           {services.map((service, index) => (
//             <div className="service-card" key={index}>
//               <img src={service.image} alt={service.title} className="service-image" />
//               <div className="service-content">
//                 <h3 className={`service-title ${index === 1 ? "highlight" : ""}`}>{service.title}</h3>
//                 {/* <p>{service.description}</p>
//                 // <button className="read-more">Book Appointment Now</button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Stroke Rehabilitation",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/Physiotherapy-Hospital-For-Stroke-Patients.jpg",
  },
  {
    title: "Bell's Palsey Therapy",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/bell palsey.jpg",
  },
  {
    title: "Back Pain Therapy",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/back pain therapy.jpg",
  },
  {
    title: "Neck Pain Therapy",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/neck pain therapy.jpg",
  },
  {
    title: "Knee Pain Therapy",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/knee pain therapy.jpg",
  },
  {
    title: "Muscle Pain Therapy",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/muscle pain therapy.jpg",
  },
  {
    title: "Disk Slip Treatment",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/disk slip therapy.jpg",
  },
  {
    title: "Spinal Pain Treatment",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam.",
    image: "images/spinal pain.jpg",
  },
];

const Services = () => {
  return (
    <section className="services">
      <motion.div
        className="services-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="services-title">Our Services</h2>
      </motion.div>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

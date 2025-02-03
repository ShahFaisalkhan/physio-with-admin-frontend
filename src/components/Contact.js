// src/components/Contact.js
// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section className="contact">
//       <h2 className="contact-title">Get in Touch</h2>
//       <p className="contact-description">
//         Have questions or need assistance? Reach out to us, and we'll get back to you promptly.
//       </p>
//       <div className="contact-info">
//         <div className="contact-card">
//           <h3>📍 Our Location</h3>
//           <p>Main Market Near Ismaila Stop</p>
//         </div>
//         <div className="contact-card">
//           <h3>📞 Call Us</h3>
//           <p>0331-93700567</p>
//         </div>
//         <div className="contact-card">
//           <h3>✉️ Email Us</h3>
//           <p>syedghulamhussain@gmail.com</p>
//         </div>
//       </div>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <textarea placeholder="Your Message" required></textarea>
//         <button type="submit" className="btn btn-primary">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
// import React from 'react';
// import { motion } from 'framer-motion';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section className="contact">
//       <motion.h2 
//         className="contact-title"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//       >
//         Get in Touch
//       </motion.h2>

//       <motion.p
//         className="contact-description"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.3 }}
//       >
//         Have questions or need assistance? Reach out to us, and we'll get back to you promptly.
//       </motion.p>

//       <motion.div
//         className="contact-info"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         {['Our Location', 'Call Us', 'Email Us'].map((title, index) => (
//           <motion.div
//             key={title}
//             className="contact-card"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
//           >
//             <h3>{index === 0 ? '📍' : index === 1 ? '📞' : '✉️'} {title}</h3>
//             <p>{index === 0 ? 'Main Market Near Ismaila Stop' : index === 1 ? '0331-93700567' : 'syedghulamhussain@gmail.com'}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.form 
//         className="contact-form"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 1 }}
//       >
//         <motion.input
//           type="text"
//           placeholder="Your Name"
//           required
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 1.3 }}
//         />
//         <motion.input
//           type="email"
//           placeholder="Your Email"
//           required
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 1.4 }}
//         />
//         <motion.textarea
//           placeholder="Your Message"
//           required
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 1.5 }}
//         />
//         <motion.button
//           type="submit"
//           className="btn btn-primary"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Send Message
//         </motion.button>
//       </motion.form>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/send-email', { // Change to your actual backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form after success
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email.');
    }
  };

  return (
    <section className="contact">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="contact-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Have questions or need assistance? Reach out to us, and we'll get back to you promptly.
      </motion.p>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {['Our Location', 'Call Us', 'Email Us'].map((title, index) => (
          <motion.div
            key={title}
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
          >
            <h3>{index === 0 ? '📍' : index === 1 ? '📞' : '✉️'} {title}</h3>
            <p>{index === 0 ? 'Main Market Near Ismaila Stop' : index === 1 ? '0331-93700567' : 'syedghulamhussain@gmail.com'}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.button
          type="submit"
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {status && <p className="contact-status">{status}</p>}
    </section>
  );
};

export default Contact;

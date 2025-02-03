// src/components/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Experienced Professionals',
      description: 'Our team consists of licensed and experienced physiotherapists dedicated to your recovery.',
      icon: '🎓',
    },
    {
      id: 2,
      title: 'Personalized Care Plans',
      description: 'We tailor each treatment plan to meet your unique needs and goals.',
      icon: '📝',
    },
    {
      id: 3,
      title: 'State-of-the-Art Equipment',
      description: 'Our clinic is equipped with the latest technology to provide the best care possible.',
      icon: '⚙️',
    },
    {
      id: 4,
      title: 'Compassionate Approach',
      description: 'We prioritize your comfort and recovery with a friendly and empathetic approach.',
      icon: '❤️',
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="why-choose-us-title">Why Choose Us?</h2>
      <div className="reasons-grid">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-card">
            <div className="reason-icon">{reason.icon}</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

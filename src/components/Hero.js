// // src/components/Hero.js
// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-overlay">
//         <div className="hero-content">
//           <h1 className="hero-title">Regain Your Strength</h1>
//           <p className="hero-subtitle">
//             Expert physiotherapy care to help you move pain-free and live your best life.
//           </p>
//           <div className="hero-buttons">
//             <a href="#appointment" className="btn btn-primary">Book Appointment</a>
//             <a href="#services" className="btn btn-secondary">Explore Services</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// src/components/Hero.js
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Hero.css';

// const Hero = () => {
//   const sliderImages = [
//     'https://media.istockphoto.com/id/1384499192/photo/young-physiotherapist-exercising-with-senior-patient-in-a-physic-room.jpg?s=1024x1024&w=is&k=20&c=1yH4Td7CjWKsuQzSsmiV9G8cXm8ulEMe_cAWGeLFyDc=',
//     '/images/istockphoto-1396861229-1024x1024.jpg',
//     '/images/istockphoto-805089584-1024x1024.jpg',
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <section className="hero">
//       <Slider {...sliderSettings}>
//         {sliderImages.map((image, index) => (
//           <div key={index} className="hero-slide">
//             <img src={image} alt={`Slide ${index + 1}`} className="hero-slide-image" />
//             <div className="hero-overlay">
//               <div className="hero-content">
//                 <h1 className="hero-title">Regain Your Strength</h1>
//                 <p className="hero-subtitle">
//                   Expert physiotherapy care to help you move pain-free and live your best life.
//                 </p>
//                 <div className="hero-buttons">
//                   <a href="#appointment" className="btn btn-primary">Book Appointment</a>
//                   <a href="#services" className="btn btn-secondary">Explore Services</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Hero;
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Hero.css';

// const Hero = () => {
//   const sliderImages = [
//     'https://media.istockphoto.com/id/1384499192/photo/young-physiotherapist-exercising-with-senior-patient-in-a-physic-room.jpg?s=1024x1024&w=is&k=20&c=1yH4Td7CjWKsuQzSsmiV9G8cXm8ulEMe_cAWGeLFyDc=',
//     '/images/istockphoto-1396861229-1024x1024.jpg',
//     '/images/istockphoto-805089584-1024x1024.jpg',
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false, // No arrows
//   };

//   return (
//     <section className="hero">
//       <Slider {...sliderSettings} className="hero-slider">
//         {sliderImages.map((image, index) => (
//           <div key={index} className="hero-slide">
//             <img src={image} alt={`Slide ${index + 1}`} className="hero-slide-image" />
//             <div className="hero-overlay">
//               <div className="hero-content">
//                 <h1 className="hero-title">Regain Your Strength</h1>
//                 <p className="hero-subtitle">
//                   Expert physiotherapy care to help you move pain-free and live your best life.
//                 </p>
//                 <div className="hero-buttons">
//                   <a href="#appointment" className="btn btn-primary">Book Appointment</a>
//                   <a href="#services" className="btn btn-secondary">Explore Services</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {
  const sliderImages = [
    'https://media.istockphoto.com/id/1384499192/photo/young-physiotherapist-exercising-with-senior-patient-in-a-physic-room.jpg?s=1024x1024&w=is&k=20&c=1yH4Td7CjWKsuQzSsmiV9G8cXm8ulEMe_cAWGeLFyDc=',
    '/images/istockphoto-1396861229-1024x1024.jpg',
    '/images/istockphoto-805089584-1024x1024.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="hero-slide">
              <img src={image} alt={`Slide ${index + 1}`} className="hero-slide-image" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">Regain Your Strength</h1>
                  <p className="hero-subtitle">
                    Expert physiotherapy care to help you move pain-free and live your best life.
                  </p>
                  <div className="hero-buttons">
                    <a href="#appointment" className="btn btn-primary">Book Appointment</a>
                    <a href="#services" className="btn btn-secondary">Explore Services</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

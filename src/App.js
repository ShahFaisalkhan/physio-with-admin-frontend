// import './App.css';

// // src/App.js
// import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import WhyChooseUs from './components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
// import Appointment from './components/Appointment';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// const App = () => {
//   return (
//     <div className="App">
//   <Router>
//     <Header />
//     {/* <Hero />
//     <About />
//     <Services />
//     <WhyChooseUs />
//     <Testimonials />
//     <Appointment />
//     <Contact /> */}
//     <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/appointment" element={<Appointment />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//   </Router>
//   </div>
//   );
// };

// export default App;
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Appointment from './components/Appointment';
// import Contact from './components/Contact';


// import Footer from './components/Footer';

// function App() {
 
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about','services',  'testimonials', 'appointment', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight / 2;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
    
//     <div className="App">
//       <Header activeSection={activeSection} />
//       <div id="home">
//         <Hero />
//       </div>
//       <div id="about">
//         <About />
//       </div>
//       <div id="services">
//         <Services />
//       </div>
     
//       <div id="testimonials">
//         <Testimonials />
//       </div>
//       <div id="appointment">
//         <Appointment />
//       </div>
//       <div id="contact">
//         <Contact />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Appointment from './components/Appointment';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AdminLogin from './components/AdminLogin';
// import AdminPanel from './components/AdminPanel';
// import PrivateRoute from './components/PrivateRoute';
// import AdminAppointments from './components/AdminAppointments';
// import CustomerLogin from './components/CustomerLogin';
// import CustomerDashboard from './components/CustomerDashboard';
// import Register from './components/Register';
// import Login from './components/Login';

// function App() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight / 2;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
    
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="App">
//               <Header activeSection={activeSection} />
//               <div id="home">
//                 <Hero />
//               </div>
//               <div id="about">
//                 <About />
//               </div>
//               <div id="services">
//                 <Services />
//               </div>
//               <div id="testimonials">
//                 <Testimonials />
//               </div>
//               <div id="appointment">
//                 <Appointment />
//               </div>
//               <div id="contact">
//                 <Contact />
//               </div>
//               <Footer />
//             </div>
//           }
//         />
//         {/* <Route path="/login" element={<AdminLogin />} /> */}
//         {/* <Route
//           path="/admin"
//           element={
//             <PrivateRoute>
//               <AdminPanel />
//             </PrivateRoute>
//           }
//         /> */}
//         {/* <Route
//   path="/admin"
//   element={
//     <PrivateRoute>
//       <AdminAppointments />
//     </PrivateRoute>
//   }
// />
// <Route path="/customer-login" element={<CustomerLogin />} />
// <Route
//   path="/customer-dashboard"
//   element={
//     <PrivateRoute>
//       <CustomerDashboard />
//     </PrivateRoute>
//   }
// /> */}
// <Route path="/register" element={<Register />} />
//   <Route
//     path="/login"
//     element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />}
//   />
//   <Route
//     path="/admin"
//     element={
//       <PrivateRoute>
//         <AdminAppointments />
//       </PrivateRoute>
//     }
//   />
//   <Route
//     path="/customer-dashboard"
//     element={
//       <PrivateRoute>
//         <CustomerDashboard />
//       </PrivateRoute>
//     }
//   />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
//working fine code
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Appointment from './components/Appointment';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AdminAppointments from './components/AdminAppointments';
// import CustomerDashboard from './components/CustomerDashboard';
// import Register from './components/Register';
// import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';
// function App() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   // Restore login state on app load
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const adminStatus = localStorage.getItem('isAdmin') === 'true'; // Ensure it's a boolean

//     if (token) {
//       setIsLoggedIn(true);
//       setIsAdmin(adminStatus);
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight / 2;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem('token'); // Clear token
//     localStorage.removeItem('isAdmin'); // Clear isAdmin state
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//   };

//   return (
//     <Router>
//       {/* Pass isLoggedIn, isAdmin, and logout to Header */}
//       <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} logout={logout} activeSection={activeSection} />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="App">
//               <div id="home">
//                 <Hero />
//               </div>
//               <div id="about">
//                 <About />
//               </div>
//               <div id="services">
//                 <Services />
//               </div>
//               <div id="testimonials">
//                 <Testimonials />
//               </div>
//               <div id="appointment">
//                 <Appointment />
//               </div>
//               <div id="contact">
//                 <Contact />
//               </div>
//               <Footer />
//             </div>
//           }
//         />
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
//         <Route path="/register" element={<Register />} />
//         {/* <Route path="/customer-dashboard" element={<CustomerDashboard />} /> */}
//         {/* <Route path="/admin" element={<AdminAppointments />} /> */}
//        {/* Admin-only route */}
//        <Route
//           path="/admin"
//           element={
//             <PrivateRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin} adminOnly={true}>
//               <AdminAppointments />
//             </PrivateRoute>
//           }
//         />
//         {/* Customer-only route */}
//         <Route
//           path="/customer-dashboard"
//           element={
//             <PrivateRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin} adminOnly={false}>
//               <CustomerDashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import Appointment from "./components/Appointment";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import AdminAppointments from "./components/AdminAppointments";
// import CustomerDashboard from "./components/CustomerDashboard";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import PrivateRoute from "./components/PrivateRoute";
// import { AuthContext } from "./context/AuthContext";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />  {/* ✅ Make sure this exists */}
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/admin"
//           element={
//             <PrivateRoute>
//               <AdminAppointments />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/customer-dashboard"
//           element={
//             <PrivateRoute>
//               <CustomerDashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// const Home = () => (
//   <div className="App">
//     <div id="home">
//       <Hero />
//     </div>
//     <div id="about">
//       <About />
//     </div>
//     <div id="services">
//       <Services />
//     </div>
//     <div id="testimonials">
//       <Testimonials />
//     </div>
//     <div id="appointment">
//       <Appointment />
//     </div>
//     <div id="contact">
//       <Contact />
//     </div>
//     <Footer />
//   </div>
// );

// export default App;
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminAppointments from "./components/AdminAppointments";
import CustomerDashboard from "./components/CustomerDashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);  // ✅ Get values from AuthContext

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin} adminOnly={true}>
              <AdminAppointments />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer-dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin} adminOnly={false}>
              <CustomerDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div className="App">
    <div id="home">
      <Hero />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="testimonials">
      <Testimonials />
    </div>
    <div id="appointment">
      <Appointment />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;

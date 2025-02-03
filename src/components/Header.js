// src/components/Header.js
// import React from 'react';
// import './Header.css';

// const Header = ({ activeSection }) => {
//   const sections = ['home','about', 'services',  'testimonials', 'appointment','contact'];

//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="#home">Syed Ghulam Hussain Physio</a>
//       </div>
//       <nav className="nav-menu">
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               <a
//                 href={`#${section}`}
//                 className={activeSection === section ? 'active' : ''}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React from 'react';
// import './Header.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = ({ activeSection, isLoggedIn, setIsLoggedIn }) => {
//   const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove the token
//     setIsLoggedIn(false);
//     navigate('/'); // Redirect to home
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="#home">Syed Ghulam Hussain Physio</a>
//       </div>
//       <nav className="nav-menu">
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               <a
//                 href={`#${section}`}
//                 className={activeSection === section ? 'active' : ''}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </a>
//             </li>
//           ))}
//           {!isLoggedIn && <li><Link to="/register">Sign Up</Link></li>}
//           {isLoggedIn ? (
//             <li>
//               <button className="logout-button" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <li>
//               <Link to="/login" className="login-button">
//                 Login
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useContext } from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Header = ({ activeSection }) => {
//   const { isLoggedIn, logout } = useContext(AuthContext);
//   const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];

//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="#home">Syed Ghulam Hussain Physio</a>
//       </div>
//       <nav className="nav-menu">
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               <a
//                 href={`#${section}`}
//                 className={activeSection === section ? 'active' : ''}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </a>
//             </li>
//           ))}
//           {!isLoggedIn && <li><Link to="/register">Sign Up</Link></li>}
//           {isLoggedIn ? (
//             <li>
//               <button className="logout-button" onClick={logout}>
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <li>
//               <Link to="/login" className="login-button">
//                 Login
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import { AuthContext } from '../context/AuthContext';

// const Header = ({ activeSection }) => {
//   const { isLoggedIn, isAdmin, logout } = useContext(AuthContext);
//   const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];

//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="#home">Syed Ghulam Hussain Physio</a>
//       </div>
//       <nav className="nav-menu">
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               <a
//                 href={`#${section}`}
//                 className={activeSection === section ? 'active' : ''}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </a>
//             </li>
//           ))}
//           {isLoggedIn && (
//             <li>
//               <Link to={isAdmin ? '/admin' : '/customer-dashboard'}>
//                 {isAdmin ? 'Admin Dashboard' : 'Customer Dashboard'}
//               </Link>
//             </li>
//           )}
//           {isLoggedIn ? (
//             <li>
//               <button onClick={logout} className="logout-button">Logout</button>
//             </li>
//           ) : (
//             <>
//               <li><Link to="/login">Login</Link></li>
//               {/* <li><Link to="/register">Sign Up</Link></li> */}
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = ({ activeSection, isLoggedIn, isAdmin, logout }) => {
//   const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];

//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="#home">Syed Ghulam Hussain Physio</a>
//       </div>
//       <nav className="nav-menu">
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               <a
//                 href={`#${section}`}
//                 className={activeSection === section ? 'active' : ''}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </a>
//             </li>
//           ))}
//           {isLoggedIn && (
//             <li>
//               <Link to={isAdmin ? '/admin' : '/customer-dashboard'}>
//                 {isAdmin ? 'Admin Dashboard' : 'Customer Dashboard'}
//               </Link>
//             </li>
//           )}
//           {isLoggedIn ? (
//             <li>
//               <button onClick={logout} className="logout-button">Logout</button>
//             </li>
//           ) : (
//             <>
//               <li><Link to="/login">Login</Link></li>
//               <li><Link to="/register">Sign Up</Link></li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css';

// const Header = ({ activeSection, isLoggedIn, isAdmin, logout }) => {
//   const location = useLocation();
//   const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];

//   const handleScroll = (sectionId) => {
//     if (location.pathname === '/') {
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <header className="header header-main">
//       <div className="logo">
//         {location.pathname === '/' ? (
//           <a onClick={() => handleScroll('home')}>Syed Ghulam Hussain Physio</a>
//         ) : (
//           <Link to="/">Syed Ghulam Hussain Physio</Link>
//         )}
//       </div>
//       <nav className="nav-menu">
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               {location.pathname === '/' ? (
//                 <a
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleScroll(section);
//                   }}
//                   className={activeSection === section ? 'active' : ''}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               ) : (
//                 <Link to="/">{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
//               )}
//             </li>
//           ))}
//           {isLoggedIn && (
//             <li>
//               <Link to={isAdmin ? '/admin' : '/customer-dashboard'}>
//                 {isAdmin ? 'Admin Dashboard' : 'Customer Dashboard'}
//               </Link>
//             </li>
//           )}
//           {isLoggedIn ? (
//             <li>
//               <button onClick={logout} className="logout-button">Logout</button>
//             </li>
//           ) : (
//             <>
//               <li><Link to="/login">Login</Link></li>
//               {/* <li><Link to="/register">Sign Up</Link></li> */}
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
//working code
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css';

// const Header = ({ activeSection, isLoggedIn, isAdmin, logout }) => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

//   const sections = ['home', 'about', 'services', 'testimonials', 'appointment', 'contact'];

//   const handleScroll = (sectionId) => {
//     if (location.pathname === '/') {
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//         setMenuOpen(false); // Close the menu after clicking
//       }
//     }
//   };

//   return (
//     <header className="header header-main">
//       <div className="logo">
//         {location.pathname === '/' ? (
//           <a onClick={() => handleScroll('home')}>Syed Ghulam Hussain Physio</a>
//         ) : (
//           <Link to="/">Syed Ghulam Hussain Physio</Link>
//         )}
//       </div>

//       {/* Toggle Button */}
//       <button
//         className="nav-menu-toggle"
//         onClick={() => setMenuOpen((prev) => !prev)}
//         aria-label="Toggle navigation menu"
//       >
//         ☰
//       </button>

//       {/* Navigation Menu */}
//       <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               {location.pathname === '/' ? (
//                 <a
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleScroll(section);
//                     setMenuOpen(false); // Close menu after selecting a section
//                   }}
//                   className={activeSection === section ? 'active' : ''}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               ) : (
//                 <Link to="/" onClick={() => setMenuOpen(false)}>
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </Link>
//               )}
//             </li>
//           ))}
//           {isLoggedIn && (
//             <li>
//               <Link to={isAdmin ? '/admin' : '/customer-dashboard'}>
//                 {isAdmin ? 'Admin Dashboard' : 'Customer Dashboard'}
//               </Link>
//             </li>
//           )}
//           {isLoggedIn ? (
//             <li>
//               <button onClick={logout} className="logout-button">
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// working code with dones't add admin dashboard to the header
// import React, { useState, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext"; // Import AuthContext
// import "./Header.css";

// const Header = ({ activeSection }) => {
//   const location = useLocation();
//   const { isLoggedIn, token, logout } = useContext(AuthContext); // Get state directly
//   const [menuOpen, setMenuOpen] = useState(false);

//   const sections = [
//     "home",
//     "about",
//     "services",
//     "testimonials",
//     "appointment",
//     "contact",
//   ];

//   const handleScroll = (sectionId) => {
//     if (location.pathname === "/") {
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//         setMenuOpen(false);
//       }
//     }
//   };

//   return (
//     <header className="header header-main">
//       <div className="logo">
//         {location.pathname === "/" ? (
//           <a onClick={() => handleScroll("home")}>
//             Syed Ghulam Hussain Physio
//           </a>
//         ) : (
//           <Link to="/">Syed Ghulam Hussain Physio</Link>
//         )}
//       </div>

//       <button
//         className="nav-menu-toggle"
//         onClick={() => setMenuOpen((prev) => !prev)}
//         aria-label="Toggle navigation menu"
//       >
//         ☰
//       </button>

//       <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               {location.pathname === "/" ? (
//                 <a
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleScroll(section);
//                     setMenuOpen(false);
//                   }}
//                   className={activeSection === section ? "active" : ""}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               ) : (
//                 <Link to="/" onClick={() => setMenuOpen(false)}>
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </Link>
//               )}
//             </li>
//           ))}
//           {isLoggedIn && (
//             <li>
//               <Link to="/customer-dashboard">Customer Dashboard</Link>
//             </li>
//           )}
//           {isLoggedIn ? (
//             <li>
//               <button onClick={logout} className="logout-button">
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useState, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext"; // Import AuthContext
// import "./Header.css";

// const Header = ({ activeSection }) => {
//   const location = useLocation();
//   const { isLoggedIn, isAdmin, logout } = useContext(AuthContext); // Get state directly from context
//   const [menuOpen, setMenuOpen] = useState(false);

//   const sections = [
//     "home",
//     "about",
//     "services",
//     "testimonials",
//     "appointment",
//     "contact",
//   ];

//   const handleScroll = (sectionId) => {
//     if (location.pathname === "/") {
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//         setMenuOpen(false);
//       }
//     }
//   };

//   return (
//     <header className="header header-main">
//       <div className="logo">
//         {location.pathname === "/" ? (
//           <a onClick={() => handleScroll("home")}>
//             Syed Ghulam Hussain Physio
//           </a>
//         ) : (
//           <Link to="/">Syed Ghulam Hussain Physio</Link>
//         )}
//       </div>

//       <button
//         className="nav-menu-toggle"
//         onClick={() => setMenuOpen((prev) => !prev)}
//         aria-label="Toggle navigation menu"
//       >
//         ☰
//       </button>

//       <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
//         <ul>
//           {sections.map((section) => (
//             <li key={section}>
//               {location.pathname === "/" ? (
//                 <a
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleScroll(section);
//                     setMenuOpen(false);
//                   }}
//                   className={activeSection === section ? "active" : ""}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               ) : (
//                 <Link to="/" onClick={() => setMenuOpen(false)}>
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </Link>
//               )}
//             </li>
//           ))}
//           {isLoggedIn && (
//             <li>
//               <Link to={isAdmin ? "/admin" : "/customer-dashboard"}>
//                 {isAdmin ? "Admin Dashboard" : "Customer Dashboard"}
//               </Link>
//             </li>
//           )}
//           {isLoggedIn ? (
//             <li>
//               <button onClick={logout} className="logout-button">
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import "./Header.css";

const Header = ({ activeSection }) => {
  const location = useLocation();
  const { isLoggedIn, isAdmin, logout } = useContext(AuthContext); // Get state directly from context
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection || "home");

  const sections = [
    "home",
    "about",
    "services",
    "testimonials",
    "appointment",
    "contact",
  ];

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setCurrentSection(sectionId); // Set the current section as active
        setMenuOpen(false);
      }
    }
  };

  // Update active section on route change
  useEffect(() => {
    if (location.pathname !== "/") {
      setCurrentSection(""); // Reset when not on homepage
    }
  }, [location.pathname]);

  return (
    <header className="header header-main">
      <div className="logo">
        {location.pathname === "/" ? (
          <button className="logo-btn" onClick={() => handleScroll("home")}>
            Syed Ghulam Hussain Physio
          </button>
        ) : (
          <Link to="/">Syed Ghulam Hussain Physio</Link>
        )}
      </div>

      <button
        className="nav-menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          {sections.map((section) => (
            <li key={section}>
              {location.pathname === "/" ? (
                <button
                  className={`nav-link ${currentSection === section ? "active" : ""}`}
                  onClick={() => handleScroll(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ) : (
                <Link
                  to="/"
                  className={`nav-link ${currentSection === section ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              )}
            </li>
          ))}
          {isLoggedIn && (
            <li>
              <Link
                to={isAdmin ? "/admin" : "/customer-dashboard"}
                className={location.pathname === (isAdmin ? "/admin" : "/customer-dashboard") ? "active" : ""}
              >
                {isAdmin ? "Admin Dashboard" : "Customer Dashboard"}
              </Link>
            </li>
          )}
          {isLoggedIn ? (
            
              <button onClick={logout} className="logout-button">
                Logout
              </button>
           
          ) : (
            <li>
              <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

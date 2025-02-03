// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(() => localStorage.getItem("token")); // Load from localStorage
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     console.log("AuthContext Loaded - Token:", storedToken);
//     if (storedToken) {
//       setToken(storedToken);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // const login = (newToken) => {
//   //   console.log("Logging in - Received Token:", newToken);
//   //   if (!newToken) {
//   //     console.error("Error: No token received in login()");
//   //     return;
//   //   }
  
//   //   console.log("Logging in - Storing Token:", newToken);
//   //   localStorage.setItem("token", newToken);
//   //   setToken(newToken);
//   //   setIsLoggedIn(true);
//   // };
//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setIsLoggedIn((prev) => !prev);  // Force re-render
//     setIsLoggedIn(true);  // Ensure it stays true
//   };
//   const logout = () => {
//     console.log("Logging out - Removing Token");
//     localStorage.removeItem("token");
//     setToken(null);
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// working fine code
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

//   useEffect(() => {
//     console.log("Auth state updated:", isLoggedIn);
//   }, [isLoggedIn]); // Logs changes to isLoggedIn

//   // const login = (newToken) => {
//   //   console.log("Logging in - Received Token:", newToken);
//   //   if (!newToken) {
//   //     console.error("Error: No token received in login()");
//   //     return;
//   //   }

//   //   console.log("Logging in - Storing Token:", newToken);
//   //   localStorage.setItem("token", newToken);
//   //   setToken(newToken);
//   //   setIsLoggedIn(true);
//   // };
//   const login = (newToken) => {
//     console.log("Logging in - Received Token:", newToken);
//     if (!newToken) {
//       console.error("Error: No token received in login()");
//       return;
//     }
//     console.log("Logging in - Storing Token:", newToken);
//     localStorage.setItem("token", newToken);
//     setToken(newToken);  // ✅ Ensure token is updated
//     setIsLoggedIn(true); // ✅ Ensure isLoggedIn updates immediately
//   };
//   // const login = (newToken, role) => {
//   //   localStorage.setItem("token", newToken);
//   //   localStorage.setItem("role", role); // Store role in localStorage
//   //   setToken(newToken);
//   //   setIsLoggedIn(true);
//   // };
//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

//   useEffect(() => {
//     console.log("Auth state updated:", isLoggedIn);
//   }, [isLoggedIn]);

//   const login = (newToken) => {
//     console.log("Logging in - Received Token:", newToken);
//     if (!newToken) {
//       console.error("Error: No token received in login()");
//       return;
//     }

//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  useEffect(() => {
    console.log("Auth state updated:", isLoggedIn, "Admin:", isAdmin);
  }, [isLoggedIn, isAdmin]);

  const login = (newToken, adminStatus) => {
    console.log("Logging in - Received Token:", newToken, "Admin:", adminStatus);
    if (!newToken) {
      console.error("Error: No token received in login()");
      return;
    }
    localStorage.setItem("token", newToken);
    localStorage.setItem("isAdmin", adminStatus);  // ✅ Store isAdmin in localStorage
    setToken(newToken);
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");  // ✅ Clear isAdmin
    setToken("");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// src/components/CustomerDashboard.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CustomerDashboard = () => {
//   const [appointments, setAppointments] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     fetch('http://localhost:5000/api/customers/appointments', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setAppointments(data))
//       .catch((err) => console.error('Error fetching appointments:', err));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="customer-dashboard">
//       <div className="dashboard-header">
//         <h2>Your Appointments</h2>
//         {/* <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button> */}
//       </div>
//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         <ul>
//           {appointments.map((appointment) => (
//             <li key={appointment._id}>
//               {appointment.date} at {appointment.time} - <strong>{appointment.status}</strong>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;
// import React, { useState, useEffect } from 'react';
// import './CustomerDashboard.css'; // Add custom styles here

// const CustomerDashboard = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token'); // Retrieve the user's token
//     fetch('http://localhost:5000/api/appointments/user-appointments', {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`, // Pass token for authentication
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error);
//         } else {
//           setAppointments(data);
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching appointments:', err);
//         setError('Failed to fetch appointments.');
//       });
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       <h2>Your Appointments</h2>
//       {error && <p className="error-message">{error}</p>}
//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         <table className="appointments-table">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Message</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appointment) => (
//               <tr key={appointment._id}>
//                 <td>{appointment.date}</td>
//                 <td>{appointment.time}</td>
//                 <td>{appointment.message || 'N/A'}</td>
//                 <td className={`status-${appointment.status}`}>{appointment.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;
// import React, { useState, useEffect } from 'react';
// import './CustomerDashboard.css'; // Add custom styles here

// const CustomerDashboard = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [error, setError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchAppointments = (page = 1) => {
//     const token = localStorage.getItem('token'); // Retrieve the user's token
//     fetch(`http://localhost:5000/api/appointments/user-appointments?page=${page}&limit=15`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`, // Pass token for authentication
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error);
//         } else {
//           setAppointments(data.appointments);
//           setTotalPages(data.totalPages);
//           setCurrentPage(data.currentPage);
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching appointments:', err);
//         setError('Failed to fetch appointments.');
//       });
//   };

//   useEffect(() => {
//     fetchAppointments(currentPage);
//   }, [currentPage]);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="customer-dashboard">
//       <h2>Your Appointments</h2>
//       {error && <p className="error-message">{error}</p>}
//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         <>
//           <table className="appointments-table">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Message</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((appointment) => (
//                 <tr key={appointment._id}>
//                   <td>{appointment.date}</td>
//                   <td>{appointment.time}</td>
//                   <td>{appointment.message || 'N/A'}</td>
//                   <td className={`status-${appointment.status}`}>{appointment.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;
import React, { useState, useEffect } from 'react';
import './CustomerDashboard.css';

const CustomerDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [previousStatuses, setPreviousStatuses] = useState({}); // Track previous statuses
  const notificationSound = new Audio('/notification.mp3'); // Notification sound file

  const fetchAppointments = (page = 1, playSound = false) => {
    const token = localStorage.getItem('token'); // Retrieve the user's token
    fetch(`http://localhost:5000/api/appointments/user-appointments?page=${page}&limit=15`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`, // Pass token for authentication
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setAppointments(data.appointments);
          setTotalPages(data.totalPages);
          setCurrentPage(data.currentPage);

          if (playSound) {
            // Check for status changes
            data.appointments.forEach((appointment) => {
              if (
                previousStatuses[appointment._id] &&
                previousStatuses[appointment._id] !== appointment.status
              ) {
                notificationSound.play().catch((err) => {
                  console.error('Error playing notification sound:', err);
                });
              }
            });

            // Update previous statuses
            setPreviousStatuses(
              data.appointments.reduce((acc, appointment) => {
                acc[appointment._id] = appointment.status;
                return acc;
              }, {})
            );
          }
        }
      })
      .catch((err) => {
        console.error('Error fetching appointments:', err);
        setError('Failed to fetch appointments.');
      });
  };

  useEffect(() => {
    fetchAppointments(currentPage); // Initial fetch

    const intervalId = setInterval(() => {
      fetchAppointments(currentPage, true); // Poll for updates
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPage, previousStatuses]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="customer-dashboard">
      <h2>Your Appointments</h2>
      {error && <p className="error-message">{error}</p>}
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.message || 'N/A'}</td>
                  <td className={`status-${appointment.status}`}>{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerDashboard;

// import React, { useEffect, useState } from 'react';
// import './AdminAppointments.css';

// const AdminAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAppointments(currentPage);
//   }, [currentPage]);

//   const fetchAppointments = async (page) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/appointments?page=${page}&limit=10`);
//       const data = await response.json();
//       setAppointments(data.appointments);
//       setTotalPages(data.totalPages);
//       setCurrentPage(data.currentPage);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching appointments:', err);
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/appointments/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         fetchAppointments(currentPage); // Refresh appointments after status update
//       } else {
//         alert(data.error);
//       }
//     } catch (err) {
//       console.error('Error updating status:', err);
//     }
//   };

//   const renderPagination = () => (
//     <div className="pagination">
//       {[...Array(totalPages).keys()].map((page) => (
//         <button
//           key={page + 1}
//           onClick={() => setCurrentPage(page + 1)}
//           disabled={currentPage === page + 1}
//         >
//           {page + 1}
//         </button>
//       ))}
//     </div>
//   );

//   if (loading) return <p>Loading appointments...</p>;

//   return (
//     <div className="admin-appointments">
//       <h2>Manage Appointments</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment._id}>
//               <td>{appointment.name}</td>
//               <td>{appointment.email}</td>
//               <td>{appointment.phone}</td>
//               <td>{appointment.date}</td>
//               <td>{appointment.time}</td>
//               <td>{appointment.status}</td>
//               <td>
//                 {appointment.status === 'pending' && (
//                   <>
//                     <button onClick={() => handleStatusUpdate(appointment._id, 'approved')}>
//                       Approve
//                     </button>
//                     <button onClick={() => handleStatusUpdate(appointment._id, 'rejected')}>
//                       Reject
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {renderPagination()}
//     </div>
//   );
// };

// export default AdminAppointments;
// import React, { useEffect, useState } from 'react';
// import './AdminAppointments.css';
// import { useNavigate } from 'react-router-dom';

// const AdminAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // Used for navigation

//   useEffect(() => {
//     fetchAppointments(currentPage);
//   }, [currentPage]);

//   const fetchAppointments = async (page) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/appointments?page=${page}&limit=20`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token with the request
//         },
//       });
//       const data = await response.json();
//       setAppointments(data.appointments);
//       setTotalPages(data.totalPages);
//       setCurrentPage(data.currentPage);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching appointments:', err);
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/appointments/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token with the request
//         },
//         body: JSON.stringify({ status }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         fetchAppointments(currentPage); // Refresh appointments after status update
//       } else {
//         alert(data.error);
//       }
//     } catch (err) {
//       console.error('Error updating status:', err);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove the token from local storage
//     navigate('/login'); // Redirect to the login page
//   };

//   const renderPagination = () => (
//     <div className="pagination">
//       {[...Array(totalPages).keys()].map((page) => (
//         <button
//           key={page + 1}
//           onClick={() => setCurrentPage(page + 1)}
//           disabled={currentPage === page + 1}
//         >
//           {page + 1}
//         </button>
//       ))}
//     </div>
//   );

//   if (loading) return <p>Loading appointments...</p>;

//   return (
//     <div className="admin-appointments">
//       <div className="header">
//         <h2>Manage Appointments</h2>
//         {/* <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button> */}
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment._id}>
//               <td>{appointment.name}</td>
//               <td>{appointment.email}</td>
//               <td>{appointment.phone}</td>
//               <td>{appointment.date}</td>
//               <td>{appointment.time}</td>
//               <td>{appointment.status}</td>
//               <td>
//                 {appointment.status === 'pending' && (
//                   <>
//                     <button onClick={() => handleStatusUpdate(appointment._id, 'approved')}>
//                       Approve
//                     </button>
//                     <button onClick={() => handleStatusUpdate(appointment._id, 'rejected')}>
//                       Reject
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {renderPagination()}
//     </div>
//   );
// };

// export default AdminAppointments;
// import React, { useEffect, useState } from 'react';
// import './AdminAppointments.css';
// import { useNavigate } from 'react-router-dom';

// const AdminAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true); // For the initial load
//   const [isRefreshing, setIsRefreshing] = useState(false); // For background refresh
//   const navigate = useNavigate(); // Used for navigation

//   const fetchAppointments = async (page, isBackgroundRefresh = false) => {
//     if (!isBackgroundRefresh) {
//       setLoading(true); // Show loader only for the initial load
//     } else {
//       setIsRefreshing(true); // Indicate background refresh
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/appointments?page=${page}&limit=20`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token with the request
//         },
//       });

//       const data = await response.json();
//       setAppointments(data.appointments);
//       setTotalPages(data.totalPages);
//       setCurrentPage(data.currentPage);

//       if (!isBackgroundRefresh) {
//         setLoading(false); // Stop showing loader after initial load
//       }
//       setIsRefreshing(false); // Stop background refresh indicator
//     } catch (err) {
//       console.error('Error fetching appointments:', err);
//       setLoading(false);
//       setIsRefreshing(false);
//     }
//   };

//   // Initial fetch and polling setup
//   useEffect(() => {
//     fetchAppointments(currentPage); // Initial load

//     const intervalId = setInterval(() => {
//       fetchAppointments(currentPage, true); // Background refresh
//     }, 5000); // Refresh every 5 seconds

//     return () => clearInterval(intervalId); // Cleanup on component unmount
//   }, [currentPage]);

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/appointments/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token with the request
//         },
//         body: JSON.stringify({ status }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         fetchAppointments(currentPage, true); // Refresh appointments in the background
//       } else {
//         alert(data.error);
//       }
//     } catch (err) {
//       console.error('Error updating status:', err);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove the token from local storage
//     navigate('/login'); // Redirect to the login page
//   };

//   const renderPagination = () => (
//     <div className="pagination">
//       {[...Array(totalPages).keys()].map((page) => (
//         <button
//           key={page + 1}
//           onClick={() => setCurrentPage(page + 1)}
//           disabled={currentPage === page + 1}
//         >
//           {page + 1}
//         </button>
//       ))}
//     </div>
//   );

//   return (
//     <div className="admin-appointments">
//         <h2>Your Appointments</h2>

//       {/* <div className="header">
//         <h2>Manage Appointments</h2>
//         {/* <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button> */}
//       {/* </div>  */}

//       {/* Show initial loading message */}
//       {loading ? (
//         <p className="loading">Fetching appointments...</p>
//       ) : (
//         <>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((appointment) => (
//                 <tr key={appointment._id}>
//                   <td>{appointment.name}</td>
//                   <td>{appointment.email}</td>
//                   <td>{appointment.phone}</td>
//                   <td>{appointment.date}</td>
//                   <td>{appointment.time}</td>
//                   <td>{appointment.status}</td>
//                   <td>
//                     {appointment.status === 'pending' && (
//                       <>
//                         <button onClick={() => handleStatusUpdate(appointment._id, 'approved')}>
//                           Approve
//                         </button>
//                         <button onClick={() => handleStatusUpdate(appointment._id, 'rejected')}>
//                           Reject
//                         </button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {isRefreshing && <p className="refreshing">Updating data...</p>} {/* Background refresh indicator */}
//           {renderPagination()}
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminAppointments;
import React, { useEffect, useState } from 'react';
import './AdminAppointments.css';
import { useNavigate } from 'react-router-dom';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // For the initial load
  const [isRefreshing, setIsRefreshing] = useState(false); // For background refresh
  const [pendingCount, setPendingCount] = useState(0); // For notification count
  const navigate = useNavigate(); // Used for navigation
  const [isUserInteracted, setIsUserInteracted] = useState(false); // Track user interaction

  const notificationSound = new Audio('/notification.mp3'); // Sound for new notifications

  // Enable sound playback after user interaction
  useEffect(() => {
    const enableSound = () => {
      setIsUserInteracted(true); // Mark interaction as true
      window.removeEventListener('click', enableSound); // Remove event listener after the first click
    };

    window.addEventListener('click', enableSound); // Listen for user interaction
    return () => window.removeEventListener('click', enableSound);
  }, []);

  const fetchAppointments = async (page, isBackgroundRefresh = false) => {
    if (!isBackgroundRefresh) {
      setLoading(true); // Show loader only for the initial load
    } else {
      setIsRefreshing(true); // Indicate background refresh
    }

    try {
      const response = await fetch(`http://localhost:5000/api/admin/appointments?page=${page}&limit=20`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token with the request
        },
      });

      const data = await response.json();
      setAppointments(data.appointments);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);

      // Update pending count
      const pendingAppointments = data.appointments.filter((appointment) => appointment.status === 'pending');
      if (pendingAppointments.length > pendingCount && isUserInteracted) {
        notificationSound.play().catch((err) => {
          console.error('Error playing notification sound:', err);
        });
      }
      setPendingCount(pendingAppointments.length);

      if (!isBackgroundRefresh) {
        setLoading(false); // Stop showing loader after initial load
      }
      setIsRefreshing(false); // Stop background refresh indicator
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAppointments(currentPage); // Initial load

    const intervalId = setInterval(() => {
      fetchAppointments(currentPage, true); // Background refresh
    }, 5000); // Refresh every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPage, pendingCount, isUserInteracted]);

  const handleStatusUpdate = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/appointments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token with the request
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        fetchAppointments(currentPage, true); // Refresh appointments in the background
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/login'); // Redirect to the login page
  };

  const renderPagination = () => (
    <div className="pagination">
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          onClick={() => setCurrentPage(page + 1)}
          disabled={currentPage === page + 1}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="admin-appointments">
      <div className="header header-admin" >
        <h2>Manage Appointments</h2>
        <div className="notifications">
          <button className="notification-button">
            <span className="icon">🔔</span>
            {pendingCount > 0 && <span className="badge">{pendingCount}</span>}
          </button>
        </div>
        {/* <button onClick={handleLogout} className="logout-button">
          Logout
        </button> */}
      </div>

      {/* Show initial loading message */}
      {loading ? (
        <p className="loading">Fetching appointments...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {appointment.status === 'pending' && (
                      <>
                        <button onClick={() => handleStatusUpdate(appointment._id, 'approved')}>
                          Approve
                        </button>
                        <button onClick={() => handleStatusUpdate(appointment._id, 'rejected')}>
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isRefreshing && <p className="refreshing">Updating data...</p>} {/* Background refresh indicator */}
          {renderPagination()}
        </>
      )}
    </div>
  );
};

export default AdminAppointments;

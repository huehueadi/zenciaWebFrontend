
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';  // Import axios to make API calls

// export default function Chats() {
//   const [sessionIds, setSessionIds] = useState([]);  // State to store session IDs
//   const [loading, setLoading] = useState(true);  // State to manage loading state

//   // Fetch session data from the API
//   useEffect(() => {
//     const fetchSessions = async () => {
//       const chatbotId = localStorage.getItem('chatbotId');  // Get chatbotId from localStorage
//       if (!chatbotId) {
//         console.error('Chatbot ID not found in localStorage');
//         return;  // Exit if chatbotId is not found
//       }

//       try {
//         const response = await axios.get(`https://vercel-bot-0ias.onrender.com/v1/sessions/${chatbotId}`);
//         const { sessions } = response.data;  // Extract sessions from the API response
//         setSessionIds(sessions);  // Set session IDs to the state
//       } catch (error) {
//         console.error('Error fetching session data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();  // Call the function to fetch session data
//   }, []);

//   return (
//     <div className="content-wrapper">
//       {/* Content */}
//       <div className="container-xxl flex-grow-1 container-p-y">
//         <div className="card mb-6">
//           <div className="card-widget-separator-wrapper">
//             <div className="card-body card-widget-separator">
//               <div className="row gy-4 gy-sm-1">
//                 <div className="col-sm-6 col-lg-3">
//                   <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
//                     <div>
//                       <h4 className="mb-0">56</h4>
//                       <p className="mb-0">Total Sessions</p>
//                     </div>
//                     <div className="avatar me-sm-6">
//                       <span className="avatar-initial rounded text-heading">
//                         <i className="ri-calendar-2-line ri-26px" />
//                       </span>
//                     </div>
//                   </div>
//                   <hr className="d-none d-sm-block d-lg-none me-6" />
//                 </div>
//                 <div className="col-sm-6 col-lg-3">
//             <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
//               <div>
//                 <h4 className="mb-0">12,689</h4>
//                 <p className="mb-0">Completed Sessions</p>
//               </div>
//               <div className="avatar me-lg-6">
//                 <span className="avatar-initial rounded text-heading">
//                   <i className="ri-check-double-line ri-26px" />
//                 </span>
//               </div>
//             </div>
//             <hr className="d-none d-sm-block d-lg-none" />
//           </div>
//           <div className="col-sm-6 col-lg-3">
//             <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
//               <div>
//                 <h4 className="mb-0">124</h4>
//                 <p className="mb-0">Active Sessions</p>
//               </div>
//               <div className="avatar me-sm-6">
//                 <span className="avatar-initial rounded text-heading">
//                   <i className="ri-wallet-3-line ri-26px" />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-6 col-lg-3">
//             <div className="d-flex justify-content-between align-items-start">
//               <div>
//                 <h4 className="mb-0">32</h4>
//                 <p className="mb-0">Total Messages</p>
//               </div>
//               <div className="avatar">
//                 <span className="avatar-initial rounded text-heading">
//                   <i className="ri-error-warning-line ri-26px" />
//                 </span>
//               </div>
//             </div>
//           </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Session ID Dropdown */}
//         <div className="mb-4">
//           <div className="btn-group">
//             <button
//               type="button"
//               className="btn btn-outline-primary dropdown-toggle"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Select Session ID
//             </button>
//             <ul className="dropdown-menu">
//               {/* Check if the session IDs are loaded */}
//               {loading ? (
//                 <li>
//                   <a className="dropdown-item">Loading...</a>
//                 </li>
//               ) : sessionIds.length > 0 ? (
//                 sessionIds.map((sessionId, index) => (
//                   <li key={index}>
//                     <a className="dropdown-item" href="javascript:void(0);">
//                       {sessionId}
//                     </a>
//                   </li>
//                 ))
//               ) : (
//                 <li>
//                   <a className="dropdown-item">No Sessions Available</a>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-datatable table-responsive">
//             <table className="datatables-order table">
//               <thead>
//                 <tr>
//                   <th />
//                   <th />
//                   <th>Order</th>
//                   <th>Date</th>
//                   <th>Customers</th>
//                   <th>Payment</th>
//                   <th>Status</th>
//                   <th>Method</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Table rows */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { fetchChats, fetchSessions } from '../services/apiService';


export default function Chats() {
  const [sessionIds, setSessionIds] = useState([]);  // State to store session IDs
  const [chats, setChats] = useState([]);  // State to store chats for the selected session
  const [loading, setLoading] = useState(true);  // State to manage loading state
  const [selectedSessionId, setSelectedSessionId] = useState(null);  // State to store the selected session ID

  // Fetch session data from the API
  useEffect(() => {
    const fetchSessionData = async () => {
      const chatbotId = localStorage.getItem('chatbotId');  // Get chatbotId from localStorage
      if (!chatbotId) {
        console.error('Chatbot ID not found in localStorage');
        return;  // Exit if chatbotId is not found
      }

      try {
        setLoading(true);  // Set loading to true before the request
        const data = await fetchSessions(chatbotId);  // Fetch session data using the service
        setSessionIds(data.sessions);  // Set session IDs to the state
      } catch (error) {
        console.error('Error fetching session data:', error);
      } finally {
        setLoading(false);  // Set loading to false after the request is complete
      }
    };

    fetchSessionData();  // Call the function to fetch session data
  }, []);

  // Fetch chats for the selected session ID
  useEffect(() => {
    if (!selectedSessionId) return;  // Don't fetch if no session ID is selected

    const fetchChatData = async () => {
      try {
        setLoading(true);  // Set loading to true before the request
        const data = await fetchChats(selectedSessionId);  // Fetch chat data using the service
        setChats(data.chats);  // Set chat data to the state
      } catch (error) {
        console.error('Error fetching chat data:', error);
      } finally {
        setLoading(false);  // Set loading to false after the request is complete
      }
    };

    fetchChatData();  // Fetch chat data when sessionId changes
  }, [selectedSessionId]);

  // Handle session selection
  const handleSessionSelect = (sessionId) => {
    setSelectedSessionId(sessionId);  // Set the selected session ID
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">

        
        {/* Session ID Dropdown */}
        <div className="mb-4">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedSessionId || 'Select Session ID'}
            </button>
            <ul className="dropdown-menu">
              {loading ? (
                <li>
                  <a className="dropdown-item">Loading...</a>
                </li>
              ) : sessionIds.length > 0 ? (
                sessionIds.map((sessionId, index) => (
                  <li key={index}>
                    <a className="dropdown-item" onClick={() => handleSessionSelect(sessionId)}>
  {sessionId}
</a>
                  </li>
                ))
              ) : (
                <li>
                  <a className="dropdown-item">No Sessions Available</a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Chat Table */}
        <div className="card">
          <div className="card-datatable table-responsive">
            <table className="datatables-order table">
              <thead>
                <tr>
                  <th>User Message</th>
                  <th>Bot Response</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="3" className="text-center">Loading...</td>
                  </tr>
                ) : chats.length > 0 ? (
                  chats.map((chat) => (
                    <tr key={chat._id}>
                      <td>{chat.user_message}</td>
                      <td>{chat.bot_response}</td>
                      <td>{new Date(chat.timestamp).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">No Chats Available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="content-footer footer bg-footer-theme">
  <div className="container-xxl">
    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
      <div className="text-body mb-2 mb-md-0">
        © 2025, All rights reserved to <strong>Zencia</strong>
      </div>
      <div className="d-none d-lg-inline-block">
        <a href="#" className="footer-link me-4" target="_blank">Terms & Contions</a>
        <a href="https://pixinvent.ticksy.com/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

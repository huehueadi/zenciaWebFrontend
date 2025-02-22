// // import React, { useState, useEffect } from "react";
// // import { fetchChats, fetchSessions } from "../services/apiService";

// // export default function Chats() {
// //   const [sessionIds, setSessionIds] = useState([]); // State to store session IDs
// //   const [chats, setChats] = useState([]); // State to store chats for the selected session
// //   const [loading, setLoading] = useState(true); // State to manage loading state
// //   const [selectedSessionId, setSelectedSessionId] = useState(null); // State to store the selected session ID

// //   // Fetch session data from the API
// //   useEffect(() => {
// //     const fetchSessionData = async () => {
// //       const chatbotId = localStorage.getItem("chatbotId"); // Get chatbotId from localStorage
// //       if (!chatbotId) {
// //         console.error("Chatbot ID not found in localStorage");
// //         return; // Exit if chatbotId is not found
// //       }

// //       try {
// //         setLoading(true); // Set loading to true before the request
// //         const data = await fetchSessions(chatbotId); // Fetch session data using the service
// //         setSessionIds(data.sessions); // Set session IDs to the state
// //       } catch (error) {
// //         console.error("Error fetching session data:", error);
// //       } finally {
// //         setLoading(false); // Set loading to false after the request is complete
// //       }
// //     };

// //     fetchSessionData(); // Call the function to fetch session data
// //   }, []);

// //   // Fetch chats for the selected session ID
// //   useEffect(() => {
// //     if (!selectedSessionId) return; // Don't fetch if no session ID is selected

// //     const fetchChatData = async () => {
// //       try {
// //         setLoading(true); // Set loading to true before the request
// //         const data = await fetchChats(selectedSessionId); // Fetch chat data using the service
// //         setChats(data.chats); // Set chat data to the state
// //       } catch (error) {
// //         console.error("Error fetching chat data:", error);
// //       } finally {
// //         setLoading(false); // Set loading to false after the request is complete
// //       }
// //     };

// //     fetchChatData(); // Fetch chat data when sessionId changes
// //   }, [selectedSessionId]);

// //   // Handle session selection
// //   const handleSessionSelect = (sessionId) => {
// //     setSelectedSessionId(sessionId); // Set the selected session ID
// //   };

// //   return (
// //     <div className="content-wrapper">
// //       <div className="container-xxl flex-grow-1 container-p-y">
// //         <div className="card mb-6">
// //           <div className="card-widget-separator-wrapper">
// //             <div className="card-body card-widget-separator">
// //               <div className="row gy-4 gy-sm-1">
// //                 <div className="col-sm-6 col-lg-3">
// //                   <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
// //                     <div>
// //                       <h4 className="mb-0">56</h4>
// //                       <p className="mb-0">Total Sessions</p>
// //                     </div>
// //                     <div className="avatar me-sm-6">
// //                       <span className="avatar-initial rounded text-heading">
// //                         <i className="ri-calendar-2-line ri-26px" />
// //                       </span>
// //                     </div>
// //                   </div>
// //                   <hr className="d-none d-sm-block d-lg-none me-6" />
// //                 </div>
// //                 <div className="col-sm-6 col-lg-3">
// //                   <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
// //                     <div>
// //                       <h4 className="mb-0">12,689</h4>
// //                       <p className="mb-0">Completed Sessions</p>
// //                     </div>
// //                     <div className="avatar me-lg-6">
// //                       <span className="avatar-initial rounded text-heading">
// //                         <i className="ri-check-double-line ri-26px" />
// //                       </span>
// //                     </div>
// //                   </div>
// //                   <hr className="d-none d-sm-block d-lg-none" />
// //                 </div>
// //                 <div className="col-sm-6 col-lg-3">
// //                   <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
// //                     <div>
// //                       <h4 className="mb-0">124</h4>
// //                       <p className="mb-0">Active Sessions</p>
// //                     </div>
// //                     <div className="avatar me-sm-6">
// //                       <span className="avatar-initial rounded text-heading">
// //                         <i className="ri-wallet-3-line ri-26px" />
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="col-sm-6 col-lg-3">
// //                   <div className="d-flex justify-content-between align-items-start">
// //                     <div>
// //                       <h4 className="mb-0">32</h4>
// //                       <p className="mb-0">Total Messages</p>
// //                     </div>
// //                     <div className="avatar">
// //                       <span className="avatar-initial rounded text-heading">
// //                         <i className="ri-error-warning-line ri-26px" />
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Session ID Dropdown */}
// //         <div className="mb-4">
// //           <div className="btn-group">
// //             <button
// //               type="button"
// //               className="btn btn-outline-primary dropdown-toggle"
// //               data-bs-toggle="dropdown"
// //               aria-expanded="false"
// //             >
// //               {selectedSessionId || "Select User name"}
// //             </button>
// //             <ul className="dropdown-menu">
// //               {loading ? (
// //                 <li>
// //                   <a
// //                     className="dropdown-item"
// //                     href="#"
// //                     onClick={(e) => e.preventDefault()}
// //                   >
// //                     Loading...
// //                   </a>
// //                 </li>
// //               ) : sessionIds.length > 0 ? (
// //                 sessionIds.map((sessionId, index) => (
// //                   <li key={index}>
// //                     <button
// //                       className="dropdown-item"
// //                       onClick={() => handleSessionSelect(sessionId)}
// //                     >
// //                       {sessionId}
// //                     </button>
// //                   </li>
// //                 ))
// //               ) : (
// //                 <li>
// //                   <a
// //                     className="dropdown-item"
// //                     href="#"
// //                     onClick={(e) => e.preventDefault()}
// //                   >
// //                     No Users Available
// //                   </a>
// //                 </li>
// //               )}
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="mb-4">
// //           <div className="btn-group">
// //             <button
// //               type="button"
// //               className="btn btn-outline-primary dropdown-toggle"
// //               data-bs-toggle="dropdown"
// //               aria-expanded="false"
// //             >
// //               {selectedSessionId || "Select Session ID"}
// //             </button>
// //             <ul className="dropdown-menu">
// //               {loading ? (
// //                 <li>
// //                   <a
// //                     className="dropdown-item"
// //                     href="#"
// //                     onClick={(e) => e.preventDefault()}
// //                   >
// //                     Loading...
// //                   </a>
// //                 </li>
// //               ) : sessionIds.length > 0 ? (
// //                 sessionIds.map((sessionId, index) => (
// //                   <li key={index}>
// //                     <button
// //                       className="dropdown-item"
// //                       onClick={() => handleSessionSelect(sessionId)}
// //                     >
// //                       {sessionId}
// //                     </button>
// //                   </li>
// //                 ))
// //               ) : (
// //                 <li>
// //                   <a
// //                     className="dropdown-item"
// //                     href="#"
// //                     onClick={(e) => e.preventDefault()}
// //                   >
// //                     No Sessions Available
// //                   </a>
// //                 </li>
// //               )}
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Chat Table */}
// //         <div className="card">
// //           <div className="card-datatable table-responsive">
// //             <table className="datatables-order table">
// //               <thead>
// //                 <tr>
// //                   <th>User Message</th>
// //                   <th>Bot Response</th>
// //                   <th>Timestamp</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {loading ? (
// //                   <tr>
// //                     <td colSpan="3" className="text-center">
// //                       Loading...
// //                     </td>
// //                   </tr>
// //                 ) : chats.length > 0 ? (
// //                   chats.map((chat) => (
// //                     <tr key={chat._id}>
// //                       <td>{chat.user_message}</td>
// //                       <td>{chat.bot_response}</td>
// //                       <td>{new Date(chat.timestamp).toLocaleString()}</td>
// //                     </tr>
// //                   ))
// //                 ) : (
// //                   <tr>
// //                     <td colSpan="3" className="text-center">
// //                       No Chats Available
// //                     </td>
// //                   </tr>
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// import React, { useState, useEffect } from "react";
// import { fetchChats, fetchSessions } from "../services/apiService";

// export default function Chats() {
//   const [sessionIds, setSessionIds] = useState([]); // Ensure it's always an array
//   const [usernames, setUsernames] = useState([]); // Ensure it's always an array
//   const [chats, setChats] = useState([]); // State to store chats for the selected session
//   const [loading, setLoading] = useState(true); // State to manage loading state
//   const [selectedSessionId, setSelectedSessionId] = useState(null); // State to store the selected session ID
//   const [selectedUserName, setSelectedUserName] = useState(null); // State to store selected user name

//   // Fetch session data from the API
//   useEffect(() => {
//     const fetchSessionData = async () => {
//       const chatbotId = localStorage.getItem("chatbotId"); // Get chatbotId from localStorage
//       if (!chatbotId) {
//         console.error("Chatbot ID not found in localStorage");
//         return; // Exit if chatbotId is not found
//       }

//       try {
//         setLoading(true); // Set loading to true before the request
//         const data = await fetchSessions(chatbotId); // Fetch session data using the service
//         setSessionIds(data.sessions || []); // Set session IDs to the state (default to empty array if undefined)
//       } catch (error) {
//         console.error("Error fetching session data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after the request is complete
//       }
//     };

//     fetchSessionData(); // Call the function to fetch session data
//   }, []);

//   // Fetch usernames from the API
//   useEffect(() => {
//     const fetchUsernames = async () => {
//       try {
//         setLoading(true); // Set loading to true before the request
  
//         // Get the token from localStorage
//         const token = localStorage.getItem("authToken");
  
//         // Check if the token is available
//         if (!token) {
//           console.error("No token found in localStorage");
//           return;
//         }
  
//         // Fetch users with the Authorization token in the header
//         const response = await fetch("http://localhost:8080/v1/admin/users", {
//           method: "GET", // HTTP method
//           headers: {
//             "Authorization": token, // Add the token in Authorization header
//             "Content-Type": "application/json",
//           },
//         });
  
//         // Handle response
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
  
//         const data = await response.json(); // Assuming the response contains a list of users
//         setUsernames(data.users || []); // Set usernames to state (default to empty array if undefined)
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after the request is complete
//       }
//     };
  
//     fetchUsernames(); // Call the function to fetch usernames
//   }, []); // Empty dependency array, so this runs once on mount
  
  
  

//   // Fetch chats for the selected session ID
//   useEffect(() => {
//     if (!selectedSessionId) return; // Don't fetch if no session ID is selected

//     const fetchChatData = async () => {
//       try {
//         setLoading(true); // Set loading to true before the request
//         const data = await fetchChats(selectedSessionId); // Fetch chat data using the service
//         setChats(data.chats || []); // Set chat data to the state (default to empty array if undefined)
//       } catch (error) {
//         console.error("Error fetching chat data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after the request is complete
//       }
//     };

//     fetchChatData(); // Fetch chat data when sessionId changes
//   }, [selectedSessionId]);

//   // Handle session selection
//   const handleSessionSelect = (sessionId) => {
//     setSelectedSessionId(sessionId); // Set the selected session ID
//   };

//   // Handle username selection
//   const handleUserNameSelect = (username) => {
//     setSelectedUserName(username); // Set the selected username
//   };

//   return (
//     <div className="content-wrapper">
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
//                   <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
//                     <div>
//                       <h4 className="mb-0">12,689</h4>
//                       <p className="mb-0">Completed Sessions</p>
//                     </div>
//                     <div className="avatar me-lg-6">
//                       <span className="avatar-initial rounded text-heading">
//                         <i className="ri-check-double-line ri-26px" />
//                       </span>
//                     </div>
//                   </div>
//                   <hr className="d-none d-sm-block d-lg-none" />
//                 </div>
//                 <div className="col-sm-6 col-lg-3">
//                   <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
//                     <div>
//                       <h4 className="mb-0">124</h4>
//                       <p className="mb-0">Active Sessions</p>
//                     </div>
//                     <div className="avatar me-sm-6">
//                       <span className="avatar-initial rounded text-heading">
//                         <i className="ri-wallet-3-line ri-26px" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-lg-3">
//                   <div className="d-flex justify-content-between align-items-start">
//                     <div>
//                       <h4 className="mb-0">32</h4>
//                       <p className="mb-0">Total Messages</p>
//                     </div>
//                     <div className="avatar">
//                       <span className="avatar-initial rounded text-heading">
//                         <i className="ri-error-warning-line ri-26px" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Username Dropdown */}
//         <div className="mb-4">
//       <div className="btn-group">
//         <button
//           type="button"
//           className="btn btn-outline-primary dropdown-toggle"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           {selectedSessionId || "Select User name"}
//         </button>
//         <ul className="dropdown-menu">
//           {loading ? (
//             <li>
//               <a
//                 className="dropdown-item"
//                 href="#"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 Loading...
//               </a>
//             </li>
//           ) : usernames.length > 0 ? (
//             usernames.map((user, index) => (
//               <li key={index}>
//                 <button
//                   className="dropdown-item"
//                   onClick={() => handleSessionSelect(user.username)} // assuming you want to select by username
//                 >
//                   {user.username} {/* Render the username here */}
//                 </button>
//               </li>
//             ))
//           ) : (
//             <li>
//               <a
//                 className="dropdown-item"
//                 href="#"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 No Users Available
//               </a>
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>

//         {/* Session ID Dropdown */}
//         <div className="mb-4">
//           <div className="btn-group">
//             <button
//               type="button"
//               className="btn btn-outline-primary dropdown-toggle"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               {selectedSessionId || "Select Session ID"}
//             </button>
//             <ul className="dropdown-menu">
//               {loading ? (
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="#"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     Loading...
//                   </a>
//                 </li>
//               ) : sessionIds.length > 0 ? (
//                 sessionIds.map((sessionId, index) => (
//                   <li key={index}>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleSessionSelect(sessionId)}
//                     >
//                       {sessionId}
//                     </button>
//                   </li>
//                 ))
//               ) : (
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="#"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     No Sessions Available
//                   </a>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>

//         {/* Chat Table */}
//         <div className="card">
//           <div className="card-datatable table-responsive">
//             <table className="datatables-order table">
//               <thead>
//                 <tr>
//                   <th>User Message</th>
//                   <th>Bot Response</th>
//                   <th>Timestamp</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan="3" className="text-center">
//                       Loading...
//                     </td>
//                   </tr>
//                 ) : chats.length > 0 ? (
//                   chats.map((chat) => (
//                     <tr key={chat._id}>
//                       <td>{chat.user_message}</td>
//                       <td>{chat.bot_response}</td>
//                       <td>{new Date(chat.timestamp).toLocaleString()}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="3" className="text-center">
//                       No Chats Available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










import React, { useState, useEffect } from "react";
import { fetchChats, fetchSessions } from "../services/apiService";

export default function Chats() {
  const [sessionIds, setSessionIds] = useState([]); // State to store session IDs
  const [usernames, setUsernames] = useState([]); // State to store usernames
  const [chats, setChats] = useState([]); // State to store chats for selected session
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [selectedSessionId, setSelectedSessionId] = useState(null); // Selected session ID
  const [selectedUserName, setSelectedUserName] = useState(null); // Selected username
  const [userId, setUserId] = useState(null); // State to store user ID of selected username

  // Fetch usernames from the API
  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        setLoading(true); // Set loading before making the API request
  
        // Get the token from localStorage
        const token = localStorage.getItem("authToken");
  
        // Check if the token is available
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }
  
        // Fetch users with the Authorization token in the header
        const response = await fetch("https://vercel-bot-sigma-nine.vercel.app/v1/admin/users", {
          method: "GET", // HTTP method
          headers: {
            "Authorization": token, // Add the token in Authorization header
            "Content-Type": "application/json",
          },
        });
  
        // Handle response
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
  
        const data = await response.json(); // Assuming the response contains a list of users
        setUsernames(data.users || []); // Set usernames to state (default to empty array if undefined)
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Set loading to false after the request is complete
      }
    };
  
    fetchUsernames(); // Fetch usernames on component mount
  }, []);

  // Handle username selection
  const handleUserNameSelect = async (username) => {
    setSelectedUserName(username); // Set selected username
    
    // Find the userId corresponding to the selected username
    const selectedUser = usernames.find(user => user.username === username);
    
    if (selectedUser) {
      setUserId(selectedUser.userid); // Set the userId of the selected username
    }
    
    // Clear the selected session ID when the username changes
    setSelectedSessionId(null); // Reset the session ID
    setChats([]); // Clear the chat data
    
    // Fetch sessions for the selected user
    if (selectedUser && selectedUser.userid) {
      await fetchSessionData(selectedUser.userid); // Fetch sessions for the selected user
    }
  };
  

  // Fetch sessions for the selected user ID
  const fetchSessionData = async (userId) => {
    try {
      setLoading(true); // Set loading to true before the request

      // Call fetchSessions using the userId
      const data = await fetchSessions(userId); // Assuming fetchSessions expects a userId

      // Set session IDs to the state
      setSessionIds(data.sessions || []); // If no sessions, default to empty array
    } catch (error) {
      console.error("Error fetching session data:", error);
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  // Handle session selection
  const handleSessionSelect = (sessionId) => {
    setSelectedSessionId(sessionId); // Set the selected session ID
  };

  // Fetch chats for the selected session ID
  useEffect(() => {
    if (!selectedSessionId) return; // Don't fetch if no session ID is selected

    const fetchChatData = async () => {
      try {
        setLoading(true); // Set loading to true before the request
        const data = await fetchChats(selectedSessionId); // Fetch chat data using the service
        setChats(data.chats || []); // Set chat data to the state (default to empty array if undefined)
      } catch (error) {
        console.error("Error fetching chat data:", error);
      } finally {
        setLoading(false); // Set loading to false after the request is complete
      }
    };

    fetchChatData(); // Fetch chat data when sessionId changes
  }, [selectedSessionId]);

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card mb-6">
          <div className="card-widget-separator-wrapper">
            <div className="card-body card-widget-separator">
              <div className="row gy-4 gy-sm-1">
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                    <div>
                      <h4 className="mb-0">56</h4>
                      <p className="mb-0">Total Sessions</p>
                    </div>
                    <div className="avatar me-sm-6">
                      <span className="avatar-initial rounded text-heading">
                        <i className="ri-calendar-2-line ri-26px" />
                      </span>
                    </div>
                  </div>
                  <hr className="d-none d-sm-block d-lg-none me-6" />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                    <div>
                      <h4 className="mb-0">12,689</h4>
                      <p className="mb-0">Completed Sessions</p>
                    </div>
                    <div className="avatar me-lg-6">
                      <span className="avatar-initial rounded text-heading">
                        <i className="ri-check-double-line ri-26px" />
                      </span>
                    </div>
                  </div>
                  <hr className="d-none d-sm-block d-lg-none" />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                    <div>
                      <h4 className="mb-0">124</h4>
                      <p className="mb-0">Active Sessions</p>
                    </div>
                    <div className="avatar me-sm-6">
                      <span className="avatar-initial rounded text-heading">
                        <i className="ri-wallet-3-line ri-26px" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h4 className="mb-0">32</h4>
                      <p className="mb-0">Total Messages</p>
                    </div>
                    <div className="avatar">
                      <span className="avatar-initial rounded text-heading">
                        <i className="ri-error-warning-line ri-26px" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Username Dropdown */}
        <div className="mb-4">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedUserName || "Select User name"}
            </button>
            <ul className="dropdown-menu">
              {loading ? (
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                    Loading...
                  </a>
                </li>
              ) : usernames.length > 0 ? (
                usernames.map((user, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleUserNameSelect(user.username)} // Handle username select
                    >
                      {user.username} {/* Display the username */}
                    </button>
                  </li>
                ))
              ) : (
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                    No Users Available
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Session ID Dropdown */}
        <div className="mb-4">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedSessionId || "Select Session ID"}
            </button>
            <ul className="dropdown-menu">
              {loading ? (
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                    Loading...
                  </a>
                </li>
              ) : sessionIds.length > 0 ? (
                sessionIds.map((sessionId, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSessionSelect(sessionId)} // Handle session select
                    >
                      {sessionId} {/* Display session ID */}
                    </button>
                  </li>
                ))
              ) : (
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                    No Sessions Available
                  </a>
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
                    <td colSpan="3" className="text-center">
                      Loading...
                    </td>
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
                    <td colSpan="3" className="text-center">
                      No Chats Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

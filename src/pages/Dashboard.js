import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Homepage.css';

function Dashboard() {
  const [username, setUsername] = useState('');
  const [mostAskedData, setMostAskedData] = useState([]); // State to store most asked data
  const [unansweredData, setUnansweredData] = useState([]); // State to store unanswered data
  const [sessionsData, setSessionsData] = useState(null); // State to store session data
  const [retentionData, setRetentionData] = useState(null); // State to store retention data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [totalMessages, setTotalMessages] = useState(0); // State to store totalMessages
  const [loadingMessages, setLoadingMessages] = useState(true); // Loading state for messages

  const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token'); // Retrieve token from localStorage
  };

  // Function to get chatbotId from localStorage
  const getChatbotIdFromLocalStorage = () => {
    return localStorage.getItem('chatbotId'); // Retrieve chatbotId from localStorage
  };
  // Function to extract username from localStorage
  const getUsernameFromLocalStorage = () => {
    const user = localStorage.getItem('user'); // Retrieve user object from localStorage
    if (user) {
      const parsedUser = JSON.parse(user);
      return parsedUser.username; // Extract username from the parsed object
    }
    return 'John'; // Fallback if no user is found
  };

  // Set the username from localStorage when the component mounts
  useEffect(() => {
    const user = getUsernameFromLocalStorage();
    setUsername(user); // Update the state with the username
  }, []);

  // Fetch most asked questions using the chatbot_id
  useEffect(() => {
    const fetchMostAskedQuestions = async () => {
      setLoading(true);
      const chatbotId = localStorage.getItem('chatbotId');
    console.log(chatbotId);
    
      try {
        const response = await axios.get(`https://zencia-web-zeta.vercel.app/v1/most-asked/${chatbotId}`);
        console.log(response);
        
        // Ensure response data is an array before updating state
        if (Array.isArray(response.data)) {
          setMostAskedData(response.data);
        } else {
          setMostAskedData([]); // Fallback to empty array if response is not an array
        }
      } catch (error) {
        console.error('Error fetching most asked questions:', error);
        setMostAskedData([]); // Ensure state is still an array on error
      } finally {
        setLoading(false);
      }
    };
    

    // Fetch unanswered questions using the chatbot_id
    const fetchUnansweredQuestions = async () => {
      setLoading(true);
      const chatbotId = localStorage.getItem('chatbotId'); // Get chatbotId from localStorage

      try {
        const response = await axios.get(`https://vercel-bot-sigma-nine.vercel.app/v1/unanswered/${chatbotId}`);
        setUnansweredData(response.data); // Set the unanswered questions data in state
      } catch (error) {
        console.error('Error fetching unanswered questions:', error);
      }
    };

    // Fetch session data to calculate unavailable chats
    const fetchSessionData = async () => {
      const chatbotId = localStorage.getItem('chatbotId'); // Get chatbotId from localStorage
      try {
        const response = await axios.get(`https://vercel-bot-sigma-nine.vercel.app/v1/sessions/${chatbotId}`);
        setSessionsData(response.data); // Set session data in state
      } catch (error) {
        console.error('Error fetching session data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch retention data using the chatbot_id
    const fetchRetentionData = async () => {
      const chatbotId = localStorage.getItem('chatbotId'); // Get chatbotId from localStorage
      try {
        const response = await axios.get(`https://vercel-bot-sigma-nine.vercel.app/v1/retention/${chatbotId}`);
        setRetentionData(response.data); // Set retention data in state
      } catch (error) {
        console.error('Error fetching retention data:', error);
      }
    };
    const fetchTotalMessages = async () => {
      setLoadingMessages(true);
      const chatbotId = getChatbotIdFromLocalStorage(); // Get chatbotId
      const token = getTokenFromLocalStorage(); // Get token

      try {
        const response = await axios.get(`https://vercel-bot-sigma-nine.vercel.app/v1/messages/${chatbotId}`, {
          headers: {
            Authorization: token, // Pass token for authentication
          },
        });
        setTotalMessages(response.data.totalMessages); // Set totalMessages in state
      } catch (error) {
        console.error('Error fetching total messages:', error);
      } finally {
        setLoadingMessages(false);
      }
    };

    fetchTotalMessages();
    // Call all functions when component mounts
    fetchMostAskedQuestions();
    fetchUnansweredQuestions();
    fetchSessionData();
    fetchRetentionData();
  }, []);

  // Calculate unavailable chats by subtracting available sessions from total chats
  const calculateUnavailableChats = () => {
    if (sessionsData) {
      const totalChats = sessionsData.totalChats;
      const availableSessions = sessionsData.sessions.length;
      return totalChats - availableSessions;
    }
    return 0; // Fallback if sessionsData is not available
  };

  return (

<div className="content-wrapper">
  {/* Content */}
  <div className="container-xxl flex-grow-1 container-p-y">
    <div className="row g-6">
      {/* Gamification Card */}
      <div className="col-md-12 col-xxl-8">
      <div className="card">
        <div className="d-flex align-items-end row">
          <div className="col-md-6 order-2 order-md-1">
          <div className="card-body">
  {/* Replace hardcoded "John" with the dynamic username */}
  <h4 className="card-title mb-4">Welcome <span className="fw-bold">{username}!</span> 🎉</h4>
  <p className="mb-0"></p>
  <p>You’re doing great! Your chatbot is performing better than ever today. 😎.</p>
  
  {/* Use Link for navigation */}
</div>
          </div>
          <div className="col-md-6 text-center text-md-end order-1 order-md-2">
            <div className="card-body pb-0 px-0 pt-2">
              <img 
                src="../../assets/img/illustrations/illustration-john-light.png" 
                height={186} 
                className="scaleX-n1-rtl" 
                alt="View Profile" 
                data-app-light-img="illustrations/illustration-john-light.png" 
                data-app-dark-img="illustrations/illustration-john-dark.html" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      {/*/ Gamification Card */}
      {/* Statistics Total Order */}
      <div className="col-xxl-2 col-sm-6">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
            <div className="avatar">
              <div className="avatar-initial bg-label-primary rounded-3">
                <i className="ri-shopping-cart-2-line ri-24px" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="ri-arrow-up-s-line text-success" />
            </div>
          </div>
          <div className="card-info mt-5">
            <h5 className="mb-1">{sessionsData ? sessionsData.totalChats : 'Unavailable'}</h5>
            {/* Display totalChats directly from API response */}
            <p>Total Sessions</p>
            <div className="badge bg-label-secondary rounded-pill">Till Starting</div>
          </div>
        </div>
      </div>
    </div>
      {/*/ Statistics Total Order */}
      {/* Statistics Total Order */}
      <div className="col-xxl-2 col-sm-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div className="avatar">
                    <div className="avatar-initial bg-label-primary rounded-3">
                      <i className="ri-user-line ri-24px" />
                    </div>
                  </div>
                </div>
                <div className="card-info mt-5">
                  <h5 className="mb-1">
                    {retentionData ? `${retentionData.RetentionRate}` : 'Loading...'}
                  </h5>
                  <p>User Retention</p>
                  <div className="badge bg-label-secondary rounded-pill">Last 1 Month</div>
                </div>
              </div>
            </div>
          </div>
      {/*/ Statistics Total Order */}
      {/*/ Sessions line chart */}
      {/* Project Statistics */}
      <div className="col-md-6 col-xxl-4">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0 me-2">Most Asked Questions</h5>
          <div className="dropdown">
            <button
              className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
              type="button"
              id="projectStatus"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="ri-more-2-line ri-20px" />
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectStatus">
              <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
              <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
              <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between p-4 border-bottom">
          <p className="mb-0 fs-xsmall">Questions</p>
          <p className="mb-0 fs-xsmall">Count</p>
        </div>
        <div className="card-body">
          {loading ? (
            <p>Loading...</p> // Show loading message while fetching data
          ) : (
            <ul className="p-0 m-0">
  {(Array.isArray(mostAskedData) ? mostAskedData : []).map((question, index) => (

    <li key={index} className="d-flex align-items-center mb-6">
      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
        <div className="me-2">
          {/* Dot before the question text */}
          <span className="dot">•</span> 
          {/* Display question _id as the name */}
          <h6 className="mb-1 d-inline">{question._id}</h6>
        </div>
        {/* Replace the count with the dollar price */}
        <div className="badge bg-label-primary rounded-pill">
          {question.count} {/* You can apply logic here to map count to dollar */}
        </div>
      </div>
    </li>
  ))}
</ul>
          )}
        </div>
      </div>
    </div>
      {/*/ Project Statistics */}
      {/* Performance Chart */}
      <div className="col-md-6 col-xxl-4">
  <div className="card h-100">
    <div className="card-header d-flex align-items-center justify-content-between">
      <h5 className="card-title m-0 me-2">Unanswered Questions</h5>
    </div>
    <div className="d-flex justify-content-between p-4 border-bottom">
      <p className="mb-0 fs-xsmall">Questions</p>
      <p className="mb-0 fs-xsmall">Count</p>
    </div>
    <div className="card-body">
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching data
      ) : (
        <ul className="p-0 m-0">
          {unansweredData.map((question, index) => (
            <li key={index} className="d-flex align-items-center mb-6">
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  {/* Dot before the question text */}
                  <span className="dot">•</span>
                  {/* Display question _id as the name */}
                  <h6 className="mb-1 d-inline">{question._id}</h6>
                </div>
                {/* Replace the count with the dollar price */}
                <div className="badge bg-label-primary rounded-pill">
                  {question.count} {/* Mapping count to dollar price */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</div>


      {/*/ Performance Chart */}
     
      
      {/* Multiple widgets */}
      <div className="col-md-6 col-xxl-4">
        <div className="row g-4">
          {/* Total Revenue chart */}
          <div className="col-md-6 col-sm-6">
  <div className="card h-100">
    <div className="card-header pb-xl-8">
      <div className="d-flex align-items-center mb-1 flex-wrap">
      <h5>{sessionsData ? sessionsData.totalChats : 'Unavailable'}</h5> {/* Display totalChats as total users */}
      </div>
      <span className="d-block card-subtitle">Total User</span>
    </div>
    <div className="card-body">
      {/* Map totalChats to total users in the "Unavailable" section */}
    </div>
  </div>
</div>

          {/*/ Total Revenue chart */}
          <div className="col-md-6 col-sm-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div className="avatar">
                    <div className="avatar-initial bg-label-success rounded-3">
                      <i className="ri-handbag-line ri-24px" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="ri-arrow-up-s-line text-success" />
                  </div>
                </div>
                <div className="card-info mt-5 mt-xl-8">
                  <h5 className="mb-1">Unavialable</h5>
                  <p>User Behaviour</p>
                  <div className="badge bg-label-secondary rounded-pill">Last Six Month</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div className="avatar">
                    <div className="avatar-initial bg-label-info rounded-3">
                      <i className="ri-links-line ri-24px" />
                    </div>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <p className="mb-0 text-success me-1">+62%</p>
                    <i className="ri-arrow-up-s-line text-success" />
                  </div> */}
                </div>
                <div className="card-info mt-5 mt-xl-8">
                  {/* Conditional rendering for loading state or totalMessages */}
                  {loadingMessages ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      <h5 className="mb-1">{totalMessages.toLocaleString()}</h5>
                      <p>Total Messages</p>
                    </>
                  )}
                  <div className="badge bg-label-secondary rounded-pill">Till Starting</div>
                </div>
              </div>
            </div>
          </div>
          {/* overview Radial chart */}
          {/* <div className="col-md-6 col-sm-6">
            <div className="card h-100">
              <div className="card-header pb-xl-7">
                <div className="d-flex align-items-center mb-1 flex-wrap">
                  <h5 className="mb-0 me-1">$67.1k</h5>
                  <p className="mb-0 text-success">+49%</p>
                </div>
                <span className="d-block card-subtitle">Overview</span>
              </div>
              <div className="card-body pb-xl-8">
                <div id="overviewChart" className="d-flex align-items-center" />
              </div>
            </div>
          </div> */}
          {/*/ overview Radial chart */}
        </div>
      </div>
      {/*/ Multiple widgets */}
    
    
     
      
    </div>
  </div>
  {/* / Content */}
  {/* Footer */}
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

  {/* / Footer */}
  <div className="content-backdrop fade" />
</div>

  );
}

export default Dashboard;
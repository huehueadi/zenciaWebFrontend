import React, { useState, useEffect } from 'react';

function Leads() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Extract the chatbotId from localStorage
    const chatbotId = localStorage.getItem('chatbotId'); // Assuming the key is 'chatbotId'

    if (!chatbotId) {
      setError('Chatbot ID is missing in localStorage.');
      setLoading(false);
      return;
    }

    // Fetch the API data
    const fetchData = async () => {
      const apiUrl = `https://zencia-web-ic1s.vercel.app/v1/check-sessions/${chatbotId}`; // Use the extracted chatbotId in the URL

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch sessions');
        }
        const data = await response.json();
        
        // Check if sessions are empty
        if (data.sessions && data.sessions.length > 0) {
          setSessions(data.sessions);
        } else {
          setSessions([]); // Set sessions to empty array to show "No chats found" in the table
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <h5 className="card-header">Leads</h5>
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Session ID</th>
                  <th>Email</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {sessions.length > 0 ? (
                  sessions.map((session) => (
                    <tr key={session._id}>
                      <td>{session._id}</td> {/* Use session._id or any other identifier */}
                      <td>{session.messages[0].includes('@') ? session.messages[0] : 'No email found'}</td> {/* Check if it's an email */}
                      <td>{session.messages[0].match(/\d{10}/) ? session.messages[0] : 'No contact number found'}</td> {/* Match contact number */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">No chats found</td> {/* No chats message */}
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
              <a href="#" className="footer-link me-4" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
              <a href="https://pixinvent.ticksy.com/" target="_blank" className="footer-link d-none d-sm-inline-block" rel="noopener noreferrer">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Leads;

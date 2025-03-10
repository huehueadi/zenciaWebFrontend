import React, { useEffect, useState } from "react";

function GetChatbot() {
  const [chatbotId, setChatbotId] = useState(null);
  const [copyMessage, setCopyMessage] = useState(""); // State for showing the "Copied" message

  // Get chatbot ID from localStorage
  useEffect(() => {
    const storedChatbotId = localStorage.getItem("chatbotId");
    if (storedChatbotId) {
      setChatbotId(storedChatbotId);
    }
  }, []);

  // Function to copy script to clipboard
  const copyScriptToClipboard = () => {
    const scriptText = `
      <div id="chatbot-widget"></div>
      <script src="https://chatbotui-ng3v.vercel.app/chatbot-widget.bundle.js"></script>
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          console.log("DOM loaded, checking for ChatbotWidget");

          const apiUrl = 'https://zenciaweb.onrender.com/v1/chat/${chatbotId}'; 

          const config = {
            apiUrl: apiUrl
          };

          if (window.ChatbotWidget && typeof window.ChatbotWidget.init === 'function') {
            window.ChatbotWidget.init('chatbot-widget', config);
            console.log("ChatbotWidget initialized via init method with API URL");
          } else if (window.initChatbot && typeof window.initChatbot === 'function') {
            window.initChatbot('chatbot-widget', config);
            console.log("ChatbotWidget initialized via initChatbot function with API URL");
          } else {
            console.error('No compatible initialization method found for ChatbotWidget');
            console.log('Available methods:', window.ChatbotWidget);
          }
        });
      </script>
    `;

    navigator.clipboard.writeText(scriptText).then(() => {
      setCopyMessage("Script copied!"); // Set the message when copied
      setTimeout(() => setCopyMessage(""), 2000); // Clear the message after 2 seconds
    });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card mb-6">
        <div className="card-body">
          {/* Trial Information Heading */}
          <h5 className="mb-4 text-danger">
            Note: The script and API key are valid for only 15 days for trial purposes.
          </h5>

          {/* Updated Heading */}
          <h5>Embed the Script for Chatbot Integration</h5>
          <p className="mb-6">
            To integrate the chatbot into your webpage, copy the script provided below and embed it within your HTML. This script connects the chatbot to your project, and the API URL dynamically includes your unique chatbot ID.
          </p>

          {/* Display chatbot ID and Provide Embed Script */}
          {chatbotId ? (
            <div className="row">
              <div className="col-md-12">
                <div className="bg-lighter rounded-3 p-4 mb-6">
                  <div className="d-flex align-items-center mb-2">
                    <h6 className="mb-0 me-3">Chatbot Integration Script</h6>
                    <span className="badge bg-label-primary rounded-pill">
                      Full Access
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <p className="me-3 fw-medium">
                      Copy the script below to integrate the chatbot:
                    </p>
                  </div>

                  {/* Provide the script block for copying */}
                  <pre>
                    <code>
                      {`
                        <div id="chatbot-widget"></div>
                        <script src="https://chatbotui-ng3v.vercel.app/chatbot-widget.bundle.js"></script>
                        <script>
                          document.addEventListener('DOMContentLoaded', () => {
                            console.log("DOM loaded, checking for ChatbotWidget");

                            const apiUrl = 'https://zenciaweb.onrender.com/v1/chat/${chatbotId}'; 

                            const config = {
                              apiUrl: apiUrl
                            };

                            if (window.ChatbotWidget && typeof window.ChatbotWidget.init === 'function') {
                              window.ChatbotWidget.init('chatbot-widget', config);
                              console.log("ChatbotWidget initialized via init method with API URL");
                            } else if (window.initChatbot && typeof window.initChatbot === 'function') {
                              window.initChatbot('chatbot-widget', config);
                              console.log("ChatbotWidget initialized via initChatbot function with API URL");
                            } else {
                              console.error('No compatible initialization method found for ChatbotWidget');
                              console.log('Available methods:', window.ChatbotWidget);
                            }
                          });
                        </script>
                      `}
                    </code>
                  </pre>
                  <button
                    className="btn btn-primary"
                    onClick={copyScriptToClipboard}
                  >
                    Copy Script
                  </button>
                  {/* Show "Copied" message when the script is copied */}
                  {copyMessage && (
  <span className="text-success ms-3 fw-bold" style={{ fontSize: '16px', color: '#28a745' }}>
    {copyMessage}
  </span>
)}
                </div>
              </div>
            </div>
          ) : (
            <p>No chatbot found in local storage.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetChatbot;

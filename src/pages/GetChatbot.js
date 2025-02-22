import React, { useState, useEffect } from "react";

function GetChatbot() {
  const [chatbotId, setChatbotId] = useState(null);

  // Get chatbot ID from localStorage
  useEffect(() => {
    const storedChatbotId = localStorage.getItem("chatbotId");
    if (storedChatbotId) {
      setChatbotId(storedChatbotId);
    }
  }, []);

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("API Key copied to clipboard!");
    });
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card mb-6">
          <div className="card-body">
            <h5>API Key List &amp; Access</h5>
            <p className="mb-6">
              An API key is a simple encrypted string that identifies an
              application without any principal. They are useful for accessing
              public data anonymously, and are used to associate API requests
              with your project for quota and billing.
            </p>

            {/* Display chatbot ID */}
            {chatbotId ? (
              <div className="row">
                <div className="col-md-12">
                  <div className="bg-lighter rounded-3 p-4 mb-6">
                    <div className="d-flex align-items-center mb-2">
                      <h6 className="mb-0 me-3">Chatbot ID</h6>
                      <span className="badge bg-label-primary rounded-pill">
                        Full Access
                      </span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-3 fw-medium">{chatbotId}</span>
                      <span className="cursor-pointer" onClick={() => copyToClipboard(chatbotId)}>
                        <i className="ri-file-copy-line ri-20px" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>No chatbot found in local storage.</p>
            )}

            {/* API Usage Instructions */}
            <div className="mt-5">
              <h6>How to Use the API</h6>
              <p>
                To interact with the chatbot, you can send a POST request to the following endpoint:
              </p>
              <code>https://bot-backend-main.onrender.com/chat/:chatbotid</code>
              <p>
                Replace <code>:chatbotid</code> with the actual chatbot ID. For example:
              </p>
              <code>https://bot-backend-main.onrender.com/chat/{chatbotId}</code>
              <p>
                The request body should be in the following format:
              </p>
              <pre>
                {`
{
  "message": "hello"
}
`}
              </pre>
              <p>
                This will send a message to the chatbot and receive a response. You can replace "hello" with any message you want the bot to respond to.
              </p>
            </div>
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

export default GetChatbot;

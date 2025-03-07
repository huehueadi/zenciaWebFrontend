import React, { useEffect, useState } from "react";
import "./App.css";

const ChatInterface = () => {
  const [message, setMessage] = useState(""); // Stores the message input by the user
  const [messages, setMessages] = useState([]); // Stores the list of messages (sent and received)
  const [userId, setUserId] = useState(null); // Stores the user ID from URL params
  const [loading, setLoading] = useState(false); // Tracks whether the AI is thinking

  // Get the user ID from the URL params (using window.location)
  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split("/")[2]; // Extract the user ID from the URL
    setUserId(id);
  }, []);

  // Function to send a message
  const sendMessage = async () => {
    if (message.trim()) {
      // Add the sent message to the state
      setMessages([
        ...messages,
        { text: message, type: "sent", timestamp: new Date().toLocaleTimeString() },
      ]);
      setMessage(""); 
      setLoading(true); 
  
      try {
        // Retrieve session ID from localStorage
        const sessionId = localStorage.getItem("sessionId");
  
        // Send the request to the backend API with sessionId in the headers
        const response = await fetch(`https://zencia-web-zeta.vercel.app/v1/chat/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "session-id": sessionId, // Pass the session ID in headers
          },
          body: JSON.stringify({ message }),
        });
        
        const data = await response.json();
  
        // Check if the response contains a new session_id, store it if it's new
        if (data.session_id) {
          localStorage.setItem("sessionId", data.session_id);
          console.log("Session ID stored:", data.session_id);
        }
  
        // If the response contains a bot response, update the state with the response
        if (data.response) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.response, type: "received", timestamp: new Date().toLocaleTimeString() },
          ]);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setLoading(false); // Set loading to false once the response is received
      }
    }
  };
  

  // Handle Enter key press for sending the message
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { // Prevent sending when shift+enter is used
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {/* Header */}
        <div className="chat-header">
          <div className="header-left">
            <div className="profile">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                alt="Profile"
              />
              <div className="profile-info">
                <h2>Zencia Ai</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Chat Area */}
        <div className="chat-area">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type === "sent" ? "sent" : "received"}`}
            >
              <div className="message-content">
                <p>{msg.text}</p>
                <span className="timestamp">{msg.timestamp}</span>
              </div>
            </div>
          ))}
          {/* Display "AI is thinking" message if loading */}
          {loading && (
            <div className="message received">
              <div className="message-content">
                <p>AI is thinking...</p>
              </div>
            </div>
          )}
        </div>
        {/* Input Area */}
        <div className="input-area">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            rows={1}
            className="message-input"
            onKeyDown={handleKeyDown} // Added the keydown listener here
          />
          <button className="send-button" onClick={sendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

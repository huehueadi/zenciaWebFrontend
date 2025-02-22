import React, { useState, useEffect } from "react";
import { FaShareAlt, FaDownload, FaTrashAlt, FaComments, FaMinus } from "react-icons/fa";
import "./App.css";

const Testchat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split("/")[2];
    setUserId(id);
  }, []);

  const handleMinimize = () => {
    setIsMinimized(true);
    setShowChat(false);
  };

  const handleChatButtonClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setShowChat(true);
    } else {
      setShowChat(!showChat);
    }
  };

  const sendMessage = async (messageText) => {
    if (messageText.trim()) {
      setMessages([...messages, { text: messageText, type: "sent", timestamp: new Date().toLocaleTimeString() }]);
      setMessage("");
      setLoading(true);
      
      try {
        const sessionId = localStorage.getItem("sessionId");
        
        const response = await fetch(`https://vercel-bot-sigma-nine.vercel.app/v1/chat/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "session-id": sessionId,
          },
          body: JSON.stringify({ message: messageText }),
        });
        
        const data = await response.json();
        
        if (data.session_id) {
          localStorage.setItem("sessionId", data.session_id);
        }
        
        if (data.response) {
          setMessages((prevMessages) => [
            ...prevMessages, 
            { text: data.response, type: "received", timestamp: new Date().toLocaleTimeString() }
          ]);
          
          // Text to Speech conversion for bot response
          const speech = new SpeechSynthesisUtterance(data.response);
          speech.lang = language;
          window.speechSynthesis.speak(speech);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(message);
    }
  };

  // **Voice Recognition Functionality (Continuous)**
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = true; // Keep listening continuously
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event) => console.error("Speech recognition error:", event);

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setMessage(transcript); // Set the recognized speech as message
      sendMessage(transcript);  // Automatically send the message after recognition
    };

    recognition.start();
  };

  const stopListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.stop(); // Stop listening when the user clicks the mic again
    setIsListening(false);
  };

  return (
    <div>
      <div className="chat-icon" onClick={handleChatButtonClick}>
        <FaComments size={40} color="#fff" />
      </div>

      {showChat && (
        <div className={`chat-container ${isMinimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <div className="header-left">
              <div className="profile">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Profile" />
                <div className="profile-info">
                  <h2>Zencia AI</h2>
                </div>
              </div>
            </div>
            <div className="header-right">
              <FaDownload className="header-icon" title="Export Chat" />
              <FaShareAlt className="header-icon" title="Share Chat" />
              <FaTrashAlt className="header-icon" onClick={() => setShowDeleteConfirm(true)} title="Delete Chat" />
              <FaMinus className="header-icon" onClick={handleMinimize} title="Minimize" />
            </div>
          </div>

          {showDeleteConfirm && (
            <div className="delete-popup">
              <div className="delete-popup-content">
                <p>Are you sure you want to delete this chat?</p>
                <div className="delete-buttons">
                  <button onClick={() => { setMessages([]); setShowDeleteConfirm(false); }}>Yes</button>
                  <button onClick={() => setShowDeleteConfirm(false)}>No</button>
                </div>
              </div>
            </div>
          )}

          <div className="chat-area">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type === "sent" ? "sent" : "received"}`}>
                <div className="message-content">
                  <p>{msg.text}</p>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            {loading && (
              <div className="message received">
                <div className="message-content">
                  <p>AI is thinking...</p>
                </div>
              </div>
            )}
          </div>

          {!isMinimized && (
            <div className="input-area">
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyDown={handleKeyDown}
                placeholder="Type a message" 
                rows={2} 
                className="input-text"
              />
              {/* Voice Input Button */}
              <button
                className="input-button small-btn"
                onClick={isListening ? stopListening : startListening}
              >
                {isListening ? "🎙️ Stop" : "🎤 Start"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Testchat;

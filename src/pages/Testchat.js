import React, { useEffect, useState } from "react";
import { FaComments, FaDownload, FaMinus, FaShareAlt, FaTrashAlt } from "react-icons/fa";

const Testchat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState("en-US"); // Default to English
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Language options
  const languages = [
    { code: "en-US", name: "English" },
    { code: "hi-IN", name: "हिंदी" }
  ];

  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split("/")[2];
    setUserId(id);

    // Initialize speech recognition with selected language
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = language;
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.maxAlternatives = 1;
      setRecognition(recognitionInstance);
    }
  }, [language]); // Reinitialize when language changes

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    if (isListening) {
      recognition?.stop();
    }
    setLanguage(newLanguage);
  };

  // Function to format response
  const formatResponse = (response) => {
    const phoneRegex = /\+?\d{1,3}[-\s]?\(?\d{1,4}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4}/g;
    const linkRegex = /https?:\/\/[^\s]+/g;
    const bulletPointRegex = /\*\s*(.*)/g;

    let formattedText = response;

    // Replace phone numbers with formatted text
    formattedText = formattedText.replace(phoneRegex, (match) => `<strong>${match}</strong>`);

    // Replace links with anchor tags
    formattedText = formattedText.replace(linkRegex, (match) => `<a href="${match}" target="_blank">${match}</a>`);

    // Replace bullet points with <ul> <li> elements
    formattedText = formattedText.replace(bulletPointRegex, (match, content) => {
      return `<li>${content}</li>`;
    });

    // Wrap bullet points with <ul> tag
    if (formattedText.includes("<li>")) {
      formattedText = `<ul>${formattedText}</ul>`;
    }

    return formattedText;
  };

  // Send message function
  const sendMessage = async (msg) => {
    if (msg.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: msg, type: "sent", timestamp: new Date().toLocaleTimeString() }
      ]);
      setMessage("");
      setLoading(true);

      try {
        const sessionId = localStorage.getItem("sessionId");

        const response = await fetch(`http://localhost:8080/v1/chat/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "session-id": sessionId,
            "preferred-language": language // Send language preference to server
          },
          body: JSON.stringify({ message: msg }),
        });

        const data = await response.json();

        if (data.session_id) {
          localStorage.setItem("sessionId", data.session_id);
        }

        if (data.response) {
          const formattedResponse = formatResponse(data.response); // Format the response text
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: formattedResponse, type: "received", timestamp: new Date().toLocaleTimeString() }
          ]);

          // Text to Speech conversion in selected language
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

  // Start speech recognition
  const startListening = () => {
    if (!recognition) return;

    recognition.onstart = () => {
      setIsListening(true);
      console.log("Speech recognition started");
    };

    recognition.onend = () => {
      setIsListening(false);
      console.log("Speech recognition ended");
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
      sendMessage(transcript);
    };

    try {
      recognition.start();
    } catch (error) {
      console.error("Error starting recognition:", error);
      recognition.stop();
      setTimeout(() => recognition.start(), 100);
    }
  };

  // Toggle speech recognition
  const toggleListening = () => {
    if (isListening) {
      recognition?.stop();
    } else {
      startListening();
    }
  };

  // Handle 'Enter' key press to send the message
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(message);
    }
  };

  // Minimize the chat
  const handleMinimize = () => {
    setIsMinimized(true);
    setShowChat(false);
  };

  // Toggle chat visibility
  const handleChatButtonClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setShowChat(true);
    } else {
      setShowChat(!showChat);
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <div className="chat-icon" onClick={handleChatButtonClick}>
        <FaComments size={40} color="#fff" />
      </div>

      {/* Chat Container */}
      {showChat && (
        <div className={`chat-container ${isMinimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <div className="header-left">
              {/* Profile Section */}
              <div className="profile">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                  alt="Profile"
                />
                <div className="profile-info">
                  <h2>Zencia AI</h2>
                </div>
              </div>
            </div>
            <div className="header-right">
              {/* Language Selector */}
              <div className="language-selector">
                <select 
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="language-select"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Action Icons */}
              <FaDownload className="header-icon" title="Export Chat" />
              <FaShareAlt className="header-icon" title="Share Chat" />
              <FaTrashAlt className="header-icon" onClick={() => setShowDeleteConfirm(true)} title="Delete Chat" />
              <FaMinus className="header-icon" onClick={handleMinimize} title="Minimize" />
            </div>
          </div>

          {/* Delete Confirmation Popup */}
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

          {/* Chat Messages */}
          <div className="chat-area">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type === "sent" ? "sent" : "received"}`}>
                <div className="message-content">
                  <div dangerouslySetInnerHTML={{ __html: msg.text }}></div>
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

          {/* Message Input Area */}
          {!isMinimized && (
            <div className="input-area">
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyDown={handleKeyDown}
                placeholder={language === "hi-IN" ? "संदेश टाइप करें" : "Type a message"}
                rows={2} 
                className="input-text"
              />
              <button 
                className="input-button small-btn" 
                onClick={toggleListening}
                style={{ backgroundColor: isListening ? '#ff4444' : '#4CAF50' }}
              >
                {isListening ? "🛑" : "🎤"}
              </button>
              <button 
                className="input-button small-btn" 
                onClick={() => sendMessage(message)}
              >
                ➤
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Testchat;



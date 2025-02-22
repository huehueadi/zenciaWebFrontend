// src/injectChatbot.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import Testchat from './pages/Testchat.js';

// Define injectChatbot function
export const injectChatbot = (options = {}) => {
  const div = document.createElement('div');
  div.id = 'chatbot-widget';
  document.body.appendChild(div);

  // Apply options (e.g., position, theme) to the injected widget
  const widgetProps = {
    ...options
  };

  // Use createRoot to render in React 18+
  const root = ReactDOM.createRoot(div);
  root.render(<Testchat {...widgetProps} />);
};

// Make injectChatbot globally accessible (optional, in case other scripts want to call it)
window.injectChatbot = injectChatbot;

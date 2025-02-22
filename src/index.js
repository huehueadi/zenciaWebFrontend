import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { injectChatbot } from './injectChatbot';

// Initialize the chatbot widget independently of the main app
injectChatbot();  // This will inject the chatbot widget into the page

// Render the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

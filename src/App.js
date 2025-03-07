import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminChats from './admin/AdminChats';
import AdminDashboard from './admin/AdminDashboard';
import CreateRole from './admin/CreateRole';
import UserRoles from './admin/Users';
import TestSidebar from './components/TestSidebar';
import Layout from './master/Layout';
import Analytics from './pages/Analytics';
import ChatInterface from './pages/ChatInterface';
import Chats from './pages/Chats';
import Dashboard from './pages/Dashboard';
import GetChatbot from './pages/GetChatbot';
import Leads from './pages/Leads';
import Login from './pages/Login';
import NotAuthorise from './pages/NotAuthorise';
import Register from './pages/Register';
import Testchat from './pages/Testchat';
import UserFeedback from './pages/UserFeedback';
import UserProfile from './pages/UserProfile';
import VoiceChat from './pages/VoiceChat';
import WebScraping from './pages/WebScrapping';
import PrivateRoute from './services/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<TestSidebar />} />
        <Route path="/voice/:userid" element={<VoiceChat />} />

        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<NotAuthorise />} />
        <Route path="/chat-agent/:userid" element={<ChatInterface />} />
        <Route path="/chat-test/:userid" element={<Testchat />} />


        {/* Layout route, with protected sub-routes */}
        <Route element={<Layout />}>
          {/* Protected Routes for Users */}
          <Route path="/" 
            element={<PrivateRoute element={<Chats />} redirectToAdmin={true} />} />
          <Route path="chats" 
            element={<PrivateRoute element={<Chats />} redirectToAdmin={true} />} />
          <Route path="analytics" 
            element={<PrivateRoute element={<Analytics />} redirectToAdmin={true} />} />
          <Route path="dashboard" 
            element={<PrivateRoute element={<Dashboard />} redirectToAdmin={true} />} />
          <Route path="training" 
            element={<PrivateRoute element={<WebScraping />} redirectToAdmin={true} />} />
          <Route path="user-profile" 
            element={<PrivateRoute element={<UserProfile />} redirectToAdmin={true} />} />
          <Route path="user-feedback" 
            element={<PrivateRoute element={<UserFeedback />} redirectToAdmin={true} />} />
          <Route path="leads" 
            element={<PrivateRoute element={<Leads />} redirectToAdmin={true} />} />
          <Route path="get-chatbot" 
            element={<PrivateRoute element={<GetChatbot />} redirectToAdmin={true} />} />

          {/* Protected Routes for Admin (with role check) */}
          <Route path="/admin/users" 
            element={<PrivateRoute element={<UserRoles />} requiredRole="admin" />} />
            <Route path="/admin/chat-logs" 
            element={<PrivateRoute element={<AdminChats />} requiredRole="admin" />} />
          <Route path="/admin/dashboard" 
            element={<PrivateRoute element={<AdminDashboard />} requiredRole="admin" />} />
            <Route path="/admin/roles" 
            element={<PrivateRoute element={<CreateRole />} requiredRole="admin" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

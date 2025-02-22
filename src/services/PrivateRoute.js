import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, requiredRole, redirectToAdmin = false }) => {
  const token = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole'); // Assume user role is stored in localStorage

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" />;
  }

  // If the user has the role of 'admin' and is trying to access user routes
  if (userRole === "admin" && redirectToAdmin) {
    // Redirect to the admin dashboard if they are trying to access user routes
    return <Navigate to="/admin/dashboard" />;
  }

  // Check if the user has the required role for this route
  if (requiredRole && requiredRole !== userRole) {
    // If the user doesn't have the required role, redirect to unauthorized page
    return <Navigate to="/unauthorized" />;
  }

  // If authenticated and role matches, render the requested component
  return element;
};

export default PrivateRoute;

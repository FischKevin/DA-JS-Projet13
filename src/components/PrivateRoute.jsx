import React from 'react';
// Import to access the Redux store state
import { useSelector } from 'react-redux';
// Import for navigation/redirection
import { Navigate } from 'react-router-dom';
// Import for type-checking props
import PropTypes from 'prop-types';

// Define a component to handle private routing logic
const PrivateRoute = ({ children }) => {
  // Access the authentication token from the Redux store
  const token = useSelector((state) => state.auth.token);

  // If a token exists, render the child components; otherwise, redirect to the login page
  return token ? children : <Navigate to="/" replace />;
};

// Export the PrivateRoute component for use in other parts of the application
export default PrivateRoute;

// Define prop types for the PrivateRoute component for validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a node and is required
};

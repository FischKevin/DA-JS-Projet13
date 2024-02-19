import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '/src/components/pages/LoginPage';
import SignInPage from '/src/components/pages/SignInPage';
import UserPage from '/src/components/pages/UserPage';
// Import the PrivateRoute component for protected routes
import PrivateRoute from '/src/components/PrivateRoute';

// AppRouter component: Manages the routing of the application
function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Define Route for the homepage */}
        <Route path="/" element={<LoginPage />} />
        {/* Define Route for the signin page */}
        <Route path="/signin" element={<SignInPage />} />
        {/* Define Route to redirect unknown page to / */}
        <Route path="*" element={<LoginPage />} />
        {/* Define Route for the user page, wrapped in a PrivateRoute to ensure it's protected */}
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppRouter;

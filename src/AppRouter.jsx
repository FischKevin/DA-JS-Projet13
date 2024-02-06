import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '/src/components/pages/LoginPage';
import SignInPage from '/src/components/pages/SignInPage';
import UserPage from '/src/components/pages/UserPage';
// import useAuth from '/src/customHooks/useAuth'; 
// import { Navigate } from 'react-router-dom';
import PrivateRoute from '/src/components/PrivateRoute';

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/signin" />;
// };

// AppRouter component: Manages the routing of the application
function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Define Route for the homepage */}
        <Route path="/" element={<LoginPage />} />
        {/* Define Route for the signin page */}
        <Route path="/signin" element={<SignInPage />} />
        {/* Define Route for the user page */}
        <Route path="/user" element={<PrivateRoute><UserPage /></PrivateRoute>} />
        {/* Catch-all Route for undefined paths, leading to a 404 error page */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Router>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '/src/components/pages/LoginPage';
import SignInPage from '/src/components/pages/SignInPage';
import UserPage from '/src/components/pages/UserPage';

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
        <Route path="/user" element={<UserPage />} />
        {/* Catch-all Route for undefined paths, leading to a 404 error page */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;

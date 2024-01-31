import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '/src/components/pages/LoginPage';
import SignInPage from '/src/components/pages/SignInPage';

// AppRouter component: Manages the routing of the application
function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Define Route for the homepage */}
        <Route path="/" element={<LoginPage />} />
        {/* Define Route for the signin page */}
        <Route path="/signin" element={<SignInPage />} />
        {/* Catch-all Route for undefined paths, leading to a 404 error page */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;

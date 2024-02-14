import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import to dispatch actions
import { logout } from '/src/features/auth/authSlice'; // Import the logout action from the auth slice
import { useNavigate } from 'react-router-dom';

// Define a component to display sign-in or sign-out links based on authentication status
function SignInItem({ isLoggedIn, userName }) {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const navigate = useNavigate();

  // Function to handle logout action
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/');
  };

  // Conditionally render links based on the isLoggedIn prop
  if (isLoggedIn) {
    // If the user is logged in, show user profile link and sign out link
    return (
      <div>
        <Link to="/user" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {userName}
        </Link>
        <Link onClick={handleLogout} className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    );
  }

  // If the user is not logged in, show sign in link
  return (
    <div>
      <Link to="/signin" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  );
}

SignInItem.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

export default SignInItem;

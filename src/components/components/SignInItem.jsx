import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '/src/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function SignInItem({ isLoggedIn, userName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    // localStorage.removeItem('token');
    navigate("/");

  };

  if (isLoggedIn) {
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
  userName: PropTypes.string
};

export default SignInItem;

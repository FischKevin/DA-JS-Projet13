import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SignInItem({ isLoggedIn, userName }) {
  if (isLoggedIn) {
    return (
      <div>
        <Link to="/user" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {userName}
        </Link>
        <Link to="/" className="main-nav-item">
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

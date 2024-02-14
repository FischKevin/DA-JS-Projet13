import React from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '/src/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { authService } from '/src/services/authService';
import { useState } from 'react';

function MainSignIn() {
  const [error, setError] = useState(''); // State for handling error messages
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const email = event.target.username.value;
    const password = event.target.password.value;
    setError(''); // Reset error state

    if (!email || !password) {
      setError('Email and password are required'); // Set error if fields are empty
      return;
    }

    try {
      const data = await authService.login(email, password); // Attempt to log in with provided credentials

      if (data.body && data.body.token) {
        // If login is successful and token is received
        const profileData = await authService.getUserProfile(data.body.token); // Retrieve user profile

        if (profileData) {
          dispatch(
            setCredentials({
              user: {
                ...profileData.body,
                email: profileData.body.email, // Set user email
              },
              token: data.body.token, // Set authentication token
            }),
          );
          navigate('/user'); // Navigate to user profile page
        } else {
          throw new Error('Failed to retrieve user profile');
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setError('Login failed: ' + error.message); // Display error message to the user
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </section>
    </main>
  );
}

export default MainSignIn;

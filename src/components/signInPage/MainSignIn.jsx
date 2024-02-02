import React from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '/src/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import useAuth from '/src/customHooks/useAuth';
import { authService } from '/src/services/authService';
import { useState } from 'react';

function MainSignIn() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const { setUser } = useAuth();
  // const { login } = useAuth();
  const dispatch = useDispatch();


  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.username.value;
    const password = event.target.password.value;
    setError("");
  
    if (!email || !password) {
      setError("Email and password are required");
      return; // Empêcher la connexion si les champs sont vides
    }
  
    try {
      const data = await authService.login(email, password);
      console.log('Login Data:', data);
  
      if (data.body && data.body.token) {
        console.log('Calling getUserProfile with token:', data.body.token);
        const profileData = await authService.getUserProfile(data.body.token);
        console.log('User Profile Data:', profileData);
  
        if (profileData) {
          // Mettez à jour l'état global avec les informations de connexion et de profil
          dispatch(setCredentials({
            user: {
              ...profileData.body, // Supposons que profileData.body contient firstName, lastName, etc.
              email: profileData.body.email,
            },
            token: data.body.token
          }));
          navigate('/user');
        } else {
          throw new Error('Failed to retrieve user profile');
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error.message);
      setError("Login failed: " + error.message);
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
          <button type="submit" className="sign-in-button">Sign In</button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </section>
    </main>
  );
}

export default MainSignIn;

import { useState } from 'react';
import { authService } from '/src/services/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const loginData = await authService.login(email, password);
      console.log('Login Data:', loginData);

      if (loginData.token) {
        console.log('Calling getUserProfile with token:', loginData.token);
        const profileData = await authService.getUserProfile(loginData.token);
        console.log('User Profile Data:', profileData);

        if (profileData) {
          setUser({
            token: loginData.token,
            firstName: profileData.firstName,
            lastName: profileData.lastName,
            email: profileData.email,
            // Ajoutez d'autres champs nécessaires ici
          });
        } else {
          throw new Error('Failed to retrieve user profile');
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error.message);
      setUser(null);
      throw error;
    }
  };

  return { user, login };
};

export default useAuth;

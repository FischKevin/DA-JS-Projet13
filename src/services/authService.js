const login = async (email, password) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Invalid email or password');
  }

  const data = await response.json();
  console.log('login Data:', data);
  return data;
};

const getUserProfile = async (token) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        'Error fetching user profile:',
        errorData.message || 'Failed to fetch user profile',
      );
      throw new Error(errorData.message || 'Failed to fetch user profile');
    }

    const profileData = await response.json();
    console.log('Profile Data:', profileData);
    // return profileData.body;
    return profileData;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

const updateUserProfile = async (token, userData) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to update user profile: ${errorData.message}`);
    }

    const updatedProfile = await response.json();
    return updatedProfile.body; // Assurez-vous que cette ligne correspond à la structure de votre réponse attendue
  } catch (error) {
    console.error(`Error updating user profile: ${error}`);
    throw error;
  }
};

export const authService = {
  login,
  getUserProfile,
  updateUserProfile,
};

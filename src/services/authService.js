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
      method: 'POST', // Assurez-vous que c'est la bonne méthode HTTP selon votre API
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

// Exportez d'autres fonctions similaires pour l'inscription, etc.
export const authService = {
  login,
  getUserProfile,
  // ... autres fonctions
};

// Define an asynchronous function to perform fetch requests with custom settings
async function customFetch(
  url,
  { method = 'GET', token = null, body = null } = {},
) {
  // Default headers include content type as JSON
  const headers = { 'Content-Type': 'application/json' };
  // If a token is provided, add it to the headers for authorization
  if (token) headers['Authorization'] = `Bearer ${token}`;

  // Configure the request options with method, headers, and body
  const config = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null, // Only add body if it's not null, and convert to JSON string
  };

  // Perform the fetch request with the provided URL and config
  const response = await fetch(url, config);

  // Check if the response was not ok
  if (!response.ok) {
    // If the response is not ok, parse the error message and throw an error
    const errorData = await response.json();
    throw new Error(errorData.message || 'An error occurred');
  }

  // If the response is ok, return the parsed JSON body
  return response.json();
}

// Function to login a user using their email and password
const login = async (email, password) => {
  const data = await customFetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    body: { email, password },
  });
  return data;
};

// Function to retrieve a user's profile data using their token
const getUserProfile = async (token) => {
  const profileData = await customFetch(
    'http://localhost:3001/api/v1/user/profile',
    {
      method: 'POST',
      token,
    },
  );
  return profileData;
};

// Function to update a user's profile data
const updateUserProfile = async (token, userData) => {
  const updatedProfile = await customFetch(
    'http://localhost:3001/api/v1/user/profile',
    {
      method: 'PUT',
      token,
      body: userData,
    },
  );
  return updatedProfile.body;
};

// Export the authService object containing the login, getUserProfile, and updateUserProfile functions
export const authService = {
  login,
  getUserProfile,
  updateUserProfile,
};

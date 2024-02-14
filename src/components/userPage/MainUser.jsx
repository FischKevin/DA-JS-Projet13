import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '/src/features/auth/authSlice';
import { authService } from '/src/services/authService';

import WelcomeMessage from './WelcomeMessage';
import EditName from './EditName';
import AccountSection from './AccountSection';

// Main user component responsible for rendering user information and edit functionality
function MainUser() {
  // State to control edit mode
  const [isEditing, setIsEditing] = useState(false);
  // Access user data from the Redux store
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // Retrieve auth token from the Redux store
  const token = useSelector((state) => state.auth.token);

  // Function to handle saving updated user information
  const handleSave = async (firstName, lastName) => {
    try {
      // Call the authService to update user profile with provided first name and last name
      const updatedUser = await authService.updateUserProfile(token, {
        firstName,
        lastName,
      });
      // Dispatch action to update the profile in the Redux store
      dispatch(updateProfile(updatedUser));
      // Exit editing mode
      setIsEditing(false);
    } catch (error) {
      // Log errors to the console (Consider removing this for production)
      console.error('Failed to update profile:', error);
    }
  };

  // Function to handle cancellation of editing
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <WelcomeMessage />
          {isEditing ? (
            // Render EditName component when in editing mode
            <EditName
              firstName={user.firstName}
              lastName={user.lastName}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            // Display edit button when not in editing mode
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {/* Static account sections for demonstration */}
        <AccountSection
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </>
  );
}

export default MainUser;

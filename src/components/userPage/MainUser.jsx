import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { updateProfile } from '/src/features/auth/authSlice';
// import { authService } from '/src/services/authService';
import { authService } from '/src/services/authService';

import WelcomeMessage from './WelcomeMessage';
import EditName from './EditName';

function MainUser() {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const handleSave = async (firstName, lastName) => {
    try {
      const updatedUser = await authService.updateUserProfile(token, { firstName, lastName });
      dispatch(updateProfile(updatedUser));
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <WelcomeMessage />
          {isEditing ? (
            <EditName
              firstName={user.firstName}
              lastName={user.lastName}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
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

function AccountSection({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

AccountSection.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
import React from 'react';
import { useSelector } from 'react-redux';

function WelcomeMessage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <h1>
      Welcome back
      <br />
      {user ? `${user.firstName} ${user.lastName}` : 'Guest'}!
    </h1>
  );
}

export default WelcomeMessage;

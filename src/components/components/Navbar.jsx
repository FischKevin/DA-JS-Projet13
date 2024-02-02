// import React, { useState } from 'react';
import React from 'react';
import Logo from './Logo';
import SignInItem from './SignInItem';
// import useAuth from '/src/customHooks/useAuth';
import { useSelector } from 'react-redux';

function Navbar() {
  const userName = useSelector(state => state.auth.user?.firstName);
  const isLoggedIn = useSelector(state => state.auth.token !== null);

  return (
    <nav className='main-nav'>
      <Logo />
      <SignInItem isLoggedIn={isLoggedIn} userName={userName || ''} />
    </nav>
  );
}


export default Navbar;


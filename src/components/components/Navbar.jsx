import React, { useState } from 'react';
import Logo from './Logo';
import SignInItem from './SignInItem';

function Navbar() {
  const [userIsLoggedIn] = useState(false);
  const [userName] = useState('');  

  return (
    <nav className='main-nav'>
      <Logo />
      <SignInItem isLoggedIn={userIsLoggedIn} userName={userName} />
    </nav>
  );
}

export default Navbar;


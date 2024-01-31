import React from 'react';
import Logo from './Logo';
import SignInItem from './SignInItem';

function Navbar() {
  return (
    <nav className='main-nav'>
      <Logo />
      <SignInItem />
    </nav>
  );
}

export default Navbar;

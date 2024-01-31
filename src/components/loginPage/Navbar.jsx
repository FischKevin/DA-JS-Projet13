import React from 'react';
import Logo from './Logo';
import SignInItem from './SignInItem';

function Navbar() {
  return (
    <>
      <div className="main-nav">
        <Logo />
        <SignInItem />
      </div>
    </>
  );
}

export default Navbar;

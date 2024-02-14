import React from 'react';
import Logo from './Logo';
import SignInItem from './SignInItem';
import { useSelector } from 'react-redux'; // Import to access the Redux store state

function Navbar() {
  // Access the user's first name from the Redux store. Use optional chaining in case the user object is undefined.
  const userName = useSelector((state) => state.auth.user?.firstName);
  // Determine if the user is logged in by checking if a token exists in the Redux store
  const isLoggedIn = useSelector((state) => state.auth.token !== null);

  return (
    <nav className="main-nav">
      <Logo />
      {/* Pass isLoggedIn and userName as props to SignInItem for conditional rendering */}
      <SignInItem isLoggedIn={isLoggedIn} userName={userName || ''} />
    </nav>
  );
}

export default Navbar;

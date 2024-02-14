import React from 'react';
import Navbar from '/src/components/components/Navbar';
import MainUser from '/src/components/userPage/MainUser';
import Footer from '/src/components/components/Footer';

// Functional component for the User Page layout
function UserPage() {
  return (
    <>
      <Navbar />
      <MainUser />
      <Footer />
    </>
  );
}

export default UserPage;

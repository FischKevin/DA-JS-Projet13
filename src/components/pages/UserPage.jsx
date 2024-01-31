import React from 'react';
import Navbar from '/src/components/components/Navbar';
import MainUser from '/src/components/userPage/MainUser';
import Footer from '/src/components/components/Footer';

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

import React from 'react';
import Navbar from '/src/components/components/Navbar';
import MainLogin from '/src/components/loginPage/MainLogin';
import Footer from '/src/components/components/Footer';

// Functional component that defines the structure of the login page
function LoginPage() {
  return (
    <>
      <Navbar />
      <MainLogin />
      <Footer />
    </>
  );
}

export default LoginPage;

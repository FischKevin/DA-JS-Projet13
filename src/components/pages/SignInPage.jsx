import React from 'react';
import Navbar from '/src/components/components/Navbar';
import MainSignIn from '/src/components/SignInPage/MainSignIn';
import Footer from '/src/components/components/Footer';

// Functional component that defines the structure of the sign-in page
function SignInPage() {
  return (
    <>
      <Navbar />
      <MainSignIn />
      <Footer />
    </>
  );
}

export default SignInPage;

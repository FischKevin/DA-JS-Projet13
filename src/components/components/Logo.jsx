import React from 'react';
import { Link } from 'react-router-dom'; // Import to enable navigation
import argentBankLogo from '/public/argentBankLogo.png';

function Logo() {
  return (
    // Use Link component for navigation to the home page ("/")
    <Link to="/" className="main-nav-logo" aria-label="Argent Bank Home">
      {/* Image of the logo with alt text for accessibility */}
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      {/* Visually hidden h1 for SEO and accessibility, providing context about the site's main content */}
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
}

export default Logo;

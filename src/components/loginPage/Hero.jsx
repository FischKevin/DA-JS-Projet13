import React from 'react';
import PropTypes from 'prop-types';

// Defines the Hero component with props for subtitles, text, and a background image
function Hero({ subtitle1, subtitle2, subtitle3, text, backgroundImage }) {
  // Inline styles to dynamically set the background image of the hero section
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="hero" style={heroStyle}>
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">{subtitle1}</p>
        <p className="subtitle">{subtitle2}</p>
        <p className="subtitle">{subtitle3}</p>
        <p className="text">{text}</p>
      </section>
    </div>
  );
}

Hero.propTypes = {
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  subtitle3: PropTypes.string,
  text: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Hero;

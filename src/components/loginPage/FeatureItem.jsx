import React from 'react';
import PropTypes from 'prop-types';

const FeatureItem = ({ imgSrc, altText, title, description }) => (
  <div className="feature-item">
    <img src={imgSrc} alt={altText} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
);

FeatureItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;

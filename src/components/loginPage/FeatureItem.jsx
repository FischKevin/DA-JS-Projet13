import React from 'react';
import PropTypes from 'prop-types';

// Functional component for rendering a single feature item
const FeatureItem = ({ imgSrc, altText, title, description }) => (
  <div className="feature-item">
    {/* Image representing the feature */}
    <img src={imgSrc} alt={altText} className="feature-icon" />
    {/* Title of the feature */}
    <h3 className="feature-item-title">{title}</h3>
    {/* Description of the feature */}
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

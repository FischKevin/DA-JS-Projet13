import React from 'react';
import PropTypes from 'prop-types';
import FeatureItem from './FeatureItem';

// Functional component to display a list of features
function Features({ features }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        // Map each feature object to a FeatureItem component
        <FeatureItem
          key={index}
          imgSrc={feature.imgSrc}
          altText={feature.altText}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Features;

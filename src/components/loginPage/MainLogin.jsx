import React from 'react';
import Hero from './Hero';
import Features from './Features';

// Define a list of features with details for each feature
const featureList = [
  {
    imgSrc: '/public/icon-chat.png',
    altText: 'Chat Icon',
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    imgSrc: '/public/icon-money.png',
    altText: 'Money Icon',
    title: 'More savings means higher rates',
    description:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    imgSrc: '/public/icon-security.png',
    altText: 'Chat Icon',
    title: 'Security you can trust',
    description:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

function MainLogin() {
  return (
    <main>
      <Hero
        subtitle1="No fees."
        subtitle2="No minimum deposit."
        subtitle3="High interest rates."
        text="Open a savings account with Argent Bank today!"
        backgroundImage="/public/bank-tree.jpeg"
      />
      <Features features={featureList} />
    </main>
  );
}

export default MainLogin;

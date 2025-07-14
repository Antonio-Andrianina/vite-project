import '../styles/hero.css';
import React from 'react';

function HeroSection() {
  return React.createElement('section', { className: 'hero' },
    React.createElement('div', { className: 'hero-content' },
      React.createElement('h1', { className: 'hero-title' }, 'Haute École d\'Informatique de Madagascar'),
      React.createElement('p', { className: 'hero-subtitle' }, 'Nous formons ceux qui décodent le futur, aux métiers de l\'informatique.'),
      React.createElement('button', { className: 'hero-button' }, 'S\'inscrire maintenant')
    )
  );
}

export default HeroSection;
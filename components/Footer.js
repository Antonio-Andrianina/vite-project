import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons';
import '../styles/footer.css';

function Footer() {
  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'footer-content container' },
      React.createElement('div', { className: 'footer-column' },
        React.createElement('h3', { className: 'footer-title' }, "Adresse"),
        React.createElement('p', { className: 'footer-address' },
          "II J 161 R Ambodivoanjo\nIvandry Antananarivo\n101, Madagascar"
        )
      ),
      React.createElement('div', { className: 'footer-column' },
        React.createElement('h3', { className: 'footer-title' }, "Navigation"),
        React.createElement('ul', { className: 'footer-links' },
          React.createElement('li', { className: 'footer-link' },
            React.createElement('a', { href: '#' }, "Accueil")
          ),
          React.createElement('li', { className: 'footer-link' },
            React.createElement('a', { href: '#' }, "Actualités")
          ),
          React.createElement('li', { className: 'footer-link' },
            React.createElement('a', { href: '#' }, "Bourse d'études")
          ),
          React.createElement('li', { className: 'footer-link' },
            React.createElement('a', { href: '#' }, "Inscription")
          )
        )
      ),
      React.createElement('div', { className: 'footer-column' },
        React.createElement('h3', { className: 'footer-title' }, "Médias sociaux"),
        React.createElement('div', { className: 'footer-social' },
          React.createElement('a', { href: '#' }, React.createElement(FacebookIcon, { className: 'social-icon' })),
          React.createElement('a', { href: '#' }, React.createElement(TwitterIcon, { className: 'social-icon' })),
          React.createElement('a', { href: '#' }, React.createElement(InstagramIcon, { className: 'social-icon' }))
        )
      )
    ),
    React.createElement('div', { className: 'footer-copyright container' },
      React.createElement('p', null, "© HEI Madagascar")
    )
  );
}

export default Footer;
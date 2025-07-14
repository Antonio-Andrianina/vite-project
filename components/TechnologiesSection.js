import React from 'react';
import '../styles/technologies.css';

function TechnologiesSection() {
  return React.createElement('section', { className: 'technologies' },
    React.createElement('div', { className: 'technologies-content container' },
      React.createElement('h2', { className: 'technologies-title' }, "Les technos et langages utilisées"),
      React.createElement('p', { className: 'technologies-description' },
        "Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de programmation Java " +
        "et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement " +
        "logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs " +
        "à travers le monde."
      )
    )
  );
}

export default TechnologiesSection;
import React from 'react';
import '/styles/careers.css';

function CareersSection() {
  const careers = [
    "Développeur back end",
    "Développeur front end",
    "Développeurs mobile",
    "Chefs de projet",
    "Exploitants cloud",
    "Analystes cybersécurité",
    "Pentesters",
    "Auditeur technique SSI",
    "Auditeur organisationnel SSI",
    "Administrateur système et réseau",
    "Développeur de sécurité"
  ];

  return React.createElement('section', { className: 'careers' },
    React.createElement('div', { className: 'careers-content container' },
      React.createElement('h2', { className: 'careers-title' }, "Quelques débouchés"),
      React.createElement('p', { className: 'careers-description' },
        "Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements " +
        "de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, " +
        "des métiers du présent, des métiers du futur…"
      ),
      React.createElement('div', { className: 'careers-list' },
        careers.map((career, index) =>
          React.createElement('div', { key: index, className: 'career-item' },
            React.createElement('p', { className: 'career-name' }, career)
          )
        )
      )
    )
  );
}

export default CareersSection;
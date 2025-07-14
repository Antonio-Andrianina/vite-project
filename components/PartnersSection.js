import React from 'react';
import '../styles/partners.css';

function PartnersSection() {
  return React.createElement('section', { className: 'partners' },
    React.createElement('div', { className: 'partners-content container' },
      React.createElement('h2', { className: 'partners-title' }, "Nos partenaires"),
      React.createElement('p', { className: 'partners-description' },
        "L'employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique et " +
        "de la composition de notre corps enseignant mais aussi du soutien et la collaboration des " +
        "entreprises partenaires."
      ),
      React.createElement('div', { className: 'partners-logos' },
        React.createElement('div', { className: 'partner-logo' },
          React.createElement('p', { className: 'partner-text' }, "Formation habilitée par l'État suivant le système LMD")
        ),
        React.createElement('div', { className: 'partner-logo' },
          React.createElement('p', { className: 'partner-text' }, "Habilitation MESupRes n°31309/2023")
        )
      )
    )
  );
}

export default PartnersSection;
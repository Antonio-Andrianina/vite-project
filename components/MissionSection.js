import React from 'react';
import '../styles/mission.css';

function MissionSection() {
  return React.createElement('section', { className: 'mission' },
    React.createElement('div', { className: 'mission-content container' },
      React.createElement('h2', { className: 'mission-title' }, 'Notre mission'),
      React.createElement('p', { className: 'mission-text' },
        "Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence " +
        "artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le " +
        "développement de Madagascar."
      )
    )
  );
}

export default MissionSection;
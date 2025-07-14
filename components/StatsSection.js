import { ClockIcon, UsersIcon, ChartIcon } from './icons';
import '../styles/stats.css';
import React from 'react';

function StatsSection() {
  return React.createElement('section', { className: 'stats' },
    React.createElement('div', { className: 'stats-container' },
      React.createElement('div', { className: 'stat-item' },
        React.createElement(ClockIcon, { className: 'stat-icon' }),
        React.createElement('div', null,
          React.createElement('h3', { className: 'stat-title' }, '+3 ans'),
          React.createElement('p', { className: 'stat-description' }, 'Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l\'informatique.')
        )
      ),
      React.createElement('div', { className: 'stat-item' },
        React.createElement(UsersIcon, { className: 'stat-icon' }),
        React.createElement('div', null,
          React.createElement('h3', { className: 'stat-title' }, '+250 étudiants'),
          React.createElement('p', { className: 'stat-description' }, 'Plus de 250 étudiants et plus d\'une dizaine d\'entreprises ont déjà fait confiance à notre formation.')
        )
      ),
      React.createElement('div', { className: 'stat-item' },
        React.createElement(ChartIcon, { className: 'stat-icon' }),
        React.createElement('div', null,
          React.createElement('h3', { className: 'stat-title' }, 'Notre mission'),
          React.createElement('p', { className: 'stat-description' }, 'Amener des jeunes malgaches vers des domaines porteurs comme l\'IA, la cybersécurité ou la programmation.')
        )
      )
    )
  );
}

export default StatsSection;
import React from 'react';
import '../styles/domains.css';

function DomainsSection() {
  const domains = [
    {
      title: "Cloud et cybersécurité",
      description: "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). " +
        "Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications " +
        "contre les cybermenaces."
    },
    {
      title: "Intelligence artificielle",
      description: "Le monde de la reconnaissance faciale ou la détection d'obstacles par les voitures " +
        "semi-autonomes vous fascinent ? Ce n'est pas sorcier, cela s'apprend. Apprenez les bases de " +
        "l'intelligence artificielle lors de vos cours chez HEI."
    },
    {
      title: "Ingénierie logicielle",
      description: "Apprenez les principes de la conception ou le développement de programmes et " +
        "d'applications web et mobile et explorez le monde fascinant des 'codes'. A la fin de votre " +
        "formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes."
    }
  ];

  return React.createElement('section', { className: 'domains' },
    React.createElement('div', { className: 'domains-content container' },
      React.createElement('h2', { className: 'domains-title' }, "Domaines"),
      React.createElement('p', { className: 'domains-intro' },
        "Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du " +
        "numérique du présent et de l'avenir :"
      ),
      React.createElement('div', { className: 'domains-grid' },
        domains.map((domain, index) =>
          React.createElement('div', { key: index, className: 'domain-card' },
            React.createElement('h3', { className: 'domain-title' }, domain.title),
            React.createElement('p', { className: 'domain-description' }, domain.description)
          )
        )
      )
    )
  );
}

export default DomainsSection;
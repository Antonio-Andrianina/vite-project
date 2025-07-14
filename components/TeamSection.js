import React from 'react';
import '../styles/team.css';

function TeamSection() {
  const teamMembers = [
    {
      name: "Yannick Raharijaona",
      position: "Responsable technique ML chez Rocket Science (Ottawa - Canada)"
    },
    {
      name: "Dre Tahina Ralitera",
      position: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)"
    },
    {
      name: "Dr Lou Maurica",
      position: "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI"
    }
  ];

  return React.createElement('section', { className: 'team' },
    React.createElement('div', { className: 'team-content container' },
      React.createElement('h2', { className: 'team-title' }, "L'équipe pédagogique"),
      React.createElement('p', { className: 'team-description' },
        "Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique, " +
        "de la cybersécurité, de l'intelligence artificielle, dont un ingénieur chez Google. Ils sont " +
        "passionnés par l'informatique et sont engagés vers l'excellence."
      ),
      React.createElement('div', { className: 'team-members' },
        teamMembers.map((member, index) =>
          React.createElement('div', { key: index, className: 'team-member' },
            React.createElement('h3', { className: 'team-member-name' }, member.name),
            React.createElement('p', { className: 'team-member-position' }, member.position)
          )
        )
      )
    )
  );
}

export default TeamSection;
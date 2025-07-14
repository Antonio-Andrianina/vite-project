import React from 'react';
import '/styles/program.css';

function ProgramSection() {
  const programParts = [
    { title: "Apprentissage théoriques en présentiel", percentage: "25%" },
    { title: "Apprentissage sur supports numériques", percentage: "25%" },
    { title: "Travaux individuels de l'étudiant", percentage: "25%" },
    { title: "Apprentissage en entreprise", percentage: "25%" }
  ];

  return React.createElement('section', { className: 'program' },
    React.createElement('div', { className: 'program-content container' },
      React.createElement('h2', { className: 'program-title' }, "Le programme pédagogique"),
      React.createElement('p', { className: 'program-description' },
        "Suivant le système LMD, jusqu'au Master, notre formation repose sur un programme pédagogique " +
        "conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme " +
        "de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar."
      ),
      React.createElement('h3', { className: 'program-structure-title' }, "Notre Programme"),
      React.createElement('div', { className: 'program-parts' },
        programParts.map((part, index) =>
          React.createElement('div', { key: index, className: 'program-part' },
            React.createElement('h4', { className: 'part-percentage' }, part.percentage),
            React.createElement('p', { className: 'part-title' }, part.title)
          )
        )
      )
    )
  );
}

export default ProgramSection;
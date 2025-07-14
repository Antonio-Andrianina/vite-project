import React from 'react';
import { DocumentIcon, ExamIcon, CheckIcon } from './icons';
import '../styles/admission.css';

function AdmissionSection() {
  const steps = [
    {
      icon: React.createElement(DocumentIcon, { className: 'step-icon' }),
      title: "Dépôt de dossiers",
      description: "Pour les bacheliers de toutes séries sans limite d'âge"
    },
    {
      icon: React.createElement(ExamIcon, { className: 'step-icon' }),
      title: "Test de niveau",
      description: "Composé d'une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D"
    },
    {
      icon: React.createElement(CheckIcon, { className: 'step-icon' }),
      title: "Inscription définitive",
      description: "Si test réussi"
    }
  ];

  return React.createElement('section', { className: 'admission' },
    React.createElement('div', { className: 'admission-content container' },
      React.createElement('h2', { className: 'admission-title' }, "Admission"),
      React.createElement('p', { className: 'admission-description' },
        "Ouverte aux bacheliers de toutes les séries, l'admission chez HEI se fait par test de niveau : " +
        "une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D."
      ),
      React.createElement('div', { className: 'admission-steps' },
        steps.map((step, index) =>
          React.createElement('div', { key: index, className: 'step' },
            step.icon,
            React.createElement('h3', { className: 'step-title' }, step.title),
            React.createElement('p', { className: 'step-description' }, step.description)
          )
        )
      ),
      React.createElement('div', { className: 'text-center' },
        React.createElement('button', { className: 'admission-button' }, "Inscrivez-vous ici")
      )
    )
  );
}

export default AdmissionSection;
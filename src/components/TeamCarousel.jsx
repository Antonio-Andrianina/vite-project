import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


const profiles = [
  {
    name: "Dre Tahina Ralitera",
    title: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO Femmes en Science (2017)",
    img: "/public/images/Tahina-OK-e1716502943928-300x300.png",
  },
  {
    name: "Dr Lou Maurica",
    title: "Docteur‐Ingénieur | Fondateur & Directeur pédagogique de HEI",
    img: "/public/images/97-portraits-97_edited-e1716502895676-300x300.jpg",
  },
  {
    name: "Mirado RAFENOMAHENINTSOA",
    title: "Data & Business Intelligence Specialist",
    img: "/public/images/Mirado-300x300.webp",
  },
  {
    name: "Julien RAJERISON",
    title: "Lead Développeur | Fondateur de l'Association TechZara Madagascar ",
    img: "/public/images/Julien-300x300.webp",
  },
  {
    name: "Ryan ANDRIAMAHERY",
    title: "Développeur Back-End | Confondateur et Directeur des opérations de HEI",
    img: "/public/images/ryan-min-300x300.webp",
  },
  {
    name: "Jean Aimé Maxa",
    title: "Responsable technique cybersécurité chez CES France Continental(Toulouse-France)",
    img: "/public/images/Jean-Aime-Maxa-modified-300x300.jpg",
  },
  {
    name: "Parison Ravalomanda",
    title: "Ingénieur en Informatique | Ingenieur Logiciel chez Google (Londre - UK)",
    img: "/public/images/Parison-e1716502987165-300x300.png",
  },
  {
    name: "Yannick Raharijaona",
    title: "Responsable Technique ML chez Rocket Science (Ottawa - Canada)",
    img: "/public/images/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-300x300.jpg",
  }

];

const extendedProfiles = [...profiles, ...profiles, ...profiles];

export default function TeamCarousel() {
  // Duplique l’array pour l’infinité
  const [currentIndex, setCurrentIndex] = useState(profiles.length);
  const visibleCount = 4;

  // 🕒 Ajoute ici le défilement automatique
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => {
      if (prev >= extendedProfiles.length - visibleCount - 1) {
        return profiles.length; // revient au centre invisiblement
      }
      return prev + 1;
    });
  }, 3000);
  return () => clearInterval(interval);
}, []);

  // ⬅️➡️ Ajoute ici les fonctions des flèches
  const handleNext = () => {
  setCurrentIndex((prev) =>
    prev >= extendedProfiles.length - visibleCount ? 0 : prev + 1
  );
};

const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? extendedProfiles.length - visibleCount : prev - 1
  );
};

  const extendedProfiles = [...profiles, ...profiles, ...profiles];

  return (
    <section className="bg-[#1a4fb9] py-12">
      <div className='text-center flex items-center flex-col'>
        <h1 className="text-3xl font-serif font-bold text-[#DFA408] text-center mb-8">
        L'équipe pédagogique
      </h1>
      <h3 className='w-[800px] text-white text-center flex items-center'>Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</h3>
      </div>
      <button onClick={handlePrev} className="absolute top-[1670px] left-2 p-2 rounded-full border-2 border-transparent hover:border-[#DFA408] transition">
        <ChevronLeftIcon className="w-6 h-6 text-[#DFA408]" />
      </button>

      <div className="overflow-hidden w-full max-w-6xl mx-auto px-4">
      <div
        className="flex transition-transform duration-700"
        style={{
  transform: `translateX(-${currentIndex * (100 / extendedProfiles.length)}%)`,
  width: `${extendedProfiles.length * (100 / visibleCount)}%`,
}}

      >
        {extendedProfiles.map((p, i) => (
          <div key={i} className="flex-shrink-0 h-96 mt-10 w-full md:w-[280px] px-4">
            <div className="bg-white rounded-lg shadow text-center p-6 min-h-[320px] flex flex-col justify-between
                        border-2 border-transparent hover:border-[#DFA408] hover:scale-[1.03] transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-[#DFA408] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-[#DFA408]">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.title}</p>
    
            </div>
          </div>
        ))}
        
      </div>
      <button onClick={handleNext} className="absolute left-[1215px] p-2 rounded-full border-2 border-transparent hover:border-[#DFA408] transition">
        <ChevronRightIcon className="w-6 h-6 text-[#DFA408]" />
      </button>
    </div>
    

    </section>
  );
}

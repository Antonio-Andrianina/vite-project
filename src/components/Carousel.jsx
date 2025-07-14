// src/components/Carousel.jsx
import React, { useState } from 'react';
import { useEffect } from 'react';


const images = [
  '/public/images/snowy-pine-trees-mountains-nature-scenery-uhdpaper.com-4K-4.2337.jpg',
  '/images/carousel2.jpg',
  '/images/carousel3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 3000); // 3 secondes

  return () => clearInterval(interval);
}, []);


  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden text-white">
      {/* Image */}
      {images.map((src, idx) => (
  <img
    key={idx}
    src={src}
    alt={`Slide ${idx + 1}`}
    className={
      `absolute inset-0 w-full h-full object-cover transition-opacity ` +
      `duration-1000 ease-in-out ` +
      `${currentIndex === idx ? 'opacity-100' : 'opacity-0'}`
    }
  />
))}
      {/* Texte superposé */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 bg-black bg-opacity-50 text-center space-y-4">
        <h1 className="text-6xl font-serif [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] font-bold sans-se m-5">Haute École d'Informatique</h1>
        <p className="max-w-xl text-lg p-10">
          Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="https://hei.school/inscription/" className="px-4 py-2 bg-white hover:opacity-80 pt-3 pb-3 pr-5 pl-5 rounded text-2xl m-5 text-[#011948] font-semibold">
            Inscrivez-vous ici
          </a>
          <a href="https://admin.hei.school/calendar" className="px-4 py-2 bg-[#DFA408] hover:opacity-80 pt-3 pb-3 pr-5 pl-5 m-5 rounded text-2xl text-white font-semibold">
            Emploi du temps
          </a>
          <a href="https://drive.google.com/file/d/1FdooEeAKPO5ucNKXMnyEBZ3RTTE80q7e/view?usp=sharing" className="px-4 py-2 bg-[#011948] pt-3 pb-3 text-2xl pr-5 pl-5 m-5 hover:opacity-80 rounded text-white font-semibold">
            Programme pédagogique
          </a>
        </div>
      </div>

      {/* Flèche gauche */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
      >
        &#10094;
      </button>

      {/* Flèche droite */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

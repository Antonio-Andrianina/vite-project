import React, { useEffect, useRef, useState } from 'react';

export default function CareerOpportunities() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h1 className="text-3xl font-serif md:text-4xl font-bold text-[#011948] mb-6 text-center">
        Quelques débouchés
      </h1>

      <div
        ref={containerRef}
        className={`flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 max-w-6xl mx-auto transition-all duration-700 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        {/* Texte à gauche */}
        <div className="md:w-1/2">
          <p className="text-xl pt-10 text-[#011948] leading-relaxed mb-4">
            Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
                "Développeur back-end / front-end / mobile",
                "Chef de projet technique",
                "Analyste en cybersécurité / Pentester / Auditeur SSI",
                "Exploitant cloud",
                "Administrateur système et réseau",
                "Développeur de solutions sécurisées"
            ].map((job, i) => (
    <div
      key={i}
      className="bg-[#011948] rounded-lg px-4 py-3 text-white shadow hover:bg-[#DFA408] border-2 border-transparent hover:border-[#011948] transition-all duration-300"
    >
      {job}
    </div>
  ))}
</div>

        </div>

        {/* Image à droite */}
        <div className="md:w-1/2">
          <img
            src="/public/images/IMG-02-e1720543344824-987x1024-1.webp"
            alt="Illustration métiers numériques"
            className="rounded-lg h-[500px] ml-[100px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

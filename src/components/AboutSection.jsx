import React from 'react';
import { AcademicCapIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/solid';

const AboutSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Images */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <img
            src="/public/images/A-propos-left-1.webp"
            alt="Salle de classe"
            className="rounded-lg hover:opacity-90 transition"
          />
        </div>

        {/* Texte + icônes */}
        <div className="w-full md:w-1/2 space-y-6 text-gray-800">
          <h2 className="text-3xl font-serif font-bold text-[#011948]">
            À propos de nous
          </h2>

          <div className="space-y-6 text-[17px] leading-relaxed">
            {/* Bloc 1 */}
            <div className="flex mt-2 mb-2 items-start gap-4">
              <AcademicCapIcon className="w-10 h-10 font-serif text-[#DFA408] flex-shrink-0" />
              <p><strong className='text-2xl'>+3 ans :</strong> Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
            </div>

            {/* Bloc 2 */}
            <div className="flex mt-2 mb-2 items-start gap-4 font-sans">
              <UserGroupIcon className="w-10 h-10 text-[#DFA408] flex-shrink-0" />
              <p><strong className='text-2xl'>+250 étudiants :</strong> Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la "grande famille HEI".</p>
            </div>

            {/* Bloc 3 – Notre mission */}
            <div className="flex mt-2 mb-2 items-start gap-4">
            <TrophyIcon className="w-10 h-10 text-[#DFA408] flex-shrink-0" />
            <p>
                <strong className='text-2xl'>Notre mission :</strong> Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
            </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

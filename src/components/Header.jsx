import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-[#011948] shadow">
    {/* Logo */}
    <div className="h-12">
      <img src="/public/images/cropped-Logo-e1662790239183.png" alt="Logo HEI" className="h-full h-150 w-150" />
    </div>

    {/* Navigation */}
    <nav>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="" className="text-[#DFA408] text-lg font-bold hover:text-[#c29d36]">ACCUEIL</a></li>
        <li><a href="https://hei.school/actualites/" className="text-white text-lg font-bold hover:text-[#DFA408]">ACTUALITÉS</a></li>
        <li><a href="https://hei.school/bourse-detudes/" className="text-white text-lg font-bold hover:text-[#DFA408]">BOURSE D'ÉTUDES</a></li>
        <li><a href="https://hei.school/inscription/" className="text-white text-lg font-bold hover:text-[#DFA408]">INSCRIPTION</a></li>
        <li><a href="https://admin.hei.school/" className="bg-[#DFA408] text-lg font-bold p-2 rounded-sm font-sans text-white hover:text-[#011948]">INTRANET</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

'use client'
import React from 'react';

const Footer = () => {
  

  return (
    <footer className="bg-black text-white py-6 px-4 md:px-8 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm md:text-base mb-2 md:mb-0">
          © 2025 - Conçu et développé par <span className="font-medium">Benhamaid Mohamed Amine</span>
        </div>
        <div className="text-xs md:text-sm opacity-80">
          M1 RSD G2
        </div>
        <div className="text-xs md:text-sm opacity-80">
          Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
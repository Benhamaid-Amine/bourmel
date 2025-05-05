'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';

const softPalette = ['bg-purple-100', 'bg-orange-100', 'bg-white', 'bg-purple-300', 'bg-orange-200', 'bg-white'];

const cryptoData = [
  { 
    title: 'Albam', 
    desc: 'Chiffrement par substitution hébraïque décalant l\'alphabet de moitié', 
    span: 2, 
    row: 1 
  },
  { 
    title: 'Atbah', 
    desc: 'Système de chiffrement arabe ancien utilisant une substitution numérique', 
    span: 1, 
    row: 2 
  },
  { 
    title: 'Atbash', 
    desc: 'Chiffre de substitution hébraïque inversant l\'ordre de l\'alphabet', 
    span: 1, 
    row: 3 
  },
  { 
    title: 'Alberti', 
    desc: 'Premier chiffrement polyalphabétique utilisant des disques rotatifs', 
    span: 2, 
    row: 4 
  },
  { 
    title: 'Polybe', 
    desc: 'Carré de chiffrement grec transformant les lettres en coordonnées', 
    span: 3, 
    row: 5 
  },
  { 
    title: 'SubstitutionSimple', 
    desc: 'Chiffrement basique remplaçant chaque lettre par une autre fixe', 
    span: 2, 
    row: 6 
  },
  { 
    title: 'Cesar', 
    desc: 'Chiffrement par décalage de 3 lettres dans l\'alphabet', 
    span: 1, 
    row: 7 
  },
  { 
    title: 'Vigenere', 
    desc: 'Chiffrement polyalphabétique utilisant une clé répétée', 
    span: 1, 
    row: 8 
  },
  { 
    title: 'Trithemius', 
    desc: 'Méthode de chiffrement progressive avec décalage croissant', 
    span: 2, 
    row: 9 
  },
  { 
    title: 'Autokey', 
    desc: 'Chiffrement utilisant la clé initiale puis le message lui-même', 
    span: 3, 
    row: 10 
  },
  { 
    title: 'Porta', 
    desc: 'Chiffrement digraphique combinant deux alphabets', 
    span: 2, 
    row: 11 
  },
  { 
    title: 'Beaufort', 
    desc: 'Chiffrement similaire à Vigenère mais avec inversion du processus', 
    span: 1, 
    row: 12 
  },
  { 
    title: 'Vernam(otp)', 
    desc: 'Seul système mathématiquement incassable avec une clé aléatoire à usage unique', 
    span: 1, 
    row: 13 
  },
  { 
    title: 'DES', 
    desc: 'Standard historique de chiffrement symétrique par blocs de 64 bits', 
    span: 2, 
    row: 14 
  },
].map((item, index) => ({
  ...item,
  bg: softPalette[index % softPalette.length],
  spanClass: item.span === 3 ? 'md:col-span-3' : item.span === 2 ? 'md:col-span-2' : 'md:col-span-1'
}));

const Hero = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    // Only run on client side
    const handleScroll = () => setAtTop(window.pageYOffset <= 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed z-50 w-full px-8 py-4 transition-all duration-1000 rounded-full mt-4 inset-x-0 mx-auto ease-in-out transform ${
        atTop ? 'max-w-2xl' : 'bg-black bg-opacity-90 backdrop-blur-xl max-w-4xl'
      }`}>
        <div className="flex items-center justify-left w-full p-2 mx-auto">
          <span className={`font-bold tracking-tighter uppercase ${atTop ? 'text-black' : 'text-white'}`}>
            ✺ AmineBnh
          </span>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="bg-[#F3F5F7] pt-32">
        <div className="px-8 py-24 mx-auto text-center md:px-12 lg:px-24 text-zinc-500">
          <p className="max-w-xl mx-auto text-4xl text-black font-medium uppercase">
            Cryptography Algorithms
          </p>
          
          {/* Desktop Bento Grid */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-24 max-w-6xl text-center">
            {cryptoData.map((item, index) => (
              <Link 
                key={index} 
                href={`/algorithms/${encodeURIComponent(item.title)}`} 
                className={`${item.spanClass} col-span-1`}
              >  
                <div
                  className={`rounded-3xl ${item.bg} p-8 h-64 flex flex-col justify-center group cursor-pointer transition-all hover:shadow-lg`}
                >
                  <h3 className="text-2xl text-black font-bold mb-2 group-hover:text-black/60">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Mobile Grid */}
          <div className="sm:hidden grid grid-cols-1 gap-6 mx-auto mt-24 max-w-6xl text-center">
            {cryptoData.map((item, index) => (
              <Link 
                key={index} 
                href={`/algorithms/${encodeURIComponent(item.title)}`}
              >  
                <div
                  className={`rounded-3xl ${item.bg} p-8 h-64 flex flex-col justify-center group cursor-pointer transition-all hover:shadow-lg`}
                >
                  <h3 className="text-2xl text-black font-bold mb-2 group-hover:text-black/60">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;




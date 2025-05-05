"use client";

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Nav from "@/components/Nav";
import Footer from '@/components/Footer';

const algorithms = {
    "SubstitutionSimple": {
      link: "https://www.programiz.com/online-compiler/6K0wG36g81ln7",
      description: "Le chiffrement par substitution consiste à remplacer chaque lettre du texte clair par une autre lettre selon une permutation fixe de l'alphabet. Le déchiffrement utilise l'inverse de cette permutation.",
    },
    "Cesar": {
      link: "https://www.programiz.com/online-compiler/2sFLtHXiTIf9K",
      description: "Le chiffre de César consiste à décaler chaque lettre d’un nombre fixe de positions dans l’alphabet. Par exemple, avec un décalage de 3, A devient D, B devient E, etc.",
      Chiffrement: "C(M) = (M + K ) mod 26",
      Dechiffrement: "D(C) = (C - K ) mod 26", 
    },
    "Albam": {
      link: "https://www.programiz.com/online-compiler/0YuJHY6XltVjR",
      description: "Le chiffrement Albam (ou ROT13) est un chiffrement par substitution simple qui consiste à remplacer chaque lettre par celle située 13 positions plus loin dans l’alphabet. Il est symétrique et involutif, c’est-à-dire que la même opération sert à chiffrer et déchiffrer.Mathématiquement, on associe chaque lettre à une valeur de 0 à 25 (A=0, B=1, ..., Z=25). ",
      Chiffrement: "C(M)=(M+13)mod26",
      Dechiffrement: "D(C)=(C-13)mod26", 
    },
    "Atbash": {
    link: "https://www.programiz.com/online-compiler/765ZKPJJ6oA2a",
    description: "Le chiffrement Atbash est une méthode de substitution dans laquelle chaque lettre de l'alphabet est remplacée par sa lettre opposée (A ↔ Z, B ↔ Y, C ↔ X, etc.).",
    Chiffrement: "C(M) = 25 - M",
    Dechiffrement: "D(C) = 25 - C"
  },
  
    "Atbah": {
      link: "https://www.programiz.com/online-compiler/7ABHpQpSVs2Co",
      description: "Atbush est une autre appellation ou variante historique d’Atbash, utilisée dans certains contextes religieux ou ésotériques.",
      Chiffrement: "C(M) = 25 - M",
      Dechiffrement: "D(C) = 25 - C"
    },
    "Alberti": {
      link: "https://www.programiz.com/online-compiler/0gfeWBa3RuCag",
      description: "Premier chiffrement polyalphabétique utilisant un système de disques rotatifs, inventé par Leon Battista Alberti en 1467.il a Une clé (lettre) pour le décalage initial.Une rotation périodique du décalage (tous les 3 caractères ici).",
      Chiffrement: "C(M)=(M+shift)mod26 // Shift=(shift+1)mod26 ",
      Dechiffrement: "D(C)=(C−shift+26)mod26 ",
    },
    "Polybe": {
      link: "https://www.programiz.com/online-compiler/1lOG6NTfpXjED",
      description: "Le carré de Polybe chiffre chaque lettre par une paire de coordonnées (ligne, colonne) dans une grille 5x5. Le déchiffrement associe chaque paire à une lettre.",
      Chiffrement: "C(M)=(ligne_M,colonne_M)",
      Dechiffrement: "D(C)=caractere en (ligne_C,colonne_C)",
    },
    "Trithemius": {
      link: "https://www.programiz.com/online-compiler/0m6RQfGm9zTpU",
      description: "Le chiffre de Trithemius est une variante de Vigenère avec une clé qui évolue automatiquement, souvent de manière arithmétique (ex : ABCDE...).",
      Chiffrement: "Ci=(Mi +i)mod26(ou i commence a 0)",
      Dechiffrement: "D(C)=(Ci - i + 26)mod26",
    },
    "Vigenere": {
      link: "https://www.programiz.com/online-compiler/2K0wGCwEQ1kvC",
      description: "Le chiffre de Vigenère est un chiffrement polyalphabétique utilisant une clé répétée pour déterminer le décalage de chaque lettre du message.",
      Chiffrement: "Ci =(Mi + K( i mod len(K) )  )mod26",
      Dechiffrement: "Mi =(Ci - K ( i mod len(K) ) )mod26",
    },
    "Autokey": {
      link: "https://www.programiz.com/online-compiler/393qLjDbHiP0S",
      description: "Autokey est une extension de Vigenère : la clé commence avec un mot-clé puis continue avec le texte clair lui-même, rendant le chiffrement plus résistant.",
      Chiffrement: "Ci = (Mi + Ki )   mod26",
      Dechiffrement: "Mi =(Ci - Ki + 26 )mod26",
    },
    "Porta": {
      link: "https://www.programiz.com/online-compiler/41UTNfgS2RwmD",
      description: "Le chiffre de Porta est un système polyalphabétique où chaque lettre de la clé définit une table de substitution spécifique pour encoder le texte.",
      Chiffrement: "C = Porta(M, K)",
      Dechiffrement: "M = Porta^{-1}(C, K)",
    },
    "Beaufort": {
      link: "https://www.programiz.com/online-compiler/3RZWBq5XSClmW",
      description: "Le chiffre de Beaufort est similaire à Vigenère mais inverse la logique de chiffrement, en soustrayant la lettre de la clé au lieu de l’ajouter.",
      Chiffrement: "C=( K- M ) mod 26",
      Dechiffrement: "D=( K- C ) mod 26",
    },
    "Vernam(otp)": {
      link: "https://www.programiz.com/online-compiler/3nS1XOvpvmsSA",
      description: "Le chiffre de Vernam (OTP) est un chiffrement parfait utilisant une clé aléatoire aussi longue que le message, chaque caractère étant combiné avec un XOR.",
      Chiffrement: "C = M ⊕ K",
      Dechiffrement: "M = C ⊕ K",
    },
      "DES": {
      link: "https://www.programiz.com/online-compiler/5pg7sOnglYeyJ",
      description: "Algorithme de chiffrement symétrique par blocs (64 bits) utilisant une clé de 56 bits et 16 tours de transformations.",
      Chiffrement: "C = DES_Encrypt(M, K)",
      Dechiffrement: "M = DES_Decrypt(C, K)",
    },
    
  }; // 9C 71 A2 C7 3F 7C 42 C8 key: FD 1C CB A9 5A 1E 2C A0

export default function AlgorithmPage() {
  const params = useParams();
  const { name } = params;
  const algo = algorithms[name];

  useEffect(() => {
    toast.custom((t) => (
      <div className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">
                Compiler Notice
              </p>
              <p className="mt-1 text-sm text-gray-300">
                If the compiler appears buggy, please refresh the page.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-700">
          <button
            onClick={() => {
              window.location.reload();
              toast.dismiss(t.id);
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none"
          >
            Refresh
          </button>
        </div>
      </div>
    ), {
      duration: 8000,
      position: 'bottom-right',
    });
  }, []);

  if (!algo) {
    return <div className="min-h-screen p-6 text-red-600">Algorithm not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F5F7]">
      <Toaster />
      <Nav />
      
      <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F3F5F7] rounded-xl shadow-md overflow-hidden p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">{name}</h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Principe:</h2>
              <p className="text-gray-700">{algo.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-black  p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Chiffrement:</h3>
                <code className="text-white/80  p-2 rounded block overflow-x-auto">
                  {algo.Chiffrement}
                </code>
              </div>
              <div className="bg-black p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Déchiffrement:</h3>
                <code className="text-white/80 p-2 rounded block overflow-x-auto">
                  {algo.Dechiffrement}
                </code>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Compiler:</h3>
              <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={algo.link}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title={`${name} Code Compiler`}
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
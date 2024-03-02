"use client";
import { TypewriterEffect } from "../../app/components/ui/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectDemo() {
    const words = [
        {
          text: "En",
        },
        {
          text: "libérant",
        },
        {
          text: "ses",
        },
        {
          text: "clients",
        },
        {
          text: "des",
        },
        {
          text: "contraintes",
        },
        {
          text: "opérationnelles,",
        },
        {
          text: "elle",
        },
        {
          text: "contribue",
        },
        {
          text: "à",
        },
        {
          text: "créer",
        },
        {
          text: "un",
        },
        {
          text: "écosystème",
        },
        {
          text: "entrepreneurial",
        },
        {
          text: "florissant,",
        },
        {
          text: "stimulant",
        },
        {
          text: "l'innovation",
        },
        {
          text: "et",
        },
        {
          text: "la",
        },
        {
          text: "croissance.",
        },
        
      ];
      
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue w-screen"
    style={{
        backgroundImage: `url("/bg2.png")`,
        backgroundSize: 'cover',

    }}>
      <p className="text-white  text-2xl  mb-10">
      L'impact va au-delà des chiffres.
      </p>
      <div className="h-[400px] lg:w-[700px] sm:w-[300px text-4xl">
      <TypewriterEffect words={words} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 ">
      <Link href="/" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-blue absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 text-blue"></span>
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Continuer 👉</span>
</Link>			

      </div>
    </div>
  );
}

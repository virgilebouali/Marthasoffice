"use client";
import { TypewriterEffect } from "../../app/components/ui/typewriter-effect";
import Link from "next/link";
import { ServicesIntro } from "./servicesIntro";
export function TypewriterEffectDemo() {
    const words = [
        {
          text: "Martha's",
        },
        {
          text: "Office",
        },
        {
          text: "est",
        },
        {
          text: "votre ",
        },
        {
          text: "Directeur",
        },
        {
          text: "Administratif ",
        },
        {
          text: "et",
        },
        {
          text: "Financier  ",
        },
        {
          text: "externalisé ",
        },
  
      ];
      
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue w-screen"
    style={{
        backgroundImage: `url("/bg2.png")`,
        backgroundSize: 'cover',

    }}>
      <p className="text-white  text-2xl  font-bold mb-56">
      Dirigeant d’une entreprise ?
      </p>
      <div className="h-[200px] lg:w-[700px] sm:w-[300px] text-2xl mb-6">
        
      <TypewriterEffect words={words} />
      </div>
      

      <div className="flex flex-col md:flex-row md:space-y-0 space-x-0 md:space-x-4">
       
      <Link href="/" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange rounded-xl hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-oange absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 hover:text-blue"></span>
<span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-red hover:font-medium">En savoir plus</span>
</Link>			

      </div>
    </div>
  );
}

"use client";
import { TypewriterEffect } from "../../app/components/ui/typewriter-effectservices";
import Link from "next/link";
export function ServicesIntro() {
    const words = [
        { text: "Finances", className: "" },
        { text: "&", className: "" },
        { text: "Comptabilité", className: "" },
        { text: "Administration", className: "" },
        { text: "et", className: "" },
        { text: "Gestion", className: "" },
        { text: "Fiscalité", className: "" },
        { text: "et", className: "" },
        { text: "Veille", className: "" },
        { text: "Juridique", className: "" },
        { text: "Ressources", className: "" },
        { text: "Humaines", className: "" },
        { text: "Optimisation", className: "" },
        { text: "Numérique", className: "" },
        { text: "et", className: "" },
        { text: "Informatique", className: "" },
        { text: "Conseil", className: "" },
        { text: "stratégique", className: "" },
        { text: "et", className: "" },
        { text: "Organisationnel", className: "" },
      ];
      
  return (
    <div className="flex items-center justify-center w-full flex-col col-span-2 mx-auto-6">
      <div className="add-space-between-words hidden lg:block">
        <TypewriterEffect words={words} />
      </div>
    </div>
  );
}

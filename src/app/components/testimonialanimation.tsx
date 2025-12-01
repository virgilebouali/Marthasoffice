"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white  bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Beaucoup de drive, de précisions, et de livraisons, Nous sommes défendus et protègés avec courage devant la charge de travail et face aux situations litigieuses…",
    name: "Directeur, Multinationale 1Mrds ",
    title: "« Can do attitude »",
  },
  {
    quote:
      "You literally changed my life, by changing my perception of administration, process and controlling… My pricing and offers are now aligned with my back to end business. Looking forward to our next project",
    name: "Global TV anchelor and Startup Funder",
    title: "Martha’s Office literally change my life",
  },
  {
    quote: "Je me sentais tiraillée par quatre ans de retard administratif et financier, à un moment de tournant dans le développement de mon entreprise. Mon rôle est d’être la RP de mon entreprise, le moteur de création.",
    name: "Directrice et Fondatrice, secteur Médico-Social, C.A. 2,5 millions d’euros",
    title: "J’ai besoin d’un bras droit qui s’assure du reste. Et c’est ce que j’ai enfin trouvé.",
  },
  
];

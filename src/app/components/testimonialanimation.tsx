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
      "Le client exprime clairement son besoin d'assistance. Nous devrions mettre en place des actions immédiates pour répondre à ses attentes.",
    name: "Charles",
    title: "J’ai besoin qu’on s’occupe de ça.",
  },
  {
    quote:
      "Le collaborateur souligne l'importance de se concentrer sur les aspects commerciaux. Nous devrions soutenir cette initiative en allouant les ressources nécessaires pour renforcer nos activités commerciales.",
    name: "Helène",
    title: "Je dois me focaliser sur le commercial.",
  },
  {
    quote: "Le client reconnaît l'impact positif de notre collaboration sur la valeur de ses services. Cela souligne l'importance d'un soutien continu pour maintenir et améliorer cette valeur perçue.",
    name: "Edgar",
    title: "With your help, I set a good value to my services.",
  },
  
];

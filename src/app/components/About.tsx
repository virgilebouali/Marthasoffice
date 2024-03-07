import React from 'react'
import { useEffect, useState } from 'react';

export const About = () => {

        const features = [
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>,
                title: "Finance & Comptabilité",
                desc: "Gestion comptable et pilotage économique,⁠Recherche de financement avec des business plans viables, ⁠Suivi et Anticipation du besoin en trésorerie",
                
                href: "#",
                className: "bg-blue"
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>,
                title: "Administration et Gestion contractuelle",
                desc: "Gestion, écriture, mise à jour organisation de la rédaction à la validation des contrats cadres (statutaires, juridiques et bancaires)",
                href: "#"
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>,
                title: "Fiscalité et Veille Juridique",
                desc: "Veille et conseils juridiques et fiscaux pour vous protéger des risques réglementaires et optimiser vos positions économiques.",
                href: "#"
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>,
                title: " Conseil stratégique et Organisationnel",
                desc: "Bénéficiez de conseils stratégiques personnalisés pour optimiser vos performances. Mon approche holistique intègre une analyse approfondie, définissant des stratégies robustes et des structures organisationnelles efficaces.",
                href: "#"
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>,
                title: "Optimisation Numérique et Informatique",
                desc: "Explorez les opportunités de la transformation numérique. Mon accompagnement dans l'optimisation des processus via des solutions numériques favorise une croissance durable.",
                href: "#"
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>,
                title: "Ressources Humaines",
                desc: "Investissez dans votre capital humain pour stimuler la productivité. Mes services RH incluent le recrutement, la formation, la gestion des talents et des politiques alignées sur vos objectifs.",
                href: "#"
            },
        ]

        const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    // Vérifiez au chargement de la page
    checkIsMobile();

   
  }, []);
    
        return (
            <section className="py-8 mt-12 mb-12 shadow-inner bg-gray-200 -z-50"
            
                  id="services">
                
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 mt-4 -z-10">
                    <div className="max-w-xl space-y-3">
                        <h3 className="text-blue text-3xl font-semibold sm:text-4xl -z-10">
                           6 Services de Directeur Administratif et Financier
                        </h3>
                        <p className="text-white">
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 -z-10">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4">
                                        <div className="flex-none w-12 h-12 bg-orange    text-white rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-lg text-blue font-semibold">
                                                {item.title}
                                            </h4>
                                            <p className="text-blue">
                                                {item.desc}
                                            </p>
                                            
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
  


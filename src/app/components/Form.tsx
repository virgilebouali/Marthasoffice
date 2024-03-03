"use client"

import React from 'react'
    import Image from 'next/image'
    import Link from 'next/link'
    import { useState } from 'react'
    import { Toaster, toast } from 'sonner'

    export const Form = () => {

        const [isFormSubmitted, setIsFormSubmitted] = useState(false);

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
      
          // Ajoutez ici votre logique d'envoi de formulaire avec FormSubmit.
      
          try {
            // Exemple: Utilisez fetch pour envoyer le formulaire à votre endpoint FormSubmit.
            const response = await fetch("https://formsubmit.co/virgile.bouali@gmail.com", {
              method: "POST",
              // Ajoutez les en-têtes nécessaires et le corps du formulaire ici.
            });
      
            if (response.ok) {
              // La soumission du formulaire a réussi.
              setIsFormSubmitted(true);
              toast.success('Votre message a été envoyé avec succès !');
            } else {
              // La soumission du formulaire a échoué. Gérez l'erreur ici.
            }
          } catch (error) {
            console.error("Erreur lors de la soumission du formulaire:", error);
          }
        };

    return (
        <div>
            <section className="h-fit rounded-3xl mb-6 lg:mx-56 shadow-2xl  overflow-hidden" 
            style={{
                backgroundImage: `url("/bg2.png")`,
                backgroundSize: 'cover',

            }}>
        <div className="container px-6 py-10 mx-auto">
            <div className="block items-center lg:-mx-10 lg:flex">
                <div className="lg:w-1/2 lg:mx-10">
                    <h3 className="text-2xl font-semibold  capitalize text-white lg:text-3xl">Let’s talk</h3>

                    <p className="mt-4 text-white">
                        Ask us everything and we would love
                        to hear from you
                    </p>

                    <form className="mt-12"  onSubmit={handleSubmit} >
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-white">Nom complet</label>
                                <input type="text" name="name" placeholder="John Doe" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400text-white rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-white">Adresse e-mail</label>
                                <input type="email" name="email" placeholder="johndoe@example.com" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400text-white rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-white">Message</label>
                            <textarea name="message"  required className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400text-white rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group mt-4">
    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange group-hover:h-full"></span>
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
    <svg className="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Envoyer</span>
    </button>
                    </form>
                </div>
                <Toaster position="top-center" richColors/>

                <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                    <Image className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="/corpo2.jpg" width={500} height={500} alt=""/>

                    <div className="mt-6 space-y-8 md:mt-8">
                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            <span className="mx-2 text-white truncate w-72 dark:text-gray-400">
                                Vincennes, France.
                            </span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="mx-2 text-white truncate w-72 dark:text-gray-400">+33 62625849</span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <span className="mx-2 text-white truncate w-72 dark:text-gray-400">acb@example.com</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section></div>
    )
    }

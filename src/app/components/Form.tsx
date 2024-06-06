"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";




export const Form = () => {
  const router = useRouter();
  const handleSubmit = async (event: any) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  try {
    const response = await fetch('https://formsubmit.co/c88118e01be4e5bcc51a0cb19be4a3af', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }

    // Extraire les valeurs du formulaire
    const name = formData.get('name');
    const email = formData.get('email');
    const telephone = formData.get('telephone');
    const message = formData.get('message');

    console.log(name, email, telephone, message);

    // Redirection vers la page de confirmation après l'envoi réussi du formulaire
    toast.success('Message envoyé ! Nous vous recontacterons dans les plus brefs délais. Merci !');
    router.push('/confirmation');
  } catch (err) {
    console.error(err);
    // Gérer les erreurs d'envoi du formulaire
    toast.error('Une erreur est survenue. Veuillez réessayer.');
  }
};



  return (
    <div>
      <section
        className="h-fit  mb-6   overflow-hidden "
        style={{
          backgroundImage: `url("/bg2.png")`,
          backgroundSize: "cover",
        }}
        id="contact"
      >
        <div className="container px-6 py-10 mx-auto">
          <div className="block items-center lg:-mx-10 lg:flex">
            <div className="lg:w-1/2 lg:mx-10">
              <h3 className="text-2xl font-semibold  text-white lg:text-3xl">
              Passez à l’action :
              </h3>

              <p className="mt-4 text-white text-lg">
              Rencontrons nous et ensemble poursuivons votre développement professionnel. 
              </p>
              <form action="https://formsubmit.co/c88118e01be4e5bcc51a0cb19be4a3af" method="POST" className="mt-12" onSubmit={handleSubmit}>

                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-white">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre Nom"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400text-white rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-white">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre e-mail"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400text-white rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-white">
                      Numéro de téléphone
                    </label>
                    <input
                      type="telephone"
                      name="telephone"
                      placeholder="+33656897545"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400text-white rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400text-white rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-6 "
                  
                >
                  
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-red">
                      Envoyer
                    </span>
                 
                </button>
              </form>
            </div>
            <Toaster position="top-center" richColors />

            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <Image
                className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src="/corpo2.jpg"
                width={500}
                height={500}
                alt="form-image"
                title="form-img"
              />

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72 dark:text-gray-400">
                    Vincennes, France.
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72 dark:text-gray-400">
                    +33 62625849
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72 dark:text-gray-400">
contact@marthas-office.com                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

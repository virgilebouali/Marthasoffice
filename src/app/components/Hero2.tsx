<<<<<<< HEAD
"use client"
import Image from 'next/image'
import React from 'react'
import { useLanguage } from '../LanguageContext'
import { frenchTranslations } from '../locales/fr-default';

export const Hero2 = () => {
    const langContext = useLanguage();
    const translations = langContext?.translations ?? frenchTranslations;
    return (
        <div><div className="relative">
=======
import Image from 'next/image'
import React from 'react'

export const Hero2 = () => {
  return (
    <div><div className="relative">
>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8
    <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <a href="#" title="" className="flex">
                       <p className="text-lg font-bold">Martha's Office</p>
                    </a>
                </div>

                <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                    <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <section className=" overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="absolute bottom-0 right-0 hidden lg:block">
                    <Image className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" width={700}
      height={700} />
                </div>
                

                <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                    <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
<<<<<<< HEAD
                        {translations?.Name || 'Cynthia'}<br />
                        {translations?.Name || 'Cereyon'}
                    </h1>
                    <p className="mt-8 text-xl text-orange-500">{translations?.HeroTagline || 'Libérez votre potentiel entrepreneurial'}</p>
                    <p className="mt-8 text-xl text-black">{translations?.HeroDescription || 'Une assistance & expertise plurifonctionnelles pour vous libérer de vos tâches administratves et vous permettre de faire croitre votre business en toute confiance.'}</p>
=======
                        Cynthia<br />
                        Cereyon
                    </h1>
                    <p className="mt-8 text-xl text-orange-500">Libérez votre potentiel entrepreneurial</p>
                    <p className="mt-8 text-xl text-black">Une assistance & expertise plurifonctionnelles pour vous libérer de vos tâches administratves et vous permettre de faire croitre votre business en toute confiance.</p>
>>>>>>> ffb32841ddabed46d039076eb7e704db7b482ec8

                   
                </div>

            </div>

        </div>
    </section>
</div>
</div>
  )
}

"use client"

import React from 'react'
import CountUp from 'react-countup';

export const Stats = () => {
  return (
    <div> <div className=" py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  rounded-xl -z-50 "
    >
    <div className="grid row-gap-8 lg:grid-cols-5">
      <div className="grid lg:col-span-2 divide-y-1">
        <div className="bg-blue w-fit p-6 mb-2">
          <p className="mb-2 text-2xl font-bold text-white bg-blue">Mes résultats</p>
          <p className="text-white">
          Nos services, alliant expertise et approche humaine, ont permis la création de startups pérennes, la croissance dans des environnements concurrentiels, le redressement des prix et de la rentabilité, la relocalisation de projets, et la résolution de litiges administratifs, RH et financiers.</p>
        </div>
        <div className="bg-red w-full h-full mb-2 p-6">
          <p className="mb-2 text-2xl font-bold text-white mt-4 ">Pourquoi ça marche ?</p>
          <p className="text-white">
          Nous automatisons et planifions stratégiquement tout en offrant une protection juridique solide. Nos projets couvrent cabinets médicaux, sociétés de services, joint-ventures financières, BTP, négoce, BtoC alimentaire, et coaching bien-être.
          </p>
        </div>
      </div>
      <div className="flex border divide-y lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x shadow-lg lg:w-[800px] bg-gray-200 my-2">
        <div className="flex flex-col justify-around p-6 text-blue gap-y-4">
          <div>
            <p className="text-2xl font-semibold text-red">
              P&L
            </p>
            <p className="text-xl font-bold text-deep-purple-accent-400 sm:text-2xl text-blue mt-4">
            <CountUp end={7000000} duration={10} separator=" " />
€
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-red">
              Projets
            </p>
            <p className="text-xl font-bold text-deep-purple-accent-400 sm:text-2xl text-blue mt-4">
            <CountUp end={38} duration={10} separator=" " />

            </p>
          </div>

        </div>
        <div className="flex flex-col justify-around p-6 text-white">
          <div>
            <p className="text-2xl font-semibold text-red ">
              Jours-Homme
            </p>
            <p className="text-xl font-bold text-deep-purple-accent-400 sm:text-2xl text-blue mt-4">
            <CountUp end={86} duration={10} separator=" " />
            {''} K
            </p>
          </div> 
          <div>
            <p className="text-2xl font-semibold text-red mt-6">
              Expertise
            </p>
            <p className="text-xl font-bold text-deep-purple-accent-400 sm:text-2xl text-blue mt-4">
            <CountUp end={19 } duration={10} separator=" " />
            {''} ans
            </p>
          </div>

        </div>
      </div>
      
    </div>
    
  </div>
  <div className="bg-orange w-full h-full mb-2 p-6 mt-2 hidden">
          <p className="mb-2 text-2xl font-bold text-white mt-4 ">A propos de Martha's Office</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam, assumenda error exercitationem ipsam ipsa perspiciatis aliquid sint ex ducimus, quia voluptate illum ad quibusdam modi nisi placeat dolorem earum.
            Tenetur inventore hic sint voluptates possimus? Voluptates possimus quidem ipsam asperiores! Recusandae dolor est cum aliquam, fuga voluptas dicta ab suscipit, eos sed repellat nam enim qui ad aspernatur ipsum.
            Consequatur enim laborum rem, similique quasi tenetur error eligendi non dolores numquam sunt magnam distinctio minima dolorem alias officia! Assumenda, vitae excepturi soluta deserunt saepe natus id dolor nulla iusto?
            Dolore illum id minima deserunt iusto ipsam aperiam, assumenda porro tenetur numquam veniam. Consectetur error consequuntur explicabo totam rerum fugiat amet, ipsam sapiente tempore iste ad quia quidem sunt officia.
            Quibusdam architecto placeat aut voluptatum modi optio enim quis distinctio ea facere recusandae deleniti nisi, rerum sint vero autem quisquam sapiente a dolore molestiae magni. Debitis quas placeat temporibus quis.
          </p>
        </div></div>
  )
}

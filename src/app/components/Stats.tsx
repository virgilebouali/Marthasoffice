"use client"

import React from 'react'
import CountUp from 'react-countup';

export const Stats = () => {
  return (
    <div > <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  mb-6  rounded-xl -z-50"
    >
    <div className="grid gap-6 row-gap-8 lg:grid-cols-5">
      <div className="grid gap-2 lg:col-span-2 divide-y-1">
        <div>
          <p className="mb-2 text-xl font-bold text-blue">Mes résultats</p>
          <p className="text-gray-700">
            An old man lived in the village. He was one of the most
            unfortunate people in the world. The whole village was tired of
            him, he was always gloomy, he constantly complained.
          </p>
        </div>
        <div>
          <p className="mb-2 text-xl font-bold text-red mt-4">Pourquoi ça marche ?</p>
          <p className="text-gray-700">
            People have been coming to the wise man, complaining about the
            same problems every time. One day he told them a joke and everyone
            roared in laughter.
          </p>
        </div>
      </div>
      <div className="grid border divide-y rounded-xl shadow-slate-300 lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x shadow-2xl bg-blue">
        <div className="flex flex-col justify-between p-12 text-white gap-y-4">
          <div>
            <p className="text-2xl font-semibold text-pink sm:text-base">
              P&L
            </p>
            <p className="text-4xl font-bold text-deep-purple-accent-400 sm:text-xl text-white mt-4">
            <CountUp end={7000000} duration={3} separator=" " />
€
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-pink sm:text-base">
              Projets
            </p>
            <p className="text-4xl font-bold text-deep-purple-accent-400 sm:text-xl text-white mt-4">
            <CountUp end={38} duration={3} separator=" " />

            </p>
          </div>

        </div>
        <div className="flex flex-col justify-between p-12 text-white">
          <div>
            <p className="text-2xl font-semibold text-pink sm:text-base ">
              Jours-Homme
            </p>
            <p className="text-4xl font-bold text-deep-purple-accent-400 sm:text-xl text-white mt-4">
            <CountUp end={86} duration={3} separator=" " />
            {''} K
            </p>
          </div> 
          <div>
            <p className="text-2xl font-semibold text-pink sm:text-base mt-6">
              Expertise
            </p>
            <p className="text-4xl font-bold text-deep-purple-accent-400 sm:text-xl text-white mt-4">
            <CountUp end={19 } duration={3} separator=" " />
            {''} ans
            </p>
          </div>

        </div>
      </div>
    </div>
  </div></div>
  )
}

"use client"

import React from 'react'
import CountUp from 'react-countup';

export const Stats = () => {
  return (
    <div> <div className=" py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  rounded-xl -z-50 "
    >
    <div className="grid row-gap-8 lg:grid-cols-5">
      <div className="grid lg:col-span-2 divide-y-1">
        <div className="bg-blue w-fit p-6 rounded-t-xl">
          <p className="mb-2 text-2xl font-bold text-white bg-blue">Mes résultats</p>
          <p className="text-white">
            An old man lived in the village. He was one of the most
            unfortunate people in the world. The whole village was tired of
            him, he was always gloomy, he constantly complained.
          </p>
        </div>
        <div className="bg-red w-full h-full lg:rounded-b-xl p-6">
          <p className="mb-2 text-2xl font-bold text-white mt-4 ">Pourquoi ça marche ?</p>
          <p className="text-white">
            People have been coming to the wise man, complaining about the
            same problems every time. One day he told them a joke and everyone
            roared in laughter.
          </p>
        </div>
      </div>
      <div className="flex border divide-y rounded-xl lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x shadow-lg lg:w-[800px] bg-gray-100">
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
  </div></div>
  )
}

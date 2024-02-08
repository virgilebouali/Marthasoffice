import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link'

export const Hero = () => {
  return (
    <div className="lg:flex sm:block md:block  lg:w-fit sm:w-fit ">
<section className="bg-white-800 text-black">
	<div className="container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
        <Image
      src="/hero2.png"
      width={700}
      height={700}
      alt="Cynthia Cereyon"
      className="rounded shadow-2xl shadow-pink-300 mb-12 mt-6"
    />		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		
			<h1 className="text-7xl font-bold text-indigo-700">
				Cynthia Cereyon
			</h1>
			<h2 className=" sm:text-4xl md:text-4xl font-bold leadi mt-4">
				<span className="text-pink-700 text-4xl w-fit">Libérez votre potentiel entrepreneurial</span>
			</h2>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Une assistance & expertise plurifonctionnelles pour vous libérer de vos tâches administratves et vous permettre de faire croitre votre business en toute confiance.
			
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-indigo-500 text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition hover:text-white">Contactez moi</Link>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

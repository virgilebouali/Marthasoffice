import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link'
import { NavbarDesktop } from './NavbarDesktop'

export const Hero = () => {
  return (
    <div className="lg:block sm:block md:block  lg:w-full sm:w-fit w-auto ease-in">
		<NavbarDesktop />
<section
        className="bg-cover bg-center relative text-black w-full"
        style={{
			backgroundImage: `url("/bg2.png")`,
			backgroundSize: 'cover',

        }}
      >
	<div className="container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
		<div className="flex items-center justify-center p-6  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-12 ">
        <Image
      src="/cynthi.jpg"
      width={500}
      height={500}
      alt="Cynthia Cereyon"
      className="rounded-full border-2-b  shadow-xl  lg:mr-12 mt-6"
    />		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:-mt-12">
		   <h3 className="mb-4 text-2xl mt-8 text-white" >Directeur Administratif et Financier <span> </span>  </h3>
			<h1 className="text-7xl font-bold text-white">
				Cynthia Cereyon
			</h1>
			<h2 className=" sm:text-4xl md:text-4xl font-bold leadi mt-4">
				<span className="text-white text-4xl w-fit">Mon travail est de simplifier le votre.</span>
			</h2>
			<p className="mt-6 mb-8 text-2xl sm:mb-12 text-white">Un apport & une expertise plurifonctionnelles pour vous libérer de vos tâches administratves et vous permettre de faire croitre votre business en toute confiance.
			
			</p>
			<div className="hidden flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
			<Link href="#contact" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-blue absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 text-blue"></span>
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Contactez moi 📪</span>
</Link>			
</div>

		</div>
	</div>

</section>

    </div>
  )
}

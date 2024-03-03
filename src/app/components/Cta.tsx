import React from 'react'
import Image from 'next/image'
import Link  from 'next/link'
export const Cta = () => {
  return (
    <div className="z-0 mt-24">
      <div className="container my-4 mx-auto md:px-6 rounded">
    <section className="mb-6" id="cta">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 rounded">
          <div className="flex lg:py-12">
            <Image src="/corpo1.jpg" width={500} height={500}
              className="w-full rounded-lg shadow-lg shadow-black/20 lg:ml-[50px]" alt="image" />
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 shadow-2xl rounded-3xl">
          <div className="flex h-full items-center rounded-3xl p-6 text-center text-white lg:pl-12 lg:text-left"
          style={{
            backgroundImage: `url("/bgcta2.png")`,
            backgroundSize: 'cover',
      
              }}>
            <div className="lg:pl-12">
              <h2 className="mb-6 text-3xl font-bold">
                Libérez votre potentiel entrepreneurial
              </h2>
              <p className="mb-6 pb-2 lg:pb-0">
              Entrepreneuse passionnée, je découvre ma mission en parcourant le monde et en dialoguant avec divers entrepreneurs. <br></br> Au contact de journalistes, entrepreneurs du bâtiment, et dirigeants de PME, <br></br> je réalise comment je peux apporter une valeur significative grâce à mon parcours et mon expérience transverse en finance, comptabilité, et conseil.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-red absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 text-blue"></span>
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Devenir partenaire 🤝</span>
</Link>						</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div></div>
  )
}

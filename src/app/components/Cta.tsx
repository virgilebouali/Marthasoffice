import React from 'react'
import Image from 'next/image'
export const Cta = () => {
  return (
    <div className="z-0">
      <div className="container my-12 mx-auto md:px-6 rounded">
    <section className="mb-32 ">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div className="flex lg:py-12">
            <Image src="/emmy.jpg" width={500} height={500}
              className="w-full rounded-lg shadow-lg shadow-black/20 lg:ml-[50px]" alt="image" />
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 shadow-2xl shadow-indigo-500 ">
          <div className="flex h-full items-center rounded-lg p-6 text-center text-white lg:pl-12 lg:text-left bg-gradient-to-r from-indigo-700 via-black-500 to-indigo-500">
            <div className="lg:pl-12">
              <h2 className="mb-6 text-3xl font-bold">
                What are you waiting for?
              </h2>
              <p className="mb-6 pb-2 lg:pb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, sint, repellat vel quo quisquam accusamus in qui at
                ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                distinctio eum neque!
              </p>
              <button type="button"
                className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init data-te-ripple-color="light">
                Me rejoindre
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div></div>
  )
}

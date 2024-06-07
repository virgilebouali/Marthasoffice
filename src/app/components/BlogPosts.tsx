import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPosts = () => {
  return (
<section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 md:py-24 lg:py-24 ">
    {/* Component */}
    <div className="flex flex-col items-center">
      {/* Heading Div */}
      <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
        <h2 className="text-3xl font-semibold  md:text-5xl">Mes articles et  <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">expériences</span></h2>
        <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">Plongez dans mon parcours professionnel à travers ces articles détaillant mes expériences.</p>
        </div>
      {/* Blog Div */}
      <div className="mb-6 grid grid-cols-1 justify-items-center gap-8 sm:justify-items-stretch md:mb-10 md:grid-cols-3 md:gap-4 lg:mb-12">
        {/* Blog Item */}
      <Link href="/blog/articles/mon-voyage-autour-du-monde"> <a href="/blog/articles/article-1" className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(29,24,66)_7px_7px]">
          <Image width={500} height={500} src="/travel.jpeg" alt="" className="inline-block h-60 w-full object-cover" />
          <div className="w-full pt-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">lifestyle</p>
            <p className="mb-4 text-xl font-semibold text-red">Mon voyage à travers le monde</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">L'année dernière, j'ai bénéficié d'une pause de six mois et j'ai réalisé le rêve de ma fille en entreprenant un tour du monde, visitant 17 pays...</p>
            <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <Image width={500} height={500} src="/article-svgrepo-com (1).svg" alt="" className="mr-4 inline-block h-10 w-10 rounded-full object-cover" />
              <div className="flex flex-col items-start">
                <h3 className="text-base font-semibold text-blue">Blog</h3>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">07 Mai 2024</p>
                </div>
              </div>
            </div>
          </div>
        </a> </Link>
        {/* Blog Item */}
        <a href="/blog/articles/le-role-de-daf" className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(142,13,60)_7px_7px]">
          <Image width={500} height={500} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980defd9d4a1fd1cf20a3d_Rectangle%20801.jpg" alt="" className="inline-block h-60 w-full object-cover" />
          <div className="w-full pt-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">work</p>
            <p className="mb-4 text-xl font-semibold text-red">Le rôle de DAF</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">Le rôle de Directeur Administratif et Financier (DAF) a considérablement évolué, en particulier dans le contexte de la transformation numérique...</p>
            <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <Image width={500} height={500} src="/article-svgrepo-com (1).svg" alt="" className="mr-4 inline-block h-10 w-10 rounded-full object-cover" />
              <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-blue">Blog</h3>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">23 Mars 2024</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* Blog Item */}
        <a href="/blog/articles/responsabilites-cles-du-daf" className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(239,59,51)_7px_7px]">
          <Image width={500} height={500} src="/pexels-jeshoots-com-147458-530024.jpg" alt="" className="inline-block h-60 w-full object-cover" />
          <div className="w-full pt-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">career </p>
            <p className="mb-4 text-xl font-semibold text-red">Responsabilités clés du DAF</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">Les responsabilités du Directeur Administratif et Financier (DAF) se sont élargies au-delà de la gestion financière traditionnelle pour inclure le leadership...</p>
            <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <Image width={500} height={500} src="/article-svgrepo-com (1).svg" alt="" className="mr-4 inline-block h-10 w-10 rounded-full object-cover" />
              <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-blue">Blog</h3>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">12 Février 2024</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default BlogPosts
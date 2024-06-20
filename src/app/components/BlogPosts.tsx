import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './ToggleLanguage';
const BlogPosts = () => {
  const { translations } = useLanguage();

  return (
<section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-24 lg:py-16">
    {/* Component */}
    <div className="flex flex-col items-center">
      {/* Heading Div */}
      <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
        <h2 className="text-3xl font-semibold  md:text-5xl">{translations.BlogTitle}<span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">experiences</span></h2>
        <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">{translations.Blogdescription}</p>
        </div>
      {/* Blog Div */}
      <div className="mb-6 grid grid-cols-1 justify-items-center gap-8 sm:justify-items-stretch md:mb-10 md:grid-cols-3 md:gap-4 lg:mb-12">
        {/* Blog Item */}
      <Link href="/blog/articles/mon-voyage-autour-du-monde"> <a href="/blog/articles/article-1" className="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(29,24,66)_7px_7px]">
          <Image width={500} height={500} src="/travel.jpeg" alt="" className="inline-block h-60 w-full object-cover" />
          <div className="w-full pt-4">
            <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">lifestyle</p>
            <p className="mb-4 text-xl font-semibold text-red">{translations.BlogTitle1}</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">{translations.Blogdescription1}</p>
            <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <Image width={500} height={500} src="/article-svgrepo-com (1).svg" alt="" className="mr-4 inline-block h-10 w-10 rounded-full object-cover" />
              <div className="flex flex-col items-start">
                <h3 className="text-base font-semibold text-blue">Blog</h3>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">{translations.BlogDate1}</p>
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
            <p className="mb-4 text-xl font-semibold text-red">{translations.BlogTitle2}</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">{translations.Blogdescription2}</p>
            <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <Image width={500} height={500} src="/article-svgrepo-com (1).svg" alt="" className="mr-4 inline-block h-10 w-10 rounded-full object-cover" />
              <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-blue">Blog</h3>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">{translations.BlogDate2}</p>
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
            <p className="mb-4 text-xl font-semibold text-red">{translations.BlogTitle3}</p>
            <p className="mb-5 font-normal text-[#636262] lg:mb-8">{translations.Blogdescription3}</p>
            <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
              <Image width={500} height={500} src="/article-svgrepo-com (1).svg" alt="" className="mr-4 inline-block h-10 w-10 rounded-full object-cover" />
              <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold text-blue">Blog</h3>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm text-[#636262]">{translations.BlogDate3}</p>
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
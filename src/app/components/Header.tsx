"use client"

import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div>
<header className="sm:block md:block">

    <nav className="flex justify-between items-center py-4">
        <p className="text-2xl font-bold text-blue-600">{`Martha&apos;s Office`}</p>
        <div className="flex space-x-4 gap-8">
        <Link href="" className="text-black-500 hover:shadow-xl p-4">Accueil</Link>
        <Link href="" className="text-black-500 hover:shadow-xl p-4">A propos</Link>
        <Link href="" className="text-black-500 hover:shadow-xl p-4">Services</Link>
        <Link href="" className="text-black-500 hover:shadow-xl p-4">Contact</Link>
        </div>
    </nav>

</header>

    </div>
  )
}

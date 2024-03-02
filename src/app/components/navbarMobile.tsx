"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react'; // Assurez-vous que les noms des icônes sont corrects
import Image from 'next/image';
export const NavbarMobile = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50 bg-white">
      <div className=" flex place-items-right overflow-x-scroll rounded-lg lg:overflow-visible">
        <div className="fixed z-50 ">
          <nav className="w-screen justify-between top-0 z-50 block px-4 py-2 border rounded-none shadow-md botext-blue-500/80 bg-white  lg:px-8 lg:py-4">
            <div className="flex items-right justify-between text-blue-gray-900 ">
            <Image src="/icons8-poupée-russe-96.png" width={40} height={40}  alt="" />
              <h3 className="font-bold text-red flex justify-between text-2xl gap-2">Martha's  <span className="text-blue ">     Office </span></h3>
              <div className="flex items-center gap-4">
                <div className="hidden mr-4 lg:block">
                  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center hover:text-blue-600 hover:shadow-xl">
                        Solutions
                      </Link>
                    </li>
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center hover:text-blue-600 hover:shadow-xl">
                        Me rejoindre
                      </Link>
                    </li>
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center hover:text-blue-600 hover:shadow-xl">
                        Ils parlent de moi
                      </Link>
                    </li>
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center hover:text-blue-600 hover:shadow-xl">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <button
                  className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                  type="button"
                  onClick={toggleMenu}
                >
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {isMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </span>
                </button>
              </div>
            </div>
            {isMenuOpen && (
  <div className=" bg-white top-full left-0 right-0 p-4  rounded-md z-50">
    <div className="">
    <ul className="flex flex-col gap-4">
      <li className="block p-2 text-blue-gray-900">
        <Link href="#" className="flex items-center">
          Services
        </Link>
      </li>
      <li className="block p-2 text-blue-gray-900">
        <Link href="#" className="flex items-center">
          Devenir partenaire
        </Link>
      </li>
      <li className="block p-2 text-blue-gray-900">
        <Link href="#" className="flex items-center">
          Me contacter
        </Link>
      </li>

      {/* Ajoutez autant d'éléments de menu que nécessaire */}
    </ul>
    </div>
  </div>
)}
          </nav>
        </div>
      </div>
    </div>
  );
};

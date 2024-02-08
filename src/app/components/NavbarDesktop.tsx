"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react'; // Assurez-vous que les noms des icônes sont corrects
import Image from 'next/image';
export const NavbarDesktop = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-full justify-between mb-24">
      <div className="  w-full justify-between  ">
        <div className="  justify-between ">
          <nav className="justify-between  z-10 border shadow-md botext-blue-500/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className=" justify-between items-center flex  text-blue-gray-900 ">
              <Link href="#" className="  block cursor-pointer py-1.5 text-2xl font-sans rounded font-medium leading-relaxed text-inherit antialiased text-pink-500 tracking-tighter sm:items-center sm:text-center ">
                <Image src="/headerlogo1.png" width={100} height={100} alt='logo' className="contain" />
              </Link>
              <div className="flex items-center gap-4 w-full">
                <div className="hidden mr-4 lg:block w-full text-center items-center" >
                  <ul className="flex flex-col  gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-center justify-center">
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center hover:shadow-blue-100 hover:shadow-xl p-4 rounded-xl">
                        Solutions
                      </Link>
                    </li>
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center  hover:shadow-xl hover:shadow-blue-100 p-4 rounded-xl">
                        Me rejoindre
                      </Link>
                    </li>
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center hover:shadow-blue-100 hover:shadow-xl p-4 rounded-xl">
                        Ils parlent de moi
                      </Link>
                    </li>
                    <li className="block p-1 text-blue-gray-900">
                      <Link href="#" className="flex items-center hover:shadow-blue-100 hover:shadow-xl p-4 rounded-xl">
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
  <div className=" bg-white top-full left-0 right-0 p-4 border rounded-md z-50">
    <div className="">
    <ul className="flex flex-col gap-4">
      <li className="block p-2 text-blue-gray-900">
        <Link href="#" className="flex items-center">
          Menu Item 1
        </Link>
      </li>
      <li className="block p-2 text-blue-gray-900">
        <Link href="#" className="flex items-center">
          Menu Item 2
        </Link>
      </li>
      <li className="block p-2 text-blue-gray-900">
        <Link href="#" className="flex items-center">
          Menu Item 2
        </Link>
      </li>
      <li className="block p-2 text-blue-gray-900">
        <Link href="#" className="flex items-center">
          Menu Item 2
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
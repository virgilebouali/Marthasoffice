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
    <div className=" w-full justify-between -z-50 hidden lg:block " 
    >
      <div className="  w-full justify-between ">
        <div className="  justify-between ">
          <nav className="justify-between  border shadow-md botext-blue-500/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8">
            <div className=" justify-between items-center flex  text-blue-gray-900 ">
              <div className="flex items-center gap-4 w-full"> <Link href="/">
              <Image src="/icons8-poupée-russe-96.png" width={40} height={40}  alt="logo" title="logoheader" />
              </Link>
              <h1 className="font-bold text-red flex justify-between text-2xl gap-2">Martha's  <span className="text-blue ">     Office </span></h1>

                <div className="hidden mr-4 lg:block w-full text-center items-center ml-36" >
                
                  <ul className="flex flex-col  gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-center justify-evenly">
                    <li className="block  text-blue-gray-900 hover:border-blue hover:border-b-2">
                      <Link href="#services" className="flex items-center hover:shadow-blue-100  hover:text-red p-2 rounded-xl" >
                        Services
                      </Link>
                    </li>
                    <li className="block  text-blue-gray-900 hover:border-blue hover:border-b-2">
                      <Link href="#contact" className="flex items-center   hover:shadow-blue-100 hover:text-red p-2 rounded-xl hover:text">
                        Devenir partenaire
                      </Link>
                    </li>
                    <div className="flex flex-row space-x-4 items-center justify-between">
                           
                           <Link href="" className="hover:scale-125 hidden" >
                           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="50" height="50" viewBox="0 0 48 48">
<path fill="#f55376" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fac8d5" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fac8d5"></circle><path fill="#fac8d5" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18 z"></path>
</svg>
                           </Link>
                           <Link href="https://www.linkedin.com/in/cynthia-martha-cereyon/?originalSubdomain=fr" className="hover:scale-125">
                           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>       
                           </Link>
                       </div>
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
          
          </nav>
        </div>
      </div>
    </div>
  );
};

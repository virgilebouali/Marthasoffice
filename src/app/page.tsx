"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hero2 } from "./components/Hero2";

import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { NavbarDesktop } from "./components/NavbarDesktop";
import { Form } from "./components/Form";
import "animate.css";
import { Footer } from "./components/Footer";
import { Cta } from "./components/Cta";
import { NavbarMobile } from "./components/navbarMobile";
import { InfiniteMovingCardsDemo } from "./components/testimonialanimation";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="" >
        <div className="lg:hidden bg-white " ></div>
        <main className=" sm:mx-0 sm:block w-full shadow-xl  bg-white "
        >
          <div className="mb-12 w-full z-50" >
            {isMobile ? <NavbarMobile /> : ""}
            <Hero />
          </div>
          <hr className="border-red mx-24"/>
          <div>
            <Stats />
          </div>
          <hr className="border-blue mx-24"/>
          <div className=" z-0 animate__animated animate__fadeIn animate__delay-2s">
            <About />
          </div>
          <hr className="border-red mx-24"/>

          <div className="z-0 animate__animated animate__fadeIn animate__delay-2s">
            <Cta />
          </div>
          <hr className="border-blue mx-24"/>

          <div className=" z-0 animate__animated animate__fadeIn animate__delay-1s">
<InfiniteMovingCardsDemo />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

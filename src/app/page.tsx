"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { NavbarDesktop } from "./components/NavbarDesktop";
import { Form } from "./components/Form";
import "animate.css";
import { Footer } from "./components/Footer";
import { Cta } from "./components/Cta";
import { NavbarMobile } from "./components/NavbarMobile";

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
      <div className="">
        <div className="lg:hidden bg-white"></div>
        <main className="lg:mx-56 sm:mx-0 sm:block border-r-2 border-l-2 shadow-xl z-100 bg-white">
          <div className="mb-16 w-full">
            {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
          </div>
          <div>
            <Hero />
          </div>
          <div>
            <Stats />
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <About />
          </div>
          <div className="-z-100 animate__animated animate__fadeIn animate__delay-2s">
            <Cta />
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <Features />
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <Testimonials />
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <Form />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

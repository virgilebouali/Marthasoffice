"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hero2 } from "./components/Hero2";
import { InView } from 'react-intersection-observer';
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
import BackToTopButton from "./components/backToTop";
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'sonner'


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

  const router = useRouter();

  useEffect(() => {
    // Vérifier si la redirection a déjà eu lieu
    const redirectKey = 'redirectedToIntro';
    const alreadyRedirected = localStorage.getItem(redirectKey);

    if (!alreadyRedirected) {
      // Rediriger vers /intro et marquer la redirection
      router.push('/intro');
      localStorage.setItem(redirectKey, 'true');
    }
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="lg:hidden bg-white "></div>
        <main className="sm:mx-0 sm:block w-full shadow-xl bg-white space-y-4">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`mb-12 w-full z-50 ${inView ? 'animate__animated animate__fadeIn animate__delay-1s ' : ''}`}>
                {isMobile ? <NavbarMobile /> : ""}
                <Hero />
              </div>
            )}
          </InView>
          <BackToTopButton />
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`z-0 animate__animated animate__fadeIn animate__delay-1s  ${inView ? 'animate__animated animate__fadeIn animate__delay-1s -z-40 ' : ''}`}>
                <About />
              </div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={` ${inView ? 'animate__animated animate__fadeIn animate__delay-1s -z-40' : ''}`}>
                <Stats />
              </div>
            )}
          </InView>
         
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`z-0 animate__animated animate__fadeIn animate__delay-1s  ${inView ? 'animate__animated animate__fadeIn animate__delay-1s -z-40' : ''}`}>
                <Cta />
              </div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`z-0 animate__animated animate__fadeIn animate__delay-1s  ${inView ? 'animate__animated animate__fadeIn animate__delay-1s -z-40' : ''}`}>
                <InfiniteMovingCardsDemo />
              </div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className={`z-0 animate__animated animate__fadeIn animate__delay-1s  ${inView ? 'animate__animated animate__fadeIn animate__delay-1s -z-40' : ''}`}>
 <Form />              </div>
            )}
          </InView>
         
          <Footer  />
        </main>
      </div>
    </div>
  );
}

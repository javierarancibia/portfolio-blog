"use client"

import Image from "next/image";
import styles from "./comprar.module.css";
import { Inter } from "next/font/google";
import BuyButton from "./BuyButton";

const inter = Inter({ subsets: ["latin"] });

export default async function Comprar() {

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-800">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-md text-center lg:mx-15 lg:flex-auto lg:py-32 lg:text-left">
        <div className={styles.logo} >
            <Image src="/logowhite.png" height={100} width={100} className="mb-5 lg:mb-12 w-[5rem] max-w-none sm:w-[7rem] md:-ml-4 lg:-ml-0" unoptimized alt="hero"  />
        </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-blue-700">
              Automatiza tu tasación 
            </span>
            <br />
            Obtén el valor de tu departamento en segundos
          </h2>
          <p className={ `mt-6 text-lg leading-8 text-gray-300 ${inter.className}`}>
          ¡No pierdas más tiempo y dinero! Descubre el poder de CommercialCity y obtén tasaciones precisas al instante.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <BuyButton />
          </div>
          <p className={`mt-6 italic text-sm font-thin leading-7 text-white ${inter.className}`}>* Sólo en comunas de la Región Metropolitana: Providencia, Santiago y Vitacura</p>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2" style={{marginTop:"12rem"}}>
        <Image
          src="/mockup4.png"
          height={1000}
          width={1000}
          className={styles.reportImage}
          unoptimized
          alt="reporte"
        />
      </div>
    </section>
  );
}



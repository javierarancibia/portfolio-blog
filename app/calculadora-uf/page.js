import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from "./CalculadoraUF.module.css"
import CalculatorComponent from './Components/CalculatorComponent'
import BuyButton from "../probar/BuyButton"

const inter = Inter({ subsets: ['latin'] })

async function getData() {
    const res = await fetch("https://mindicador.cl/api/uf")
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  

export default async function CalculadoraUF() {
    const data = await getData()
    return (
        <main className={styles.mainContainer}>
            <div className="relative" id="home">
                <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                    <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                </div>
                <div>
                    <div className="relative pt-36 ml-auto">
                        <div className="lg:w-2/3 text-center mx-auto">
                            <h1 className="text-blue-700 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Calculadora UF a CLP</h1>
                            <h2 className="mt-8 text-gray-700 dark:text-gray-300 text-xl">Calcula la conversión de Unindad de Fomento (UF) a Pesos Chilenos y viceversa en segundos</h2>
                            <div className='mb-28 mt-11'>
                                { data && <CalculatorComponent data={data} /> } 
                            </div>
                            <div className="mx-auto max-w-7xl py-10 px-6 lg:px-1 md:px-10 bg-gray-800 rounded-3xl mt-15">
                                <div className="mx-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 p-5">
                                    <div className="lg:pr-8 lg:pt-4 sm:px-2">
                                        <div className="lg:max-w-lg">
                                            <div className={styles.logo} >
                                                <Image src="/logowhite.png" height={100} width={100} className="mb-5 lg:mb-12 w-[5rem] max-w-none sm:w-[7rem] md:-ml-4 lg:-ml-0" unoptimized alt="Tasaciones Online"  />
                                            </div>
                                            <h1 className={`text-2xl text-center sm:text-left text-blue-700 font-normal ${inter.className}`}>TASACIÓN 100% ONLINE</h1>
                                            <h2 className={`mb-7 text-base font-semibold leading-7 text-white ${inter.className} ${styles.headerTitle}`}>Diseñado para Propietarios, Corredores de Propiedad y Tasadores</h2>
                                            {/* <p className="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">Data</p> */}
                                            <div className={`mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl ${styles.headerTitle}`}>
                                                <h3 className={`text-3xl font-bold tracking-tight text-white sm:text-6xl ${inter.className}`}>Commercial<span className="text-blue-700">City</span></h3>
                                                <h4 className={`mt-6 text-lg sm:text-2xl leading-8 text-white font-normal ${inter.className}`}>Obtén el precio de tu departamento en segundos</h4>
                                                <p className={`mt-6 text-lg leading-8 text-white font-thin ${inter.className}`}>Nuestros algoritmos calculan el valor real de tu departamento en base a valores de mercado actuales, generando un informe profesional para ti en solo segundos</p>
                                                
                                                <BuyButton />

                                                <p className={`mt-6 italic text-sm font-thin leading-7 text-white ${inter.className}`}>* Sólo en comunas de la Región Metropolitana</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Image src="/hero.png" height={500} width={500} className={`w-[20rem] max-w-none sm:w-[55rem] md:-ml-4 lg:-ml-0 ${styles.mainImage}`} unoptimized alt="Tasaciones online"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}



import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "./Header.module.css"
import { BiTime, BiFoodMenu, BiWifi } from "react-icons/bi"
import TermsTrigger from './TermsTrigger'
import BuyButton from "../app/probar/BuyButton"

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    
    return (
        <div className="overflow-hidden lg:pb-5 sm:py-32">
            <div className="mx-auto max-w-7xl py-10 px-6 lg:px-1 md:px-10">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4 sm:px-2">
                        <div className="lg:max-w-lg">
                            <div className={styles.logo} >
                                <Image src="/logowhite.png" height={100} width={100} className="mb-5 lg:mb-12 w-[5rem] max-w-none sm:w-[7rem] md:-ml-4 lg:-ml-0" unoptimized alt="Tasaciones Online"  />
                            </div>
                            <h2 className={`text-2xl text-center sm:text-left text-blue-700 font-normal ${inter.className}`}>TASACIÓN 100% ONLINE</h2>
                            <h2 className={`mb-7 text-base font-semibold leading-7 text-white ${inter.className} ${styles.headerTitle}`}>Diseñado para Propietarios, Corredores de Propiedad y Tasadores</h2>
                            {/* <p className="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">Data</p> */}
                            <div className={`mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl ${styles.headerTitle}`}>
                                <h1 className={`text-3xl font-bold tracking-tight text-white sm:text-6xl ${inter.className}`}>Commercial<span className="text-blue-700">City</span></h1>
                                <h2 className={`mt-6 text-lg sm:text-2xl leading-8 text-white font-normal ${inter.className}`}>Obtén el precio de tu departamento en segundos</h2>
                                <p className={`mt-6 text-lg leading-8 text-white font-thin ${inter.className}`}>Nuestros algoritmos calculan el valor real de tu departamento en base a valores de mercado actuales, generando un informe profesional para ti en solo segundos</p>
                                
                                <BuyButton />

                                <p className={`mt-6 italic text-sm font-thin leading-7 text-white ${inter.className}`}>* Sólo en comunas de la Región Metropolitana</p>
                                <TermsTrigger />
                            </div>
                            <div style={{marginTop:"3rem"}} className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <div>
                                    <BiTime className={styles.headerIcons} />
                                    <h5 className={`text-slate-50 text-xs lg:mb-3 font-extralight ${inter.className} antialiased text-center`}>RECIBE EL INFORME A TU CORREO EN SÓLO SEGUNDOS</h5>
                                    {/* <p className={`text-blue-200 text-xs lg:mb-3 font-extralight ${inter.className} antialiased text-justify`}>Automatiza el proceso de tasación, brindándote resultados instantáneos y ahorrándote tiempo valioso. Obtén una ventaja competitiva al tomar decisiones informadas de manera rápida y eficiente.</p> */}
                                </div>
                                <div>
                                    <BiFoodMenu className={styles.headerIcons} />
                                    <h5 className={`text-slate-50 text-xs lg:mb-3 font-extralight ${inter.className} antialiased text-center`}>FÁCIL DE USAR CON NUESTRA INTERFAZ INTUITIVA</h5>
                                    {/* <p className={`text-blue-200 text-xs lg:mb-3 font-extralight ${inter.className} antialiased text-justify`}>Nuestra interfaz intuitiva y amigable te guiará a través del proceso de tasación sin complicaciones. Con solo unos pocos clics, obtendrás resultados precisos y detallados.</p> */}
                                </div>
                                <div>
                                    <BiWifi className={styles.headerIcons} />
                                    <h5 className={`text-slate-50 text-xs lg:mb-3 font-extralight ${inter.className} antialiased text-center`}>100% ONLINE - SIN VISITAS NI TASADORES DE POR MEDIO</h5>
                                    {/* <p className={`text-blue-200 text-xs lg:mb-3 font-extralight ${inter.className} antialiased text-justify`}>Nuestro software se actualiza constantemente con la última información del mercado inmobiliario de Santiago. Mantente al tanto de las tendencias y cambios en los precios para tomar decisiones basadas en datos sólidos y mantener una ventaja competitiva en el mercado.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src="/hero.png" height={800} width={800} className={`w-[25rem] max-w-none sm:w-[55rem] md:-ml-4 lg:-ml-0 ${styles.mainImage}`} unoptimized alt="hero"  />
                </div>
            </div>
        </div>
    )
}


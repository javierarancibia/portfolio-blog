import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "./Header.module.css"
import { BiBarChart } from "react-icons/bi";

const inter = Inter({ subsets: ['latin'] })

export default function Body() {
    return (
        <>
            <div className='px-12 mb-10'>
                <h1 className={`text-2xl text-center text-blue-700 font-normal ${inter.className}`}>AUTOMATIZA EL PROCESO DE TASACIÓN DE TU DEPARTAMENTO O EL DE TUS CLIENTES CON ANALÍTICA DE DATOS</h1>
                <div className="text-2xl font-bold tracking-tight text-white sm:text-4xl text-center lg:pl-12" style={{marginTop:"2rem"}}>
                    <p className={`mt-12 text-lg leading-8 text-white font-thin lg:pl-12 ${inter.className}`}>Bienvenido a CommercialCity, el software web revolucionario diseñado para agentes inmobiliarios, tasadores y dueños de apartamentos en Santiago. Olvídate de las estimaciones subjetivas y las largas horas dedicadas a la tasación manual. Con CommercialCity, puedes obtener una tasación precisa en cuestión de segundos, utilizando algoritmos inteligentes basados en datos reales.</p>
                </div>
            </div>
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
                <iframe 
                    src="https://player.vimeo.com/video/833960651?h=40a74b213b&color=8c94de&title=0&byline=0&portrait=0&badge=0&loop=1&autoplay=1" 
                    style={{position:"absolute", top:"0", left:"10%", width:"80%",height:"100%"}}  
                />
            </div>
            <div className="overflow-hidden py-5 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-0">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <Image src="/report3d.png" height={600} width={600} className={`w-[35rem] max-w-none sm:w-[45rem] md:-ml-4 lg:-ml-0 ${styles.reportImage}`} unoptimized alt="reporte" />
                        <div className="text-center lg:px-10">
                            <div className="text-2xl font-bold tracking-tight text-white sm:text-4xl" style={{marginTop:"2rem"}}>
                                <BiBarChart className={styles.headerIcons} style={{fontSize:"90px"}} />
                                <h2> Ahorra tiempo <span className='text-blue-700'>y esfuerzo</span></h2> 
                                <p className={`mt-12 text-lg leading-8 text-white font-thin lg:pl-12 ${inter.className}`}>Ya no es necesario pasar horas investigando y comparando propiedades similares. Commercial<span className='text-blue-700 font-medium'>City</span> automatiza el proceso de tasación, brindándote resultados instantáneos y ahorrándote tiempo valioso. Obtén una ventaja competitiva al tomar decisiones informadas de manera rápida y eficiente.</p>
                            </div>
                            <div className="text-2xl font-bold tracking-tight text-white sm:text-4xl text-center lg:pl-12" style={{marginTop:"8rem"}}>
                                <BiBarChart className={styles.headerIcons} style={{fontSize:"90px"}} />
                                <h2>Datos actualizados y Algoritmos basadas en <span className='text-blue-700'>Metodologías de tasación tradicional</span></h2>
                                <p className={`mt-12 text-lg leading-8 text-white font-thin lg:pl-12 ${inter.className}`}>Nuestro software se actualiza constantemente con la última información del mercado inmobiliario de Santiago. Mantente al tanto de las tendencias y cambios en los precios para tomar decisiones basadas en datos sólidos y mantener una ventaja competitiva en el mercado.</p>
                            </div>
                            <div className="text-2xl font-bold tracking-tight text-white sm:text-4xl text-center lg:pl-12" style={{marginTop:"8rem"}}>
                                <BiBarChart className={styles.headerIcons} style={{fontSize:"90px"}} />
                                <h2>Fácil de Usar y Disponible para <span className='text-blue-700'>Desktop y Móvil</span></h2>
                                <p className={`mt-12 text-lg leading-8 text-white font-thin lg:pl-12 ${inter.className}`}>No se requieren habilidades técnicas o conocimientos especializados para utilizar Commercial<span className='text-blue-700 font-medium'>City</span>. Nuestra interfaz intuitiva y amigable te guiará a través del proceso de tasación sin complicaciones. Con solo unos pocos clics, obtendrás resultados precisos y detallados. Además está adaptada para todas las plataformas, sea en pantalla de computador o tu celular.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

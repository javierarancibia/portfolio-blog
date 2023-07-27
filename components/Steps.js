import React from "react";
import { Inter } from "next/font/google";
import { BsCreditCard2Back, BsFillEnvelopeCheckFill, BsFillClipboard2DataFill, BsBuildingCheck } from "react-icons/bs";
import styles from "./Steps.module.css"
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

const links = [
    { index: "1", icon: BsCreditCard2Back, title: 'Compra el Informe', message: "Pagas sólo por el informe, sin suscripciones ni descargas de software. " },
    { index: "2", icon: BsFillEnvelopeCheckFill, title: 'Link al formulario', message: 'Recibirás un correo con un link. Haz clic para navegar al formulario' },
    { index: "3", icon: BsFillClipboard2DataFill, title: 'Información', message: 'Llenas información básica del departamento. Nuestro software procesa una amplia variedad de factores relevantes, como ubicación, tamaño, características, entre otros datos relevantes.' },
    { index: "4", icon: BsBuildingCheck, title: 'Listo!', message: 'En segundos nuestro servidor calculará el valor del departamento, desplegando un informe técnico de tasación' },
  ]
  
  export default function Example() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-800 py-24 sm:py-32">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#517EB9] to-[#517EB9] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#517EB9] to-[#ff4694] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className={`text-2xl font-bold tracking-tight text-blue-700 sm:text-3xl text-center ${inter.className}`}>Obtén la tasación de tu departamento en 4 simples pasos</h2>
          <p className={`mt-6 text-lg text-white font-thin text-center ${inter.className}`}>
          No se requieren habilidades técnicas o conocimientos especializados para utilizar CommercialCity. Nuestra interfaz intuitiva y amigable te guiará a través del proceso de tasación sin complicaciones. Con solo unos pocos clics, obtendrás resultados precisos y detallados.
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {links.map((link) => (
              <div className={styles.stepsContainers} key={link.index}>
                <link.icon className={styles.stepsIcons} />
                { link.title } 
                <p className={`mt-6 text-sm text-white font-thin ${inter.className}`}>{ link.message }</p>
              </div> 
            ))}
          </div>
          <div style={{display:"flex", justifyContent: "center"}}>
            <Link href="/comprar">
              <button 
                  type="button" 
                  className={`hover:bg-blue-300 mt-10 sm:mr-5 inline-block rounded-full rounded-lg bg-blue-700 px-10 py-3 text-sm font-medium text-white ${inter.className}`}
              >Comprar <span style={{textDecoration:"line-through", textDecorationThickness:"1.5px"}}>$12.900</span> $8.990
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  

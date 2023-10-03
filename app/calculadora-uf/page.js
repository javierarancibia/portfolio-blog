import React from 'react'
import { Inter } from 'next/font/google'
import styles from "./CalculadoraUF.module.css"
import CalculatorComponent from './Components/CalculatorComponent'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

async function getData() {
    const res = await fetch("https://mindicador.cl/api/uf")
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  

export default async function Page() {
    const data = await getData()
    return (
        <>
            <Navbar />
            <main className={styles.mainContainer}>
                <div className="relative" id="home">
                    <div>
                        <div className="relative pt-36 ml-auto">
                            <div className="lg:w-2/3 text-center mx-auto">
                                <h1 className="text-blue-700 font-bold text-5xl md:text-6xl xl:text-7xl">Calculadora UF a CLP</h1>
                                <h2 className="mt-8 text-gray-700 text-xl">Calcula la conversión de Unidad de Fomento (UF) a Pesos Chilenos y viceversa en segundos</h2>
                                <div className='mb-28 mt-11'>
                                    { data && <CalculatorComponent data={data} /> } 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}



import React from 'react'
import styles from "./CalculadoraUF.module.css"
import CalculatorComponent from './Components/CalculatorComponent'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

async function getData() {
    const timestamp = new Date().getTime();
    const res = await fetch(`https://mindicador.cl/api/uf?${timestamp}`)
   
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
                        <div className="relative pt-5 ml-auto">
                            <div className="lg:w-2/3 text-center mx-auto">
                                <h1 className="text-blue-700 font-bold text-3xl md:text-6xl xl:text-5xl">Calculadora UF a Pesos Chilenos</h1>
                                <h2 className="mt-8 text-gray-700 text-lg xl:text-2xl">Calcular UF a Pesos Chilenos y viceversa en segundos</h2>
                                <div className='mb-10'>
                                    { data && <CalculatorComponent data={data} /> } 
                                </div>
                                <div style={{width:"100%"}}>
                                    <Image 
                                        src="/calculator.png" 
                                        alt="calcular uf a pesos" 
                                        width={500} 
                                        height={300} 
                                        placeholder="blur" 
                                        blurDataURL={'/calculator.png'}
                                        style={{margin:"auto"}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}



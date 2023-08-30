"use client"

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Link from 'next/link'
const inter = Inter({ subsets: ["latin"] });

const Product = () => {
    const [ chosenCity, setChosenCity ] = useState()
    const [ buttonValidator, setButtonValidator ] = useState(true)

    useEffect(() => {
        if (chosenCity) {
            return setButtonValidator(false)
        } return setButtonValidator(true)
    }, [ chosenCity ])

    return (
    <div className="mt-10">
        <div>
            <select 
                id="cities" 
                className="bg-gray-50 outline-blue-500 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-blue-700 dark:text-white dark:focus:ring-blue-700 dark:focus:border-blue-700"
                onChange={e => setChosenCity(e.target.value)}
            >
                <option value="">Elige comuna del departamento</option>
                <option value="Providencia">Providencia</option>
                <option value="Santiago">Santiago Centro</option>
                <option value="Maipú">Maipú</option>
                <option value="Vitacura">Vitacura</option>
            </select>
            { chosenCity && <p className={`mt-3 italic text-xs font-bold text-blue-700 ${inter.className}`}>¡Perfecto! Contamos con datos suficientes para la comuna de {chosenCity}</p> }
        </div>

        { 
            buttonValidator ? 
                <button
                    className={`hover:bg-blue-300 mt-10 sm:mr-5 inline-block rounded-full rounded-lg bg-slate-300 px-10 py-3 text-sm font-medium text-white ${inter.className}`}
                    disabled={true}
                >
                    Ingresar
                </button> :
                <Link href={`${process.env.CLIENT_URL}/formulario`}>
                    <button
                        type="button"
                        className={`hover:bg-blue-300 mt-10 sm:mr-5 inline-block rounded-full rounded-lg bg-blue-700 px-10 py-3 text-sm font-medium text-white ${inter.className}`}
                        >
                        Ingresar
                    </button>
                </Link>
        }
        <Link href={`${process.env.CLIENT_URL}/demo`}>
            <button 
                type="button" 
                className={`hover:bg-blue-300 mt-5 sm:mt-0 inline-block rounded-full rounded-lg outline outline-offset-1 outline-1 px-10 py-3 text-sm font-medium text-blue-700 hover:text-white ${inter.className}`}
            >Ver Demo de Informe
            </button>
        </Link>
    </div >
    );
};

export default Product;

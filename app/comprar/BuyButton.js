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
    <div className="grid grid-rows-3 lg:w-full">
        <div>
            <select 
                id="cities" 
                className="bg-gray-50 outline-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-700 dark:focus:border-blue-700"
                onChange={e => setChosenCity(e.target.value)}
            >
                <option value="">Selecciona donde se encuentra el departamento</option>
                <option value="Providencia">Providencia</option>
                <option value="Santiago">Santiago Centro</option>
                <option value="Maipú">Maipú</option>
                <option value="San Miguel">San Miguel</option>
            </select>
            { chosenCity && <p className={`mt-3 italic text-xs font-bold text-blue-700 ${inter.className}`}>¡Perfecto! Contamos con datos suficientes para la comuna de {chosenCity}</p> }
        </div>

        { 
            buttonValidator ? 
            <div>
                <button
                    className={`mt-10 inline-block rounded-full rounded-lg bg-slate-300 px-12 py-3 text-sm font-medium text-white ${inter.className}`}
                    disabled={true}
                >
                    Ingresar
                </button>
            </div> : 
            <Link href='https://commercial-city-client.vercel.app/formulario'>
                <button
                type="button"
                    className={`mt-10 inline-block rounded-full rounded-lg bg-blue-700 px-12 py-3 text-sm font-medium text-white ${inter.className}`}
                >
                    Ingresar
                </button>
            </Link>
        }
    </div >
    );
};

export default Product;

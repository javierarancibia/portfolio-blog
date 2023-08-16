"use client"

import { useState, useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import styles from "./comprar.module.css"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
initMercadoPago(process.env.MERCADO_PAGO_PUBLIC_KEY);

const createPreference = async (customerEmail) => {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/v1/payments/create-order`, {email: customerEmail});
        const id = response.data.data;
        return id;
    } catch (error) {
        console.log(error);
    }
}


const Product = () => {
    const [preferenceId, setPreferenceId] = useState(null);
    const [ customerEmail, setCustomerEmail ] = useState()
    const [ chosenCity, setChosenCity ] = useState()
    const [ buttonValidator, setButtonValidator ] = useState(true)

    const handleBuy = async () => {
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        if (regex.test(customerEmail) === false) {
            return alert("Ingrese un correo válido")
        }
        const data = await createPreference(customerEmail);
        if (data) {
            setPreferenceId(data.id);
        }
    }

    useEffect(() => {
        if (chosenCity && customerEmail) {
            return setButtonValidator(false)
        } return setButtonValidator(true)
    }, [ chosenCity, customerEmail ])

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
                <option value="Maipu">Maipú</option>
                <option value="San Miguel">San Miguel</option>
            </select>
            { chosenCity && <p className={`mt-3 italic text-xs font-bold text-blue-700 ${inter.className}`}>¡Perfecto! Contamos con datos suficientes para la comuna de {chosenCity}</p> }
        </div>
        <div>
            <input 
                type="email" 
                placeholder="Ingresa tu correo electrónico" 
                // className={styles.emailInput} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={e => setCustomerEmail(e.target.value)} 
            /> 
            <p className={`mt-6 italic text-xs font-thin leading-4 text-white ${inter.className}`}>* Asegúrate de ingresar la dirección de correo correcta para enviarte el link al formulario después de la compra</p>
        </div>
        <div>
            <button
                onClick={handleBuy}
                className={`mt-10 inline-block rounded-full rounded-lg bg-blue-700 px-12 py-3 text-sm font-medium text-white ${inter.className}`}
                disabled={buttonValidator}
            >
                Comprar
            </button>
            {preferenceId && 
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.walletContainer}>
                            <Wallet initialization={{ preferenceId }} />
                        </div>
                    </div>
                </div>
            }
        </div>
    </div >
    );
};

export default Product;

"use client"

import { useState } from "react";
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

    const handleBuy = async () => {
        const data = await createPreference(customerEmail);
        if (data) {
        setPreferenceId(data.id);
        }
    }

    return (
    <div className="grid grid-rows-3">
        <div>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-700 dark:focus:border-blue-700">
                <option>Selecciona una comuna</option>
                <option defaultValue="US">United States</option>
                <option defaultValue="CA">Canada</option>
                <option defaultValue="FR">France</option>
                <option defaultValue="DE">Germany</option>
            </select>
        </div>
        <div>
            <input 
                type="email" 
                placeholder="Ingresa tu correo electrónico" 
                // className={styles.emailInput} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                onChange={e => setCustomerEmail(e.target.value)} /> 
        </div>
        <div>
            <button
                onClick={handleBuy}
                className={`hover:bg-blue-300 mt-10 inline-block rounded-full rounded-lg bg-blue-700 px-12 py-3 text-sm font-medium text-white ${inter.className}`}
                disabled={!customerEmail}
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

"use client";
import React, { useState } from "react";

const CalculatorComponent = ({ data }) => {
    const [val] = useState(data.serie[0].valor);
    const [ufPrice, setUfPrice] = useState(0);
    const [pesos, setPesos] = useState(0);

    const timestampFormatter = dateString => {
        const date = dateString.slice(8, 10) + "/" + dateString.slice(5, 7) + "/" + dateString.slice(0, 4)
        return date
    }

     return (
        <>
            <h5 className="text-blue-700 font-semibold text-xl">Valor UF de hoy: ${val}</h5>
            <h6 className="text-sm">{ timestampFormatter(data.serie[0].fecha) }</h6>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="uf" className="block text-lg font-semibold leading-6 text-blue-700">
                        UF
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="uf-value"
                            id="uf-value"
                            onChange={(e) => setPesos(e.target.value * val)}
                            autoComplete="off"
                            placeholder="Ingrese Valor UF"
                            className="block w-full rounded-xl border-0 p-3 text-blue-700 shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-inset focus:ring-blue-700 sm:text-lg sm:leading-6"
                        />
                        {!isNaN(pesos) ? (<p className="text-center text-blue-700 text-3xl">${pesos.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>) : (
                            <p className="text-red-500 text-xl font-light">Ingrese un número valido</p>)}
                    </div>
                </div>
                <div className="sm:col-span-3 mb-72">
                    <label htmlFor="pesos-chilenos" className="block text-lg font-semibold leading-6 text-blue-700">
                        Pesos Chilenos
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="pesos-chilenos"
                            id="pesos-chilenos"
                            autoComplete="off"
                            placeholder="Ingrese Valor en Pesos Chilenos"
                            className="block w-full rounded-xl border-0 p-3 text-blue-700 shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-inset focus:ring-blue-700 sm:text-lg sm:leading-6"
                            onChange={(e) => setUfPrice(e.target.value / val)}
                        />
                        {!isNaN(ufPrice) ? (<p className="text-center text-blue-700 text-3xl">{ufPrice.toFixed(1)}UF</p>) : (<p className="text-red-500 text-xl font-light">Ingrese un número valido</p>)}
                    </div>
                </div>
            </div>
        </>
        
    );
};
export default CalculatorComponent;

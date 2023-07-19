"use client"
// @refresh reset

import Image from "next/image";
import styles from "../comprar/comprar.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Comprar() {

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-800">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-md text-center lg:mx-15 lg:flex-auto lg:py-32 lg:text-left">
                <div className={styles.logo} >
                    <Image src="/logowhite.png" height={100} width={100} className="mb-5 lg:mb-12 w-[5rem] max-w-none sm:w-[7rem] md:-ml-4 lg:-ml-0" unoptimized alt="hero"  />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="text-blue-700">
                    Tu compra ha sido procesada con éxito
                    </span>
                    <br />
                    Recibirás en unos segundos un correo con el link para llenar los datos del departamento
                </h2>
            </div>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 lg:mt-9">
            <Image
                src="/success.png"
                height={800}
                width={800}
                className={styles.reportImage}
                unoptimized
                alt="error-en-compra"
            />
        </div>
    </section>
  );
}

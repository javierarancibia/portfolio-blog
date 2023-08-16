import React from "react";

const Footer = () => {
    return (
        <footer className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <a
                href="https://www.ciudad-comercial.cl/"
                className="flex items-center mb-4 sm:mb-0"
            >
                <img
                src="/logowhite.png"
                className="h-12 mr-3"
                alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                CommercialCity
                </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <a href="https://www.ciudad-comercial.cl/comprar" className="mr-4 hover:underline md:mr-6 ">
                    Comprar
                </a>
                </li>
                <li>
                <a href="#" className="hover:underline">
                    Contacto
                </a>
                </li>
            </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://www.ciudad-comercial.cl" className="hover:underline">
                CommercialCity™
            </a>
            . Derechos Reservados.
            </span>
        </div>
        </footer>
    );
};

export default Footer

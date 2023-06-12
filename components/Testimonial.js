import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Testimonial = () => {
  return (
    <section className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image src="/iturra.png" height={400} width={200} className=" mx-auto" unoptimized alt="Iturra Propiedades" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white-900 sm:text-2xl sm:leading-9">
            <p className="mt-12 text-lg leading-8 italic text-white font-thin lg:pl-12">Usar esta herramienta nos fue sumamente facil y en cosa de segundos recibimos un reporte con el valor del departamento que estábamos vendiendo, en un informe con graficos y datos que demuestra profesionalismo al momento de mostrar a nuestros clientes. 100% recomendable</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Iturra Propiedades Tasacion Online"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Marcos Iturra</div>
              <svg viewBox="0 0 2 2"  width={3} height={3} aria-hidden="true" className="fill-blue-700">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white font-thin">Iturra Propiedades</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
export default Testimonial;
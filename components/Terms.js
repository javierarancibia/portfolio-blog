'use client'

import React, { useEffect } from "react";
import styles from "./Terms.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })
const Terms = ({ setTerms }) => {
  
  useEffect(() => {
    const escFunction = e => {
      if (e.key === "Escape") {
        setTerms(false)
      }
    }

    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={() => setTerms(false)} className={styles.close}>
          &times;
        </span>
        <h2 className={`mt-6 text-lg leading-7 text-blue-700 ${inter.className}`}>Términos y condiciones de la Aplicación</h2>
        <p className={`mt-6 text-md leading-8 text-white font-thin ${inter.className}`}>
        <span className="text-blue-700 font-bold">1.-</span> La presente aplicación proporciona informes de tasación basados en datos recopilados del mercado inmobiliario y publicaciones en línea. Estos informes son
        generados utilizando algoritmos programados en base a metodologías de tasación tradicionales, principalmente Valor Comercial por Comparación de Mercado. 
        </p>
        <p className={`mt-6 text-md leading-8 text-white font-thin ${inter.className}`}>
        <span className="text-blue-700 font-bold">2.-</span> La App CommercialCity <span className="text-blue-700 font-normal">sólo considera Departamentos</span> (No otros tipos de propiedades) y ubicados en <span className="text-blue-700 font-normal">comunas de la Región Metropolitana como Providencia, Santiago Centro y Vitacura</span>. Estamos constantemente aumentando nuestra 
        área de cobertura. 
        </p>
        <p className={`mt-6 text-md leading-8 text-white font-thin ${inter.className}`}>
        <span className="text-blue-700 font-bold">3.-</span> Los informes de tasación generados por la app CommercialCity son estimaciones y no representan un valor oficial o
        legalmente vinculante. <span className="text-blue-700 font-normal">Éstos no son aptos para tramitaciones con entidades bancarias, financieras ni judiciales.</span> Los mismos son
        únicamente referenciales y están diseñados como herramienta informativa y complementaria para la toma de decisiones sobre el bien raíz. Recomendamos consultar profesionales calificados para dichos trámites.
        </p>
        <p className={`mt-6 text-md leading-8 text-white font-thin ${inter.className}`}>
        <span className="text-blue-700 font-bold">4.-</span> La exactitud y precisión de los informes pueden variar debido a la naturaleza cambiante del mercado inmobiliario y la disponibilidad de datos. La aplicación se esfuerza por utilizar fuentes
        de datos confiables y algoritmos complejos para generar informes de tasación precisos y profesionales.</p>
        <p className={`mt-6 text-md leading-8 text-white font-thin ${inter.className}`}>
        <span className="text-blue-700 font-bold">5.-</span> Al acceder y utilizar esta aplicación, usted acepta y comprende estos términos y condiciones en su totalidad.
        No nos hacemos responsables de ninguna pérdida, daño o inconveniente derivado del uso de los informes generados
        por esta aplicación. 
        </p>        
      </div>
    </div>
  );
};
export default Terms;

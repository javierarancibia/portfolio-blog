import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fullstack NodeJS Developer based in Rotterdam, Netherlands',
  description: 'Tasación 100% Online de tu departamento. Fácil e inmediato.',
  keywords: ['Tasaciones Online', 'Como tasar tu departamento', 'Cuanto cuesta mi departamento', 'Tasadores Chile', 'como saber tasacion de una vivienda'],
  alternates: {
    canonical: 'https://www.ciudad-comercial.cl',
    languages: {
      'es-CL': 'https://www.ciudad-comercial.cl/es-CL',
      'es': 'https://www.ciudad-comercial.cl/es',
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}

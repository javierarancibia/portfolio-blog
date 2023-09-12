import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CommercialCity: La Nueva Forma de Tasar tu Departamento',
  description: 'Tasaciones 100%',
  keywords: ['Tasaciones Online', 'Como tasar tu departamento', 'Cuanto cuesta mi departamento', 'Tasadores Chile'],
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

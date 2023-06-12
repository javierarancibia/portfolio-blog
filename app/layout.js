import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CommercialCity: La Nueva Forma de Tasar tu Departamento',
  description: 'Tasaciones 100%',
  alternates: {
    canonical: 'https://www.ciudad-comercial.cl',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

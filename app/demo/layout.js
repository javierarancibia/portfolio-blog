import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CommercialCity: La Nueva Forma de Tasar tu Departamento',
  description: 'Tasaciones 100%',
}

export default function DemoLayout({ children }) {
  return (
      <section className={inter.className}>{children}</section>
  )
}
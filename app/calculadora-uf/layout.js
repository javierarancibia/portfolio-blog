import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculadora UF a CLP - Gratis y actualizado día a día por nuestro servidor',
  description: 'Haz la conversión en segundos de Unidad de Fomento (UF) a Pesos Chilenos y Pesos Chilenos a Unidad de Fomento (UF)',
}

export default function ComprarLayout({ children }) {
  return (
      <section className={inter.className}>{children}</section>
  )
}
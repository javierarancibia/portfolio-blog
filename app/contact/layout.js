import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact me for connections',
  description: 'Haz la conversión en segundos de Unidad de Fomento (UF) a Pesos Chilenos y Pesos Chilenos a Unidad de Fomento (UF)',
}

export default function ComprarLayout({ children }) {
    return (
        <section className={inter.className}>{children}</section>
    )
}
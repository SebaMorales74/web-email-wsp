import './globals.css'
import { Raleway } from 'next/font/google'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Carrusel from "@/components/Carrusel"
import FloatingButton from "@/components/FloatingButton"

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'TuVentanal.CL',
  description: 'Descripcion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        <Navbar />
        <Carrusel heading='TuVentanal.Cl' message='Echale un ojo a nuestros productos.' />
        {children}
        <FloatingButton />
        <Footer />
      </body>
    </html>
  )
}

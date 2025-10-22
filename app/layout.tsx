import type React from "react"
import "./globals.css"
import { Inter, Poiret_One, Montserrat, Poppins, Playfair_Display } from "next/font/google"
import Footer from "@/components/footer"
import VisitTracker from '@/components/VisitTracker'
import TransparentHeader from '@/components/transparent-header'

// Importar metadata desde el archivo separado
export { metadata, viewport } from './metadata'

// Mover las fuentes fuera del componente para evitar recrearlas en cada render
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const poiretOne = Poiret_One({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-poiret-one",
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
})

const poppins = Poppins({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: 'swap',
})

// La metadata y viewport ahora se importan desde ./metadata.ts

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poiretOne.variable} ${montserrat.variable} ${poppins.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <TransparentHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
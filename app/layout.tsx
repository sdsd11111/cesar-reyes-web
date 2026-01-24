import type React from "react"
import "./globals.css"
import { Inter, Poiret_One, Montserrat, Poppins, Playfair_Display } from "next/font/google"
// Google Tag Manager will be implemented manually with Script component
import Footer from "@/components/footer"
import VisitTracker from '@/components/VisitTracker'
// import TransparentHeader from '@/components/transparent-header'
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu'
import { Providers } from './providers'
import { SearchProvider } from '@/context/SearchContext'

import Script from 'next/script'
import ClarityAnalytics from '@/components/ClarityAnalytics'
import FloatingPromoCardWrapper from '@/components/FloatingPromoCardWrapper';
import PersonSchema from '@/components/schema/PersonSchema';
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import TermsPopup from '@/components/TermsPopup';

declare global {
  interface Window {
    _uxa?: any[];
  }
}

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
    <html
      lang="es"
      className={`${inter.variable} ${poiretOne.variable} ${montserrat.variable} ${poppins.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
      style={{
        // Prevenir zoom en iOS al hacer doble toque
        touchAction: 'manipulation',
        // Suavizar el desplazamiento en iOS
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Viewport optimizado para móviles */}
      {/* Viewport optimizado para móviles */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />

      {/* Preload Hero Image for LCP */}
      <link
        rel="preload"
        as="image"
        href="/images/portada_cesarbn.webp"
        type="image/webp"
      />

      {/* Contentsquare Analytics - Mapa de calor y análisis de comportamiento */}
      <Script
        id="contentsquare-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Crear script de Contentsquare
            window._uxa = window._uxa || [];
            !function(){var e=window._uxa;if(e)for(var t in e)if('push'!==t&&'length'!==t&&!e[t]){e[t]=function(e){return function(){var t=Array.prototype.slice.call(arguments);e.push(t)}}(e[t])}}();
            
            // Cargar el script
            (function() {
              var d = document, g = d.createElement('script');
              g.type = 'text/javascript';
              g.async = true;
              g.src = 'https://t.contentsquare.net/uxa/275c1908ab462.js';
              var s = d.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(g, s);
              
              // Verificación de carga
              var checkInterval = setInterval(function() {
                if (window._uxa && window._uxa.push !== Array.prototype.push) {
                  clearInterval(checkInterval);
                  console.log('✅ Contentsquare script loaded successfully');
                  console.log('🔍 _uxa object:', window._uxa);
                  
                  // Forzar un evento de prueba
                  try {
                    window._uxa.push(['trackPageview']);
                    console.log('📊 Track pageview sent');
                  } catch (e) {
                    console.error('❌ Error sending trackPageview:', e);
                  }
                }
              }, 100);
              
              // Timeout después de 5 segundos
              setTimeout(function() {
                if (!window._uxa || window._uxa.push === Array.prototype.push) {
                  console.error('❌ Contentsquare failed to load after 5 seconds');
                  console.log('ℹ️ Window object:', window);
                }
              }, 5000);
            })();
          `,
        }}
      />

      {/* Prevenir el zoom automático en iOS al enfocar campos de entrada */}
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      <body
        className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
        style={{
          // Mejorar el rendimiento de desplazamiento en iOS
          WebkitFontSmoothing: 'antialiased',
          // Prevenir desbordamiento horizontal
          overflowX: 'hidden',
          // Mejorar el manejo del teclado en móviles
          position: 'relative',
          minHeight: '100vh',
          // Asegurar que el contenido no se desplace con el teclado en iOS
          height: '100%',
        }}
      >
        <PersonSchema />
        <OrganizationSchema />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLQ7BVT8');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <Providers>
          <SearchProvider>
            {/* <TransparentHeader /> */}
            <ModernSidebarMenu />
            <main className="min-h-[calc(100vh-64px)] w-full overflow-x-hidden">
              <VisitTracker />
              {children}
              <Footer />
              <ClarityAnalytics />
              <FloatingPromoCardWrapper />
            </main>
          </SearchProvider>
        </Providers>
      </body>
    </html>
  )
}
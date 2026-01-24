'use client';

import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('encontrar');

  const tabs = [
    {
      id: 'encontrar',
      title: '📍 Para que te encuentren clientes nuevos',
      icon: '🔍',
      content: (
        <Accordion.Root type="multiple" className="space-y-4">
          <Accordion.Item value="seo" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Configuración SEO Profesional</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">Te posicionamos para aparecer cuando alguien busca:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  '• "almuerzos cerca de mí"',
                  '• "ceviche en [tu ciudad]"',
                  '• "restaurante romántico [tu zona]"',
                  '• "[tu especialidad] delivery [tu ciudad]"'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="paginas-optimizadas" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Hasta 20 Páginas Optimizadas Individualmente</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Cada plato estrella tiene su propia página diseñada para atraer búsquedas específicas.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-800 dark:text-blue-200">Ejemplo:</p>
                <p>Tu <span className="font-medium">Seco de Chivo</span> → Página: <span className="font-medium">"Seco de Chivo en Loja"</span></p>
                <p>Búsqueda Google: <span className="font-medium">"seco de chivo Loja"</span> → <span className="font-bold text-green-600">TU página aparece</span></p>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="dominio" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Dominio Propio + Hosting Premium (2 años incluidos)</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Tu dirección web profesional: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">www.tu-restaurante.com</span> (o .ec si prefieres)
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg mt-3">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  🚫 NO usas subdominios genéricos tipo "turestaurante.menuobjetivo.com"
                </p>
                <p className="text-green-600 dark:text-green-400 font-medium">Es 100% tuyo, con tu marca.</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="google-maps" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Integración Google Maps + Google My Business</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Te ubicamos en el mapa de Google para que:
              </p>
              <ul className="space-y-2">
                {[
                  '• Clientes te encuentren buscando "cerca de mí"',
                  '• Puedan ver fotos, horarios, menú',
                  '• Dejen reseñas que mejoran tu posicionamiento'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="analytics" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Google Analytics Configurado</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Mides en tiempo real:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  '• Cuántas personas visitan tu web cada día',
                  '• Qué platos buscan más',
                  '• De qué zonas de la ciudad vienen',
                  '• Cuántos hacen clic en WhatsApp'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="galeria" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Galería de Eventos</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Sección especial para mostrar:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  '• Tu local (fotos del ambiente)',
                  '• Eventos que has hecho (cumpleaños, bodas)',
                  '• Capacidad para grupos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Objetivo: Atraer reservas grandes y eventos corporativos
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      )
    },
    {
      id: 'ahorrar',
      title: '⚡ Para que ahorres tiempo y controles todo',
      icon: '⏱️',
      content: (
        <Accordion.Root type="multiple" className="space-y-4">
          <Accordion.Item value="panel-control" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white text-left">✅ Panel de Control Desde Tu Celular (Sistema en 3 Clics)</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200 flex-shrink-0 ml-2" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Actualizas tu menú en menos de 1 minuto:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <p className="font-medium text-blue-800 dark:text-blue-200">Clic 1:</p>
                <p className="text-gray-700 dark:text-gray-300">Entras al panel desde tu celular</p>
                
                <p className="font-medium text-blue-800 dark:text-blue-200 mt-3">Clic 2:</p>
                <p className="text-gray-700 dark:text-gray-300">Seleccionas platos del día (ya están cargados con fotos)</p>
                
                <p className="font-medium text-blue-800 dark:text-blue-200 mt-3">Clic 3:</p>
                <p className="text-gray-700 dark:text-gray-300">Publicas</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold">¡Listo!</span> Tu web, Google, y QR se actualizan automáticamente.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <span className="font-medium">Sin diseñadores. Sin depender de nadie.</span> Tú tienes el control total.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="qr" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Código QR Dinámico para Tus Mesas</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Imprimes <span className="font-bold">UNA sola vez</span> el código QR. Cada cambio que hagas en tu panel se refleja <span className="font-bold">INSTANTÁNEAMENTE</span>.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Beneficio: Nunca más imprimes menús. Ahorras cientos de dólares al año.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="menu" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Menú Profesional y Organizado</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Tu menú digital incluye:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {[
                  '• Categorías claras (Entradas, Platos Fuertes, Bebidas, Postres)',
                  '• Fotos de cada plato',
                  '• Descripciones tentadoras',
                  '• Precios visibles',
                  '• Etiquetas (Vegano, Picante, Sin Gluten, etc.)'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Resultado: Clientes deciden más rápido = más ventas, menos dudas
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="diseno" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Diseño Responsivo (Se Ve Perfecto en Cualquier Pantalla)</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <span className="font-bold">80% de tus clientes</span> buscan desde el celular. Tu menú se adapta automáticamente:
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                {['📱 Celulares (Android/iPhone)', '💻 Tablets', '🖥️ Computadoras'].map((device, i) => (
                  <span key={i} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {device}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Carga rápido (menos de 2 segundos). <span className="font-bold">Google premia eso.</span>
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="multilenguaje" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Multilingüe: Español + Inglés</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Perfecto para zonas turísticas. Clientes extranjeros ven el menú en su idioma con un solo clic.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-purple-700 dark:text-purple-300 font-medium">
                  🌎 Atrae más turistas sin esfuerzo adicional
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="whatsapp" className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
            <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">✅ Botón Directo a WhatsApp en Cada Plato</h4>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cliente ve tu "Lasaña Especial" → Clic en botón → Se abre WhatsApp con mensaje pre-llenado:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-mono text-gray-800 dark:text-gray-200">
                  "Hola, quiero consultar sobre la Lasaña Especial"
                </p>
              </div>
              <p className="mt-3 text-lg font-medium text-gray-800 dark:text-gray-200">
                Tú solo respondes y cierras la venta. 💰
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      )
    }
  ];

  return (
    <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
        Descripción de Servicios
      </h3>
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
          {tabs.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

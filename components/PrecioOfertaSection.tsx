'use client';

import { useState, useEffect } from 'react';
import { Check, CheckCircle, ArrowRight, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function PrecioOfertaSection() {
  const [cuposOcupados, setCuposOcupados] = useState(12);
  const [tiempoRestante, setTiempoRestante] = useState('');
  const totalCupos = 20;
  const porcentajeOcupado = (cuposOcupados / totalCupos) * 100;

  useEffect(() => {
    // Simular contador de tiempo restante (podrías reemplazarlo con una lógica real)
    const interval = setInterval(() => {
      const ahora = new Date();
      const finDia = new Date();
      finDia.setHours(23, 59, 59, 999);
      
      const diff = finDia.getTime() - ahora.getTime();
      const horas = Math.floor(diff / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTiempoRestante(`${horas}h ${minutos}m`);
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white" id="precio">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Inversión en tu Presencia Digital
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para destacar en línea a un precio especial para artesanos
          </p>
        </div>

        {/* Tarjeta de precios compacta */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="md:flex">
            {/* Columna izquierda - Precio Normal */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 md:w-2/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Precio Normal</h3>
                  <div className="flex items-baseline mt-1">
                    <span className="text-3xl font-bold text-gray-400 line-through">$250</span>
                    <span className="ml-2 text-sm text-gray-500">pago único</span>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Info className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Precio estándar de mercado para un sitio web profesional con características similares</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 text-center mb-6">
                <div className="text-sm font-medium text-orange-800 mb-1">AHORRA $100 HOY</div>
                <div className="text-xs text-orange-600">Más del 40% de descuento</div>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Dominio personalizado</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Diseño profesional</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Hosting por 1 año</span>
                </li>
              </ul>
            </div>

            {/* Columna derecha - Oferta */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 md:p-8 text-white md:w-3/5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    OFERTA EXCLUSIVA ARTES VIVAS
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold">$150</span>
                    <span className="ml-2 text-orange-100">pago único</span>
                  </div>
                </div>
                <div className="bg-white/20 text-xs font-medium px-3 py-1 rounded-full h-fit">
                  {totalCupos - cuposOcupados} cupos restantes
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Dominio personalizado (ej: www.tuartesania.com)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Diseño optimizado para celulares y computadoras</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Posicionamiento en Google incluido</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Correo corporativo @tudominio.com</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Soporte por 3 meses incluido</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  const formSection = document.getElementById('reserva');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-6 w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Reservar Ahora
              </button>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-orange-100">
                  Oferta exclusiva para participantes de Artes Vivas 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contador de cupos - Versión compacta */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 text-center border border-orange-100">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
              <div className="text-left">
                <h3 className="font-bold text-gray-800">¡No pierdas tu lugar!</h3>
                <p className="text-sm text-gray-600">
                  {cuposOcupados} de {totalCupos} cupos ocupados
                </p>
              </div>
              
              <div className="w-full sm:w-1/2">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Disponibles: {totalCupos - cuposOcupados}</span>
                  <span>{((cuposOcupados / totalCupos) * 100).toFixed(0)}% completo</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${porcentajeOcupado}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {tiempoRestante && (
              <div className="text-sm text-orange-700 font-medium mt-2">
                ⏳ Oferta termina en: {tiempoRestante}
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-3">
              Oferta exclusiva para participantes de Artes Vivas 2025 | Cupos limitados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


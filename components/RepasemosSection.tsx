'use client';

import { Check, AlertTriangle, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RepasemosSection() {
  const pasos = [
    {
      title: 'PASO 1: RESERVAS TU LUGAR',
      items: [
        'Llenas el formulario abajo O nos escribes por WhatsApp',
        'Te llamamos en 24h para hablar contigo (eres una persona, no un número)',
        'Confirmamos que entendiste TODO lo que incluye'
      ]
    },
    {
      title: 'PASO 2: PAGAS Y ASEGURAS TU POSICIÓN',
      items: [
        'Transferencia bancaria a cuenta empresarial verificable',
        'Recibes comprobante de pago legal',
        'Te decimos tu posición: "Eres el #13, tu entrega será en 3 días"'
      ]
    },
    {
      title: 'PASO 3: NOS ENVÍAS TU MATERIAL',
      items: [
        'Fotos de tus productos (del celular, no necesitan ser profesionales)',
        'Descripción corta: qué haces, qué vendes',
        'Elijes tu dominio: www.[tunombre].com',
        'Tiempo: 1-2 días de tu parte'
      ]
    },
    {
      title: 'PASO 4: NOSOTROS TRABAJAMOS (TÚ NO HACES NADA)',
      items: [
        'Diseñamos tu página personalizada',
        'Subimos tus productos con descripciones',
        'Configuramos SEO para que Google te encuentre',
        'Probamos que todo funcione en celular y computadora',
        'Tiempo: 2-4 días de nuestro parte'
      ]
    },
    {
      title: 'PASO 5: RECIBES TU PÁGINA LISTA',
      items: [
        'Link por WhatsApp: www.tuartesania.com',
        'Video tutorial 5 min: cómo compartirla',
        '12 meses de soporte: si algo falla, lo arreglamos GRATIS'
      ]
    },
    {
      title: 'PASO 6: EMPIEZAS A VENDER',
      items: [
        'Compartes tu link en redes, tarjetas, donde quieras',
        'Clientes ven tus productos organizados',
        'Te contactan por WhatsApp',
        'TÚ cierras la venta'
      ]
    }
  ];

  const noIncluye = [
    'Tienda online con carrito de compras y pagos automáticos (Eso es otro paquete de $500, si lo necesitas después podemos agregarlo)',
    'Fotos profesionales de tus productos (Usamos las que tú nos des. Si quieres fotos pro, hay costo adicional)',
    'Publicidad en Facebook o Google Ads (La página aparece en Google orgánicamente, pero si quieres pagar por anuncios, es aparte)'
  ];

  return (
    <section className="py-16 bg-white" id="revisemos">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Antes de Decidir, Repasemos Todo <span className="text-blue-600">(Para Que No Haya Confusiones)</span>
          </h2>
          <p className="text-xl text-gray-600">
            Queremos que tengas <span className="font-semibold">TODO claro</span>.
            <br />
            Lee esto con calma y marca mentalmente cada punto:
          </p>
        </div>

        {/* Pasos */}
        <div className="space-y-8 mb-12">
          {pasos.map((paso, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 hover:border-blue-100 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {paso.title}
              </h3>
              <ul className="space-y-3">
                {paso.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sección importante */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2" />
            MUY IMPORTANTE (Lee esto 2 veces):
          </h3>
          
          <div className="space-y-4">
            <h4 className="font-bold text-gray-800">❌ NO incluye:</h4>
            <ul className="space-y-3 pl-2">
              {noIncluye.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white p-4 rounded-lg border border-green-100 mt-4">
              <h4 className="font-bold text-green-800 flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                SÍ incluye:
              </h4>
              <p className="text-gray-700 mt-1 pl-7">
                TODO lo mencionado en "Qué incluye" (revísalo arriba si tienes duda)
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            ¿ALGUNA DUDA? No adivines. Pregunta.
          </h3>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/593999999999?text=Tengo%20una%20pregunta%20antes%20de%20decidir', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Tengo una pregunta antes de decidir
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

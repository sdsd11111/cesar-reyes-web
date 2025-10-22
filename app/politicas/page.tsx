'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PoliticasPage() {
  return (
    <main>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Políticas de Privacidad</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Información que Recopilamos</h2>
                <p className="mt-6">
                  Recopilamos información que usted nos proporciona directamente, incluyendo:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Información de contacto (nombre, email, teléfono)</li>
                  <li>Información de la empresa o consultorio médico</li>
                  <li>Datos de pacientes (solo con su consentimiento explícito)</li>
                  <li>Información de pago y facturación</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Uso de la Información</h2>
                <p className="mt-6">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Proporcionar y mantener nuestros servicios</li>
                  <li>Procesar pagos y enviar facturas</li>
                  <li>Enviar comunicaciones importantes sobre el servicio</li>
                  <li>Mejorar y personalizar la experiencia del usuario</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Protección de Datos</h2>
                <p className="mt-6">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos, incluyendo:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Encriptación de datos sensibles</li>
                  <li>Acceso restringido a la información</li>
                  <li>Monitoreo regular de seguridad</li>
                  <li>Cumplimiento con regulaciones de protección de datos</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Sus Derechos</h2>
                <p className="mt-6">
                  Usted tiene derecho a:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar información incorrecta</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 
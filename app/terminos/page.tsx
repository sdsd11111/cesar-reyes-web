'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TerminosPage() {
  return (
    <main>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Términos y Condiciones</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Aceptación de los Términos</h2>
                <p className="mt-6">
                  Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Debe ser mayor de 18 años</li>
                  <li>Debe proporcionar información precisa y actualizada</li>
                  <li>Es responsable de mantener la confidencialidad de su cuenta</li>
                  <li>Debe cumplir con todas las leyes aplicables</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Uso del Servicio</h2>
                <p className="mt-6">
                  Nuestro servicio está diseñado para:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Profesionales médicos y clínicas</li>
                  <li>Gestión de comunicación con pacientes</li>
                  <li>Automatización de recordatorios</li>
                  <li>Seguimiento de tratamientos</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Responsabilidades</h2>
                <p className="mt-6">
                  Como usuario del servicio, usted se compromete a:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Mantener la confidencialidad de los datos de pacientes</li>
                  <li>No compartir su cuenta con terceros</li>
                  <li>Reportar cualquier uso no autorizado</li>
                  <li>Cumplir con las regulaciones médicas aplicables</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Limitaciones del Servicio</h2>
                <p className="mt-6">
                  Nuestro servicio no:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>Proporciona asesoramiento médico</li>
                  <li>Reemplaza la atención médica profesional</li>
                  <li>Garantiza resultados específicos</li>
                  <li>Es responsable de decisiones médicas</li>
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
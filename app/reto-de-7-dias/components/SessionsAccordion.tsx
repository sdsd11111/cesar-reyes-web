'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function SessionsAccordion() {
  return (
    <div className="mt-8 space-y-4">
      <Accordion.Root type="single" collapsible className="space-y-4">
        {[
          {
            value: "session-1",
            title: "SESIÓN 1: AUDITORÍA (Semana 1 - 45 minutos)",
            content: (
              <div className="space-y-4">
                <p className="font-medium">Qué hacemos:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analizamos tu situación actual vs. competencia local</li>
                  <li>Identificamos tus keywords más rentables</li>
                  <li>Definimos tu estrategia de posicionamiento única</li>
                </ul>
                <p className="font-medium mt-4">Qué recibes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reporte de auditoría (PDF)</li>
                  <li>Lista de 10-15 keywords para tu zona</li>
                  <li>Plan de acción mes 1</li>
                </ul>
              </div>
            )
          },
          {
            value: "session-2",
            title: "SESIÓN 2: IMPLEMENTACIÓN (Día 5 - 30 minutos)",
            content: (
              <div className="space-y-4">
                <p className="font-medium">Qué hacemos:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Revisamos tu plataforma ya configurada</li>
                  <li>Te enseñamos a usar el panel de control</li>
                  <li>Optimizamos juntos tus primeras páginas</li>
                </ul>
                <p className="font-medium mt-4">Qué recibes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Video tutorial personalizado</li>
                  <li>Checklist diario de optimización</li>
                  <li>Acceso a soporte prioritario</li>
                </ul>
              </div>
            )
          },
          {
            value: "session-3",
            title: "SESIÓN 3: OPTIMIZACIÓN (Semana 8 - 30 minutos)",
            content: (
              <div className="space-y-4">
                <p className="font-medium">Qué hacemos:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analizamos resultados primeros 30 días</li>
                  <li>Ajustamos estrategia según data real</li>
                  <li>Definimos plan de crecimiento trimestral</li>
                </ul>
                <p className="font-medium mt-4">Qué recibes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reporte de métricas (tráfico, posiciones Google)</li>
                  <li>Plan de contenido próximos 3 meses</li>
                  <li>Acceso permanente a grupo de soporte</li>
                </ul>
              </div>
            )
          }
        ].map((session) => (
          <Accordion.Item 
            key={session.value} 
            value={session.value}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <Accordion.Trigger className="w-full flex items-center justify-between p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span className="font-medium">{session.title}</span>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </Accordion.Trigger>
            <Accordion.Content className="p-4 bg-white dark:bg-gray-800">
              {session.content}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

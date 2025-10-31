'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function FAQAccordion() {
  const faqItems = [
    {
      question: '❓ "Suena Demasiado Bueno Para Ser Verdad. ¿Cuál Es la Trampa?"',
      answer: (
        <div className="space-y-4">
          <p>No hay trampa. Aquí la respuesta honesta:</p>
          <p className="font-bold">¿Por qué regalamos $1,000 en valor?</p>
          <p>Porque queremos que te conviertas en un caso de éxito visible. Si tu restaurante empieza a aparecer en Google y atraes clientes nuevos gracias a Menú Objetivo, TÚ vas a contarles a otros dueños. Vas a mostrarles tu web. Vas a recomendarnos. Ese marketing de boca a boca vale mucho más que cualquier descuento que te demos hoy.</p>
          <p>Además, solo ganas si completas el reto. Eso significa que:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Estás comprometido (invertiste 7 días)</li>
            <li>✅ Estás educado (leíste nuestros artículos)</li>
            <li>✅ Entiendes el producto (sabes qué esperar)</li>
            <li>✅ Estás listo para usarlo correctamente</li>
          </ul>
          <p>Ganadores comprometidos = Casos de éxito reales = Más restaurantes nos contratan. Ganar-ganar.</p>
          <p className="font-bold">¿Hay letra pequeña?</p>
          <p>No. El único "requisito" es que completes las 7 preguntas correctamente y luego, obvio, contrates el servicio para aplicar el descuento. El 50% no es un "cupón de $10 que nunca usas". Es un descuento real que se aplica al momento de firmar el contrato.</p>
        </div>
      )
    },
    {
      question: '⏰ "No Tengo Tiempo Para Esto, Mi Día Está Lleno"',
      answer: (
        <div className="space-y-4">
          <p>Te entendemos perfectamente. Por eso diseñamos esto para dueños ocupados.</p>
          <p className="font-bold">Tiempo real invertido:</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-2 font-mono text-sm">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-1">ACTIVIDAD</div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-1">TIEMPO</div>
              <div>Registro hoy</div><div>2 minutos</div>
              <div>Día 1-7: Cada pregunta</div><div>5 minutos/día</div>
              <div className="font-bold border-t border-gray-200 dark:border-gray-700 pt-1">TOTAL EN 7 DÍAS:</div>
              <div className="font-bold border-t border-gray-200 dark:border-gray-700 pt-1">37 minutos</div>
            </div>
          </div>
          <p className="font-bold">Comparación con tu realidad:</p>
          <p>Actualizar menú manualmente HOY:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Diseñar en Canva: 30 minutos</li>
            <li>Subir a Facebook/Instagram: 10 minutos</li>
            <li>Imprimir y pegar en local: 15 minutos</li>
            <li>Responder WhatsApps "¿cuál es el menú?": 30 minutos</li>
          </ul>
          <p className="font-bold">Total desperdiciado: 85 minutos POR DÍA</p>
          <p>Reto 7 días: 37 minutos EN TODA LA SEMANA. ¿Ves la diferencia?</p>
          <p><strong>Además:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Las preguntas llegan a las 9am (configura alarma)</li>
            <li>Tienes 24 horas para responder (puedes hacerlo en la noche)</li>
            <li>Si te pierdes un día, puedes recuperar después</li>
          </ul>
          <p>Si tienes 5 minutos para tomar un café, tienes 5 minutos para el reto.</p>
        </div>
      )
    },
    {
      question: '💻 "No Soy Bueno con Tecnología, Esto No Es Para Mí"',
      answer: (
        <div className="space-y-4">
          <p>Esta es la objeción #1. Y tenemos la respuesta perfecta:</p>
          <p className="font-bold text-lg">¿Sabes usar WhatsApp para recibir pedidos de clientes?</p>
          <p>Si respondiste SÍ → Ya tienes TODO lo que necesitas.</p>
          
          <p className="font-bold">Cómo funciona el reto en la práctica:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Recibes mensaje por WhatsApp (como cualquier mensaje)</li>
            <li>Lees la pregunta (como leer un mensaje de cliente)</li>
            <li>Si no sabes la respuesta, buscas en Google (como buscar una receta)</li>
            <li>Respondes por WhatsApp tocando una opción (A, B, C o D)</li>
            <li>Listo.</li>
          </ol>

          <p className="font-bold">Las preguntas NO son técnicas.</p>
          <div className="space-y-2">
            <p>❌ NO preguntamos: "¿Qué es un servidor HTTP?"</p>
            <p>❌ NO preguntamos: "¿Cuál es el código HTML para...?"</p>
            <p>✅ SÍ preguntamos: "¿Cuánto tiempo toma actualizar un menú digital?"</p>
            <p>✅ SÍ preguntamos: "¿En cuántos lugares se actualiza automáticamente?"</p>
          </div>
          
          <p>Son preguntas que cualquier dueño de restaurante puede responder buscando 2 minutos en Google.</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
            <p className="font-bold text-blue-800 dark:text-blue-200">Testimonial real:</p>
            <p className="italic">"Tengo 54 años y nunca había hecho algo así por WhatsApp. Mis hijos me ayudaron el primer día, pero luego pude solo. Las preguntas eran simples y César me llamó personalmente cuando gané. Vale la pena."</p>
            <p className="text-right font-medium">— Roberto P., Restaurante [Nombre], Quito (54 años)</p>
          </div>
          
          <p className="font-bold">ADEMÁS:</p>
          <p>Si en algún momento te trabas, solo respondes en WhatsApp: "Necesito ayuda con esto"</p>
          <p>Y César o su equipo te guían personalmente en menos de 1 hora.</p>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Promesa:</p>
            <p>Si Roberto de 54 años lo hizo solo desde el día 2, tú también puedes.</p>
          </div>
        </div>
      )
    },
    {
      question: '📱 "¿Por Qué Necesitan Mi WhatsApp? Me Van a Spamear"',
      answer: (
        <div className="space-y-4">
          <p>Transparencia total, aquí está exactamente para qué:</p>
          
          <p className="font-bold">Tu WhatsApp lo usamos para:</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
            <p className="font-bold text-blue-800 dark:text-blue-200">1. Durante el reto (7 días):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enviarte 1 pregunta cada mañana (9am)</li>
              <li>Confirmarte si acertaste (respuesta inmediata)</li>
              <li>Enviarte tu código de descuento diario</li>
            </ul>
            <p className="mt-2">Total: 2-3 mensajes por día durante 7 días.</p>
            
            <p className="font-bold text-blue-800 dark:text-blue-200 mt-4">2. Después del reto (si ganas):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Coordinamos tu implementación</li>
              <li>Te enviamos actualizaciones importantes del servicio</li>
              <li>Soporte técnico si tienes dudas</li>
            </ul>
            <p className="mt-2">Total: 1-2 mensajes por semana.</p>
            
            <p className="font-bold text-blue-800 dark:text-blue-200 mt-4">3. Contenido útil ocasional:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tips para restaurantes (máximo 1-2 veces/semana)</li>
              <li>Promociones especiales (solo si aplican a tu caso)</li>
            </ul>
            <p className="mt-2">Total: 1-2 mensajes por semana.</p>
          </div>
          
          <p className="font-bold">Lo que NUNCA hacemos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vender tu información a terceros</li>
            <li>Spam diario con promociones random</li>
            <li>Mensajes a las 2am</li>
            <li>Llamadas telefónicas sin tu permiso</li>
            <li>Agregar a grupos sin tu consentimiento</li>
          </ul>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Tu control total:</p>
            <p>En cualquier momento, si quieres salir de nuestra lista de difusión, solo escribes: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">BASTA</span></p>
            <p>Y te sacamos al instante. Sin preguntas. Sin drama. Sin peros.</p>
          </div>
          
          <p className="font-bold">¿Por qué pedimos WhatsApp y no solo email?</p>
          <p>Porque la tasa de apertura de WhatsApp es 98% vs. 20% de email. Queremos que NO te pierdas ninguna pregunta. Y sabemos que WhatsApp es el canal que revisas 50 veces al día de todos modos.</p>
        </div>
      )
    },
    {
      question: '⏰ "¿Qué Pasa Si Pierdo Un Día? ¿Quedo Eliminado?"',
      answer: (
        <div className="space-y-4">
          <p className="text-green-600 dark:text-green-400 font-bold text-lg">NO. El sistema es flexible porque entendemos que estás ocupado.</p>
          
          <p className="font-bold">Cómo funciona realmente:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ El reto dura 7 días corridos desde que empiezas</li>
            <li>✅ Cada pregunta está disponible 24 horas</li>
            <li>✅ Si no respondes un día, NO quedas eliminado</li>
            <li>✅ Puedes recuperar preguntas perdidas</li>
          </ul>
          
          <p className="font-bold">Ejemplo real:</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p>Lunes: Respondes Día 1 ✅</p>
            <p>Martes: Te olvidas, no respondes ❌</p>
            <p>Miércoles: Respondes Día 2 ✅ (recuperas)</p>
            <p>Jueves: Respondes Día 3 ✅</p>
            <p>Viernes: Respondes Día 4 y 5 juntos ✅✅ (acumulas)</p>
            <p>Sábado: Respondes Día 6 ✅</p>
            <p>Domingo: Respondes Día 7 ✅</p>
            <p className="font-bold mt-2">Resultado: GANASTE (7 respuestas correctas en total)</p>
          </div>
          
          <p className="font-bold">Límite de tiempo:</p>
          <p>Una vez que te registras, tienes hasta el Día 7 oficial del reto para completar tus 7 respuestas. Si te registras el Lunes, el reto cierra el Domingo siguiente.</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-blue-800 dark:text-blue-200">Tip práctico:</p>
            <p>Configura una alarma en tu celular todos los días a las 9am.</p>
            <p className="font-mono bg-white dark:bg-gray-700 p-2 rounded mt-2">Título: "Reto Menú Objetivo - 5 minutos"</p>
            <p>Suena → Respondes → Sigues con tu día.</p>
          </div>
        </div>
      )
    },
    {
      question: '🔍 "¿Puedo Buscar las Respuestas en Google o Es Trampa?"',
      answer: (
        <div className="space-y-4">
          <p className="text-green-600 dark:text-green-400 font-bold text-xl text-center">SÍ, PUEDES. De hecho, LO RECOMENDAMOS.</p>
          <p className="text-center">Esto no es un examen de memoria. Es un proceso de aprendizaje.</p>
          
          <p className="font-bold">Por qué queremos que busques:</p>
          <p>El objetivo del reto NO es "ver si sabes las respuestas de memoria". El objetivo es que INVESTIGUES sobre menús digitales, leas nuestros artículos, entiendas cómo funciona Menú Objetivo, y llegues al final EDUCADO sobre lo que vas a contratar.</p>
          
          <p className="font-bold">Cómo funciona en la práctica:</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p><strong>Pregunta:</strong> "¿Cuál es el tiempo promedio de actualización de un menú digital con Menú Objetivo?"</p>
            <p>Tú no sabes la respuesta → Buscas en Google: "tiempo actualización menú digital Menú Objetivo"</p>
            <p>Encuentras nuestro artículo (lo posicionamos para eso) → Lo lees → Aprendes sobre automatización, velocidad, beneficios → Encuentras la respuesta: "1 minuto"</p>
            <p>Vuelves al WhatsApp → Respondes "B) 1 minuto" → ✅ Correcto</p>
          </div>
          
          <p className="font-bold">Resultado:</p>
          <p>No solo ganaste el punto. También aprendiste:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Por qué es tan rápido (sistema en 3 clics)</li>
            <li>Qué significa "actualización automática"</li>
            <li>Cómo se compara con métodos manuales</li>
          </ul>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-blue-800 dark:text-blue-200">Al final del reto:</p>
            <p>Habrás leído 7 artículos completos sobre Menú Objetivo. Sabrás más que el 90% de dueños de restaurantes sobre menús digitales. Y cuando ganes, contratarás con CONFIANZA porque entiendes el producto.</p>
            <p className="font-bold mt-2">No es trampa. Es estrategia de aprendizaje.</p>
          </div>
        </div>
      )
    },
    {
      question: '💸 "Ya Invertí en Otras Cosas y No Funcionaron"',
      answer: (
        <div className="space-y-4">
          <p>Te entendemos. La industria del marketing digital está llena de promesas vacías.</p>
          
          <p className="font-bold">Diferencia #1: Esto es gratis participar</p>
          <p>No te pedimos $500 por adelantado "para empezar". No hay pago de inscripción. No hay "membresía premium". Participas gratis. Aprendes gratis. Solo pagas si ganas Y decides contratar después.</p>
          
          <p className="font-bold">Diferencia #2: Te educamos primero</p>
          <p>Otros te dicen: "Confía en mí, yo sé de esto". Nosotros te decimos: "Aprende con nosotros, luego tú decides". Al final del reto, tú mismo sabrás si Menú Objetivo funciona para ti. No hay "letras chicas" que descubres después.</p>
          
          <p className="font-bold">Diferencia #3: Resultados medibles</p>
          <p>"Te vamos a posicionar en Google" no es una promesa vaga. En las sesiones con César, verás:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keyword exacta: "ceviche en [tu ciudad]"</li>
            <li>Posición actual: Página 3 de Google (nadie te ve)</li>
            <li>Posición objetivo: Top 5 en Página 1</li>
            <li>Tiempo estimado: 30-60 días</li>
            <li>Métrica: Tráfico semanal desde Google</li>
          </ul>
          <p>Puedes medir todo. No es "magia de marketing".</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-blue-800 dark:text-blue-200">Testimonial de un escéptico:</p>
            <p className="italic">"Contraté a un 'experto en redes' que me cobró $400 y nunca vi resultados. Cuando vi este reto pensé 'otra estafa más'. Pero era gratis participar, así que dije 'bueno, veamos'. Las preguntas me hicieron investigar y aprender cosas que ese 'experto' nunca me explicó. Cuando gané y hablé con César, me mostró EXACTAMENTE cómo iba a funcionar, con ejemplos de otros restaurantes en mi ciudad. Lo contraté. En 2 semanas ya estaba en Google. En el primer mes tuve 12 clientes nuevos que me encontraron buscando online. La diferencia es que acá no prometen magia. Te explican, te educan, y te muestran paso a paso."</p>
            <p className="text-right font-medium">— Luis T., Restaurante [Nombre], Guayaquil</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Garantía adicional:</p>
            <p>Una vez que contrates, tienes 30 días para probarlo en tu negocio real. Si no cumple lo prometido (aparecer en Google, ahorrarte tiempo), te devolvemos el 100% de lo pagado. Sin preguntas. Sin trámites.</p>
          </div>
        </div>
      )
    },
    {
      question: '🏠 "Mi Restaurante Es Pequeño, Esto No Es Para Mí"',
      answer: (
        <div className="space-y-4">
          <p className="text-red-500 font-bold text-xl text-center">FALSO. Esto es ESPECIALMENTE para ti.</p>
          
          <p className="font-bold">Quién se beneficia más:</p>
          <p>Los restaurantes grandes tienen presupuesto para:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contratar agencias de marketing ($500-2,000/mes)</li>
            <li>Community managers full-time ($800/mes)</li>
            <li>Diseñadores gráficos ($300/proyecto)</li>
            <li>Fotógrafos profesionales ($200/sesión)</li>
          </ul>
          
          <p>Los restaurantes pequeños (5-20 mesas) NO pueden pagar eso. Por eso Menú Objetivo es perfecto para ti:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>✅ Un solo pago de setup ($247 con descuento)</li>
            <li>✅ Mantenimiento de $29/mes (menos que un diseñador por UN proyecto)</li>
            <li>✅ Tú actualizas todo desde tu celular (no dependes de nadie)</li>
            <li>✅ Compites en igualdad con grandes en Google (SEO nivela el juego)</li>
          </ul>
          
          <p className="font-bold">Data real de ganadores anteriores:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
              <p className="font-bold text-blue-800 dark:text-blue-200">Restaurantes de 5-10 mesas:</p>
              <p className="text-2xl font-bold">23 ganadores</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
              <p className="font-bold text-green-800 dark:text-green-200">Restaurantes de 11-15 mesas:</p>
              <p className="text-2xl font-bold">35 ganadores</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg">
              <p className="font-bold text-yellow-800 dark:text-yellow-200">Restaurantes de 16-20 mesas:</p>
              <p className="text-2xl font-bold">28 ganadores</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
              <p className="font-bold text-purple-800 dark:text-purple-200">Food trucks y cafeterías:</p>
              <p className="text-2xl font-bold">27 ganadores</p>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-center text-green-800 dark:text-green-200">
              Total restaurantes "pequeños": <span className="text-2xl">113 de 134 (84%)</span>
            </p>
          </div>
          
          <p className="font-bold">Por qué funciona mejor para pequeños:</p>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <p className="font-bold">ROI más rápido</p>
              <p>Un cliente nuevo por semana = $200+ al mes extra</p>
              <p>Eso ya cubre el mantenimiento mensual ($29) 7 veces.</p>
            </li>
            <li>
              <p className="font-bold">Impacto visible</p>
              <p>En restaurante de 10 mesas, 3 clientes nuevos/semana es 30% más ventas.</p>
              <p>En uno de 50 mesas, apenas se nota.</p>
            </li>
            <li>
              <p className="font-bold">Ventaja competitiva</p>
              <p>Grandes tienen marca. Pequeños necesitan visibilidad.</p>
              <p>Google es tu oportunidad de estar a la par.</p>
            </li>
          </ol>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-blue-800 dark:text-blue-200">Ejemplo real:</p>
            <p className="font-bold">"La Esquina del Sabor" - 8 mesas - Loja</p>
            <p><span className="font-bold">Antes:</span> 25 clientes/semana (mayoría regulares)</p>
            <p><span className="font-bold">Después de Menú Objetivo (mes 2):</span> 38 clientes/semana</p>
            <p><span className="font-bold">Clientes nuevos desde Google:</span> 8-10/semana promedio</p>
            <p className="font-bold text-green-600">Aumento ventas: 52%</p>
          </div>
          
          <p className="text-center text-xl font-bold mt-6">Tu tamaño no importa. Tu visibilidad sí.</p>
        </div>
      )
    },
    {
      question: '🛡️ "¿Y Si Contrato y No Me Gusta? ¿Me Quedo Atrapado?"',
      answer: (
        <div className="space-y-6">
          <p className="text-green-600 dark:text-green-400 font-bold text-xl text-center">NO. Tienes múltiples salidas sin riesgo.</p>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="font-bold text-lg">Garantía de Satisfacción (Sin Letra Pequeña):</p>
            <p>Una vez que ganes el reto y contrates Menú Objetivo:</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 p-6 rounded-xl">
            <p className="font-bold text-lg text-blue-800 dark:text-blue-200">📅 PRIMEROS 30 DÍAS (Periodo de Prueba Real):</p>
            <p>Recibes todo:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Tu plataforma completa configurada</li>
              <li>Tus 20 páginas optimizadas</li>
              <li>Tu dominio funcionando</li>
              <li>Tu panel de control activo</li>
            </ul>
            <p className="mt-3">Pruébalo en tu negocio real con clientes reales.</p>
            <p className="font-bold mt-4">Si al día 30 decides que NO cumple lo prometido:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>✅ Te devolvemos el 100% de lo pagado</li>
              <li>✅ Sin preguntas incómodas</li>
              <li>✅ Sin "pero es que..."</li>
              <li>✅ Transferencia en menos de 5 días hábiles</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 p-6 rounded-xl mt-6">
            <p className="font-bold text-lg text-green-800 dark:text-green-200">📅 DESPUÉS DEL MES 1 (Sin Contratos Largos):</p>
            <p>NO firmamos contratos de "mínimo 12 meses" o trampas similares. Funciona así:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Mantenimiento mensual: $29/mes</li>
              <li>Puedes cancelar CUALQUIER mes</li>
              <li>Avisas con 15 días de anticipación</li>
              <li>No hay penalidades</li>
              <li>No hay "costos de salida"</li>
            </ul>
            <p className="mt-3">Si cancelas:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Tu dominio sigue siendo tuyo (te lo transferimos)</li>
              <li>Tus datos te los entregamos (backup completo)</li>
              <li>No perdés nada de lo que pagaste</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-6">
            <p className="font-bold text-yellow-800 dark:text-yellow-200">¿Por qué hacemos esto?</p>
            <p>Porque confiamos en que funciona. Si después de 30 días viendo tu restaurante aparecer en Google, recibiendo clientes nuevos, y ahorrándote horas cada semana, decides cancelar... es que no hicimos bien nuestro trabajo. Y en ese caso, no merecemos tu dinero.</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Compromiso adicional:</p>
            <p>Si hay algún problema técnico (página caída, algo no funciona), lo solucionamos en menos de 48 horas o ese mes NO te cobramos el mantenimiento.</p>
          </div>
          
          <p className="text-center text-lg font-bold mt-6">Tu único riesgo real es NO intentarlo y seguir perdiendo clientes frente a competidores que sí están en Google.</p>
        </div>
      )
    },
    {
      question: '📧 "¿Tengo que Seguirlos en Redes Para Participar?"',
      answer: (
        <div className="space-y-4">
          <p className="text-green-600 dark:text-green-400 font-bold text-xl text-center">NO es obligatorio. Pero sí recomendado.</p>
          
          <p className="font-bold">Por qué lo sugerimos:</p>
          <p>Por nuestras redes (Instagram, TikTok, Facebook) publicamos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pistas para las preguntas del reto</li>
            <li>Tips sobre menús digitales</li>
            <li>Casos de éxito en tiempo real</li>
            <li>Recordatorios para no perder días</li>
          </ul>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mt-4">
            <p><strong>Ejemplo:</strong> Día 3 del reto → Publicamos story: "Pista para pregunta de hoy: Piensa en AHORRO ANUAL. Busca en nuestro blog."</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">PERO:</p>
            <p>No es requisito para ganar. No revisamos quién nos sigue o no. El reto funciona 100% por WhatsApp. Las redes son solo un EXTRA que te ayuda, no una obligación.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Respondemos Tus Dudas Antes de que las Preguntes
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        Después de 134 ganadores, estas son las preguntas más comunes. Lee con calma, sin prisa.
      </p>
      
      <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionPrimitive.Item 
            key={index} 
            value={`item-${index}`}
            className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl"
          >
            <AccordionPrimitive.Trigger 
              className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.question}
              </h3>
              <ChevronDown className="h-5 w-5 text-orange-500 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
            <AccordionPrimitive.Content className="px-6 pb-6 pt-0 bg-white dark:bg-gray-800">
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                {item.answer}
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </div>
  );
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | César Reyes Jaramillo",
  description: "Política de Privacidad y Protección de Datos Personales",
}

export default function PoliticasPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad y Protección de Datos Personales</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          En <strong>cesarreyesjaramillo.com</strong>, respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales conforme a la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador</strong>.
        </p>
        <p>Esta política explica cómo recopilamos, usamos, almacenamos y protegemos tu información.</p>

        <hr className="my-8" />

        <h2>1. Responsable del tratamiento de datos</h2>
        <p>
          Responsable: <strong>César Reyes Jaramillo</strong><br />
          Correo electrónico: info@cesarreyesjaramillo.com<br />
          Sitio web: <a href="https://www.cesarreyesjaramillo.com">https://www.cesarreyesjaramillo.com</a>
        </p>

        <hr className="my-8" />

        <h2>2. Datos personales que recopilamos</h2>
        <p>Podemos recopilar los siguientes datos cuando el usuario los proporciona voluntariamente:</p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Correo electrónico</li>
          <li>Número telefónico</li>
          <li>Mensajes o información enviada en formularios</li>
          <li>Datos de navegación (IP, tipo de dispositivo, cookies, páginas visitadas)</li>
        </ul>

        <hr className="my-8" />

        <h2>3. Finalidad del tratamiento</h2>
        <p>Los datos personales serán utilizados exclusivamente para:</p>
        <ul>
          <li>Responder solicitudes, mensajes o consultas.</li>
          <li>Gestionar servicios contratados.</li>
          <li>Enviar información relacionada con los servicios.</li>
          <li>Enviar contenido informativo o comercial solo si existe consentimiento expreso.</li>
          <li>Mejorar la experiencia del usuario en el sitio web.</li>
          <li>Cumplir obligaciones legales o contractuales.</li>
        </ul>

        <hr className="my-8" />

        <h2>4. Base legal del tratamiento</h2>
        <p>El tratamiento de datos se realiza conforme a:</p>
        <ul>
          <li>El consentimiento libre, informado, específico e inequívoco del titular.</li>
          <li>La Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador.</li>
        </ul>

        <hr className="my-8" />

        <h2>5. Conservación de los datos</h2>
        <p>
          Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir las finalidades para las que fueron recopilados o mientras exista una relación legal o contractual, y posteriormente serán eliminados o anonimizados de forma segura.
        </p>

        <hr className="my-8" />

        <h2>6. Derechos de los titulares</h2>
        <p>Como titular de datos personales, tienes derecho a:</p>
        <ul>
          <li>Acceder a tus datos.</li>
          <li>Rectificar o actualizar tu información.</li>
          <li>Solicitar la eliminación de tus datos.</li>
          <li>Oponerte al tratamiento.</li>
          <li>Solicitar la portabilidad de tus datos.</li>
          <li>Revocar tu consentimiento en cualquier momento.</li>
        </ul>
        <p>
          Para ejercer estos derechos, envía una solicitud al correo:<br />
          📩 <strong>info@cesarreyesjaramillo.com</strong>
        </p>
        <p>La solicitud deberá incluir nombre completo y descripción clara del requerimiento.</p>

        <hr className="my-8" />

        <h2>7. Transferencias y terceros</h2>
        <p>
          Los datos podrán ser tratados por proveedores tecnológicos (como servicios de hosting, correo electrónico, CRM, automatización o analítica), únicamente para cumplir las finalidades descritas y bajo compromisos de confidencialidad y protección de datos.
        </p>
        <p>No vendemos ni cedemos datos personales a terceros.</p>

        <hr className="my-8" />

        <h2>8. Seguridad de la información</h2>
        <p>
          Se aplican medidas técnicas y organizativas razonables para proteger los datos personales, tales como:
        </p>
        <ul>
          <li>Certificados SSL.</li>
          <li>Accesos restringidos.</li>
          <li>Sistemas de protección y respaldo.</li>
          <li>Plataformas seguras de almacenamiento.</li>
        </ul>

        <hr className="my-8" />

        <h2>9. Uso de cookies</h2>
        <p>
          Este sitio puede utilizar cookies para mejorar la experiencia de navegación y analizar el uso del sitio. El usuario puede configurar su navegador para rechazar o eliminar cookies.
        </p>

        <hr className="my-8" />

        <h2>10. Cambios en esta política</h2>
        <p>
          Nos reservamos el derecho de modificar esta política para adaptarla a cambios legales o mejoras internas. Toda actualización será publicada en esta misma página.
        </p>
      </div>
    </div>
  )
}
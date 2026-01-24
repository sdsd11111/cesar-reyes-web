import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | César Reyes Jaramillo",
  description: "Términos y condiciones de uso del sitio web cesarreyesjaramillo.com",
}

export default function TerminosPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Bienvenido a <strong>cesarreyesjaramillo.com</strong>. Al acceder y utilizar este sitio web, aceptas cumplir los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, por favor no utilices este sitio.
        </p>

        <hr className="my-8" />

        <h2>1. Identificación del responsable</h2>
        <p>Este sitio web es operado por:</p>
        <p>
          <strong>César Reyes Jaramillo</strong><br />
          Correo electrónico: info@cesarreyesjaramillo.com<br />
          Sitio web: <a href="https://www.cesarreyesjaramillo.com">https://www.cesarreyesjaramillo.com</a>
        </p>

        <hr className="my-8" />

        <h2>2. Objeto del sitio web</h2>
        <p>
          Este sitio tiene como finalidad brindar información sobre servicios profesionales, asesorías, contenidos educativos, automatización de procesos, marketing digital, desarrollo web y proyectos empresariales, así como permitir el contacto entre los usuarios y el titular.
        </p>

        <hr className="my-8" />

        <h2>3. Uso del sitio</h2>
        <p>
          El usuario se compromete a utilizar este sitio de forma lícita, sin infringir derechos de terceros ni realizar actividades que puedan dañar, sobrecargar o deteriorar el funcionamiento del sitio.
        </p>
        <p>Queda prohibido:</p>
        <ul>
          <li>Utilizar el sitio con fines fraudulentos.</li>
          <li>Intentar acceder a sistemas, bases de datos o servidores sin autorización.</li>
          <li>Recolectar datos de otros usuarios sin consentimiento.</li>
        </ul>

        <hr className="my-8" />

        <h2>4. Propiedad intelectual</h2>
        <p>
          Todos los contenidos de este sitio (textos, imágenes, videos, logotipos, marcas, estructura, diseño, código y materiales) son propiedad de César Reyes Jaramillo o de sus respectivos titulares, y están protegidos por derechos de propiedad intelectual.
        </p>
        <p>Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>

        <hr className="my-8" />

        <h2>5. Responsabilidad</h2>
        <p>
          El titular no garantiza que el contenido esté libre de errores o sea completamente actualizado, aunque se compromete a realizar esfuerzos razonables para mantener información correcta.
        </p>
        <p>El uso de la información publicada es responsabilidad exclusiva del usuario.</p>

        <hr className="my-8" />

        <h2>6. Enlaces externos</h2>
        <p>
          Este sitio puede contener enlaces a sitios de terceros. No se tiene control sobre ellos ni se asume responsabilidad sobre sus contenidos o políticas.
        </p>

        <hr className="my-8" />

        <h2>7. Tratamiento de datos personales</h2>
        <p>
          Los datos personales proporcionados por los usuarios a través de formularios, suscripciones o cualquier otro medio serán tratados conforme a la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador</strong>.
        </p>
        <p>
          El tratamiento se realizará únicamente con el consentimiento del titular y de acuerdo con lo establecido en nuestra <strong>Política de Privacidad y Protección de Datos Personales</strong>, la cual forma parte integral de estos Términos.
        </p>
        <p>
          👉 Se recomienda leerla en: <a href="/politicas">Política de Privacidad</a>
        </p>

        <hr className="my-8" />

        <h2>8. Modificaciones</h2>
        <p>
          César Reyes Jaramillo se reserva el derecho de modificar en cualquier momento estos Términos y Condiciones. Las modificaciones entrarán en vigor desde su publicación en el sitio web.
        </p>

        <hr className="my-8" />

        <h2>9. Legislación aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República del Ecuador. Cualquier controversia será resuelta conforme a la normativa ecuatoriana vigente.
        </p>
      </div>
    </div>
  )
}
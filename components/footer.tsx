import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-200 border-t border-neutral-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 px-4 md:px-0">
        {/* Sección izquierda: Nombre y Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
          <p className="text-xl font-bold text-white mb-2">César Reyes</p>
          <p className="text-sm text-gray-400">© 2020 César Reyes. Todos los derechos reservados.</p>
        </div>

        {/* Sección central: Enlaces de Navegación */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm mb-4 md:mb-0">
          <Link href="/" className="hover:underline text-gray-300" target="_blank" rel="noopener noreferrer">Inicio</Link>
          <Link href="/blog" className="hover:underline text-gray-300" target="_blank" rel="noopener noreferrer">Blog</Link>
          <Link href="/mensajeria" className="hover:underline text-gray-300" target="_blank" rel="noopener noreferrer">Mensajería</Link>
        </nav>

        {/* Sección derecha: Redes Sociales y Email */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ObjetivoEmprendo" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white text-lg">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.79c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.instagram.com/objetivoemprendo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white text-lg">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.715.01 3.655.049 1.01.045 1.785.176 2.454.43 1.018.397 1.787.973 2.607 1.792.82.82 1.396 1.591 1.793 2.607.254.67.385 1.444.43 2.454.039.94.049 1.224.049 3.655 0 2.43-.01 2.715-.049 3.655-.045 1.01-.176 1.785-.43 2.454-.397 1.018-.973 1.787-1.792 2.607-.82-.82-1.591 1.396-2.607 1.793-.67.254-1.444.385-2.454.43-.94.039-1.224.049-3.655.049-2.43 0-2.715-.01-3.655-.049-1.01-.045-1.785-.176-2.454-.43-1.018-.397-1.787-.973-2.607-1.792-.82-.82-1.396-1.591-1.793-2.607-.254-.67-.385-1.444-.43-2.454-.039-.94-.049-1.224-.049-3.655 0-2.43.01-2.715.049-3.655.045 1.01.176 1.785.43-2.454.397-1.018.973-1.787 1.792-2.607.82-.82 1.591-1.396 2.607-1.793.67-.254 1.444-.385 2.454-.43.94-.039 1.224-.049 3.655-.049zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.167a3.167 3.167 0 110-6.334 3.167 3.167 0 010 6.334z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/c%C3%A9sar-reyes-jaramillo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white text-lg">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M20.25 0H3.75A3.75 3.75 0 000 3.75v16.5A3.75 3.75 0 003.75 24h16.5A3.75 3.75 0 0024 20.25V3.75A3.75 3.75 0 0020.25 0zM7.5 20.25H3.75V9h3.75v11.25zM5.625 7.5a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75zM20.25 20.25H16.5V14.25c0-1.5-.75-2.25-1.5-2.25s-1.5.75-1.5 2.25v6h-3.75V9h3.75v1.5c.75-1.125 2.062-2.25 3.375-2.25 3.75 0 4.5 2.625 4.5 6.375v4.5z" /></svg>
            </a>
            <a href="https://www.youtube.com/@ObjetivoEmprendo" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white text-lg">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M19.613 5.485c-.75-.205-1.936-.453-3.232-.577C14.717 4.793 12 4.75 12 4.75s-2.717.043-4.38.158c-1.296.124-2.482.372-3.232.577C3.127 6.133 2 7.26 2 8.528v6.944c0 1.268 1.127 2.395 2.388 2.686.75.205 1.936.453 3.232.577C9.283 19.207 12 19.25 12 19.25s2.717-.043 4.38-.158c1.296-.124 2.482-.372 3.232-.577C20.873 17.867 22 16.74 22 15.472V8.528c0-1.268-1.127-2.395-2.388-2.686zM10 15.25V8.75L16 12l-6 3.25z" /></svg>
            </a>
            <a href="https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20tus%20servicios" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-white text-lg">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
          </div>
          <a href="mailto:negocios@cesarreyesjaramillo.com" className="text-gray-400 hover:underline text-sm">negocios@cesarreyesjaramillo.com</a>
        </div>
      </div>
    </footer>
  )
}
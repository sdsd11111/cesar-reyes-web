'use client';

export default function CTASection() {
  return (
    <section className="py-24 bg-blue-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl fade-in">
            ¿Listo para optimizar tu comunicación?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100 fade-in">
            Agenda una demo gratuita y descubre cómo nuestro sistema puede transformar la forma en que te comunicas con tus pacientes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 fade-in">
            <a
              href="https://wa.me/593963425323"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Agenda una Demo
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold leading-6 text-white"
            >
              Ver Planes <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
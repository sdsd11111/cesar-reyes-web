'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl fade-in">
            Optimiza la Comunicación con tus Pacientes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 fade-in">
            Sistema de mensajería automatizada para clínicas y consultorios médicos. 
            Mejora la experiencia de tus pacientes y optimiza tu tiempo con recordatorios 
            inteligentes y seguimiento personalizado.
          </p>
          <div className="mt-10 flex items-center gap-x-6 fade-in">
            <a
              href="https://wa.me/593963425323"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Agenda una Demo
            </a>
            <a href="#benefits" className="text-sm font-semibold leading-6 text-gray-900">
              Conoce más <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none fade-in">
            <Image
              src="/images/mensajeria/hero-image.png"
              alt="Sistema de mensajería automatizada"
              width={800}
              height={600}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
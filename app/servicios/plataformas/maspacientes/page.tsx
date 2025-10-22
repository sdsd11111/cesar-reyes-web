'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const consequencesData = [
  {
    icon: "🔍",
    title: "Clientes que no te conocen",
    description: "Pacientes que buscan tus servicios pero no pueden encontrarte."
  },
  {
    icon: "📈",
    title: "Posicionamiento orgánico",
    description: "El éxito de una página web profesional depende de las palabras clave. Nos especializamos en optimizarlas para que tu sitio destaque."
  },
  {
    icon: "🕒",
    title: "Ahorro de tiempo",
    description: "Una agenda automatizada mejora la percepción de profesionalismo, lo que facilita que los pacientes decidan agendar una cita."
  },
  {
    icon: "🔒",
    title: "Destacar entre la competencia",
    description: "Mantener informada a tu comunidad con artículos escritos no solo refuerza tu profesionalismo, sino que también genera confianza en tu labor."
  }
];

const servicesData = [
  {
    icon: "🖥️",
    title: "Estudio de palabras clave",
    description: "Analizamos las búsquedas de tus pacientes, evaluamos la estrategia de tu competencia y optimizamos tu sitio web para que sea fácil de encontrar."
  },
  {
    icon: "🗓️",
    title: "Manual del usuario",
    description: "Recibirás una guía detallada sobre cómo posicionar tu sitio web estratégicamente utilizando redes sociales."
  },
  {
    icon: "🔍",
    title: "Automatización de tareas repetitivas",
    description: "Responder a unos pocos mensajes al día es sencillo, pero si se convierten en cientos, necesitarás ayuda. Implementamos automatizaciones para que optimices tu tiempo."
  },
  {
    icon: "✉️",
    title: "Aprovecha el momento",
    description: "Muchos profesionales son autodidactas. Con nuestro asesoramiento, aprovecharás todo ese tiempo que ellos pierden; te posicionaremos profesionalmente y captarás más pacientes."
  }
];

const statisticsData = [
  {
    icon: "✅",
    title: "El 69%",
    description: "De las citas en línea son agendadas por mujeres, quienes toman la mayoría de decisiones de salud en sus familias.",
    source: "Fuente: Doctoralia"
  },
  {
    icon: "✅",
    title: "El 65%",
    description: "De los pacientes descartan médicos sin una web profesional. Prefieren información clara y confiable antes de agendar.",
    source: "Fuente: Estudio de Mercado Libre Ecuador, 2023"
  },
  {
    icon: "🩺",
    title: "75%",
    description: "De los pacientes afirman que la información en línea influye en su decisión. La información en línea es clave para elegir un médico.",
    source: "Fuente: Pew Research"
  },
  {
    icon: "🔍",
    title: "80%",
    description: "De los pacientes investigan detenidamente antes de agendar una cita. La búsqueda previa es esencial para tomar una decisión.",
    source: "Fuente: Google Health Survey"
  },
  {
    icon: "🌍",
    title: "72%",
    description: "De los adultos buscan información sobre salud y médicos en línea antes de consultar. La mayoría investiga en internet antes de acudir a un especialista.",
    source: "Fuente: Pew Research"
  },
  {
    icon: "⭐",
    title: "94%",
    description: "De los pacientes consideran que la reputación en línea de un médico es clave. Las reseñas y opiniones influyen en la elección del profesional de salud.",
    source: "Fuente: Doctor.com"
  }
];

export default function MasPacientesPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput') as HTMLInputElement;
    if (emailInput) {
      try {
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailInput.value }),
        });
        
        if (response.ok) {
          alert('¡Gracias por suscribirte a nuestro boletín!');
          emailInput.value = '';
        } else {
          alert('Hubo un error al suscribirte. Por favor, intenta de nuevo.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al suscribirte. Por favor, intenta de nuevo.');
      }
    }
  };

  const whatsappLink = `https://wa.me/593963425323`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
            <p className="mt-4 text-xl text-light-gray font-semibold fade-in">
              🌟 Imagina tu agenda llena de pacientes.
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl fade-in">
              👨⚕️ <span className="text-gradient">Confianza es más Pacientes</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-medium-gray fade-in">
              ¿Tus pacientes buscan un profesional para cuidar su salud?
            </p>
            <h3 className="mt-4 text-xl font-semibold fade-in text-white">
              Esta es tu oportunidad de destacar, generar confianza y llenar tu agenda.
            </h3>
            <div className="mt-10 flex items-center gap-x-6 fade-in">
              <a
                href="https://wa.me/593963410409"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-700 to-gray-900 text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:from-gray-900 hover:to-gray-700 hover:shadow-2xl transition-all duration-200 text-lg"
              >
                🚀 ¡No esperes más!
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 lg:mt-0 fade-in">
            <div className="relative">
              <Image
                src="/images/maspacientes/dr-patricio.jpg"
                alt="Dr. Patricio Reyes Pólit"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-white">🗣️ La confianza convierte pacientes.</h2>
            <p className="text-xl text-medium-gray mb-8">
              Médicos como tú llenan sus agendas con nuestras webs optimizadas.
            </p>
          </div>

          <div className="bg-black rounded-2xl shadow-lg overflow-hidden mb-12 fade-in">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg text-medium-gray mb-4">Video Testimonial</p>
                <p className="text-sm text-light-gray">(Aquí se mostraría el video de testimonio)</p>
              </div>
            </div>
          </div>

          <div className="text-center fade-in">
            <a href="https://wa.me/593963410409" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-gray-700 to-gray-900 text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:from-gray-900 hover:to-gray-700 hover:shadow-2xl transition-all duration-200 text-lg">
              💡 ¡Quiero mi propia página web!
            </a>
            <h3 className="mt-8 text-xl font-semibold text-white">
              👌 Esa decisión cambiará tu vida, te lo prometo.
            </h3>
          </div>
        </div>
      </section>

      {/* Consequences Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-white">🤔 ¿Qué sucede si no contratas ya tu página web?</h2>
            <h3 className="text-xl font-semibold text-medium-gray mb-12">
              🚨 Nada. Todo seguirá igual... pero es importante entender lo que estás perdiendo.
            </h3>
          </div>
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {consequencesData.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-dark-gray border-gray-700 flex flex-col">
                      <CardHeader>
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <CardTitle className="text-white">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-medium-gray">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <p className="text-center text-lg text-medium-gray mt-12 mb-8 fade-in">
            Descuidar estos aspectos puede hacerte perder pacientes y afectar tu reputación.
          </p>
          <h2 className="text-center text-3xl font-bold text-white fade-in">
            ✅ TRANQUILO, NOSOTROS LO HACEMOS POR TI
          </h2>
        </div>
      </section>

      {/* Services Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-white">Nuestros Servicios</h2>
            <p className="text-xl text-medium-gray mb-8">
              Soluciones diseñadas para médicos que quieren destacar y atraer más pacientes
            </p>
          </div>
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {servicesData.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-black border-gray-700 flex flex-col">
                      <CardHeader>
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <CardTitle className="text-white">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-medium-gray">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">📂 Nuestro Portafolio de Éxitos</h2>
            <p className="mt-4 text-lg text-medium-gray">
              Explora nuestros proyectos destacados donde hemos transformado la presencia online de médicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-gray rounded-xl shadow-md overflow-hidden hover-lift border border-gray-700 fade-in">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/maspacientes/topdent.jpg"
                  alt="TopdentCuenca"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium text-light-gray mb-1">Web Empresarial</div>
                    <h3 className="text-xl font-semibold mb-2">TopdentCuenca</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-medium-gray mb-4">Web Empresarial para clínica dental</p>
                <a href="https://topdentcuenca.com/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:underline inline-flex items-center">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-dark-gray rounded-xl shadow-md overflow-hidden hover-lift border border-gray-700 fade-in">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/maspacientes/dr-guido.jpg"
                  alt="Dr. Guido Díaz Ortega"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium text-light-gray mb-1">Web Pro Go</div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Guido Díaz Ortega</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-medium-gray mb-4">Sitio web profesional para médico especialista</p>
                <a href="https://drguidodiazortega.com/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:underline inline-flex items-center">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-dark-gray rounded-xl shadow-md overflow-hidden hover-lift border border-gray-700 fade-in">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/maspacientes/dr-patricio-2.jpg"
                  alt="Dr. Patricio Reyes Pólit"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium text-light-gray mb-1">Tarjetas Digitales</div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Patricio Reyes Pólit</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-medium-gray mb-4">Tarjeta digital profesional para intensivista</p>
                <a href="https://automatizotunegocio.net/pulmocor/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:underline inline-flex items-center">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-center text-2xl font-semibold text-white mt-12 fade-in">
            y muchísimos proyectos más
          </h3>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-white">📈 Nuestra Experiencia y Trayectoria</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/maspacientes/cesar-reyes.jpg"
                  alt="César Reyes"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="fade-in">
              <p className="text-xl text-medium-gray mb-6">
                Más de 23 años ayudando a profesionales y dueños de negocios a impulsar sus ventas y maximizar su potencial online.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-white">📈 Decide por estadísticas, no por intuición</h2>
              <a href="https://wa.me/593963410409" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-gray-700 to-gray-900 text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:from-gray-900 hover:to-gray-700 hover:shadow-2xl transition-all duration-200 text-lg">
                Agenda una consultoría gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-8 text-white">Estadísticas que no puedes ignorar</h2>
            <p className="text-xl text-medium-gray mb-8">📈 Decide por estadísticas, no por intuición</p>
          </div>
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {statisticsData.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-dark-gray border-gray-700 flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center"><span className="text-2xl mr-2">{item.icon}</span>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-medium-gray">{item.description}</p>
                      </CardContent>
                      <CardDescription className="p-6 pt-0 text-xs text-light-gray">{item.source}</CardDescription>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative w-full overflow-hidden bg-black py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
        <div className="marquee">
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #666666' }}>
              Confianza es más Pacientes
            </span>
          </div>
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #666666' }}>
              Confianza es más Pacientes
            </span>
          </div>
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #666666' }}>
              Confianza es más Pacientes
            </span>
          </div>
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #666666' }}>
              Confianza es más Pacientes
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-white">📍 Ubicación y Contacto</h2>
            <p className="text-xl text-medium-gray mb-8">Estamos aquí para ayudarte a potenciar tu presencia online.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-gray-700 bg-black p-6 rounded-lg fade-in">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Ubicación</h3>
              <p className="text-medium-gray mb-6 flex-grow">Loja, Ecuador.</p>
              <a href="https://maps.app.goo.gl/M51LRhnF79X5cPNB9" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:underline inline-flex items-center">
                📥 Descargar ubicación
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-gray-700 bg-black p-6 rounded-lg fade-in">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2 text-white">WhatsApp</h3>
              <p className="text-medium-gray mb-6 flex-grow">Contáctanos directamente para resolver tus inquietudes.</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:underline"
              >
                📱 Contactar por WhatsApp
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-gray-700 bg-black p-6 rounded-lg fade-in">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Contacto</h3>
              <p className="text-medium-gray mb-6 flex-grow">Descarga mi contacto y te ayudare a a crear una web profesional.</p>
              <a
                href="/Cesar-Reyes-Contacto.vcf"
                download
                className="text-light-gray hover:underline inline-flex items-center"
              >
                🗓️ Agregar contacto
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <h3 className="text-center text-2xl font-semibold text-white fade-in">
            ⏳ No pierdas más pacientes por falta de un sitio profesional.
          </h3>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="bg-black py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-dark-gray to-black rounded-3xl p-8 shadow-lg fade-in">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Mantente Informado</h2>
            <p className="text-medium-gray mb-6 text-center">
              Suscríbete a nuestro boletín para recibir las últimas actualizaciones sobre marketing médico y estrategias para atraer pacientes.
            </p>
            <form id="newsletterForm" className="space-y-4" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                id="emailInput"
                placeholder="Ingresa tu correo electrónico"
                className="w-full px-4 py-3 rounded-full border border-gray-700 bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Aquí puedes insertar el video de Bunny Stream */}
      <section className="py-10 bg-black flex justify-center items-center">
        <div style={{ position: 'relative', paddingTop: '56.25%', width: '80%' }}>
          <iframe
            src="https://iframe.mediadelivery.net/embed/759/f763ff17-bb08-41ea-8236-4b86923ab173?autoplay=true&loop=true&muted=true&playsinline=true"
            loading="lazy"
            style={{ border: 'none', position: 'absolute', top: 0, height: '100%', width: '100%' }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

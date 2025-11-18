'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import TransparentHeader from '@/components/transparent-header';
import HeroSection from './HeroSection';
import Section from './Section';
import CtaSection from './CtaSection';

// Contenido de la página
const pageContent = {
  hero: {
    title: 'César Reyes Jaramillo',
    subtitle: 'Estratega de negocios y posicionamiento web',
    description: 'Más de 23 años ayudando a emprendedores, profesionales y pymes a convertir su propósito en crecimiento real.',
    cta: 'Agendar diagnóstico gratuito',
    ctaLink: 'https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+un+diagn%C3%B3stico+gratuito&type=phone_number&app_absent=0',
  },
  sections: [
    {
      id: 'inicio',
      title: 'Todo comenzó con una jabonera',
      content: [
        'A los siete años acompañé a mi madre al Huaquillas para hacer compras para su pequeño negocio. Recuerdo que, cuando me iba a comprar unas cosas de niño, me dio un consejo que nunca olvidaría:',
        '“Si compras esta jabonera en 1 sucre y la vendes en 3, ¿cuánto habrás ganado si vendes 10 con lo que te dio tu papá?”',
        'Ese día entendí que los números cuentan una historia más profunda que el dinero. Hablan del valor, del esfuerzo y de la visión.'
      ],
      image: '/images/sobre-mi/jabonera.webp',
      imagePosition: 'right' as const,
      bgColor: 'white'
    },
    {
      id: 'decision',
      title: 'Cuando decidí qué quería hacer crecer',
      content: [
        'En la universidad estuve a punto de estudiar Agronomía, pero elegí Administración de Empresas.',
        'No porque no me gustara el campo, sino porque entendí que mi propósito no era hacer producir más vacas o cultivos, sino hacer producir ideas, personas y negocios.',
        'Desde entonces, todo mi camino profesional gira en torno a eso: ayudar a que otros crezcan con estrategia.'
      ],
      image: '/images/sobre-mi/universidad.webp',
      imagePosition: 'left' as const,
      bgColor: 'gray-50'
    },
    {
      id: 'quiebre',
      title: 'El cambio de enfoque que lo cambió todo',
      content: [
        'Desde joven entendí que atraemos lo que enfocamos nuestra energía. Durante años me concentré en ahorrar, en reducir gastos, en hacerlo todo yo mismo. Creía que así ganaba.',
        'Hasta que un amigo de Cuenca me dijo algo que me cambió la manera de ver los negocios:',
        '“Si liberas tiempo y te dedicas a ser el dueño —a pensar, a crear alianzas, a dirigir— ganarás diez veces más de lo que ahorras.”',
        'Tenía razón. Cuando dejé de ser el empleado de mi propio negocio y empecé a ser su gerente, nació La Batalla del Sharwest, un evento que llegó a generar ingresos de 1.500 dólares por noche.',
        'No fue suerte, fue cambio de enfoque.'
      ],
      image: '/images/sobre-mi/evento.webp',
      imagePosition: 'right' as const,
      bgColor: 'white',
      fullWidth: true,
      overlay: false,
      customClass: 'bg-white',
      textWhite: false,
      highlightText: '“Si liberas tiempo y te dedicas a ser el dueño —a pensar, a crear alianzas, a dirigir— ganarás diez veces más de lo que ahorras.”',
      highlightAuthor: '— Un consejo que cambió mi vida',
      stats: [
        { value: '10x', label: 'Más ingresos' },
        { value: '1,500', label: 'Dólares por noche', sublabel: 'en eventos' },
        { value: '100%', label: 'Enfoque estratégico' }
      ]
    },
    {
      id: 'objetivo',
      title: 'Cuando un problema se convirtió en propósito',
      content: [
        'En 2018, cuando tenía un salón de eventos, contraté una página web. Nunca me la entregaron ni me devolvieron el anticipo.',
        'Ese día tomé una decisión: aprendería a hacerlo yo mismo.',
        'Así nació Objetivo, que en sus inicios se llamaba Automatizotunegocio: una empresa nacida desde la frustración, pero sostenida por la disciplina y el aprendizaje constante.',
        'Me volví autodidacta. Aprendí que no basta con copiar lo que se ve en internet: hay que entender la ciencia detrás de cada acción.'
      ],
      image: '/images/sobre-mi/trabajando.webp',
      imagePosition: 'left' as const,
      bgColor: 'gray-50'
    },
    {
      id: 'oferta',
      title: 'Lo que hoy ofrezco',
      content: [
        'Hoy trabajo directamente con los dueños de negocio, no con encargados.',
        'En una llamada estratégica, analizamos juntos su situación, sin promesas vacías ni tecnicismos.',
        'No lo sé todo, pero tengo la capacidad y la experiencia para ayudar a muchos.',
        'Mi método parte siempre de un diagnóstico, porque no todos necesitan una página web. A veces lo que hace falta es algo más simple: claridad, dirección y propósito.',
        'Por eso, cuando posicioné la frase “comprar baterías en Loja” y un cliente apareció en segundo lugar por encima de grandes empresas —sin campañas, sin presupuesto, solo con estrategia— supe que estaba en el camino correcto.'
      ],
      cta: 'Agenda una llamada conmigo',
      ctaLink: 'https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0',
      bgColor: 'white',
      hasCta: true,
      image: '/images/sobre-mi/ofrezco.webp',
      imagePosition: 'left' as const,
      overlay: true,
      customClass: 'relative bg-cover bg-center',
      textWhite: true
    },
    {
      id: 'resumen',
      title: 'En resumen',
      content: [
        'Soy César Reyes Jaramillo, tengo 47 años, y en todo este tiempo he tenido solo dos trabajos fijos.',
        'Sé lo que es emprender, madrugar, trabajar hasta las seis de la mañana y volver a empezar.',
        'Soy Ingeniero Comercial, graduado en la Universidad Nacional de Loja (2001), con especialización en Marketing y SEO (2020).',
        'Después de más de dos décadas entre empresas, campo y estrategia digital, descubrí algo esencial:',
        'Una empresa crece al mismo ritmo que crece la persona que la lidera.',
        'Por eso, mi trabajo no solo trata de SEO o páginas web. Trata de personas que deciden crecer y necesitan una guía que entienda su contexto, su ritmo y su propósito.'
      ],
      bgColor: 'dark',
      isDark: true
    }
  ]
};

export default function SobremiClientWrapper() {
  return (
    <>
      <TransparentHeader />
      
      <main>
        <HeroSection 
          title={pageContent.hero.title}
          subtitle={pageContent.hero.subtitle}
          description={pageContent.hero.description}
          cta={pageContent.hero.cta}
          ctaLink={pageContent.hero.ctaLink}
        />

        {pageContent.sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            image={section.image}
            imagePosition={section.imagePosition}
            bgColor={section.bgColor || 'white'}
            isDark={section.isDark || false}
            fullWidth={section.fullWidth || false}
            overlay={section.overlay || false}
            hasCta={section.hasCta || false}
            cta={section.cta}
            ctaLink={section.ctaLink}
            index={index}
          />
        ))}
      </main>
    </>
  );
}

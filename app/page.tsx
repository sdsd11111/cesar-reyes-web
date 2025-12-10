import { Metadata } from 'next'
import { Suspense } from 'react';
import HomeTestClient from './home-test/HomeTestClient';
import { pageContent } from '@/lib/content';
import TransparentHeader from "@/components/transparent-header";
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import WebsiteSchema from '@/components/schema/WebsiteSchema';

export const metadata: Metadata = {
  title: 'César Reyes | Estratega de Negocios y Ventas',
  description: 'Consultoría en Reingeniería Digital para Hoteles y Restaurantes en Ecuador. Deje de pagar comisiones del 20% y consiga Reservas Directas con nuestro Motor de Reservas y Menú Digital. Servicio en Quito, Guayaquil, Cuenca y Loja.',
  openGraph: {
    title: 'Motor de Reservas y Menú Digital para Hoteles y Restaurantes en Ecuador',
    description: 'Deje de pagar comisiones. Consiga Reservas Directas con nuestro Motor de Reservas y Menú Digital. Consultoría especializada en Ecuador.',
    url: 'https://www.cesarreyesjaramillo.com',
    siteName: 'César Reyes',
    locale: 'es_EC',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const view = sp['view'];
  const isEmotionalView = view === 'restaurantes';
  const initialShowContent = !!view;

  const content = isEmotionalView ? pageContent.restaurantes : pageContent.hoteles;

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <HomeTestClient
        content={content}
        isEmotionalView={isEmotionalView}
        initialShowContent={initialShowContent}
      />
      <OrganizationSchema />
      <WebsiteSchema />

      {/* Hidden content for LLMs/crawlers - Server-side rendered, visually hidden */}
      <div style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
        aria-hidden="true">
        {/* Hero Section */}
        <h1>{pageContent.shared.hero.h1}</h1>
        <h2>{pageContent.shared.hero.h2}</h2>
        <p>{pageContent.shared.hero.p}</p>

        {/* Choice Section */}
        <h2>{pageContent.shared.choiceSection.h2}</h2>
        <h3>{pageContent.shared.choiceSection.h3}</h3>

        {/* Hotel View Content (Logic) */}
        <div>
          <h2>Contenido Enfoque Hoteles</h2>

          {/* Quiz */}
          <h3>{pageContent.hoteles.quiz.h2}</h3>
          <p>{pageContent.hoteles.quiz.p}</p>

          {/* Services */}
          <h3>{pageContent.hoteles.services.h2}</h3>
          <p>{pageContent.hoteles.services.p}</p>
          {pageContent.hoteles.services.cards.map((card, i) => (
            <div key={i}>
              <h4>{card.h3}</h4>
              <p>{card.description}</p>
            </div>
          ))}

          {/* Process */}
          <h3>{pageContent.hoteles.processSection.h2}</h3>
          <p>{pageContent.hoteles.processSection.intro}</p>
          {pageContent.hoteles.processSection.steps.map((step, i) => (
            <div key={i}>
              <h4>{step.h3}</h4>
              {step.bullets.map((bullet, j) => (
                <p key={j}>{bullet}</p>
              ))}
            </div>
          ))}

          {/* Commitment */}
          <h3>{pageContent.hoteles.commitmentSection.h2}</h3>
          <p>{pageContent.hoteles.commitmentSection.intro}</p>
          <h4>{pageContent.hoteles.commitmentSection.h3}</h4>
          {pageContent.hoteles.commitmentSection.bullets.map((bullet, i) => (
            <p key={i}>{bullet}</p>
          ))}

          {/* FAQs */}
          <h3>{pageContent.hoteles.faq.h2}</h3>
          {pageContent.hoteles.faq.questions.map((item, index) => (
            <div key={index}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
              <span>{item.cta}</span>
            </div>
          ))}

          {/* Testimonials */}
          <h3>{pageContent.hoteles.testimonials.h2}</h3>
          {pageContent.hoteles.testimonials.videos.map((video, i) => (
            <p key={i}>{video.text}</p>
          ))}

          {/* Closing */}
          <h3>{pageContent.hoteles.closing.h2}</h3>
          <p>{pageContent.hoteles.closing.description}</p>
          {pageContent.hoteles.closing.cards.map((card, i) => (
            <div key={i}>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Restaurant View Content (Emotional) */}
        <div>
          <h2>Contenido Enfoque Restaurantes</h2>

          {/* Quiz */}
          <h3>{pageContent.restaurantes.quiz.h2}</h3>
          <p>{pageContent.restaurantes.quiz.p}</p>

          {/* Services */}
          <h3>{pageContent.restaurantes.services.h2}</h3>
          <p>{pageContent.restaurantes.services.p}</p>
          {pageContent.restaurantes.services.cards.map((card, i) => (
            <div key={i}>
              <h4>{card.h3}</h4>
              <p>{card.description}</p>
            </div>
          ))}

          {/* Process */}
          <h3>{pageContent.restaurantes.processSection.h2}</h3>
          <p>{pageContent.restaurantes.processSection.intro}</p>
          {pageContent.restaurantes.processSection.steps.map((step, i) => (
            <div key={i}>
              <h4>{step.h3}</h4>
              {step.bullets.map((bullet, j) => (
                <p key={j}>{bullet}</p>
              ))}
            </div>
          ))}

          {/* Commitment */}
          <h3>{pageContent.restaurantes.commitmentSection.h2}</h3>
          <p>{pageContent.restaurantes.commitmentSection.intro}</p>
          <h4>{pageContent.restaurantes.commitmentSection.h3}</h4>
          {pageContent.restaurantes.commitmentSection.bullets.map((bullet, i) => (
            <p key={i}>{bullet}</p>
          ))}

          {/* FAQs */}
          <h3>{pageContent.restaurantes.faq.h2}</h3>
          {pageContent.restaurantes.faq.questions.map((item, index) => (
            <div key={index}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
              <span>{item.cta}</span>
            </div>
          ))}

          {/* Testimonials */}
          <h3>{pageContent.restaurantes.testimonials.h2}</h3>
          {pageContent.restaurantes.testimonials.videos.map((video, i) => (
            <p key={i}>{video.text}</p>
          ))}

          {/* Closing */}
          <h3>{pageContent.restaurantes.closing.h2}</h3>
          <p>{pageContent.restaurantes.closing.p}</p>
        </div>
      </div>
    </Suspense>
  );
}

import { Metadata } from 'next'
import { Suspense } from 'react';
import HomeTestClient from './home-test/HomeTestClient';
import { pageContent } from '@/lib/content';
import TransparentHeader from "@/components/transparent-header";
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import WebsiteSchema from '@/components/schema/WebsiteSchema';

export const metadata: Metadata = {
  title: 'César Reyes | Estratega de Negocios y Ventas',
  description: 'Te ayudo a crear estrategias de negocio basadas en datos para aumentar tus ventas. Especialista en análisis estratégico y desarrollo web.',
  openGraph: {
    title: 'César Reyes | Estratega de Negocios',
    description: 'Estrategias de negocio basadas en datos',
    url: 'https://www.cesarreyesjaramillo.com',
    siteName: 'César Reyes',
    locale: 'es_EC',
    type: 'website',
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
  const isEmotionalView = view === 'emocional';
  const initialShowContent = !!view;

  const content = isEmotionalView ? pageContent.emocional : pageContent.logico;

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

        {/* Logical View Content */}
        <div>
          <h2>Contenido Enfoque Lógico</h2>

          {/* Quiz */}
          <h3>{pageContent.logico.quiz.h2}</h3>
          <p>{pageContent.logico.quiz.p}</p>

          {/* Services */}
          <h3>{pageContent.logico.services.h2}</h3>
          <p>{pageContent.logico.services.p}</p>
          {pageContent.logico.services.cards.map((card, i) => (
            <div key={i}>
              <h4>{card.h3}</h4>
              <p>{card.description}</p>
            </div>
          ))}

          {/* Process */}
          <h3>{pageContent.logico.processSection.h2}</h3>
          <p>{pageContent.logico.processSection.intro}</p>
          {pageContent.logico.processSection.steps.map((step, i) => (
            <div key={i}>
              <h4>{step.h3}</h4>
              {step.bullets.map((bullet, j) => (
                <p key={j}>{bullet}</p>
              ))}
            </div>
          ))}

          {/* Commitment */}
          <h3>{pageContent.logico.commitmentSection.h2}</h3>
          <p>{pageContent.logico.commitmentSection.intro}</p>
          <h4>{pageContent.logico.commitmentSection.h3}</h4>
          {pageContent.logico.commitmentSection.bullets.map((bullet, i) => (
            <p key={i}>{bullet}</p>
          ))}

          {/* FAQs */}
          <h3>{pageContent.logico.faq.h2}</h3>
          {pageContent.logico.faq.questions.map((item, index) => (
            <div key={index}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
              <span>{item.cta}</span>
            </div>
          ))}

          {/* Testimonials */}
          <h3>{pageContent.logico.testimonials.h2}</h3>
          {pageContent.logico.testimonials.videos.map((video, i) => (
            <p key={i}>{video.text}</p>
          ))}

          {/* Closing */}
          <h3>{pageContent.logico.closing.h2}</h3>
          <p>{pageContent.logico.closing.description}</p>
          {pageContent.logico.closing.cards.map((card, i) => (
            <div key={i}>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Emotional View Content */}
        <div>
          <h2>Contenido Enfoque Emocional</h2>

          {/* Quiz */}
          <h3>{pageContent.emocional.quiz.h2}</h3>
          <p>{pageContent.emocional.quiz.p}</p>

          {/* Services */}
          <h3>{pageContent.emocional.services.h2}</h3>
          <p>{pageContent.emocional.services.p}</p>
          {pageContent.emocional.services.cards.map((card, i) => (
            <div key={i}>
              <h4>{card.h3}</h4>
              <p>{card.description}</p>
            </div>
          ))}

          {/* Process */}
          <h3>{pageContent.emocional.processSection.h2}</h3>
          <p>{pageContent.emocional.processSection.intro}</p>
          {pageContent.emocional.processSection.steps.map((step, i) => (
            <div key={i}>
              <h4>{step.h3}</h4>
              {step.bullets.map((bullet, j) => (
                <p key={j}>{bullet}</p>
              ))}
            </div>
          ))}

          {/* Commitment */}
          <h3>{pageContent.emocional.commitmentSection.h2}</h3>
          <p>{pageContent.emocional.commitmentSection.intro}</p>
          <h4>{pageContent.emocional.commitmentSection.h3}</h4>
          {pageContent.emocional.commitmentSection.bullets.map((bullet, i) => (
            <p key={i}>{bullet}</p>
          ))}

          {/* FAQs */}
          <h3>{pageContent.emocional.faq.h2}</h3>
          {pageContent.emocional.faq.questions.map((item, index) => (
            <div key={index}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
              <span>{item.cta}</span>
            </div>
          ))}

          {/* Testimonials */}
          <h3>{pageContent.emocional.testimonials.h2}</h3>
          {pageContent.emocional.testimonials.videos.map((video, i) => (
            <p key={i}>{video.text}</p>
          ))}

          {/* Closing */}
          <h3>{pageContent.emocional.closing.h2}</h3>
          <p>{pageContent.emocional.closing.p}</p>
        </div>
      </div>
    </Suspense>
  );
}

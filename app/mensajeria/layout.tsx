import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sistema de Mensajería Automatizada | César Reyes',
  description: 'Optimiza la comunicación con tus pacientes mediante nuestro sistema de mensajería automatizada. Recordatorios de citas, seguimiento y más.',
  keywords: 'mensajería automatizada, recordatorios médicos, comunicación con pacientes, automatización médica',
};

export default function MensajeriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
} 
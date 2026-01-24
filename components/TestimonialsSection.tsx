'use client';

import TestimonialSlider from '@/components/testimonial-slider';

export default function TestimonialsSection() {
    return (
        <section id="testimonios" className="w-full py-20 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lo que Dicen Nuestros Clientes en Ecuador</h2>
                    <p className="text-lg text-gray-600">Empresas y profesionales que confiaron en mi consultoría con 25 años de experiencia y midieron resultados reales en sus microempresas.</p>
                </div>
                <TestimonialSlider />
            </div>
        </section>
    );
}

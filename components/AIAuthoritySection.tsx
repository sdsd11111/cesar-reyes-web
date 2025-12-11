'use client';

import { useState } from 'react';

interface AIAuthoritySectionProps {
    sector?: 'hoteles' | 'restaurantes';
}

export default function AIAuthoritySection({ sector = 'hoteles' }: AIAuthoritySectionProps) {
    const [activeTab, setActiveTab] = useState<'problema' | 'estadisticas' | 'solucion'>('problema');

    const hotelTabs = [
        { id: 'problema' as const, label: 'El Problema', icon: '⚠️' },
        { id: 'estadisticas' as const, label: 'Las Estadísticas', icon: '💎' },
        { id: 'solucion' as const, label: 'La Solución', icon: '🚀' }
    ];

    const restaurantTabs = [
        { id: 'problema' as const, label: 'La Nueva Ruta', icon: '🗺️' },
        { id: 'estadisticas' as const, label: 'Evidencia', icon: '📊' },
        { id: 'solucion' as const, label: 'Tu Activo', icon: '💎' }
    ];

    const currentTabs = sector === 'restaurantes' ? restaurantTabs : hotelTabs;

    return (
        <section className="w-full py-20 border-t border-b border-gray-800 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/ia-image-movil.webp')] md:bg-[url('/images/ia-image.webp')]"
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 shadow-sm">
                            <span className="text-blue-200 font-semibold text-xs uppercase tracking-wider">
                                {sector === 'restaurantes' ? 'Nueva Frecuencia de Pedidos (PEEC)' : 'Nueva Era Digital'}
                            </span>
                        </div>

                        {sector === 'restaurantes' ? (
                            <>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    La Nueva Ruta: Usar IA para Aumentar el <span className="text-blue-400">25% la Frecuencia</span>
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Sin depender del Delivery, tus clientes deben ser tuyos.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                                    La IA Ya Decide{' '}
                                    <span className="text-blue-400 block sm:inline drop-shadow-none">
                                        Dónde Se Hospedan Tus Clientes
                                    </span>
                                </h2>
                                <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                    ChatGPT no es solo un asistente. Es el <strong className="text-blue-400">nuevo Booking</strong> para millones de viajeros.
                                </p>
                            </>
                        )}
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {currentTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 ${activeTab === tab.id
                                    ? 'bg-[#121212] text-white shadow-2xl transform -translate-y-1 ring-4 ring-gray-100'
                                    : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 hover:text-gray-900 hover:border-gray-300'
                                    }`}
                            >
                                <span className="text-2xl">{tab.icon}</span>
                                <span>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#121212] rotate-45"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 min-h-[400px]">
                        {/* ----------------- RESTAURANT CONTENT ----------------- */}
                        {sector === 'restaurantes' && (
                            <>
                                {activeTab === 'problema' && (
                                    <div className="animate-fadeIn">
                                        <div className="grid md:grid-cols-2 gap-8 items-center">
                                            <div>
                                                <h3 className="text-3xl font-bold text-gray-900 mb-6">El fin del Delivery como único canal</h3>
                                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                                    Durante años, los restaurantes han entregado su margen y sus datos a las apps. La IA cambia las reglas del juego.
                                                </p>
                                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                                                    <p className="text-blue-900 font-medium">
                                                        "Lo más importante no es solo vender, es que la IA aprenda quién compra para venderle de nuevo sin pagar comisión."
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-[#121212] p-8 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                                            <span className="text-red-500 font-bold text-xl">-30%</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-white font-bold">Comisiones Apps</h4>
                                                            <p className="text-gray-400 text-sm">Margen perdido por pedido</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                                            <span className="text-green-500 font-bold text-xl">+25%</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-white font-bold">Frecuencia IA</h4>
                                                            <p className="text-gray-400 text-sm">Con ofertas personalizadas</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'estadisticas' && (
                                    <div className="animate-fadeIn">
                                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">La Evidencia es Clara</h3>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-[#121212] rounded-2xl p-8 border border-gray-800 relative overflow-hidden group hover:border-blue-600 transition-colors">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    <svg className="w-32 h-32 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                </div>
                                                <div className="relative z-10">
                                                    <div className="text-5xl font-bold text-white mb-2">50%</div>
                                                    <p className="text-gray-400 text-lg">de interacciones con restaurantes serán vía IA para 2025</p>
                                                </div>
                                            </div>
                                            <div className="bg-[#121212] rounded-2xl p-8 border border-gray-800 relative overflow-hidden group hover:border-green-600 transition-colors">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    <svg className="w-32 h-32 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M5 4h14v12H5z" /></svg>
                                                </div>
                                                <div className="relative z-10">
                                                    <div className="text-5xl font-bold text-white mb-2">+25%</div>
                                                    <p className="text-gray-400 text-lg">aumento en frecuencia de pedidos con algoritmos propios</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-700">
                                            <p className="text-gray-700 text-center text-lg">
                                                <strong className="text-blue-800">Dato Clave:</strong> Las ofertas personalizadas impulsadas por algoritmos generan un aumento directo en la frecuencia de pedidos.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'solucion' && (
                                    <div className="animate-fadeIn">
                                        <div className="text-center mb-10">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Menú Digital Dinámico</h3>
                                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                                No es un PDF. Es un sistema vivo que se alimenta de la data de tus clientes para vender más.
                                            </p>
                                        </div>

                                        <div className="bg-[#121212] rounded-2xl p-8 md:p-12 relative overflow-hidden text-center md:text-left shadow-2xl">
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                                                <div className="flex-1">
                                                    <h4 className="text-2xl font-bold text-white mb-4">Tu Base de Datos = Tu Libertad</h4>
                                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                                        De esta manera, el sistema de pedidos se vuelve tu activo más rentable. Dejas de pagar el "impuesto revolucionario" de las apps y empiezas a construir un negocio real.
                                                    </p>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center text-gray-400">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                            Sin comisiones abusivas (30%)
                                                        </div>
                                                        <div className="flex items-center text-gray-400">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                            Control total de tus clientes
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="shrink-0">
                                                    <a
                                                        href="/MenuObjetivo"
                                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                                                    >
                                                        Descubre el Sistema
                                                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {/* ----------------- HOTEL CONTENT ----------------- */}
                        {sector !== 'restaurantes' && (
                            <>
                                {activeTab === 'problema' && (
                                    <div className="animate-fadeIn">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-[#121212] rounded-xl p-10 border border-gray-800 shadow-xl group hover:border-gray-700 transition-colors">
                                                <div className="flex flex-col h-full">
                                                    <div className="mb-6">
                                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-4">Invisibilidad Digital</h3>
                                                    <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                                                        Si tu motor de reservas no tiene la <span className="text-white font-medium">estructura de datos correcta</span>, las IAs no pueden recomendarte.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-[#121212] rounded-xl p-10 border border-gray-800 shadow-xl group hover:border-gray-700 transition-colors">
                                                <div className="flex flex-col h-full">
                                                    <div className="mb-6">
                                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-4">Pérdida de Ingresos</h3>
                                                    <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                                                        Cada día sin optimización IA, tu competencia <span className="text-white font-medium">captura clientes</span> que deberían ser tuyos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'estadisticas' && (
                                    <div className="animate-fadeIn">
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {[
                                                { value: '42%', label: 'de viajeros usan IA para decidir', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z' },
                                                { value: '+36%', label: 'mayor retención en sitios recomendados', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                                                { value: '2025', label: 'La IA dominará las búsquedas de viaje', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }
                                            ].map((stat, idx) => (
                                                <div key={idx} className="bg-[#121212] rounded-xl p-8 border border-gray-800 shadow-lg hover:border-gray-600 transition-all duration-300">
                                                    <div className="flex flex-col items-center text-center">
                                                        <div className="text-5xl font-bold text-white mb-4">{stat.value}</div>
                                                        <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                                                        <p className="text-gray-400 text-lg leading-snug">{stat.label}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-700">
                                            <p className="text-gray-700 text-center text-lg">
                                                <strong className="text-blue-800">Dato Clave:</strong> La confianza en asistentes IA ha superado a las OTAs tradicionales en el segmento de lujo.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'solucion' && (
                                    <div className="animate-fadeIn">
                                        <div className="text-center mb-10">
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                                Infraestructura Digital Invisible
                                            </h3>
                                            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                                                Preparamos tu hotel para ser la <strong className="text-blue-700">primera opción</strong> de la Inteligencia Artificial.
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                                            {[
                                                { title: 'Schema Markup Avanzado', desc: 'Tu hotel hablado en el idioma nativo de la IA.' },
                                                { title: 'Conectividad API en Tiempo Real', desc: 'Disponibilidad instantánea para agentes inteligentes.' },
                                                { title: 'Optimización de Entidades', desc: 'Maximizamos la autoridad semántica de tu marca.' },
                                                { title: 'Monitor de Recomendación IA', desc: 'Sabrás exactamente cómo te ven los algoritmos.' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="bg-[#121212] rounded-xl p-8 border border-gray-800 flex items-start gap-5 hover:border-blue-900 transition-colors">
                                                    <div className="mt-1">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="text-center">
                                            <a
                                                href="/motor-reservas-hotel"
                                                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow-xl shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1"
                                            >
                                                <span>Auditar Mi Visibilidad IA</span>
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Footer note */}
                    <p className="text-black text-sm text-center mt-8 italic">
                        <sup>1</sup> Análisis de tendencias PhoCusWright 2025
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }
            `}</style>
        </section>
    );
}

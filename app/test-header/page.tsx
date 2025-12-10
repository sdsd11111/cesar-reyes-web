import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu';

export default function TestHeaderPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans relative">
            <ModernSidebarMenu />

            {/* Hero Section */}
            <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-50 z-0"></div>
                {/* Placeholder for background image */}
                <div
                    className="absolute inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"
                />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Futuro Digital
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Explora nuestra nueva navegación lateral con estilo glassmorphism.
                    </p>
                    <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                        Descubrir Más
                    </button>
                </div>
            </section>

            {/* Simulando contenido largo para scroll */}
            <section className="py-24 px-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">¿Por qué Glassmorphism?</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <p>
                        El glassmorphism es una tendencia de diseño que utiliza la transparencia y el desenfoque de fondo
                        para crear un efecto similar al vidrio esmerilado. Esto añade profundidad y jerarquía visual
                        sin sobrecargar la interfaz.
                    </p>
                    <p>
                        En este menú, hemos aplicado un `backdrop-filter: blur(24px)` combinado con una opacidad reducida
                        en el fondo negro (`bg-black/80`), lo que permite que el contexto de la página se mantenga visible
                        pero no intrusivo debajo de la navegación.
                    </p>
                    <div className="h-64 bg-gray-800/50 rounded-2xl p-8 my-12 border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white">Características del Menú</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Botón flotante "Sticky" o Fixed.</li>
                            <li>Animaciones de entrada suaves (Spring physics).</li>
                            <li>Submenús acordeón para mantener el orden.</li>
                            <li>Iconografía moderna (Lucide React).</li>
                        </ul>
                    </div>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <p key={i}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    ))}
                </div>
            </section>
        </div>
    );
}

"use client";

import { useSearchParams } from "next/navigation";
import PayPhoneBox from "@/components/PayPhoneBox";
import { Suspense } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

function PagoContent() {
    const searchParams = useSearchParams();
    const amount = parseFloat(searchParams.get("amount") || "0");
    const description = searchParams.get("description") || "Pago de Servicio";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-20">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white relative">
                    <Link
                        href="/"
                        className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-bold mb-2">Finalizar Pago</h1>
                        <p className="text-gray-400 text-sm">Transacción segura vía PayPhone</p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                        <div className="flex-1 pr-4">
                            <p className="text-sm text-gray-500 mb-1">Concepto</p>
                            <p className="font-semibold text-gray-900 truncate">{description}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">Total</p>
                            <p className="text-3xl font-black text-[#FF6B00]">
                                ${amount.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-xl flex items-start space-x-3">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-blue-700 leading-relaxed">
                                Al hacer clic en el botón, se abrirá el formulario seguro de PayPhone para ingresar los datos de tu tarjeta.
                            </p>
                        </div>

                        {/* PayPhone Integration */}
                        <div className="mt-8">
                            <PayPhoneBox
                                amount={amount}
                                description={description}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs">
                        <span>Pagos protegidos con encriptación SSL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PagoPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500 font-medium">
                Cargando pasarela de pago...
            </div>
        }>
            <PagoContent />
        </Suspense>
    );
}

"use client";

import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, XCircle, Home, RefreshCw } from "lucide-react";

interface PaymentResult {
    transactionStatus?: string;
    statusCode?: number;
    message?: string;
    amount?: number;
    transactionId?: number;
    clientTransactionId?: string;
}

async function verifyPayment(id: string, clientTransactionId: string): Promise<PaymentResult | null> {
    try {
        const response = await fetch('/api/payphone/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, clientTransactionId }),
            cache: 'no-store'
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { message: errorData.message || `Error ${response.status}` };
        }

        return await response.json();
    } catch (error: any) {
        console.error("Error calling verify API:", error);
        return { message: `Error de conexión: ${error.message}` };
    }
}

function PaymentResultContent() {
    const searchParams = useSearchParams();
    const [result, setResult] = useState<PaymentResult | null>(null);
    const [loading, setLoading] = useState(true);

    const id = searchParams.get('id');
    const clientTransactionId = searchParams.get('clientTransactionId');
    const status = searchParams.get('status');

    useEffect(() => {
        if (id && clientTransactionId) {
            verifyPayment(id, clientTransactionId).then((data) => {
                setResult(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [id, clientTransactionId]);

    const isApproved = result?.statusCode === 3 || result?.transactionStatus === "Approved";
    const isCancelled = result?.statusCode === 2 || status === "cancelled";

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <div className="text-gray-600">Cargando...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                {isApproved ? (
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <div className="bg-green-100 p-4 rounded-full">
                                <CheckCircle2 className="w-16 h-16 text-green-600" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 italic">¡Pago Exitoso!</h1>
                        <p className="text-gray-600">
                            Tu transacción ha sido procesada correctamente. Hemos recibido tu pago por
                            <span className="font-bold text-[#FF6B00]"> ${(result?.amount || 0) / 100}</span>.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-2xl text-left space-y-2 text-sm text-gray-500">
                            <p>ID Transacción: <span className="text-gray-900 font-mono">{result?.transactionId}</span></p>
                            <p>Referencia: <span className="text-gray-900">{clientTransactionId}</span></p>
                        </div>
                    </div>
                ) : isCancelled ? (
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <div className="bg-orange-100 p-4 rounded-full">
                                <XCircle className="w-16 h-16 text-orange-600" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 italic">Pago Cancelado</h1>
                        <p className="text-gray-600">
                            Has cancelado el proceso de pago. No se ha realizado ningún cargo a tu tarjeta.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <div className="bg-red-100 p-4 rounded-full animate-pulse">
                                <RefreshCw className="w-16 h-16 text-red-600" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 italic">Verificando...</h1>
                        <p className="text-gray-600 font-medium">
                            No pudimos confirmar el estado del pago automáticamente.
                        </p>
                        <p className="text-sm text-gray-500 italic">
                            A veces PayPhone tarda unos segundos en procesar. Por favor, intenta reiniciar la verificación o contáctanos si el cargo ya se hizo.
                        </p>
                        {result?.message && (
                            <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
                                <p className="text-red-600 text-xs font-mono break-words">{result.message}</p>
                            </div>
                        )}

                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    setLoading(true);
                                    if (id && clientTransactionId) {
                                        verifyPayment(id, clientTransactionId).then((data) => {
                                            setResult(data);
                                            setLoading(false);
                                        });
                                    }
                                }}
                                className="flex items-center justify-center space-x-2 w-full bg-[#FF6B00] text-white font-bold py-3 rounded-xl hover:bg-[#e56000] transition-all shadow-md"
                            >
                                <RefreshCw className="w-5 h-5" />
                                <span>Reintentar Verificación</span>
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-8 space-y-4">
                    <Link
                        href="/"
                        className="flex items-center justify-center space-x-2 w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg"
                    >
                        <Home className="w-5 h-5" />
                        <span>Volver al Inicio</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function PaymentResultPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <div className="text-gray-600">Cargando...</div>
            </div>
        }>
            <PaymentResultContent />
        </Suspense>
    );
}

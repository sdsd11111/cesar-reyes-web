import Link from 'next/link';
import { Suspense } from 'react';

// This page receives the parameters from PayPhone upon redirection
// https://cesarreyesjaramillo.com/pago-resultado?id=XXX&clientTransactionId=YYY

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
    const token = process.env.PAYPHONE_TOKEN;
    if (!token) {
        console.error("PAYPHONE_TOKEN not found in environment variables");
        return null;
    }

    try {
        console.log(`Verifying PayPhone transaction: id=${id}, clientTransactionId=${clientTransactionId}`);

        const res = await fetch("https://pay.payphonetodoesposible.com/api/button/V2/Confirm", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: parseInt(id),
                clientTransactionId: clientTransactionId // Fixed field name
            })
        });

        const responseData = await res.json();

        if (!res.ok) {
            console.error("PayPhone Confirm API Error Details:", responseData);
            return {
                statusCode: res.status,
                message: responseData.message || "Error en la confirmación de PayPhone"
            };
        }

        return responseData;
    } catch (error: any) {
        console.error("Error verifying payment:", error);
        return {
            statusCode: 500,
            message: error.message || "Error interno al verificar el pago"
        };
    }
}

export default async function PaymentResultPage(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const searchParams = await props.searchParams;
    const id = searchParams.id as string;
    const clientTransactionId = searchParams.clientTransactionId as string;

    let result: PaymentResult | null = null;
    if (id && clientTransactionId) {
        result = await verifyPayment(id, clientTransactionId);
    }

    const isApproved = result?.statusCode === 3;
    const isCancelled = result?.statusCode === 2 || searchParams.status === "cancelled";

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
                        <p className="text-gray-600">
                            No pudimos confirmar el estado del pago automáticamente.
                            Si realizaste el pago, por favor contáctanos.
                        </p>
                        {result?.message && (
                            <p className="text-red-500 text-sm italic">{result.message}</p>
                        )}
                    </div>
                )}

                <div className="mt-12 space-y-4">
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

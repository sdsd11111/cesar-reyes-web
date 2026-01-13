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
    const rawToken = process.env.PAYPHONE_TOKEN;
    if (!rawToken) {
        console.error("PAYPHONE_TOKEN not found in environment variables");
        return { message: "Error de configuración: TOKEN no encontrado en el servidor (Vercel)." };
    }

    const token = rawToken.trim();

    // 1. Try Step 6: GET Sale status (The official recommendation)
    try {
        console.log(`Verifying Sale Status: id=${id}`);
        // We try the standard endpoint
        const saleRes = await fetch(`https://pay.payphonetodoesposible.com/api/Sale/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "Vercel-PayPhone-Integration"
            }
        });

        const saleText = await saleRes.text();
        console.log(`PayPhone Sale [${saleRes.status}] Response:`, saleText.substring(0, 100));

        if (saleRes.ok) {
            try {
                const saleData = JSON.parse(saleText);
                return {
                    statusCode: saleData.statusCode || 3,
                    transactionStatus: saleData.transactionStatus,
                    amount: saleData.amount,
                    transactionId: saleData.transactionId,
                    clientTransactionId: clientTransactionId
                };
            } catch (e) {
                console.error("Failed to parse Sale JSON");
            }
        } else if (saleRes.status === 403 || saleRes.status === 401) {
            return { message: `Error de Autenticación (${saleRes.status}): Revisa el TOKEN en Vercel.` };
        }
    } catch (e) {
        console.error("Error checking Sale status:", e);
    }

    // 2. Fallback: POST Confirm (Step 5 logic)
    try {
        console.log(`Attempting POST Confirm: id=${id}`);
        const confirmRes = await fetch("https://pay.payphonetodoesposible.com/api/button/V2/Confirm", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "Vercel-PayPhone-Integration"
            },
            body: JSON.stringify({
                id: parseInt(id),
                clientTransactionId: clientTransactionId
            })
        });

        const confirmText = await confirmRes.text();
        console.log(`PayPhone Confirm [${confirmRes.status}] Response:`, confirmText.substring(0, 100));

        try {
            const confirmData = JSON.parse(confirmText);
            return confirmData;
        } catch (e) {
            return {
                message: `Respuesta [${confirmRes.status}]: ${confirmText.includes('<!DOCTYPE') ? 'HTML Error (Posible bloqueo de PayPhone)' : confirmText.substring(0, 50)}`
            };
        }
    } catch (error: any) {
        console.error("Error in confirmation flow:", error);
        return {
            message: `Error de conexión: ${error.message}`
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

    // Status 3 is Approved in PayPhone Business
    const isApproved = result?.statusCode === 3 || result?.transactionStatus === "Approved";
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

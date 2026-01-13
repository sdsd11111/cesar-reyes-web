"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

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
        return { message: "Error: TOKEN no configurado en Vercel." };
    }

    // Wait 2 seconds to allow PayPhone to finish processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    let token = rawToken.trim();
    if (token.toLowerCase().startsWith("bearer ")) {
        token = token.substring(7).trim();
    }

    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Vercel-PayPhone-Integration",
        "Referer": "https://cesarreyesjaramillo.com/"
    };

    // 1. Try Step 6: GET Sale status
    const endpoints = [
        `https://pay.payphonetodoesposible.com/api/Sale/${id}`,
        `https://pay.payphonetodoesposible.com/api/v2/Sale/${id}`
    ];

    for (const url of endpoints) {
        try {
            console.log(`Verifying Sale Status: ${url}`);
            const saleRes = await fetch(url, {
                method: "GET",
                headers,
                cache: 'no-store'
            });

            const saleText = await saleRes.text();
            console.log(`PayPhone Sale [${saleRes.status}] Response:`, saleText.substring(0, 150));

            if (saleRes.ok) {
                try {
                    const saleData = JSON.parse(saleText);
                    // Convert statusCode to number if it's a string, or default to 3 if transactionStatus is Approved
                    const statusCode = saleData.statusCode ? parseInt(saleData.statusCode.toString()) : (saleData.transactionStatus === "Approved" ? 3 : 0);
                    return {
                        statusCode,
                        transactionStatus: saleData.transactionStatus,
                        amount: saleData.amount,
                        transactionId: saleData.transactionId,
                        clientTransactionId: clientTransactionId
                    };
                } catch (e) {
                    console.error("Failed to parse Sale JSON");
                }
            }
        } catch (e) {
            console.error(`Error checking Sale status at ${url}:`, e);
        }
    }

    // 2. Fallback: POST Confirm
    try {
        console.log(`Attempting POST Confirm: id=${id}`);
        const confirmRes = await fetch("https://pay.payphonetodoesposible.com/api/button/V2/Confirm", {
            method: "POST",
            headers,
            body: JSON.stringify({
                id: parseInt(id),
                clientTransactionId: clientTransactionId
            }),
            cache: 'no-store'
        });

        const confirmText = await confirmRes.text();
        console.log(`PayPhone Confirm [${confirmRes.status}] Response:`, confirmText.substring(0, 150));

        try {
            const confirmData = JSON.parse(confirmText);
            const statusCode = confirmData.statusCode ? parseInt(confirmData.statusCode.toString()) : (confirmData.transactionStatus === "Approved" ? 3 : 0);
            return { ...confirmData, statusCode };
        } catch (e) {
            return {
                message: `Respuesta [${confirmRes.status}]: ${confirmText.includes('<!DOCTYPE') ? confirmText.substring(0, 300).replace(/<[^>]*>?/gm, '') : confirmText.substring(0, 100)}`
            };
        }
    } catch (error: any) {
        console.error("Error in confirmation flow:", error);
        return { message: `Error de conexión: ${error.message}` };
    }
}

export default function PaymentResultPage() {
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

    // Status 3 is Approved in PayPhone Business
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
                            A veces PayPhone tarda unos segundos en procesar. Por favor, intenta reincidir la verificación o contáctanos si el cargo ya se hizo.
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

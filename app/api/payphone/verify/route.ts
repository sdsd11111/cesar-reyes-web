import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface PaymentResult {
    transactionStatus?: string;
    statusCode?: number;
    message?: string;
    amount?: number;
    transactionId?: number;
    clientTransactionId?: string;
}

export async function POST(request: NextRequest) {
    try {
        const { id, clientTransactionId } = await request.json();

        if (!id || !clientTransactionId) {
            return NextResponse.json(
                { message: "Parámetros faltantes: id y clientTransactionId son requeridos" },
                { status: 400 }
            );
        }

        const rawToken = process.env.PAYPHONE_TOKEN;
        if (!rawToken) {
            console.error("PAYPHONE_TOKEN not found in environment variables");
            return NextResponse.json(
                { message: "Error: TOKEN no configurado en Vercel." },
                { status: 500 }
            );
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
                        const statusCode = saleData.statusCode ? parseInt(saleData.statusCode.toString()) : (saleData.transactionStatus === "Approved" ? 3 : 0);
                        const result: PaymentResult = {
                            statusCode,
                            transactionStatus: saleData.transactionStatus,
                            amount: saleData.amount,
                            transactionId: saleData.transactionId,
                            clientTransactionId: clientTransactionId
                        };
                        return NextResponse.json(result);
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
                return NextResponse.json({ ...confirmData, statusCode });
            } catch (e) {
                return NextResponse.json({
                    message: `Respuesta [${confirmRes.status}]: ${confirmText.includes('<!DOCTYPE') ? confirmText.substring(0, 300).replace(/<[^>]*>?/gm, '') : confirmText.substring(0, 100)}`
                });
            }
        } catch (error: any) {
            console.error("Error in confirmation flow:", error);
            return NextResponse.json(
                { message: `Error de conexión: ${error.message}` },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error("Error in verify endpoint:", error);
        return NextResponse.json(
            { message: `Error del servidor: ${error.message}` },
            { status: 500 }
        );
    }
}

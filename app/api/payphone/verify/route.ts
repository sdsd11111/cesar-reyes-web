import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

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

        // Use ONLY POST /api/button/V2/Confirm as recommended by PayPhone support
        try {
            console.log(`Attempting POST Confirm with axios: id=${id}`);

            const response = await axios.post(
                "https://pay.payphonetodoesposible.com/api/button/V2/Confirm",
                {
                    id: parseInt(id),
                    clientTransactionId: clientTransactionId,
                    clientTxId: clientTransactionId // Add this to match PayPhone support screenshot
                },
                {
                    headers,
                    timeout: 30000, // 30 second timeout
                    validateStatus: () => true // Don't throw on any status
                }
            );

            console.log(`PayPhone Confirm [${response.status}] Response:`, JSON.stringify(response.data).substring(0, 200));

            // Check if response is successful
            if (response.status >= 200 && response.status < 300 && response.data) {
                const confirmData = response.data;
                const statusCode = confirmData.statusCode
                    ? parseInt(confirmData.statusCode.toString())
                    : (confirmData.transactionStatus === "Approved" ? 3 : 0);

                return NextResponse.json({
                    ...confirmData,
                    statusCode
                });
            }

            // Handle error responses
            if (typeof response.data === 'string' && response.data.includes('<!DOCTYPE')) {
                // HTML error page
                return NextResponse.json({
                    message: `Error ${response.status}: PayPhone devolvió una página HTML. Verifica configuración de cuenta.`
                }, { status: response.status });
            }

            return NextResponse.json({
                message: response.data?.message || `Error ${response.status} de PayPhone`
            }, { status: response.status });

        } catch (error: any) {
            console.error("Error in axios confirmation:", error);

            if (error.code === 'ECONNABORTED') {
                return NextResponse.json(
                    { message: "Timeout: PayPhone no respondió a tiempo" },
                    { status: 504 }
                );
            }

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

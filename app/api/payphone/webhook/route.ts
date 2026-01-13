import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Log the notification for debugging in Vercel
        console.log("--- PAYPHONE WEBHOOK RECEIVED ---");
        console.log(JSON.stringify(body, null, 2));

        // In a real production app, here is where you would update 
        // a database (like Supabase) to mark the payment as completed.
        // For now, logging ensures we see the interaction in Vercel.

        return NextResponse.json({
            message: "Notificación recibida correctamente",
            received: true
        });
    } catch (error: any) {
        console.error("PayPhone Webhook Error:", error);
        return NextResponse.json({
            error: "Error al procesar el webhook",
            details: error.message
        }, { status: 400 });
    }
}

"use server";

import { v4 as uuidv4 } from "uuid";

interface PaymentRequest {
    amount: number; // In cents (e.g., $10.00 = 1000)
    amountWithoutTax: number; // In cents
    tax: number; // In cents
    clientTransactionId: string;
    responseUrl?: string;
    cancellationUrl?: string;
}

interface PayPhoneResponse {
    paymentId: string;
    url: string; // The URL to redirect the user to
}

export async function createPaymentLink(
    amount: number, // In dollars (e.g., 10.50)
    description: string = "Cobro de Servicios Profesionales"
): Promise<string> { // Returns the URL
    const token = process.env.PAYPHONE_TOKEN;
    const storeId = process.env.PAYPHONE_STORE_ID;
    const responseUrl = process.env.PAYPHONE_RESPONSE_URL;

    if (!token || !storeId) {
        throw new Error("PayPhone configuration missing (TOKEN or STORE_ID)");
    }

    // Convert to integer cents (PayPhone typically expects integers * 100 for USD)
    // Assuming 12% tax or 0% tax? Let's assume 0% tax for "Servicios Profesionales" often,
    // OR calculated.
    // Ideally, we pass the full breakup. For simplicity: 
    // We will assume 'amount' is the total to pay.
    // We will put everything in 'amountWithoutTax' (0% VAT) for now, or split if needed.
    // Let's assume 0% VAT for services to start, or configurable.

    const amountInCents = Math.round(amount * 100);
    // Example: 100% is taxable base 0%?

    const payload = {
        amount: amountInCents,
        amountWithoutTax: amountInCents,
        amountWithTax: 0,
        tax: 0,
        currency: "USD",
        clientTransactionId: uuidv4(),
        responseUrl: responseUrl || undefined,
        cancellationUrl: responseUrl || undefined,
        reference: description,
    };

    try {
        const res = await fetch("https://pay.payphonetodoesposible.com/api/Links", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("PayPhone API Error:", errorData);
            throw new Error(`PayPhone Error: ${res.statusText}`);
        }

        const data: PayPhoneResponse = await res.json();
        console.log("PayPhone Link Created:", data.url);

        return data.url;
    } catch (error) {
        console.error("Error creating PayPhone link:", error);
        throw error;
    }
}

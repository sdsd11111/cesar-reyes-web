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
    const token = process.env.PAYPHONE_TOKEN?.trim();
    const storeId = process.env.PAYPHONE_STORE_ID?.trim();
    const responseUrl = process.env.PAYPHONE_RESPONSE_URL?.trim();

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

    // Generate a unique 12-char string, leaving room for 'tx' prefix (total 14-15 chars)
    // Date.now() is 13 chars. We can use last 8 chars of timestamp + 4 random chars
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const transactionId = `tx${timestamp}${random}`; // tx + 8 + 4 = 14 chars (safe)

    // Restore missing calculation
    const amountInCents = Math.floor(amount * 100);

    const payload = {
        amount: amountInCents,
        amountWithoutTax: amountInCents,
        amountWithTax: 0,
        tax: 0,
        service: 0,
        tip: 0,
        currency: "USD",
        clientTransactionId: transactionId,
        responseUrl: responseUrl || "http://localhost:3000", // Fallback if env missing
        cancellationUrl: responseUrl || "http://localhost:3000",
        reference: description.substring(0, 100), // Max 100 chars
        additionalData: description.substring(0, 250), // Max 250 chars
        storeId: storeId,
        oneTime: true,
        expireIn: 0,
        isAmountEditable: false
    };

    console.log("PayPhone Request Payload:", JSON.stringify(payload, null, 2));
    console.log("PayPhone Request Headers:", {
        "Authorization": `Bearer ${token?.substring(0, 10)}...`,
        "Content-Type": "application/json",
        "Accept": "application/json"
    });

    try {
        const res = await fetch("https://pay.payphonetodoesposible.com/api/Links", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`PayPhone API Error [${res.status}]:`, errorText);

            try {
                const errorData = JSON.parse(errorText);
                console.error("Parsed Error Data:", errorData);
            } catch (e) {
                console.error("Could not parse error response as JSON");
            }

            throw new Error(`PayPhone Error: ${res.status} ${res.statusText} - ${errorText.substring(0, 100)}...`);
        }

        const data: PayPhoneResponse = await res.json();
        console.log("PayPhone Link Created:", data.url);

        return data.url;
    } catch (error) {
        console.error("Error creating PayPhone link:", error);
        throw error;
    }
}

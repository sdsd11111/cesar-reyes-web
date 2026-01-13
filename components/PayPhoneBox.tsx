"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface PayPhoneBoxProps {
    amount: number; // In dollars (e.g., 700.00)
    description: string;
    className?: string;
}

declare global {
    interface Window {
        PPaymentButtonBox: any;
    }
}

export default function PayPhoneBox({ amount, description, className }: PayPhoneBoxProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerId = "pp-button"; // Unified ID as per docs

    useEffect(() => {
        if (isLoaded && window.PPaymentButtonBox) {
            const amountInCents = Math.floor(amount * 100);
            const transactionId = `tx${Date.now().toString().slice(-13)}`;

            try {
                // Using the exact structure from the provided docs
                const ppb = new window.PPaymentButtonBox({
                    token: process.env.NEXT_PUBLIC_PAYPHONE_TOKEN,
                    clientTransactionId: transactionId,
                    amount: amountInCents,
                    amountWithoutTax: amountInCents,
                    amountWithTax: 0,
                    tax: 0,
                    service: 0,
                    tip: 0,
                    currency: "USD",
                    storeId: process.env.NEXT_PUBLIC_PAYPHONE_STORE_ID,
                    reference: description.substring(0, 50), // Safe length
                    lang: "es",
                    defaultMethod: "card"
                });

                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = ""; // Clear
                    ppb.render(containerId);
                }
            } catch (error) {
                console.error("PayPhone Initialization Error:", error);
            }
        }
    }, [isLoaded, amount, description]);

    return (
        <div className={className}>
            {/* Referrer-Policy fix mentioned in docs to allow domain verification */}
            <meta name="referrer" content="origin" />

            <link
                rel="stylesheet"
                href="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.css"
            />
            <Script
                src="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.js"
                type="module"
                onLoad={() => setIsLoaded(true)}
            />
            <div id={containerId} className="flex justify-center min-h-[60px]">
                {!isLoaded && (
                    <div className="animate-pulse bg-gray-100 h-14 w-full rounded-xl flex items-center justify-center text-gray-400 text-sm italic">
                        Preparando pasarela segura...
                    </div>
                )}
            </div>
        </div>
    );
}

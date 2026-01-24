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
    const containerId = "pp-button";

    useEffect(() => {
        // Proactive check: If the script is already there and global object exists
        if (window.PPaymentButtonBox) {
            setIsLoaded(true);
        }

        let timeoutId: NodeJS.Timeout;

        const initPayPhone = (retryCount = 0) => {
            if (window.PPaymentButtonBox) {
                const amountInCents = Math.round(amount * 100);
                const transactionId = `tx${Date.now().toString().slice(-13)}`;

                try {
                    console.log("PayPhone Rendering:", { amountInCents, transactionId });

                    const ppb = new window.PPaymentButtonBox({
                        token: process.env.NEXT_PUBLIC_PAYPHONE_TOKEN,
                        integrationType: "web",
                        clientTransactionId: transactionId,
                        amount: amountInCents,
                        amountWithoutTax: amountInCents,
                        amountWithTax: 0,
                        tax: 0,
                        service: 0,
                        tip: 0,
                        currency: "USD",
                        storeId: process.env.NEXT_PUBLIC_PAYPHONE_STORE_ID,
                        reference: description.substring(0, 50),
                        lang: "es",
                        defaultMethod: "card"
                    });

                    const container = document.getElementById(containerId);
                    if (container) {
                        container.innerHTML = "";
                        ppb.render(containerId);
                    }
                } catch (error) {
                    console.error("PayPhone Render Error:", error);
                }
            } else if (retryCount < 20) {
                // Retry every 250ms for up to 5 seconds
                timeoutId = setTimeout(() => initPayPhone(retryCount + 1), 250);
            } else {
                console.error("PayPhone SDK: window.PPaymentButtonBox not found after retries.");
            }
        };

        if (isLoaded) {
            initPayPhone();
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isLoaded, amount, description]);

    return (
        <div className={className}>
            <meta name="referrer" content="origin" />
            <link
                rel="stylesheet"
                href="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.css"
            />
            <Script
                src="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.js"
                type="module"
                crossOrigin="anonymous"
                onLoad={() => {
                    console.log("PayPhone Script Loaded");
                    setIsLoaded(true);
                }}
            />
            <div id={containerId} className="flex justify-center min-h-[60px] w-full">
                {!isLoaded && (
                    <div className="animate-pulse bg-gray-100 h-14 w-full rounded-xl flex items-center justify-center text-gray-400 text-sm italic">
                        Preparando pasarela segura...
                    </div>
                )}
            </div>
        </div>
    );
}

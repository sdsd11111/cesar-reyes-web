"use client";

import { useState } from "react";
import { createPaymentLink } from "@/lib/payphone";

interface PayPhoneButtonProps {
    amount: number;
    description?: string;
    className?: string; // Allow custom styling
    label?: string; // Custom button text
}

export default function PayPhoneButton({ amount, description, className, label }: PayPhoneButtonProps) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            // Call the server action
            const url = await createPaymentLink(amount, description);

            // Redirect to PayPhone
            if (url) {
                window.location.href = url;
            } else {
                alert("Error al generar el link de pago.");
            }
        } catch (error) {
            console.error(error);
            alert("Hubo un error al conectar con la pasarela de pagos. Por favor intenta más tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {loading ? "Procesando..." : (label || `Pagar $${amount.toFixed(2)}`)}
        </button>
    );
}

import Link from 'next/link';
import { Suspense } from 'react';

// This page receives the parameters from PayPhone upon redirection
// https://cesarreyesjaramillo.com/pago-resultado?id=XXX&clientTransactionId=YYY

export default async function PaymentResultPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { id, clientTransactionId } = await searchParams;

    const isSuccess = Boolean(id); // If 'id' is present, we assume the payment flow was completed/attempted.
    // Ideally, we should verify the status with the backend using this ID.

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
                {isSuccess ? (
                    <>
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold mb-2 text-gray-900">¡Pago Exitoso!</h1>
                        <p className="text-gray-600 mb-6">
                            Tu transacción se ha procesado correctamente.
                            <br />
                            <span className="text-xs text-gray-400 mt-2 block font-mono">ID Transacción: {id}</span>
                        </p>
                    </>
                ) : (
                    <>
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold mb-2 text-gray-900">Pago No Completado</h1>
                        <p className="text-gray-600 mb-6">
                            Hubo un problema o cancelaste la operación. Inténtalo de nuevo.
                        </p>
                    </>
                )}

                <Link
                    href="/"
                    className="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
}

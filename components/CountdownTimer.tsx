'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        // Target date: February 14, 2026, at 00:00:00
        const targetDate = new Date('2026-02-14T00:00:00').getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return null;

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            <div className="relative">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-lg"></div>

                {/* Digital Segment look */}
                <div className="relative bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[100px] shadow-[0_0_15px_rgba(231,140,35,0.2)]">
                    <span className="text-2xl md:text-5xl font-mono font-bold tracking-tighter text-orange-500 drop-shadow-[0_0_8px_rgba(231,140,35,0.8)]">
                        {value.toString().padStart(2, '0')}
                    </span>
                </div>
            </div>
            <span className="mt-2 text-[9px] md:text-xs uppercase tracking-[0.2em] font-light text-orange-400/80">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex items-center justify-center my-8 select-none">
            <TimeUnit value={timeLeft.days} label="días" />
            <div className="text-2xl md:text-4xl font-mono text-orange-500 pb-6 animate-pulse">:</div>
            <TimeUnit value={timeLeft.hours} label="horas" />
            <div className="text-2xl md:text-4xl font-mono text-orange-500 pb-6 animate-pulse">:</div>
            <TimeUnit value={timeLeft.minutes} label="minutos" />
            <div className="text-2xl md:text-4xl font-mono text-orange-500 pb-6 animate-pulse">:</div>
            <TimeUnit value={timeLeft.seconds} label="segundos" />
        </div>
    );
}

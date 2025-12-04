'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FaqItem {
    q: string;
    a: string;
    cta: string;
}

interface FaqAccordionProps {
    questions: FaqItem[];
}

export function FaqAccordion({ questions }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full space-y-4">
            {questions.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Question - Always visible */}
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full text-left text-lg font-semibold px-6 py-4 hover:bg-gray-50 transition-colors flex items-center justify-between text-gray-900"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span>{item.q}</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {/* Answer - Visible to crawlers, hidden with CSS only */}
                        <div
                            id={`faq-answer-${index}`}
                            className={`px-6 bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 pt-0' : 'max-h-0'
                                }`}
                        >
                            {/* Content is ALWAYS in DOM - LLMs can read it */}
                            <div className="pt-2">
                                <p className="text-gray-800 mb-6 leading-relaxed">{item.a}</p>
                                <Button variant="outline">{item.cta}</Button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
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
    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {questions.map((item, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg bg-white overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow"
                >
                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-gray-900">
                        {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0 bg-white">
                        <p className="text-gray-800 mb-6 leading-relaxed">{item.a}</p>
                        <Button variant="outline">{item.cta}</Button>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

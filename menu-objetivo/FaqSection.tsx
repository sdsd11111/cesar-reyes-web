'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

interface FaqItem {
  q: string;
  a: string;
  cta: string;
}

interface FaqSectionProps {
  h2: string;
  questions: FaqItem[];
}

export function FaqSection({ h2, questions }: FaqSectionProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{h2}</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0 rounded-lg bg-gray-50 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-gray-700 mb-6 leading-relaxed">{item.a}</p>
                  <Button variant="outline">{item.cta}</Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

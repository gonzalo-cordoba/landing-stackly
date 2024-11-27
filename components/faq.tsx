"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Stackly and how does it work?",
    answer:
      "Finbase is a modern fintech infrastructure platform that helps integrate and manage financial data across multiple providers.",
  },
  {
    question: "Is Stackly suitable for my fintech?",
    answer:
      "Finbase is designed for fintech companies of all sizes that need to manage multiple banking providers and streamline their operations.",
  },
  {
    question: "Can I integrate Stackly with my bank and providers?",
    answer:
      "Yes, Stackly supports integration with major banking providers and financial institutions through our secure API infrastructure.",
  },
];

export function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl">
          FAQ
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className={cn(
                  "transition-all duration-700 transform border-b border-white/10",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12",
                  index === 1 && "delay-200",
                  index === 2 && "delay-400"
                )}
              >
                <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

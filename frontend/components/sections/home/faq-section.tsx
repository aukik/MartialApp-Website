"use client";

import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much time will Martial Apps actually save me?",
    answer: "Most dojo owners report spending 10-15 hours per week on admin tasks like attendance tracking, payment follow-ups, and scheduling. Martial Apps automates these workflows, giving you back your evenings and weekends. Our early testers estimate saving 8-12 hours weekly."
  },
  {
    question: "Will my students and parents actually use a new app?",
    answer: "Yes! The app is designed to be simpler than texting. Students check in with a single tap. Parents get automatic progress updates and receipts. We've made adoption as easy as possible—no training required."
  },
  {
    question: "What payment methods does Martial Apps support?",
    answer: "We support all major credit and debit cards, plus automated recurring billing. Set up monthly or per-term payments and let the system handle collection. No more awkward conversations about late fees."
  },
  {
    question: "Is my student data secure?",
    answer: "Absolutely. All data is hosted in Canada with bank-level encryption. We're PIPEDA compliant and never sell or share your data. You own your information, always."
  },
  {
    question: "When does Martial Apps launch, and how do I get early access?",
    answer: "We're launching in 2026. Join the waitlist now to get founding member pricing locked in for life, plus direct input on features before launch. Early adopters help shape the product."
  }
];

function FaqItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-crimson-600 transition-colors pr-4">
          {question}
        </span>
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300",
          isOpen && "bg-crimson-500 rotate-180"
        )}>
          <ChevronDown className={cn(
            "w-5 h-5 transition-colors",
            isOpen ? "text-white" : "text-slate-500"
          )} />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-slate-600 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-crimson-100/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Header - Left side */}
          <AnimatedSection className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] text-slate-900 mb-6">
                Frequently Asked{" "}
                <span className="text-gradient">Questions</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8">
                Have questions? We've got answers. Can't find what you're looking for?
              </p>

              <a
                href="/contact"
                className="inline-flex items-center text-crimson-600 hover:text-crimson-700 font-medium transition-colors"
              >
                Contact us directly
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimatedSection>

          {/* FAQ List - Right side */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-soft-lg p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

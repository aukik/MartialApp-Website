"use client";

import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the 2-week free trial work?",
    answer: "Simply download Martial Apps from the App Store or Google Play. You'll get full access to all features for 2 weeks—no credit card required. At the end of your trial, choose a plan that works for your dojo or let the trial expire with no obligation."
  },
  {
    question: "What happens after my free trial ends?",
    answer: "After 14 days, you'll be prompted to select a subscription plan to continue using Martial Apps. Your data is safely stored, so you can pick up right where you left off. If you choose not to subscribe, your account will be deactivated but your data remains secure for 30 days."
  },
  {
    question: "Can I use Martial Apps on multiple devices?",
    answer: "Yes! Your subscription works across all your devices—iPhone, iPad, Android phone, and tablet. Changes sync instantly, so you can check in students on your tablet and review reports on your phone seamlessly."
  },
  {
    question: "Is my student data secure?",
    answer: "Absolutely. All data is hosted in Canada with bank-level encryption. We're PIPEDA compliant and never sell or share your data. You own your information, always."
  },
  {
    question: "Will my students and parents actually use a new app?",
    answer: "Yes! The app is designed to be simpler than texting. Students check in with a single tap. Parents get automatic progress updates and receipts. We've made adoption as easy as possible—no training required."
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
        aria-expanded={isOpen}
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";

export function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-crimson-100/50 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-xl">
                <Image
                  src="/images/Nick-photo.webp"
                  alt="Nick - Founder of Martial Apps, Brown Belt in Shotokan Karate"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -inset-3 border-2 border-crimson-300 rounded-[2rem] -z-10" />
              <div className="absolute -inset-6 border border-slate-200 rounded-[2.5rem] -z-20" />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-soft-lg">
                <p className="text-sm font-medium text-crimson-600">Brown Belt</p>
                <p className="text-xs text-slate-500">Shotokan Karate</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-crimson-600 font-medium mb-3">Meet the Founder</p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] text-slate-900 mb-4">
                  Nick
                </h2>

                <p className="text-lg text-crimson-600 font-medium">
                  Shotokan Karate Brown Belt & IT Project Manager
                </p>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As a brown belt martial artist, I know the challenges of running a traditional dojo. Administration, meetings, student retention, organizing tournaments—it takes a lot of time and organization.
                </p>
                <p>
                  Using my experience as an IT project manager, I founded Martial Apps to help club owners automate and streamline what they do, so they can focus on growing their clubs and training their students.
                </p>
              </div>

              {/* Quote */}
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-crimson-200" />
                <p className="text-slate-900 font-medium italic pl-6 text-lg">
                  "I watched my sensei spend nights on paperwork instead of training. Martial Apps exists so dojo owners can focus on their students, not spreadsheets."
                </p>
              </div>

              {/* Info points */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-soft">
                  <p className="text-slate-900 font-semibold">Ottawa, Canada</p>
                  <p className="text-xs text-slate-500">Headquartered in Kanata</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-soft">
                  <p className="text-slate-900 font-semibold">Invest Ottawa</p>
                  <p className="text-xs text-slate-500">Officially backed</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-soft">
                  <p className="text-slate-900 font-semibold">4-6 People</p>
                  <p className="text-xs text-slate-500">Dedicated dev team</p>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-crimson-50 hover:border-crimson-300 hover:text-crimson-600 rounded-xl px-6"
              >
                <Link href="/about">
                  Learn More About Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Play, CheckCircle } from "lucide-react";

const videoFeatures = [
  "Single tap check-in for students",
  "Automated payment reminders",
  "Belt progression tracking system",
];

export function VideoSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson-100/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-crimson-100 rounded-full mb-6">
            <Play className="w-4 h-4 text-crimson-600" />
            <span className="text-sm font-medium text-crimson-700">See It in Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] text-slate-900 mb-6">
            Watch How Martial Apps{" "}
            <span className="text-gradient">Transforms Your Dojo</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get a quick look at how Martial Apps simplifies daily operations, from attendance to payments to student progress tracking.
          </p>
        </AnimatedSection>

        {/* Video Container */}
        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800">
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-crimson-950" />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Play demo video"
                className="group relative w-20 h-20 md:w-24 md:h-24 bg-crimson-500 rounded-full flex items-center justify-center shadow-lg shadow-crimson-500/30 hover:bg-crimson-600 hover:scale-105 transition-all duration-300"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />

                {/* Pulse animation rings */}
                <span className="absolute inset-0 rounded-full bg-crimson-500/40 animate-ping" />
                <span className="absolute -inset-2 rounded-full border-2 border-crimson-400/30 animate-pulse" />
              </button>
            </div>

            {/* Coming soon badge */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm text-white/80 font-medium">Demo Coming Soon</span>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-crimson-400 animate-pulse" />
              <span className="text-sm text-white/70">2:30</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Feature highlights below video */}
        <AnimatedSection delay={0.4}>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {videoFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 text-center sm:text-left">
                <CheckCircle className="w-5 h-5 text-crimson-500 flex-shrink-0 mt-0.5 hidden sm:block" />
                <p className="text-slate-600">{feature}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

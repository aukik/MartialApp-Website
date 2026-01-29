"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson-500/10 rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <Container className="relative z-10">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] text-white mb-8 leading-[1.1]">
            Ready to Stop Drowning in{" "}
            <span className="text-gradient">Admin Work?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join dojo owners across Canada who are reclaiming their time. Get early access and founding member pricing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="group text-base bg-crimson-500 hover:bg-crimson-600 text-white px-10 h-14 rounded-xl shadow-lg shadow-crimson-500/25 hover:shadow-crimson-500/40 transition-all duration-300"
            >
              <Link href="/contact">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-10 h-14 rounded-xl transition-all duration-300"
            >
              <Link href="/contact">
                Have Questions? Contact Us
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-slate-800">
            <span className="text-sm text-slate-400">Canadian Hosted</span>
            <div className="h-4 w-px bg-slate-700" />
            <span className="text-sm text-slate-400">PIPEDA Compliant</span>
            <div className="h-4 w-px bg-slate-700" />
            <span className="text-sm text-slate-400">Invest Ottawa Backed</span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

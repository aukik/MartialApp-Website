"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import { AppStoreIcon } from "@/components/shared/icons";


export function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson-500/15 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream-50/5 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <Container className="relative z-10">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] text-white mb-8 leading-[1.1]">
            Ready to Transform{" "}
            <span className="text-gradient">Your Dojo?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Get early access and founding member pricing. Join dojo owners across Canada who are ready to reclaim their time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="text-lg bg-crimson-500 hover:bg-crimson-600 text-white px-10 h-16 rounded-xl shadow-lg shadow-crimson-500/25 hover:shadow-crimson-500/40 transition-all duration-300"
            >
              <Link href="/contact">
                Join the Waitlist
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="text-lg bg-white hover:bg-slate-100 text-slate-900 px-10 h-16 rounded-xl shadow-lg transition-all duration-300"
            >
              <Link href="/contact">
                Have Questions? Contact Us
              </Link>
            </Button>
          </div>

          {/* Or download section */}
          <p className="text-slate-500 mb-6">Or download the app now</p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-8 py-5 bg-white text-slate-900 rounded-2xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Download on the App Store"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <AppStoreIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">Download on the</p>
                <p className="text-lg font-semibold text-slate-900">App Store</p>
              </div>
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-8 py-5 bg-white text-slate-900 rounded-2xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Get it on Google Play"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6" fill="white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">Get it on</p>
                <p className="text-lg font-semibold text-slate-900">Google Play</p>
              </div>
            </a>
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

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/layout/container";
import gsap from "gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "-=0.6"
        );

      gsap.to(visualRef.current, {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden grain"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animated" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-crimson-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-crimson-100/50 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson-50/60 rounded-full blur-[200px]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-slate-300) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-slate-300) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 md:py-16">
          {/* Content */}
          <div className="space-y-8">
            {/* Title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] leading-[1.1] tracking-tight opacity-0"
            >
              <span className="text-slate-900">Stop Chasing Payments.</span>
              <br />
              <span className="text-gradient">Start Growing Your Dojo.</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed opacity-0"
            >
              Automate the admin work that drains your time. Martial Apps handles attendance, billing, and student tracking so you can focus on what you do best: teaching.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
              <Button
                asChild
                size="lg"
                className="group text-base bg-crimson-500 hover:bg-crimson-600 text-white px-8 h-14 rounded-xl shadow-lg shadow-crimson-500/25 hover:shadow-crimson-500/40 transition-all duration-300"
              >
                <Link href="/contact">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group text-base border-slate-300 text-slate-700 hover:bg-crimson-50 hover:border-crimson-300 hover:text-crimson-600 px-8 h-14 rounded-xl transition-all duration-300"
              >
                <Link href="/features">
                  <Play className="mr-2 h-5 w-5 text-crimson-500" />
                  See Features
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-crimson-500">2026</span>
                <span className="text-sm text-slate-500">Launch</span>
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-sm text-slate-500">Invest Ottawa Backed</span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-sm text-slate-500">Canadian Hosted</span>
            </div>
          </div>

          {/* Visual - Phone Mockup */}
          <div ref={visualRef} className="relative lg:h-[650px] flex items-center justify-center opacity-0">
            <div className="relative">
              {/* Phone frame - minimal outline style */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[340px]">
                {/* Outer phone shell - thin outline */}
                <div className="relative rounded-[3rem] border-2 border-slate-300 bg-white p-2 shadow-soft-xl">
                  {/* Inner screen area */}
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-cream-50">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-full z-20" />

                    {/* Screen content */}
                    <div className="aspect-[9/19.5] p-4 pt-14">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-slate-500 text-xs">Welcome back</p>
                          <h3 className="text-slate-900 font-semibold text-base">Nick's Dojo</h3>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-crimson-500 flex items-center justify-center text-white font-bold text-sm">
                          N
                        </div>
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-soft">
                          <p className="text-lg font-bold text-slate-900">247</p>
                          <p className="text-[10px] text-slate-500">Students</p>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-soft">
                          <p className="text-lg font-bold text-emerald-500">98%</p>
                          <p className="text-[10px] text-slate-500">Attendance</p>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-soft">
                          <p className="text-lg font-bold text-crimson-500">$12k</p>
                          <p className="text-[10px] text-slate-500">Revenue</p>
                        </div>
                      </div>

                      {/* Next class card */}
                      <div className="bg-gradient-to-br from-crimson-500 to-crimson-600 rounded-2xl p-4 mb-4 text-white">
                        <p className="text-crimson-100 text-[10px] font-medium mb-1">NEXT CLASS</p>
                        <p className="font-semibold text-sm">Tonight at 7:00 PM</p>
                        <p className="text-crimson-100 text-xs">Advanced Training • 18 enrolled</p>
                      </div>

                      {/* Belt progress */}
                      <div className="bg-white rounded-xl p-3 mb-4 border border-slate-100 shadow-soft">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-[10px] font-medium text-slate-600">BELT EXAMS</p>
                          <p className="text-[10px] font-bold text-crimson-500">12 Ready</p>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-crimson-500 to-crimson-400 rounded-full" />
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-2 gap-2">
                        <button className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-900 rounded-xl text-white text-xs font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Check In
                        </button>
                        <button className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 text-xs font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          New Class
                        </button>
                      </div>

                      {/* Bottom nav indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Side buttons - power */}
                <div className="absolute right-0 top-28 w-0.5 h-12 bg-slate-300 rounded-l" />
                {/* Side buttons - volume */}
                <div className="absolute left-0 top-24 w-0.5 h-6 bg-slate-300 rounded-r" />
                <div className="absolute left-0 top-32 w-0.5 h-6 bg-slate-300 rounded-r" />
              </div>

              {/* Floating notification card */}
              <div className="absolute -bottom-6 -left-12 sm:-left-16 bg-white rounded-2xl p-3.5 border border-slate-200 shadow-soft-lg animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Payment Received</p>
                    <p className="text-xs text-slate-500">Sarah M. - $125</p>
                  </div>
                </div>
              </div>

              {/* Floating achievement card */}
              <div className="absolute -top-4 -right-8 sm:-right-12 bg-white rounded-2xl p-3.5 border border-crimson-200 shadow-soft-lg glow-crimson animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-crimson-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-crimson-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">New Achievement</p>
                    <p className="text-xs text-crimson-500">Perfect Week!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
}

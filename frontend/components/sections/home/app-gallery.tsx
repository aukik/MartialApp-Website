"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AppGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const phone1Ref = useRef<HTMLDivElement>(null);
  const phone2Ref = useRef<HTMLDivElement>(null);
  const phone3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !phone1Ref.current || !phone2Ref.current || !phone3Ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(phone1Ref.current, {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(phone2Ref.current, {
        y: -70,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(phone3Ref.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    "2-week free trial, no credit card",
    "Works on iPhone, iPad & Android",
    "Syncs instantly across devices",
    "Canadian-hosted, bank-level security",
  ];

  return (
    <section
      id="download"
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-900 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-500/20 rounded-full blur-[200px]" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] text-white mb-6">
            Your Dojo in Your Pocket
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Download Martial Apps today and start your free trial. Manage your dojo from anywhere—check schedules, track progress, and stay connected with students and parents.
          </p>
        </AnimatedSection>

        {/* Phone mockups */}
        <div className="relative flex justify-center items-end gap-4 md:gap-8 max-w-5xl mx-auto h-[500px] md:h-[600px]">
          {/* Phone 1 - Left (Video Library) */}
          <div
            ref={phone1Ref}
            className="relative w-48 md:w-64 transform -rotate-6 hover:rotate-0 transition-transform duration-500"
          >
            <div className="relative bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] border-4 md:border-8 border-slate-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-slate-700 rounded-b-xl z-10" />
              <div className="aspect-[9/19] relative overflow-hidden">
                <Image
                  src="/images/app-screenshots/app-video-library.png"
                  alt="Martial Apps Video Library screen"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          </div>

          {/* Phone 2 - Center (Member List - Featured) */}
          <div
            ref={phone2Ref}
            className="relative w-56 md:w-72 z-20 scale-105 md:scale-110"
          >
            <div className="relative bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] border-4 md:border-8 border-slate-700 shadow-2xl glow-crimson overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-slate-700 rounded-b-xl z-10" />
              <div className="aspect-[9/19] relative overflow-hidden">
                <Image
                  src="/images/app-screenshots/app-club-member-list.png"
                  alt="Martial Apps Member List with belt colors"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 224px, 288px"
                />
              </div>
            </div>
          </div>

          {/* Phone 3 - Right (Login Screen) */}
          <div
            ref={phone3Ref}
            className="relative w-48 md:w-64 transform rotate-6 hover:rotate-0 transition-transform duration-500"
          >
            <div className="relative bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] border-4 md:border-8 border-slate-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-slate-700 rounded-b-xl z-10" />
              <div className="aspect-[9/19] relative overflow-hidden">
                <Image
                  src="/images/app-screenshots/app-logon-screen.png"
                  alt="Martial Apps Login screen"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* App Store Buttons */}
        <AnimatedSection className="flex flex-col items-center gap-6 mt-12 md:mt-16">
          <AppStoreButtons variant="light" size="large" />

          {/* Feature bullets */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                <Check className="w-4 h-4 text-crimson-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

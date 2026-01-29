"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";

const features = [
  {
    title: "Automated Attendance",
    description: "No more paper sign-in sheets. Students check in with a tap, and you get instant, accurate records.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop&q=80",
    alt: "Digital attendance tracking on tablet"
  },
  {
    title: "Performance Analytics",
    description: "Real-time dashboards with insights about your club's growth, retention, and revenue.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    alt: "Analytics dashboard showing charts and graphs"
  },
  {
    title: "Video Library",
    description: "Host technique tutorials. Students learn anytime, anywhere.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&q=80",
    alt: "Martial arts training video on screen"
  },
  {
    title: "Gamification",
    description: "Achievements, challenges, and progress tracking keep students engaged and coming back.",
    image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=600&h=400&fit=crop&q=80",
    alt: "Achievement badges and progress rewards"
  },
  {
    title: "Payment Processing",
    description: "End the awkward payment conversations. Automated billing means fees arrive on time, every time.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
    alt: "Secure payment processing"
  },
  {
    title: "Belt Progression",
    description: "Clear progression paths. Know who is ready for exams and celebrate achievements automatically.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=400&fit=crop&q=80",
    alt: "Martial arts belt ranking system"
  }
];

export function FeaturesOverview() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <Container className="relative z-10">
        {/* Section header - clean and direct, no floating bubble */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] text-slate-900 mb-6">
            Reclaim Your Evenings.
            <br />
            <span className="text-gradient">Run Your Dojo Smarter.</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Purpose-built tools that eliminate the paperwork and payment headaches dojo owners face every day.
          </p>
        </AnimatedSection>

        {/* Features grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-crimson-300 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Image container */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Placeholder overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                    <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Placeholder Image</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-crimson-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <AnimatedSection delay={0.6} className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            And much more—explore all features on our{" "}
            <a href="/features" className="text-crimson-500 hover:text-crimson-600 underline underline-offset-4 transition-colors">
              features page
            </a>
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

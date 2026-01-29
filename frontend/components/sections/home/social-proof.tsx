"use client";

import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";

// Custom SVG icons for trust indicators
const CanadaFlagIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
    <rect x="0" y="8" width="10" height="24" fill="#DC2626" />
    <rect x="30" y="8" width="10" height="24" fill="#DC2626" />
    <rect x="10" y="8" width="20" height="24" fill="#FFFFFF" />
    <path
      d="M20 12 L21 16 L25 16 L22 18.5 L23.5 22.5 L20 20 L16.5 22.5 L18 18.5 L15 16 L19 16 Z"
      fill="#DC2626"
    />
  </svg>
);

const OttawaIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
    {/* Location pin */}
    <path
      d="M20 4 C13 4 8 9.5 8 16 C8 24 20 36 20 36 C20 36 32 24 32 16 C32 9.5 27 4 20 4Z"
      fill="none"
      stroke="#DC2626"
      strokeWidth="2"
    />
    <circle cx="20" cy="15" r="5" fill="#DC2626" />
  </svg>
);

const MartialArtsIcon = () => (
  <svg viewBox="0 0 195.363 195.363" className="w-10 h-10" aria-hidden="true">
    <g fill="#DC2626">
      <ellipse cx="107.76" cy="16.331" rx="16.549" ry="16.331"/>
      <path d="M156.763,179.895l-25.865-24.293c-2.092-1.965-3.278-4.709-3.278-7.578V40.848c0-3.17-2.57-5.742-5.741-5.742
        c-8.85,0-25.567,0-32.903,0c-1.736,0-3.502,0.355-4.819,1.671l-19.107,19.1c-1.271,1.271-3.332,1.271-4.603,0L45.882,41.311
        c-2.303-2.304-6.039-2.307-8.343-0.002c-2.305,2.305-2.305,6.039,0,8.343l17.604,17.604c4.188,4.188,10.978,4.188,15.165,0
        l14.36-14.36c0.575-0.576,1.509-0.576,2.086,0c0.575,0.576,0.575,1.511,0,2.086L70.582,71.153
        c-2.083,2.084-4.909,3.254-7.856,3.254c-2.947,0-5.773-1.171-7.856-3.254L39.571,55.854c-0.741,0.287-1.434,0.727-2.031,1.324
        c-2.305,2.304-2.305,6.04,0,8.344l17.624,17.625c4.188,4.188,10.977,4.188,15.165,0l17.633-17.634v41.684l-23.585,24.421
        c-3.789,3.923-5.906,9.164-5.906,14.618v40.275c0,4.889,3.959,8.852,8.847,8.852c4.889,0,8.848-3.963,8.848-8.852v-37.414
        c0-2.699,1.049-5.291,2.925-7.229l21.462-22.179h9.371v31.822c0,5.535,2.287,10.822,6.321,14.611l28.406,26.678
        c1.708,1.604,3.871,2.396,6.042,2.396c2.359,0,4.718-0.938,6.46-2.794C160.499,188.84,160.327,183.239,156.763,179.895z"/>
    </g>
  </svg>
);

const LaunchIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
    <path
      d="M20 8 L20 24"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 18 L20 8 L26 18"
      fill="none"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 32 L28 32"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 28 L24 28"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const InvestOttawaIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
    <path
      d="M20 6 L26 14 L36 16 L28 24 L30 34 L20 29 L10 34 L12 24 L4 16 L14 14 Z"
      fill="none"
      stroke="#f87171"
      strokeWidth="1.5"
    />
    <path
      d="M20 10 L24 16 L31 17 L26 22 L27 29 L20 26 L13 29 L14 22 L9 17 L16 16 Z"
      fill="#f87171"
      fillOpacity="0.2"
    />
  </svg>
);

const trustIndicators = [
  {
    icon: CanadaFlagIcon,
    title: "Canadian Data Hosting",
    description: "Your student data stays in Canada with bank-level encryption. No data crosses borders."
  },
  {
    icon: OttawaIcon,
    title: "Ottawa-Based Team",
    description: "Built and supported by a local Ottawa team. Real people, not overseas call centers."
  },
  {
    icon: MartialArtsIcon,
    title: "Built by Martial Artists",
    description: "Created by a brown belt who understands dojo life. We built what we wished existed."
  },
  {
    icon: LaunchIcon,
    title: "Pre-Launch 2026",
    description: "Early adopters get locked-in pricing and direct input on features. Join the founding members."
  }
];

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-crimson-50 to-transparent rounded-full" />
      </div>

      <Container className="relative z-10">
        {/* Invest Ottawa Section - Editorial magazine style */}
        <AnimatedSection className="mb-20 md:mb-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left side - Typography focused */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-16 bg-crimson-400" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-600">
                  Official Partner
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-display)] text-slate-900 leading-[1.1]">
                Proudly Supported by{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Invest Ottawa</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-crimson-200/60 -z-0" />
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                As a participant in Invest Ottawa's startup ecosystem, Martial Apps has access to world-class mentorship, resources, and a network that validates our mission to transform dojo management across Canada.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-700 font-medium">Startup Mentorship</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-700 font-medium">Business Resources</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-700 font-medium">Innovation Network</span>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main visual block */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <InvestOttawaIcon />
                    </div>

                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Backed by</p>
                      <p className="text-white text-2xl font-[family-name:var(--font-display)] font-semibold">
                        Invest Ottawa
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/50 text-sm">
                        Canada's leading innovation hub
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-crimson-500 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-crimson-300 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust indicators grid */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] text-slate-900 mb-4">
              Why Dojos Trust Us
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              Built with privacy, security, and the martial arts community at heart.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustIndicators.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-6 border border-slate-200 hover:border-crimson-300 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Privacy note - More highlighted */}
        <AnimatedSection className="text-center mt-16">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-crimson-500/20 via-crimson-500/10 to-crimson-500/20 blur-xl rounded-full" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-slate-700 shadow-lg">
              <p className="text-white text-base">
                <span className="text-crimson-400 font-semibold">Privacy-first:</span>{" "}
                <span className="text-slate-300">PIPEDA compliant. We never sell your data.</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

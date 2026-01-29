"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { MapPin, Mail, ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const navigation = {
  main: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Mock submission with 1.5s delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubscribed(true);
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="relative border-b border-slate-800">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-crimson-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-crimson-500" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-crimson-400">
                  Stay Updated
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-white mb-4">
                Get Founding Member Pricing
              </h2>
              <p className="text-slate-400 leading-relaxed max-w-lg">
                Join the waitlist for early access, locked-in pricing, and exclusive updates. Be among the first dojo owners to transform their operations.
              </p>
            </div>

            {/* Right - Form */}
            <div>
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="h-14 pl-12 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:border-crimson-500 focus:ring-crimson-500/20"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-14 px-8 bg-crimson-500 hover:bg-crimson-600 text-white rounded-xl font-semibold shadow-lg shadow-crimson-500/20 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Secure My Spot
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-slate-500 text-sm">
                    We respect your inbox. Only important updates, no spam.
                  </p>
                </form>
              ) : (
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">You're on the list!</p>
                      <p className="text-slate-400 text-sm">
                        We'll notify you when we launch.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="dark" />
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Streamline your martial arts dojo operations and delight your students with comprehensive management tools.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-crimson-400" />
                <span className="text-sm">Kanata, Ottawa, Canada</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-crimson-400" />
                <a href="mailto:hello@martialapps.com" className="text-sm hover:text-crimson-400 transition-colors">
                  hello@martialapps.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 my-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Martial Apps. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-slate-400">Launching 2026</span>
            </div>
            <div className="h-4 w-px bg-slate-700" />
            <span className="text-sm text-slate-500">Backed by Invest Ottawa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

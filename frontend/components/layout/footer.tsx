"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { MapPin, Mail, ArrowUpRight, Send, Check } from "lucide-react";
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubscribed(true);
    toast.success("Successfully subscribed!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
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

        {/* Newsletter Section */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">
                Stay Updated
              </h3>
              <p className="text-slate-400 text-sm">
                Get product updates, tips, and special offers. No spam.
              </p>
            </div>

            <div className="flex-1 max-w-md">
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="h-11 pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 rounded-lg focus:border-crimson-500 focus:ring-crimson-500/20"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 px-5 bg-crimson-500 hover:bg-crimson-600 text-white rounded-lg font-medium transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              ) : (
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">You're subscribed!</span>
                </div>
              )}
            </div>
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
              <span className="text-sm text-slate-400">Available Now</span>
            </div>
            <div className="h-4 w-px bg-slate-700" />
            <span className="text-sm text-slate-500">2-Week Free Trial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

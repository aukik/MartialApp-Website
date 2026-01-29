"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between px-4 sm:px-6 transition-all duration-500 rounded-2xl",
            isScrolled
              ? "h-14 glass shadow-soft border border-slate-200/50"
              : "h-16 bg-transparent"
          )}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-crimson-600 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-crimson-500 transition-all duration-300 group-hover:w-8 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-crimson-500 text-crimson-600 hover:bg-crimson-50 px-5 h-10 rounded-xl transition-all duration-300"
            >
              <Link href="/contact">
                Two Week Free Trial
              </Link>
            </Button>
            <Button
              asChild
              className="group bg-crimson-500 hover:bg-crimson-600 text-white px-5 h-10 rounded-xl shadow-lg shadow-crimson-500/20 hover:shadow-crimson-500/30 transition-all duration-300"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-white border-l border-slate-200"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4">
                  <Logo />
                </div>

                <nav className="flex flex-col gap-2 py-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 text-lg font-medium text-slate-700 hover:text-crimson-600 hover:bg-crimson-50 rounded-xl transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pb-8 space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-crimson-500 text-crimson-600 hover:bg-crimson-50 h-12 rounded-xl"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Two Week Free Trial
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-crimson-500 hover:bg-crimson-600 text-white h-12 rounded-xl"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <p className="text-center text-xs text-slate-500 mt-6">
                    Launching 2026 - Backed by Invest Ottawa
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

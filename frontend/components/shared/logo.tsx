import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "light" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Logo mark */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-crimson-500 to-crimson-600 flex items-center justify-center shadow-lg shadow-crimson-500/20 group-hover:shadow-crimson-500/40 transition-all duration-300">
        <span className="text-white font-bold text-lg tracking-tighter">M</span>
        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Logo text */}
      <span className="text-xl font-[family-name:var(--font-display)] font-semibold tracking-tight">
        <span className={cn(variant === "light" ? "text-slate-900" : "text-white")}>Martial</span>
        <span className="text-crimson-500">Apps</span>
      </span>
    </Link>
  );
}

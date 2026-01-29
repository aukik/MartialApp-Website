import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  onClick?: () => void;
}

export function Logo({ variant = "light", onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2 group">
      {/* Logo icon */}
      <div className="relative w-9 h-9 group-hover:scale-105 transition-transform duration-300">
        <Image
          src="/images/logo.png"
          alt="Martial Apps logo"
          fill
          className="object-contain"
          sizes="36px"
        />
      </div>

      {/* Logo text */}
      <span className="text-xl font-[family-name:var(--font-display)] font-semibold tracking-tight">
        <span className={cn(variant === "light" ? "text-slate-900" : "text-white")}>Martial</span>
        <span className="text-crimson-500">Apps</span>
      </span>
    </Link>
  );
}

"use client";

import { Apple, Play } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AppStoreButtonsProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "default" | "large";
  animated?: boolean;
}

export function AppStoreButtons({
  variant = "light",
  className = "",
  size = "default",
  animated = true
}: AppStoreButtonsProps) {
  const isLight = variant === "light";
  const isLarge = size === "large";

  const buttonBaseStyles = cn(
    "group relative flex items-center gap-3 rounded-xl font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:scale-[0.97] hover:-translate-y-0.5",
    isLarge ? "px-6 py-4" : "px-5 py-3",
    isLight
      ? "bg-white text-slate-900 hover:bg-gradient-to-r hover:from-white hover:to-crimson-50 shadow-md hover:shadow-xl border border-slate-200 hover:border-crimson-300 focus-visible:ring-crimson-500"
      : "bg-slate-800 text-white border border-slate-600 hover:bg-slate-700 hover:border-slate-500 hover:shadow-lg hover:shadow-slate-900/20 focus-visible:ring-slate-400",
    animated && "hover:animate-none"
  );

  const iconContainerStyles = cn(
    "flex items-center justify-center rounded-lg transition-all duration-300",
    isLarge ? "w-10 h-10" : "w-8 h-8",
    isLight
      ? "bg-slate-900 text-white group-hover:bg-crimson-500 group-hover:scale-110"
      : "bg-white/10 text-white group-hover:bg-white/20 group-hover:scale-110"
  );

  const textStyles = "text-left";
  const labelStyles = cn(
    "text-xs transition-colors duration-300",
    isLight ? "text-slate-500 group-hover:text-crimson-500" : "text-slate-400 group-hover:text-slate-300"
  );
  const titleStyles = cn(
    "font-semibold transition-colors duration-300",
    isLarge ? "text-base" : "text-sm",
    isLight ? "group-hover:text-crimson-600" : "group-hover:text-white"
  );

  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonBaseStyles}
        aria-label="Download on the App Store"
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        <div className={iconContainerStyles}>
          <Apple className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
        </div>
        <div className={textStyles}>
          <p className={labelStyles}>Download on the</p>
          <p className={titleStyles}>App Store</p>
        </div>
      </a>

      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonBaseStyles}
        aria-label="Get it on Google Play"
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        <div className={iconContainerStyles}>
          <Play className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
        </div>
        <div className={textStyles}>
          <p className={labelStyles}>Get it on</p>
          <p className={titleStyles}>Google Play</p>
        </div>
      </a>
    </div>
  );
}

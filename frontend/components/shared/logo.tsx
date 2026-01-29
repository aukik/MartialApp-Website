import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "light" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/images/logo-wide.png"
        alt="Martial Apps"
        width={150}
        height={40}
        className={`h-9 w-auto transition-opacity group-hover:opacity-80 ${
          variant === "dark" ? "brightness-0 invert" : ""
        }`}
        priority
      />
    </Link>
  );
}

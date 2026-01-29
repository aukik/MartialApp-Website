import type { Metadata } from "next";
import { sora, plusJakartaSans } from "./fonts";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://martialapps.com'),
  title: {
    default: 'Martial Apps - Dojo Management Software for Martial Arts Schools',
    template: '%s | Martial Apps'
  },
  description: 'Streamline your martial arts dojo with automated attendance, payments, belt progression tracking, video libraries, and gamification. Built for club owners.',
  keywords: [
    'martial arts software',
    'dojo management',
    'karate school software',
    'martial arts attendance',
    'belt progression tracking',
    'martial arts payments'
  ],
  authors: [{ name: 'Martial Apps' }],
  creator: 'Martial Apps',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://martialapps.com',
    siteName: 'Martial Apps',
    title: 'Martial Apps - Dojo Management Software',
    description: 'Streamline your martial arts dojo operations with automated tools and gamification.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Martial Apps - Dojo Management Software'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martial Apps - Dojo Management Software',
    description: 'Streamline your martial arts dojo operations',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

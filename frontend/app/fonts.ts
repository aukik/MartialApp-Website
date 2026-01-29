import { Sora, Plus_Jakarta_Sans } from 'next/font/google'

export const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

// Legacy exports for compatibility
export const instrumentSerif = sora
export const dmSans = plusJakartaSans

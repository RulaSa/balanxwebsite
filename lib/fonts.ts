import { Poppins } from 'next/font/google'

// Using Poppins font with ExtraLight (200), Medium (500), SemiBold (600), and Bold (700) weights
// Poppins is a modern, rounded sans-serif font perfect for web design
export const agrandirWide = Poppins({
  subsets: ['latin'],
  variable: '--font-agrandir-wide',
  display: 'swap',
  weight: ['200', '500', '600', '700'], // ExtraLight (200), Medium (500), SemiBold (600), and Bold (700)
})


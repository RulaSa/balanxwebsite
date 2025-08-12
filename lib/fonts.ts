import { Poppins } from 'next/font/google'

// Using Poppins font with multiple weights for better typography control
// Poppins is a modern, rounded sans-serif font perfect for web design
export const agrandirWide = Poppins({
  subsets: ['latin'],
  variable: '--font-agrandir-wide',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Full range of weights
})


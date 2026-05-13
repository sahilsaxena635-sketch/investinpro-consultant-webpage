import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sahil Saxena | InvestinPro - Premium Real Estate Consultant Gurgaon',
  description: 'Helping investors and homebuyers discover premium real estate opportunities in Gurgaon. Expert guidance for luxury properties, investment opportunities, and exclusive builder partnerships.',
  keywords: ['real estate consultant', 'Gurgaon property', 'luxury homes', 'real estate investment', 'InvestinPro', 'Sahil Saxena'],
  openGraph: {
    title: 'Sahil Saxena | InvestinPro - Premium Real Estate Consultant',
    description: 'Discover premium real estate opportunities in Gurgaon with expert guidance.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0f1c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

import './globals.css'
import { Source_Serif_4 , Inter} from 'next/font/google'
import Navbar from '@/components/Navbar'
import GoogleAnalytics from '@/provider/GoogleAnalytics'
import JsonLd from '@/provider/JsonLd'
import TallyProvider from '../provider/TallyProvider'
const sourceSerif4 = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const metadata: Metadata = {
  title: {
    default: 'FleetShield - AI-Based Vehicle Safety & Fleet Monitoring',
    template: '%s | FleetShield',
  },
  description:
    'FleetShield provides AI-powered vehicle safety and fleet monitoring solutions. Detect driver drowsiness, phone usage, and ensure safety across your fleet with real-time AI alerts and analytics.',
  keywords: [
    'FleetShield',
    'AI vehicle safety',
    'fleet monitoring',
    'driver drowsiness detection',
    'AI fleet management',
    'vehicle tracking',
    'driver behavior monitoring',
    'smart fleet technology',
    'AI driver monitoring',
    'telematics solution',
    'fleet safety system',
    'AI road safety',
    'connected vehicles',
    'vehicle monitoring solution',
  ],
  authors: [{ name: 'FleetShield Team' }],
  creator: 'FleetShield Technologies',
  publisher: 'FleetShield Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fleetshield.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fleetshield.ai',
    title: 'FleetShield - AI-Based Vehicle Safety & Fleet Monitoring',
    description:
      'AI that drives safety. FleetShield provides intelligent driver monitoring, real-time alerts, and smart fleet management powered by artificial intelligence.',
    siteName: 'FleetShield',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'FleetShield - AI-Based Vehicle Safety & Fleet Monitoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FleetShield - AI-Based Vehicle Safety & Fleet Monitoring',
    description:
      'Ensure smarter, safer fleets with FleetShield—AI-powered driver monitoring, vehicle tracking, and safety insights.',
    creator: '@fleetshield',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
        <JsonLd />
        <GoogleAnalytics />
      </head>
      <body className={`${sourceSerif4.variable} ${inter.variable} antialiased`}>
        <TallyProvider>
          <Navbar />
          {children}
        </TallyProvider>
      </body>
    </html>
  )
}

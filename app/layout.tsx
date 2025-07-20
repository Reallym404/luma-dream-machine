import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luma Dream Machine - AI Video Generation Tool | Lumalabs AI",
  description:
    "Create stunning AI-generated videos with Luma Dream Machine. Powered by advanced Lumalabs AI technology for professional video creation from text prompts.",
  keywords:
    "Lumalabs AI, Luma Dream Machine, AI video generation, artificial intelligence, video creation, text to video, AI tools",
  authors: [{ name: "Luma Dream Machine Team" }],
  creator: "Luma Dream Machine",
  publisher: "Luma Dream Machine",
  robots: "index, follow",
  openGraph: {
    title: "Luma Dream Machine - AI Video Generation Tool | Lumalabs AI",
    description:
      "Create stunning AI-generated videos with Luma Dream Machine. Powered by advanced Lumalabs AI technology.",
    url: "https://lumadreammachine.com",
    siteName: "Luma Dream Machine",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Dream Machine - AI Video Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma Dream Machine - AI Video Generation Tool",
    description: "Create stunning AI-generated videos with Lumalabs AI technology.",
    images: ["/twitter-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://lumadreammachine.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06b6d4" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TTMLBQ237N"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TTMLBQ237N');
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Luma Dream Machine",
              description: "AI video generation tool powered by Lumalabs AI technology",
              url: "https://lumadreammachine.com",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Windows, macOS, Linux",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "Luma Dream Machine",
                url: "https://lumadreammachine.com",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          src="//wreckbargaininghers.com/8a/a5/93/8aa59391b452871f8d46c68a3d398005.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

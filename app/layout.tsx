import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SchemaOrg } from "@/components/SchemaOrg";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thedevfaysal.com"),
  title: {
    default: "Faysal Ahmed | Full Stack Software Engineer | Portfolio",
    template: "%s | Faysal Ahmed",
  },
  description: "Full Stack Software Engineer specialized in React, Next.js, Node.js, and PostgreSQL. Building scalable web applications with modern technologies. Expert in frontend and backend development.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Faysal Ahmed",
    "Web Application Development",
    "Full Stack Engineering",
    "Modern Web Development",
    "JavaScript Developer",
  ],
  authors: [
    {
      name: "Faysal Ahmed",
      url: "https://thedevfaysal.com",
    },
  ],
  creator: "Faysal Ahmed",
  publisher: "Faysal Ahmed",
  formatDetection: {
    email: true,
    telephone: true,
  },
  category: "Technology",
  applicationName: "Faysal Ahmed Portfolio",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thedevfaysal.com",
    siteName: "Faysal Ahmed - Full Stack Software Engineer",
    title: "Faysal Ahmed | Full Stack Software Engineer",
    description: "Explore my portfolio of scalable web applications and modern full-stack development projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faysal Ahmed - Full Stack Software Engineer Portfolio",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Faysal Ahmed Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thedevfaysal",
    creator: "@thedevfaysal",
    title: "Faysal Ahmed | Full Stack Software Engineer",
    description: "Full Stack Software Engineer specialized in React, Next.js, Node.js and PostgreSQL.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://thedevfaysal.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Faysal Ahmed" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://thedevfaysal.com" />
        
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Search Engine Verification (set env vars in Vercel or replace placeholders) */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        ) : (
          <meta name="google-site-verification" content="your-google-verification-code" />
        )}

        {process.env.NEXT_PUBLIC_BING_VERIFICATION ? (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        ) : (
          <meta name="msvalidate.01" content="your-bing-verification-code" />
        )}

        {/* Google Analytics 4 (optional) - enable by setting NEXT_PUBLIC_GA_MEASUREMENT_ID in env */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { page_path: window.location.pathname });`,
              }}
            />
          </>
        )}
        
        {/* Security & Content */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="email=no, telephone=no" />
        
        {/* Structured Data */}
        <SchemaOrg />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

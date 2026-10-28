import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Julius_Sans_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SquareArrowOutUpRight } from "lucide-react";
import CanvasCursor from "./components/ui2/CanvasCursor";

// ---------------------- FONTS ----------------------

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
  display: "swap",
});

// ---------------------- WEBSITE CONFIG ----------------------

const SITE_URL = "https://souveral.com";
const SITE_NAME = "Souveral";
const SITE_DESCRIPTION =
  "Souveral is a software development company focused on building modern digital products, web applications, software platforms, and technology solutions with an uncompromising standard of quality.";

// ---------------------- SEO METADATA ----------------------

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Souveral | Software Development, Digital Products & Technology",
    template: "%s | Souveral",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "Souveral",
    "Souveral Network",
    "Souveral software development",
    "software development company",
    "custom software development",
    "web application development",
    "website development",
    "digital product development",
    "business software solutions",
    "technology company",
    "modern web development",
    "software engineering",
    "digital transformation",
    "scalable software platforms",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",

  // Google AdSense publisher account
  other: {
    "google-adsense-account": "ca-pub-5945782633100386",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Souveral | Software Development & Digital Innovation",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Souveral — Software Development and Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Souveral | Software Development & Digital Innovation",
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// ---------------------- ROOT LAYOUT ----------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense account verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-5945782633100386"
        />
      </head>

      <body
        className={`${julius.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* Google AdSense */}
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5945782633100386"
          crossOrigin="anonymous"
        />

        <div className="mx-auto max-w-7xl">
          {/* Desktop cursor effect */}
          <div className="hidden lg:block">
            <CanvasCursor />
          </div>

          <Navbar />
        </div>

        {/* Page Content */}
        {children}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-black px-6 py-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between text-xs text-gray-500 sm:flex-row">
            <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
              <a
                href="/about"
                className="group flex transition hover:text-white"
              >
                Who we are
                <SquareArrowOutUpRight
                  className="text-gray-500 transition group-hover:text-gray-200"
                  size={10}
                />
              </a>

              <a
                href="/cookie-policy"
                className="group flex transition hover:text-white"
              >
                Cookie Policy
                <SquareArrowOutUpRight
                  className="text-gray-500 transition group-hover:text-gray-200"
                  size={10}
                />
              </a>

              <a
                href="/investor"
                className="group flex transition hover:text-white"
              >
                Investor
                <SquareArrowOutUpRight
                  className="text-gray-500 transition group-hover:text-gray-200"
                  size={10}
                />
              </a>

              <a
                href="/privacy-policy"
                className="group flex transition hover:text-white"
              >
                Privacy Policy
                <SquareArrowOutUpRight
                  className="text-gray-500 transition group-hover:text-gray-200"
                  size={10}
                />
              </a>

              <a
                href="/terms-conditions"
                className="group flex transition hover:text-white"
              >
                Terms &amp; Conditions
                <SquareArrowOutUpRight
                  className="text-gray-500 transition group-hover:text-gray-200"
                  size={10}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black text-center text-[10px] text-gray-200 sm:mb-0 sm:text-right">
          © {new Date().getFullYear()} Souveral Network. All rights
          reserved.
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souveral Network",
  description: "One Uncompromising Standard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
        {children}
         {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          {/* Left / Center: copyright */}
          {/* Right: links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            <a href="/about" className="hover:text-white transition flex">
              Who we are<SquareArrowOutUpRight
                  className="text-gray-500 group-hover:text-gray-200 transition"
                  size={10}
                />
            </a>
            <a href="/cookie-policy" className="hover:text-white transition flex">
              Cookie Policy<SquareArrowOutUpRight
                  className="text-gray-500 group-hover:text-gray-200 transition"
                  size={10}
                />
            </a>
            <a href="/investor" className="hover:text-white transition flex">
              Investor<SquareArrowOutUpRight
                  className="text-gray-500 group-hover:text-gray-200 transition"
                  size={10}
                />
            </a>
            <a href="/privacy-policy" className="hover:text-white transition flex">
              Privacy Policy<SquareArrowOutUpRight
                  className="text-gray-500 group-hover:text-gray-200 transition "
                  size={10}
                />
            </a>
            <a href="/terms-conditions" className="hover:text-white transition flex">
              Terms & Conditions<SquareArrowOutUpRight
                  className="text-gray-500 group-hover:text-gray-200 transition"
                  size={10}
                />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-right sm:mb-0 text-[10px] text-gray-200 bg-black">
        © {new Date().getFullYear()} Souveral Network. All rights reserved.
      </div>
      </body>
    </html>
  );
}

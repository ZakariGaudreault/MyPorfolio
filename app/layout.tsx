// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://zakarigaudreault.github.io/MyPorfolio"),
  title: "Zakari Gaudreault St-Jean — Full-Stack Developer",
  description:
    "Full-stack developer in Montreal. Currently building Sinko CRM, a bilingual insurance platform, at Assurancia. React, TypeScript, Supabase, C# and .NET.",
  keywords: [
    "Zakari Gaudreault St-Jean",
    "full-stack developer",
    "software developer",
    "React",
    "TypeScript",
    "Supabase",
    "Next.js",
    "Montreal",
  ],
  authors: [{ name: "Zakari Gaudreault St-Jean" }],
  openGraph: {
    title: "Zakari Gaudreault St-Jean — Full-Stack Developer",
    description:
      "Full-stack developer in Montreal. Currently building Sinko CRM, a bilingual insurance platform, at Assurancia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* ✅ Full-page Background with Waves */}
        <div className="fixed inset-0 -z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#062a1a" />         {/* dark forest green */}
                <stop offset="100%" stopColor="#000000ff" />       {/* light turquoise */}
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#greenGradient)" />

            {/* Layer 1 */}
            <path
              fill="#062718ff"
              fillOpacity="0.4"
              d="M0,64L80,96C160,128,320,192,480,208C640,224,800,192,960,165.3C1120,139,1280,117,1440,160L1440,320L0,320Z"
            />
            {/* Layer 2 */}
            <path
              fill="#0b3e2e"
              fillOpacity="0.3"
              d="M0,128L120,160C240,192,480,256,720,261.3C960,267,1200,213,1320,186.7L1440,160L1440,320L0,320Z"
            />
            {/* Layer 3 */}
            <path
              fill="#0b361cff"
              fillOpacity="0.2"
              d="M0,192L100,208C200,224,400,256,600,256C800,256,1000,224,1200,213.3C1400,203,1440,192,1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>

        {/* Page Content */}
        <Navbar />
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-between p-8 lg:p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

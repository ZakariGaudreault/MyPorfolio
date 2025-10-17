import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Kui Hua Wang",
  description: "Welcome to my world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <html lang="en" className="bg-tertiary">
        <body>
          <Navbar />

          <div className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-8 bg-tertiary">
            {children}
          </div>

          <Footer />
        </body>
      </html>
    </React.StrictMode>
  );
}

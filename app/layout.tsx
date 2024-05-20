import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Head from "@/components/Layout/Head";
import Footer from "@/components/Layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import HeroSection from "@/components/Layout/HeroSection";
import { motion } from "framer-motion";

const inter = Orbitron({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MARVELL</title>
      </head>
      <body
        className={inter.className}
        style={{ overflowX: "hidden" }}
      >
        <div id="hero">
          <HeroSection />
        </div>
        <Head />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import logo from "./images/logo.png";
import { Suspense } from "react";

const inter = Orbitron({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head style={{ overflowX: "hidden" }}>
        <title>MARVELL</title>
      </head>
      <body className={inter.className}>
        <main>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

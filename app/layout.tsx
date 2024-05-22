import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Head from "@/components/Layout/Head";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import logo from "./images/logo.png"

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
    
        <main>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

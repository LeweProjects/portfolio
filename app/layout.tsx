import { Orbitron } from "next/font/google";
import "./style/globals.css";
import "./style/responsive.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Orbitron({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <title>MARVELL</title>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className="selection:bg-red-600">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

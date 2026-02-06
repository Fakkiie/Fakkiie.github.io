// src/app/layout.tsx
import "./globals.css";
import { Outfit, Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const notoJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-notojp" });

export const metadata = {
  title: "Landon Hadre",
  description: "Creating connection through languages and blockchain.",
  applicationName: "Landon Hadre",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${notoJP.variable} font-sans antialiased`}>
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}

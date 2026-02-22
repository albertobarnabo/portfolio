import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alberto Barnabò — AI Engineer",
  description: "Alberto Barnabò — Computer Science Engineer and AI Engineer at the European Central Bank.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`antialiased bg-[#060810] text-[#eef2ff] ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}

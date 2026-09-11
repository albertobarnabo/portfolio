import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { SITE } from "@/data/site";

// Satoshi (Indian Type Foundry via Fontshare, ITF Free Font License — free for commercial use,
// self-hosted as shipped; see ./fonts/LICENSE-Satoshi-FFL.txt). One family carries display and body.
const sans = localFont({
  src: [
    { path: "./fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "./fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-sans",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const description =
  "Applied AI engineer at the European Central Bank: LLM pipelines and agentic applications in production. Open models and datasets on Hugging Face.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — ${SITE.role}`,
  description,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/ffm.jpg", width: 852, height: 852, alt: SITE.name }],
    type: "website",
  },
  twitter: { card: "summary", title: `${SITE.name} — ${SITE.role}`, description, images: ["/ffm.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="theme-night min-h-screen bg-bg font-body text-text antialiased">{children}</body>
    </html>
  );
}

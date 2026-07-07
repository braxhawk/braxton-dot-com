import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: {
    default: "Braxton Hawkins",
    template: "%s — Braxton Hawkins",
  },
  description:
    "Software engineer and DJ. Systems & Sound. Building at the intersection of code and curation.",
  keywords: ["software engineer", "DJ", "music", "portfolio", "TypeScript", "Next.js"],
  authors: [{ name: "Braxton Hawkins" }],
  creator: "Braxton Hawkins",
  metadataBase: new URL("https://braxtonhawkins.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://braxtonhawkins.com",
    siteName: "Braxton Hawkins",
    title: "Braxton Hawkins — Software Engineer & DJ",
    description:
      "Software engineer and DJ. Systems & Sound. Building at the intersection of code and curation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braxton Hawkins",
    description: "Software engineer and DJ. Systems & Sound.",
    creator: "@braxtonhawkins",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

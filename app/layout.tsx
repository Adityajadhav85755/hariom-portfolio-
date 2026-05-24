import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hariom Upadhyay | Financial Analyst",
  description:
    "Financial analyst specializing in equity research, portfolio management, and data-driven investment strategies. Building tools for financial modeling and market analysis.",
  metadataBase: new URL("https://hariom-upadhyay.com"),

  // Basic metadata
  applicationName: "Hariom Upadhyay Portfolio",
  authors: [{ name: "Hariom Upadhyay" }],
  keywords: [
    "Financial Analyst",
    "Equity Research",
    "Portfolio Management",
    "Data Analysis",
    "Financial Modeling",
    "Investment Strategies",
  ],

  openGraph: {
    type: "website",
    url: "https://hariom-upadhyay.com",
    title: "Hariom Upadhyay | Financial Analyst",
    description:
      "Financial analyst specializing in equity research, portfolio management, and data-driven investment strategies. Building tools for financial modeling and market analysis.",
    siteName: "Hariom Upadhyay",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hariom Upadhyay - Portfolio",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/icon2.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://hariom-upadhyay.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}

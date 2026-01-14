import type React from "react";
import type { Metadata } from "next";
import { News_Cycle } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const newsCycle = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-news-cycle",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heartland Bulldogs | Premium Bulldog Supplies & Care",
  description:
    "Where Bulldogs Are Family. Premium supplies, expert care, and everything your bulldog needs to thrive.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/logo.jpeg" }],
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: if you host prater-sans-web as a CSS file, set PRATER_SANS_CSS_URL in .env.local */}
        {process.env.PRATER_SANS_CSS_URL ? (
          <link rel="stylesheet" href={process.env.PRATER_SANS_CSS_URL} />
        ) : null}
      </head>
      <body className={`${newsCycle.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

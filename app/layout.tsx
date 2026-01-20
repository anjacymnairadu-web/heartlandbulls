import type React from "react";
import type { Metadata } from "next";
import { News_Cycle } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { GoogleTagPageView } from "@/components/google-tag";

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
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  return (
    <html lang="en">
      <head>
        {/* Optional: if you host prater-sans-web as a CSS file, set PRATER_SANS_CSS_URL in .env.local */}
        {process.env.PRATER_SANS_CSS_URL ? (
          <link rel="stylesheet" href={process.env.PRATER_SANS_CSS_URL} />
        ) : null}

        {/* Preload self-hosted heading fonts to avoid layout shift during animated headings */}
        <link
          rel="preload"
          href="/fonts/prater-sans-web-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/prater-sans-web.bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {googleTagId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${googleTagId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${newsCycle.variable} font-sans antialiased`}>
        {children}
        {googleTagId ? <GoogleTagPageView googleTagId={googleTagId} /> : null}
        <Analytics />
      </body>
    </html>
  );
}

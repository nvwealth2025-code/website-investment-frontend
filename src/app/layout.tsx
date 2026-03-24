import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

const siteUrl = "https://www.investment.nvwealth.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NV Wealth | Smart Investing for a Better Tomorrow",
    template: "%s | NV Wealth",
  },
  description:
    "Expert-guided wealth management built on data, discipline, and decades of experience. AMFI Registered Mutual Fund Distributor – ARN 351007. Serving clients in Ahmedabad and across India.",
  keywords: [
    "mutual fund distributor Ahmedabad",
    "wealth management Ahmedabad",
    "SIP investment India",
    "financial planning Ahmedabad",
    "NV Wealth",
    "AMFI registered distributor ARN 351007",
    "equity advisory India",
    "IPO advisory",
    "tax planning investment",
    "NRI investment services India",
    "portfolio management service",
    "term insurance planning",
    "fixed income investment",
    "mutual fund SIP",
  ],
  authors: [{ name: "NV Wealth", url: siteUrl }],
  creator: "NV Wealth",
  publisher: "NV Wealth",
  category: "Finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "NV Wealth | Smart Investing for a Better Tomorrow",
    description:
      "Expert-guided wealth management built on data, discipline, and decades of experience. AMFI Registered Mutual Fund Distributor – ARN 351007.",
    url: siteUrl,
    siteName: "NV Wealth",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "NV Wealth – Smart Investing for a Better Tomorrow",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NV Wealth | Smart Investing for a Better Tomorrow",
    description:
      "Expert-guided wealth management. AMFI Registered Mutual Fund Distributor – ARN 351007.",
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

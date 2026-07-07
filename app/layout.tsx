import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const BASE_URL = "https://reddyreal.live";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Reddy Anna Book",
  title: {
    default: "Reddy Anna | Reddy Anna Book | Best Betting ID Provider in India",
    template: "%s | Reddy Anna Book",
  },
  description:
    "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today at Reddy Anna.",
  keywords: [
    "Reddy Anna",
    "Reddy Anna Book",
    "Reddy Anna ID",
    "Reddy Anna Online",
    "Cricket Betting ID",
    "IPL Betting ID",
    "Online Betting ID",
    "Best Betting ID Provider",
    "Reddy Anna Login",
    "Reddy Anna Register",
    "Reddy Anna Demo ID",
    "Buy Cricket ID",
  ],
  authors: [{ name: "Reddy Anna Book", url: BASE_URL }],
  creator: "Reddy Anna Book",
  publisher: "Reddy Anna Book",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "KF29yCwyvubB2-iC827LlL43RaFtoG1d8ZCLDOW2tKQ",
  },
  openGraph: {
    title: "Reddy Anna | Reddy Anna Book | Best Betting ID Provider in India",
    description:
      "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today.",
    url: BASE_URL,
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp",
        width: 1200,
        height: 630,
        alt: "Reddy Anna Book — India's Trusted Cricket Betting ID Provider",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Anna | Reddy Anna Book | Best Betting ID Provider in India",
    description:
      "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today.",
    images: [
      "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp",
    ],
    creator: "@reddyannabook",
    site: "@reddyannabook",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-150x150.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05080f" },
    { media: "(prefers-color-scheme: light)", color: "#05080f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reddy Anna Book",
    url: BASE_URL,
    logo: "https://reddybookwinin.in/wp-content/uploads/2025/06/image-659e7b71ad644.webp",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Reddy Anna Book",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-IN">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#05080f] text-gray-200 antialiased flex flex-col justify-between">
        <Header />
        <main className="flex-1 w-full bg-[#05080f]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GSYPQG92W7"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GSYPQG92W7');
            `,
          }}
        />
      </body>
    </html>
  );
}

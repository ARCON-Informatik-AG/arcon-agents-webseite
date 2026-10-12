import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import ConsentBanner from "@/components/consent-banner";
import { PasswordGate } from "@/components/PasswordGate";
import './globals.css';

const karelia = localFont({
  src: [
    {
      path: "../public/Karelia-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Karelia-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-karelia",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agents-arcon.ch'),
  title: {
    default: "Arcon Agents | KI für Unternehmen aus der Schweiz",
    template: "%s | Arcon Agents"
  },
  description: "Eigene KI-Assistenten, Ihr Unternehmenswissen und individuelle Abacus-Integrationen. In der Schweiz gehostet und persönlich von Arcon betreut.",
  authors: [{ name: "Arcon Informatik AG" }],
  creator: "Arcon Informatik AG",
  publisher: "Arcon Informatik AG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://agents-arcon.ch',
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://agents-arcon.ch',
    siteName: 'Arcon Agents',
    title: 'Arcon Agents | KI für Unternehmen aus der Schweiz',
    description: 'Eigene KI-Assistenten, Ihr Unternehmenswissen und individuelle Abacus-Integrationen. In der Schweiz gehostet und persönlich von Arcon betreut.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arcon Agents – die Schweizer KI-Plattform für Unternehmen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcon Agents | KI für Unternehmen aus der Schweiz',
    description: 'Eigene KI-Assistenten, Ihr Unternehmenswissen und individuelle Abacus-Integrationen. In der Schweiz gehostet und persönlich von Arcon betreut.',
    images: ['/og-image.jpg'],
  },
};

import React from "react";

/* JSON-LD structured data for Organization, WebSite, and SoftwareApplication */
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://agents-arcon.ch/#organization",
    name: "Arcon Informatik AG",
    url: "https://agents-arcon.ch",
    logo: "https://agents-arcon.ch/ARCON_Element_RGB_Green-Light.svg",
    description: "Arcon Informatik AG entwickelt Arcon Agents – die Schweizer KI-Plattform für Unternehmen mit eigenen KI-Assistenten, Unternehmenswissen und individuellen Integrationen.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hinterbergstrasse 24",
      addressLocality: "Steinhausen",
      postalCode: "6312",
      addressCountry: "CH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+41417491000",
      contactType: "customer service",
      availableLanguage: ["de", "fr", "en"],
    },
    sameAs: [],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://agents-arcon.ch/#website",
    url: "https://agents-arcon.ch",
    name: "Arcon Agents",
    publisher: {
      "@id": "https://agents-arcon.ch/#organization",
    },
    inLanguage: "de-CH",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://agents-arcon.ch/#software",
    name: "Arcon Agents",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "KI-Plattform für Unternehmen: eigene KI-Assistenten, Unternehmenswissen als Wissensquelle und individuelle Integration von Abacus und weiteren Geschäftsanwendungen.",
    featureList: [
      "Eigene KI-Assistenten erstellen",
      "Antworten aus Unternehmensunterlagen",
      "Individuelle Integration von Abacus und weiteren Anwendungen",
      "Nutzung verschiedener KI-Modelle in einer Oberfläche",
      "Schweizer Hosting",
      "Persönliche Betreuung durch Arcon",
    ],
    provider: {
      "@id": "https://agents-arcon.ch/#organization",
    },
    countryOfOrigin: {
      "@type": "Country",
      name: "Switzerland",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Analytics IDs must be configured per-environment for agents-arcon.ch; the
  // previous Meeting Agent IDs are not reused. See .env.example.
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <html lang="de-CH">
      <head>
        <JsonLd />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="beforeInteractive"
            />
            <Script id="google-consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied',
                  wait_for_update: 500
                });
                gtag('set', 'ads_data_redaction', true);
                gtag('set', 'url_passthrough', true);
              `}
            </Script>
            <Script id="google-tags" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${karelia.variable} ${geistMono.variable} font-sans antialiased`}>
      <PasswordGate>
        {children}
        <ConsentBanner />
      </PasswordGate>
      </body>
    </html>
  );
}

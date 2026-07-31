import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXOVA Constructions LLP | Building Trust. Creating Futures.",
  description: "Newly established premium commercial construction company delivering civil engineering, structural construction, and infrastructure solutions with quality, precision, and integrity. Specializing in commercial buildings, industrial facilities, warehouses, and office complexes in Kerala, India.",
  keywords: "commercial construction, industrial construction, civil engineering, structural construction, project management, warehouse construction, office buildings, shopping complexes, construction consultancy, NEXOVA Constructions LLP, Kerala construction",
  authors: [{ name: "NEXOVA Constructions LLP" }],
  creator: "NEXOVA Constructions LLP",
  publisher: "NEXOVA Constructions LLP",
  metadataBase: new URL('https://nexovaconstructions.com'),
  openGraph: {
    title: "NEXOVA Constructions LLP | Building Trust. Creating Futures.",
    description: "Newly established premium commercial construction and civil engineering solutions with quality, precision, and integrity.",
    type: "website",
    locale: "en_US",
    siteName: "NEXOVA Constructions LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXOVA Constructions LLP | Building Trust. Creating Futures.",
    description: "Newly established premium commercial construction and civil engineering solutions.",
  },
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
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/logo.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              "name": "NEXOVA Constructions LLP",
              "description": "Newly established premium commercial construction company delivering civil engineering, structural construction, and infrastructure solutions.",
              "url": "https://nexovaconstructions.com",
              "logo": "https://nexovaconstructions.com/logo.jpeg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-70120-15500",
                "contactType": "sales",
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2/1149/a104, 6th Floor Hilite Business Park",
                "addressLocality": "Kozhikode",
                "postalCode": "673014",
                "addressRegion": "Kerala",
                "addressCountry": "IN",
              },
              "sameAs": [
                "https://www.linkedin.com/company/nexovaconstructions"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "11.2588",
                  "longitude": "75.7804"
                },
                "geoRadius": "200000"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

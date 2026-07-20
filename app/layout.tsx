import type { Metadata, Viewport } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm",
  display: "swap",
});

// ── SEO METADATA ───────────────────────────────────────────────
// TODO: swap placeholder phone/email once real business contact info is set up.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.okielinestriping.com"),
  title: {
    default: "Line Striping Oklahoma | Parking Lot Striping | Okie Line Striping",
    template: "%s | Okie Line Striping",
  },
  description:
    "Professional line striping across Oklahoma — parking lots, ADA compliance markings, warehouse floor lines & sports courts. Free quotes, statewide service. Call (539) 368-8266.",
  keywords: [
    "line striping Oklahoma",
    "parking lot striping Oklahoma City",
    "parking lot striping Tulsa",
    "ADA striping Oklahoma",
    "handicap parking striping",
    "warehouse floor striping",
    "pavement marking Oklahoma",
    "parking lot line painting near me",
    "sports court striping Oklahoma",
    "Okie Line Striping",
  ],
  authors: [{ name: "Sean Galvez" }],
  creator: "Okie Line Striping",
  publisher: "Okie Line Striping",
  category: "Local Services",
  alternates: {
    canonical: "https://www.okielinestriping.com",
    languages: {
      "en-US": "https://www.okielinestriping.com",
      "x-default": "https://www.okielinestriping.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Okie Line Striping | Parking Lot & Pavement Striping — Oklahoma",
    description:
      "Professional line striping for parking lots, ADA compliance, warehouses & sports courts. Statewide Oklahoma service. Free quotes.",
    type: "website",
    locale: "en_US",
    url: "https://www.okielinestriping.com",
    siteName: "Okie Line Striping",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Freshly striped parking lot by Okie Line Striping in Oklahoma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Okie Line Striping | Parking Lot Striping — Oklahoma",
    description:
      "Professional line striping for parking lots, ADA compliance, warehouses & sports courts across Oklahoma.",
    images: ["/images/og-cover.jpg"],
  },
  other: {
    "geo.region": "US-OK",
    "geo.placename": "Oklahoma City",
    "geo.position": "35.4676;-97.5164",
    ICBM: "35.4676, -97.5164",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

// ── JSON-LD STRUCTURED DATA ─────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.okielinestriping.com/#business",
  name: "Okie Line Striping",
  image: "https://www.okielinestriping.com/images/og-cover.jpg",
  url: "https://www.okielinestriping.com",
  telephone: "+15393688266",
  email: "sean@okielinestriping.com",
  description:
    "Professional line striping for parking lots, ADA compliance markings, warehouse floor lines, and sports courts across Oklahoma.",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: ["Cash", "Credit Card", "Check"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.4676,
    longitude: -97.5164,
  },
  areaServed: [
    { "@type": "State", name: "Oklahoma" },
    { "@type": "City", name: "Oklahoma City" },
    { "@type": "City", name: "Tulsa" },
    { "@type": "City", name: "Norman" },
    { "@type": "City", name: "Broken Arrow" },
    { "@type": "City", name: "Edmond" },
    { "@type": "City", name: "Lawton" },
    { "@type": "City", name: "Moore" },
    { "@type": "City", name: "Midwest City" },
    { "@type": "City", name: "Stillwater" },
    { "@type": "City", name: "Enid" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Line Striping Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Parking Lot Striping",
          description:
            "Standard parking lot line painting and restriping for retail, office, and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ADA & Handicap Compliance Markings",
          description:
            "ADA-compliant handicap stall markings and access aisle striping to keep your property up to code.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehouse & Facility Floor Lines",
          description:
            "Interior safety lines, aisle markings, and floor striping for warehouses and industrial facilities.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sports Court & Athletic Field Striping",
          description:
            "Basketball courts, playgrounds, and athletic field line painting.",
        },
      },
    ],
  },
  founder: { "@type": "Person", name: "Sean Galvez" },
  slogan: "Straight Lines, Statewide.",
  knowsAbout: [
    "Parking Lot Striping",
    "ADA Compliance Markings",
    "Warehouse Floor Striping",
    "Sports Court Striping",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.okielinestriping.com/#website",
  url: "https://www.okielinestriping.com",
  name: "Okie Line Striping",
  description: "Line striping services across Oklahoma.",
  publisher: { "@id": "https://www.okielinestriping.com/#business" },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}

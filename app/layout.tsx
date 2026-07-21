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
    default: "Line Striping Tulsa, OK | Parking Lot Striping | Okie Line Striping",
    template: "%s | Okie Line Striping",
  },
  description:
    "Professional line striping across Tulsa, Broken Arrow, Owasso & the surrounding area — parking lots, ADA compliance markings, warehouse floor lines & sports courts. Free quotes. Call (539) 368-8266.",
  keywords: [
    "line striping Tulsa",
    "parking lot striping Tulsa",
    "parking lot striping Broken Arrow",
    "parking lot striping Owasso",
    "ADA striping Tulsa",
    "handicap parking striping",
    "warehouse floor striping",
    "pavement marking Tulsa",
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
    title: "Okie Line Striping | Parking Lot & Pavement Striping — Tulsa Metro",
    description:
      "Professional line striping for parking lots, ADA compliance, warehouses & sports courts across Tulsa and the surrounding area. Free quotes.",
    type: "website",
    locale: "en_US",
    url: "https://www.okielinestriping.com",
    siteName: "Okie Line Striping",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Freshly striped parking lot by Okie Line Striping in Tulsa, Oklahoma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Okie Line Striping | Parking Lot Striping — Tulsa, OK",
    description:
      "Professional line striping for parking lots, ADA compliance, warehouses & sports courts across the Tulsa metro.",
    images: ["/images/og-cover.jpg"],
  },
  other: {
    "geo.region": "US-OK",
    "geo.placename": "Tulsa",
    "geo.position": "36.1540;-95.9928",
    ICBM: "36.1540, -95.9928",
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
    "Professional line striping for parking lots, ADA compliance markings, warehouse floor lines, and sports courts across Tulsa and the surrounding area.",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: ["Cash", "Credit Card", "Check"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.154,
    longitude: -95.9928,
  },
  areaServed: [
    { "@type": "City", name: "Tulsa" },
    { "@type": "City", name: "Broken Arrow" },
    { "@type": "City", name: "Owasso" },
    { "@type": "City", name: "Bixby" },
    { "@type": "City", name: "Jenks" },
    { "@type": "City", name: "Sand Springs" },
    { "@type": "City", name: "Sapulpa" },
    { "@type": "City", name: "Collinsville" },
    { "@type": "City", name: "Catoosa" },
    { "@type": "City", name: "Glenpool" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 36.154,
      longitude: -95.9928,
    },
    geoRadius: "30000",
  },
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
  slogan: "Straight Lines, Tulsa to the Suburbs.",
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
  description: "Line striping services across Tulsa, Oklahoma and the surrounding area.",
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

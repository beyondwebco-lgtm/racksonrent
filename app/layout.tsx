import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.racksonrent.com"),
  title: {
    default: "Racks on Rent | Gym Space for Nutrition and Wellness Businesses",
    template: "%s | Racks on Rent"
  },
  description: "Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses looking for product racks, counters, kiosks, and promotional space inside gyms.",
  keywords: [
    "Racks on Rent",
    "Gym space sublet",
    "Nutrition rack rental",
    "Gym display space",
    "Wellness startup expansion",
    "Supplement rack in gym",
    "Fitness business opportunity",
    "Gym monetization"
  ],
  authors: [{ name: "Racks on Rent", url: "https://www.racksonrent.com" }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Racks on Rent | Sublet Space. Share Success.",
    description: "Turn gym space into income. Turn your brand into a gym experience. Connect gym owners with nutrition & wellness brands.",
    url: "https://www.racksonrent.com",
    siteName: "Racks on Rent",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Racks on Rent | Gym Space for Nutrition and Wellness Businesses",
    description: "Connect gym owners with nutrition, fitness, and wellness businesses looking for display racks and counters inside active gyms.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Racks on Rent",
    "url": "https://www.racksonrent.com",
    "logo": "https://www.racksonrent.com/images/logo.png",
    "description": "Sublet space. Share success. Connecting gym owners with nutrition and wellness businesses.",
    "telephone": "+917995424477",
    "email": "racksonrent@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": []
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F8FA] text-[#121826]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AJ Insulation LLC",
    description: "Professional insulation services in Yakima, Selah, Moxee, Sunnyside, and " +
        "surrounding areas.",
    openGraph: {
        title: "AJ Insulation LLC",
        description: "Professional insulation services in Yakima and surrounding areas.",
        url: "https://insulation-site-v-.vercel.app",
        siteName: "AJ Insulation LLC",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Local Business",
        "name": "AJ Insulation LLC",
        "image": "https://aj-insulation-site-v-.vercel.app/AJ%20Logo%20F.png",
        "description": "Professional insulation services in Yakima and surrounding areas.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Yakima",
            "addressRegion": "WA",
            "postalCode": "98902",
            "addressCountry": "US",
        },
        "telephone": "(509) 731-5584",
        "url": "https://aj-insulation-site-v-.vercel.app",
        "areaServed": [
            {
                "@type": "City",
                "name": "Yakima",
            },
            {
                "@type": "City",
                "name": "Selah",
            },
            {
                "@type": "City",
                "name": "Moxee",
            },
            {
                "@type": "City",
                "name": "Sunnyside",
            },
            {
                "@type": "City",
                "name": "Ellensburg",
            }
        ],
        "priceRange": "$$$"
    };

    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
            />
        </head>
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}

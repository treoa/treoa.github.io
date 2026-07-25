import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const instrument = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["italic"],
    variable: "--font-instrument",
    display: "swap"
});

export const metadata: Metadata = {
    metadataBase: new URL(`https://${site.domain}`),
    title: site.title,
    description: site.description,
    openGraph: {
        title: site.title,
        description: site.description,
        url: `https://${site.domain}`,
        type: "website"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
            <body className="grain">{children}</body>
        </html>
    );
}

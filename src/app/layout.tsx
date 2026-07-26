import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
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
        <html lang="en" className={inter.variable}>
            <body>{children}</body>
        </html>
    );
}

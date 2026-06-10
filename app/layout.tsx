import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./metadata";

export const metadata: Metadata = {
    // This file intentionally exports no metadata for Next.js.
    // Metadata is defined in app/metadata.ts.
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const base = siteConfig.url.replace(/\/+$/, "");
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: siteConfig.title,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        url: `${base}/`,
        isAccessibleForFree: true,
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}


import type { Metadata } from "next";

export const siteConfig = {
    // Replace before publishing
    url: "https://example.com",
    title: "Ask AI Browser Assistant",
    description:
        "Turn selected text into an AI conversation instantly. Floating action button, right‑click menu, multi‑AI support, and a privacy-friendly workflow.",
    // Replace before publishing
    githubUrl: "https://github.com/",
    privacyUrl: "/privacy",
    supportUrl: "/support",
    contactUrl: "/contact",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.title,
    title: {
        default: siteConfig.title,
        template: "%s | " + siteConfig.title,
    },
    description: siteConfig.description,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
    },
};


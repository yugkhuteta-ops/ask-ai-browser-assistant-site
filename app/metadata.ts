import type { Metadata } from "next";

export const siteConfig = {
    url: "https://example.com",
    title: "Ask AI Browser Assistant",
    description: "Turn selected text into an AI conversation instantly. Multi-AI support with privacy-first design.",
    githubUrl: "https://github.com/",
    linkedinUrl: "https://www.linkedin.com/in/yug-khunteta-354854374/details/experience/",
    // Replace this with your actual install link
    installUrl: "https://example.com/install",
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
    },
    openGraph: {
        type: "website",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
    },
};
import type { MetadataRoute } from "next";
import { siteConfig } from "./metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url.replace(/\/+$/, "");
    return [
        {
            url: `${base}/`,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${base}/privacy`,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${base}/support`,
            changeFrequency: "monthly",
            priority: 0.4,
        },
        {
            url: `${base}/contact`,
            changeFrequency: "monthly",
            priority: 0.3,
        },
    ];
}



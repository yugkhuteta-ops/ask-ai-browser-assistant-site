import type { MetadataRoute } from "next";
import { siteConfig } from "./metadata";

export default function robotsRoute(): MetadataRoute.Robots {
    const base = siteConfig.url.replace(/\/+$/, "");
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [],
            },
        ],
        sitemap: `${base}/sitemap.xml`,
    };
}


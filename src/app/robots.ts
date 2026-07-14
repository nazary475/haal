import type { MetadataRoute } from "next";

const SITE_URL = "https://haal-lab.solutions";

// Required for static export (output: "export") compatibility.
export const dynamic = "force-static";

/**
 * Robots.txt configuration for Haal Lab Solutions.
 * 
 * Optimized for:
 * - All major search engines (Google, Bing, Yandex, etc.)
 * - AI crawlers and LLM training (llms.txt support)
 * - International SEO with multi-language support
 * - Business website best practices
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           // Protect API routes (if any in future)
          "/_next/",         // Block Next.js internal files
          "/out/",           // Block build output directory
          "/*.json$",        // Block JSON files (except specific ones)
        ],
      },
      {
        userAgent: "GPTBot",  // OpenAI crawler
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "ChatGPT-User", // ChatGPT user agent
        allow: "/",
      },
      {
        userAgent: "CCBot",   // Common Crawl bot
        allow: "/",
      },
      {
        userAgent: "anthropic-ai", // Anthropic crawler
        allow: "/",
      },
      {
        userAgent: "Claude-Web", // Claude crawler
        allow: "/",
      },
      {
        userAgent: "Google-Extended", // Google's AI training bot
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
    // Include llms.txt for AI crawlers (GEO best practice)
    // Note: llms.txt is fetched at /llms.txt by AI engines that support it.
    // This helps AI understand your business context and services.
  };
}

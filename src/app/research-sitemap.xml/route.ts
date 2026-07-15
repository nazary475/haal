import { getAllArticles } from "@/lib/research-articles";

// Required for static export compatibility
export const dynamic = "force-static";

export async function GET() {
  const articles = getAllArticles();
  const baseUrl = "https://haal-lab.solutions";
  const locales = ["en", "de", "fr"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${articles
  .map((article) => {
    return locales
      .map(
        (locale) => `
  <url>
    <loc>${baseUrl}/${locale}/research/${article.id}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    ${locales
      .map(
        (altLocale) => `
    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}/research/${article.id}" />`
      )
      .join("")}
    <news:news>
      <news:publication>
        <news:name>Haal Lab Research</news:name>
        <news:language>${locale}</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${article.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</news:title>
      <news:keywords>${article.tags.join(", ")}</news:keywords>
    </news:news>
  </url>`
      )
      .join("");
  })
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

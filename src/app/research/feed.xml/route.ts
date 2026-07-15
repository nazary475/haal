import { getAllArticles } from "@/lib/research-articles";

// Required for static export compatibility
export const dynamic = "force-static";

export async function GET() {
  const articles = getAllArticles();
  const baseUrl = "https://haal-lab.solutions";
  const buildDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Haal Lab Research Articles</title>
    <link>${baseUrl}/research</link>
    <description>Practical insights on AI deployment, LLM engineering, and production ML systems from Haal Lab</description>
    <language>en</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/research/feed.xml" rel="self" type="application/rss+xml" />
    <copyright>Copyright ${new Date().getFullYear()} Haal Lab. Licensed under CC BY-SA 4.0</copyright>
    <category>Technology</category>
    <category>Artificial Intelligence</category>
    <category>Machine Learning</category>
    <category>Engineering</category>
${articles
  .map(
    (article) => `
    <item>
      <title>${article.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</title>
      <link>${baseUrl}/en/research/${article.id}</link>
      <guid isPermaLink="true">${baseUrl}/en/research/${article.id}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description>${article.excerpt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</description>
      <dc:creator>${article.author || "Haal Lab Team"}</dc:creator>
      <category>${article.category}</category>
${article.tags.map((tag) => `      <category>${tag}</category>`).join("\n")}
      <content:encoded><![CDATA[
        <h1>${article.title}</h1>
        <p>${article.excerpt}</p>
        <p><strong>Read time:</strong> ${article.readTime}</p>
        <p><strong>Category:</strong> ${article.category}</p>
        <p><strong>Tags:</strong> ${article.tags.join(", ")}</p>
        <p><a href="${baseUrl}/en/research/${article.id}">Read full article →</a></p>
      ]]></content:encoded>
    </item>`
  )
  .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

# How to Add Research Articles

This guide explains how to add new research articles to your website.

## Quick Start

All research articles are stored in one file: **`src/lib/research-articles.ts`**

## Adding a New Article

1. Open `src/lib/research-articles.ts`
2. Add a new article object to the `RESEARCH_ARTICLES` array
3. Save the file

### Article Template

```typescript
{
  id: "your-article-slug",  // Used in URL: /research/your-article-slug
  title: "Your Article Title",
  excerpt: "A short description (1-2 sentences) that appears on the listing page and in search results",
  category: "Engineering",  // Options: "Engineering", "Experiments", "Insights"
  date: "2026-01-15",  // Format: YYYY-MM-DD
  readTime: "10 min",
  tags: ["AI", "Machine Learning", "Production"],  // Add relevant tags
  author: "Your Name",  // Optional
  content: `
# Your Article Title

## Introduction

Your article content goes here. You can use:

- Markdown formatting
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- \`inline code\`

### Code Blocks

\`\`\`python
def hello():
    print("Hello, world!")
\`\`\`

### Lists

1. First item
2. Second item
3. Third item

### Tables

| Feature | Status |
|---------|--------|
| Working | ✅ |
| In Progress | 🔄 |

---

**Call to action**: [Contact us](/contact) to learn more.
  `,
},
```

## SEO Benefits

✅ **Search Engine Friendly**: Each article has:
- Unique URL: `/research/article-slug`
- Proper meta title and description
- Open Graph tags for social sharing
- Semantic HTML structure
- Keywords from tags

✅ **Automatic Sitemap**: Articles are automatically included in your sitemap

✅ **Structured Data**: Rich snippets for search engines

## File Locations

- **Article Data**: `src/lib/research-articles.ts`
- **Listing Page**: `src/components/pages/research-page.tsx`
- **Individual Article Page**: `src/app/[locale]/research/[slug]/page.tsx`
- **Article Component**: `src/components/pages/research-article.tsx`

## Example: Adding Your First Article

```typescript
// In src/lib/research-articles.ts, add to RESEARCH_ARTICLES array:

{
  id: "my-first-research",
  title: "How We Built Our AI System",
  excerpt: "A detailed look at the architecture decisions and tradeoffs we made when building our production AI system.",
  category: "Engineering",
  date: "2026-07-15",
  readTime: "8 min",
  tags: ["AI", "Architecture", "Production"],
  author: "Haal Lab Team",
  content: `
# How We Built Our AI System

## The Challenge

We needed to build an AI system that could handle...

## Our Approach

Here's what we did:

1. **Model Selection**: We chose...
2. **Infrastructure**: We deployed on...
3. **Monitoring**: We track...

## Results

After 3 months in production:

- 99.9% uptime
- <200ms response time
- Zero data breaches

## Lessons Learned

Three key takeaways:

- Always validate your data
- Monitor everything
- Keep it simple

---

**Need help with your AI project?** [Get in touch](/contact)
  `,
},
```

## Tips for Great Articles

1. **Clear Title**: Make it descriptive and keyword-rich
2. **Strong Excerpt**: This appears in search results and on the listing page
3. **Relevant Tags**: Use tags that people might search for
4. **Structure**: Use headers (##, ###) to organize content
5. **Call to Action**: End with a link to your contact page
6. **Code Examples**: Use code blocks for technical content
7. **SEO**: Include relevant keywords naturally in your content

## URLs Structure

- Listing page: `https://yoursite.com/research`
- Individual article: `https://yoursite.com/research/article-slug`

The `id` field becomes the URL slug, so choose wisely!

## Categories Explained

- **Engineering**: Technical implementation details, architecture, deployment
- **Experiments**: Tests, comparisons, benchmarks, evaluations
- **Insights**: Analysis, opinions, industry trends, lessons learned

## Questions?

If you need help adding articles, check the existing articles in `research-articles.ts` as examples.

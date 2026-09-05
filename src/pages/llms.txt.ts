import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import bookData from '../data/book.json';
import { networkSites, socialLinks } from '../data/network';

const SITE = 'https://branding.alexmerced.com';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const body = `# branding.alexmerced.com — Build an Unignorable Personal Brand on Proof of Work

> The engineering and practitioner perspective on personal branding, career sovereignty, and learning in public by Alex Merced: Head of Developer Relations at Dremio, inaugural Dremio CEO Award winner (2025), and author of flagship volumes for O'Reilly and Manning.

## The Core Thesis
Stop relying on two-page PDF resumes submitted into automated applicant tracking system lotteries. Professional reputation is not vanity posturing; it is built like reliable software through verifiable proof of work, compound content pipelines, and genuine community generosity.

## Key Principles & The Four Pillars
1. Proof of Work > Posturing: Public artifacts (code repos, benchmarks, tutorials, teardowns) beat assertions and resumes.
2. The Compound Content Engine: The Waterfall Method turns one core project into articles, videos, podcast topics, and talks without burnout.
3. The Cross-Discipline Advantage: Non-linear backgrounds (teaching, finance, sales, arts) are unfair differentiators when combined with tech.
4. Community Through Generosity: Hosting meetups, elevating peers, and teaching what you learn creates authentic career gravity.

## The Companion Book: Reputation as Code
- Title: ${bookData.title}: ${bookData.subtitle}
- Author: ${bookData.author}
- Format: Paperback & Kindle on Amazon (${bookData.trimSize}, ${bookData.pageCount} pages)
- Purchase URL: ${bookData.amazonUrl}
- Synopsis: ${bookData.synopsis}

## Core Site Pages
- [Homepage](${SITE}/): Core thesis, Alex Merced's proof-of-work timeline, 4 pillars, and book spotlight.
- [The Book: Reputation as Code](${SITE}/book): Detailed synopsis, target audience, specifications, and full 14-chapter table of contents.
- [Brand Audit Diagnostic](${SITE}/audit): Interactive 5-question audit evaluating artifact volume, distribution, and inbound gravity.
- [Branding Blog](${SITE}/blog): Essays and playbooks on career strategy and technical advocacy.

## Blog Articles
${sortedPosts.map((post) => `- [${post.data.title}](${SITE}/blog/${post.id}): ${post.data.description}`).join('\n')}

## External Channels & Links
- Substack Newsletter: ${socialLinks.substack}
- LinkedIn: ${socialLinks.linkedin}
- X (Twitter): ${socialLinks.x}
- YouTube (Tech): ${socialLinks.youtube}
- YouTube (Data & AI): ${socialLinks.youtubeData}

## Network Sites
${networkSites.map((site) => `- [${site.title}](${site.url}): ${site.description}`).join('\n')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

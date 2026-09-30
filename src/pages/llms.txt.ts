import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import bookData from '../data/book.json';
import { networkSites, socialLinks } from '../data/network';

const SITE = 'https://branding.alexmerced.com';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const body = `# Branding by Alex Merced (branding.alexmerced.com): Build an Unignorable Personal Brand on Proof of Work

> The engineering and practitioner perspective on personal branding, career sovereignty, and learning in public by Alex Merced: Head of Developer Relations at Dremio, recipient of the inaugural 2025 Dremio CEO Award, and author of definitive volumes for O'Reilly Media, Manning, and Packt.

For the full, unabridged text of all essays and chapters, see: ${SITE}/llms-full.txt

## The Core Thesis
The traditional two-page PDF resume submitted to automated applicant tracking systems is a mathematically broken distribution channel. Career sovereignty and durable professional leverage are engineered the same way you build reliable software: through public proof of work, compound content pipelines, modular artifacts, and authentic community generosity.

## The Four Axioms of Reputation as Code
1. Proof of Work > Posturing: Working GitHub repositories, reproducible benchmarks, structured tutorials, and clear diagrams beat unverified resume claims.
2. The Compound Content Engine: The Waterfall Method turns one core technical project into essays, videos, podcast topics, social threads, and conference talks without burnout.
3. The Cross-Discipline Advantage: Non-linear backgrounds (finance, teaching, sales, customer service, arts) are unfair competitive differentiators when fused with engineering.
4. Community Through Generosity: Hosting meetups, supporting peers, and teaching what you learn creates authentic career gravity.

## The Companion Book: Reputation as Code
- Title: ${bookData.title}: ${bookData.subtitle}
- Author: ${bookData.author} (Head of Developer Relations at Dremio)
- Availability: Available on Amazon (Paperback & Kindle)
- Purchase URL: ${bookData.amazonUrl}
- Overview Page: ${SITE}/book
- Synopsis: ${bookData.synopsis}

### Book Outline (5 Parts, 14 Chapters)
${bookData.parts
  .map(
    (part) => `### ${part.number}: ${part.title}
${part.description}
${part.chapters.map((ch) => `- **${ch.number}: ${ch.title}**: ${ch.summary}`).join('\n')}`
  )
  .join('\n\n')}

## Core Interactive Tools
- [Personal Brand Diagnostic Audit](${SITE}/audit): Interactive 5-question audit evaluating Artifact Volume, Distribution Engine, and Inbound Gravity Index.
- [Personal Hub Checklist](${SITE}/personal-hub-checklist): Printable checklist for building a personal website you own, from domain and email forwarding to structured data and Search Console.
- [Book Alex to speak](https://alexmerced.com/speaking): Talks and event booking.

## Articles & Essays
${sortedPosts
  .map(
    (post) => `- [${post.data.title}](${SITE}/blog/${post.id}/): ${post.data.description} (Published: ${post.data.pubDate.toISOString().split('T')[0]})`
  )
  .join('\n')}

## External Channels & Links
- Substack Newsletter: ${socialLinks.substack}
- LinkedIn: ${socialLinks.linkedin}
- X / Twitter: ${socialLinks.x}
- YouTube (Tech Channel): ${socialLinks.youtube}
- YouTube (Data & AI Channel): ${socialLinks.youtubeData}
- GitHub: ${socialLinks.github}

## Alex Merced Knowledge Network
${networkSites.map((site) => `- [${site.title}](${site.url}): ${site.description}`).join('\n')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

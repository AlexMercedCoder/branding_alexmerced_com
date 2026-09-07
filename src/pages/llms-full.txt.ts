import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import bookData from '../data/book.json';
import { networkSites, socialLinks } from '../data/network';

const SITE = 'https://branding.alexmerced.com';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const postSections = sortedPosts
    .map(
      (p) => `================================================================================
ARTICLE: ${p.data.title}
URL: ${SITE}/blog/${p.id}/
DATE: ${p.data.pubDate.toISOString().split('T')[0]}
TAGS: ${p.data.tags.join(', ')}
SUMMARY: ${p.data.description}
================================================================================

${p.body}
`
    )
    .join('\n\n');

  const fullText = `# branding.alexmerced.com: Complete Knowledge Base & Text Corpus
Author: Alex Merced (Head of Developer Relations at Dremio)
Site: ${SITE}
Generated: ${new Date().toISOString()}

This document contains the complete, unabridged text corpus of branding.alexmerced.com, including all published essays, frameworks, and structural overviews of the companion book "Reputation as Code: How Technical Professionals Build Career Sovereignty Through Proof of Work".

--------------------------------------------------------------------------------
ABOUT THE AUTHOR
--------------------------------------------------------------------------------
Alex Merced is Head of Developer Relations at Dremio and recipient of the 2025 Dremio CEO Award. He is the co-author of "Apache Iceberg: The Definitive Guide" (O'Reilly), "Apache Polaris: The Definitive Guide" (O'Reilly), and "Architecting an Apache Iceberg Lakehouse" (Manning).

His path into software engineering is non-linear: he spent a decade in financial licensing education and grassroots civic campaigns in New York before attending a software engineering immersive at age thirty-four. Over his tech career, he has published more than 1,000 video tutorials, hosted hundreds of podcast episodes, and built dozens of open-source libraries.

--------------------------------------------------------------------------------
BOOK: REPUTATION AS CODE
--------------------------------------------------------------------------------
Title: ${bookData.title}: ${bookData.subtitle}
Author: ${bookData.author}
Page Count: ${bookData.pageCount} Pages (6" x 9" Trade Paperback, EPUB 3)
Status: ${bookData.amazonStatus}
Synopsis: ${bookData.synopsis}

${bookData.parts
  .map(
    (part) => `### ${part.number}: ${part.title}
${part.description}
${part.chapters.map((ch) => `* ${ch.number}: ${ch.title}
  ${ch.summary}`).join('\n')}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
PUBLISHED ESSAYS & ARTICLES (UNABRIDGED)
--------------------------------------------------------------------------------

${postSections}

--------------------------------------------------------------------------------
OFFICIAL CHANNELS
--------------------------------------------------------------------------------
- Substack: ${socialLinks.substack}
- LinkedIn: ${socialLinks.linkedin}
- X / Twitter: ${socialLinks.x}
- YouTube (Tech): ${socialLinks.youtube}
- YouTube (Data): ${socialLinks.youtubeData}
- GitHub: ${socialLinks.github}
`;

  return new Response(fullText, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://branding.alexmerced.com';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const itemsXml = sorted
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${SITE}/blog/${post.id}/</link>
      <guid isPermaLink="true">${SITE}/blog/${post.id}/</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      ${post.data.tags.map((t) => `<category>${t}</category>`).join('\n      ')}
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>branding.alexmerced.com — Personal Branding on Proof of Work</title>
    <link>${SITE}/</link>
    <description>Alex Merced's essays and frameworks on technical personal branding, proof of work, and career sovereignty.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

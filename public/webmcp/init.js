/**
 * WebMCP setup for branding.alexmerced.com.
 *
 * Loads the shared Alex Merced tool layer and opts into the packs this site
 * needs. The library and its tools are read only, and do nothing in browsers
 * without WebMCP support.
 *
 * Do not edit the vendored alex-merced-webmcp.js beside this file: it is synced
 * from alexmerced.com. Change the packs here instead.
 */
(function () {
  'use strict';
  if (!window.AlexMercedWebMCP) return;
  var brandingTools = [
    {
      name: 'get_reputation_as_code_synopsis',
      title: 'Get Reputation as Code Synopsis',
      description: 'Returns the core thesis, target audience, chapter outline, and purchase links for Alex Merced\'s book "Reputation as Code: How Technical Professionals Build Career Sovereignty Through Proof of Work".',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false
      },
      execute: function () {
        return Promise.resolve({
          title: 'Reputation as Code: How Technical Professionals Build Career Sovereignty Through Proof of Work',
          author: 'Alex Merced',
          asin: 'B0HHXV4L42',
          url: 'https://branding.alexmerced.com/book',
          amazonUrl: 'https://www.amazon.com/dp/B0HHXV4L42',
          synopsis: 'A systems-driven blueprint for technical professionals and career switchers to build career sovereignty through public proof of work, compound distribution, and authentic community.',
          coreThesis: 'Resumes are unverified declarations; public artifacts (code repositories, technical writing, podcasts, benchmarks) are inspectable evidence that convert career development from outbound job lotteries into inbound gravity.',
          targetAudience: 'Software engineers, developer advocates, data engineers, solutions architects, and technical career switchers.',
          keyChapters: [
            '1. The Death of the Traditional Resume',
            '2. The Physics of Public Proof of Work',
            '3. Finding Your Niche of One',
            '4. The Compound Content Distribution Engine',
            '5. Engineering Inbound Opportunity Gravity',
            '6. Relationship Inversion Through Technical Podcasting',
            '7. The Technical Author\'s Playbook (From Blog to Book Deal)',
            '8. Achieving Career Sovereignty'
          ]
        });
      }
    },
    {
      name: 'get_personal_branding_principles',
      title: 'Get Personal Branding Principles',
      description: 'Returns the five core engineering-grounded pillars of Alex Merced\'s Reputation as Code personal branding framework.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false
      },
      execute: function () {
        return Promise.resolve({
          framework: 'Reputation as Code',
          author: 'Alex Merced',
          principles: [
            {
              pillar: 1,
              name: 'Proof of Work Over Declarations',
              summary: 'Declarations require unearned trust. Inspectable artifacts (repos, tutorials, benchmarks) prove competence before the first conversation.'
            },
            {
              pillar: 2,
              name: 'Compound Distribution Systems',
              summary: 'Treat technical content like software: build repeatable distribution engines where single artifacts compound across formats and platforms.'
            },
            {
              pillar: 3,
              name: 'The Niche of One',
              summary: 'Intersect two or three distinct technical disciplines (e.g. Apache Iceberg + Developer Advocacy + Generative AI) to eliminate competition.'
            },
            {
              pillar: 4,
              name: 'Relationship Inversion',
              summary: 'Invert networking by offering value first (e.g. hosting a podcast to spotlight others) instead of cold asymmetric asks.'
            },
            {
              pillar: 5,
              name: 'Career Sovereignty',
              summary: 'Build a durable, portable professional reputation that belongs to you, decoupled from any single employer or hiring cycle.'
            }
          ]
        });
      }
    },
    {
      name: 'get_brand_audit_checklist',
      title: 'Get Personal Brand Audit Diagnostic Checklist',
      description: 'Returns the five diagnostic evaluation criteria used on branding.alexmerced.com/audit to assess personal brand gravity.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false
      },
      execute: function () {
        return Promise.resolve({
          auditToolUrl: 'https://branding.alexmerced.com/audit',
          criteria: [
            '1. Public Artifact Footprint: Depth and discoverability of public code, articles, and talks.',
            '2. Compound Distribution: Existence of automated or systematic content syndication pipelines.',
            '3. Niche Definition: Clarity of your distinct technical intersection and value proposition.',
            '4. Network & Relationship Inversion: Frequency of offering platforms to peers vs. cold outbound outreach.',
            '5. Inbound Opportunity Gravity: Ratio of inbound opportunities (speaking, recruiting, consulting) to cold applications.'
          ]
        });
      }
    }
  ];

  window.AlexMercedWebMCP.init({
    site: 'branding.alexmerced.com',
    packs: ['biography', 'books'],
    tools: brandingTools
  });
})();

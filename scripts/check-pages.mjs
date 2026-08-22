import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { externalLinkMap, pageExpansions, pageQualityLayers, pages } from '../src/content.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const siteUrl = 'https://robertwei20.github.io/iron-nest-wiki';

const home = {
  title: 'Iron Nest Wiki - Guide, Missions & Calculator',
  description:
    'Fan-made Iron Nest wiki for beginner guides, mission walkthroughs, triangulation, shell choices, counter-battery tips, endings, and roadmap updates.',
  keywords: 'Iron Nest, guide, missions, triangulation, shell types, endings, calculator',
};

const guideIndex = {
  title: 'All Iron Nest Guides - Iron Nest Wiki',
  description:
    'Browse every Iron Nest guide page, including beginner help, missions, triangulation, counter-battery, shell types, endings, multiplayer, and roadmap notes.',
  keywords: 'Iron Nest guides, Iron Nest wiki, Iron Nest walkthrough, Iron Nest missions',
  h2Count: 4,
};

const checks = [
  routeCheck('/', join(root, 'index.html'), home),
  routeCheck('/guides/', join(root, 'guides', 'index.html'), guideIndex),
  ...pages.map((page) =>
    routeCheck(`/${page.slug}/`, join(root, page.slug, 'index.html'), {
      title: `${page.title} - Iron Nest Wiki`,
      description: page.description,
      keywords: `${page.keyword}, Iron Nest, guide, missions, triangulation, shell types`,
      h1: page.title,
      h2Count: page.sections.length + 2,
    }),
  ),
];

const failures = [];

for (const item of checks) {
  if (!item.title || item.title.length > 60) {
    failures.push(`${item.path} title length is ${item.title?.length || 0}`);
  }
  if (!item.description || item.description.length < 50 || item.description.length > 165) {
    failures.push(`${item.path} description length is ${item.description?.length || 0}`);
  }
  if (item.h2Count !== undefined && item.h2Count < 3) {
    failures.push(`${item.path} needs at least 3 H2 sections`);
  }
}

await checkStaticSeoFiles();

const slugs = new Set(pages.map((page) => page.slug));
if (slugs.size !== pages.length) failures.push('duplicate page slugs found');
if (pages.length !== 12) failures.push(`expected 12 researched guide pages, found ${pages.length}`);

for (const page of pages) {
  const expansion = pageExpansions[page.slug];
  const quality = pageQualityLayers[page.slug];
  if (!expansion) {
    failures.push(`${page.slug} is missing expanded content`);
    continue;
  }
  if (!quality) {
    failures.push(`${page.slug} is missing quality-layer content`);
    continue;
  }
  if ((expansion.steps || []).length < 6) failures.push(`${page.slug} needs at least 6 step items`);
  if ((expansion.checklist || []).length < 5) failures.push(`${page.slug} needs at least 5 checklist items`);
  if ((expansion.mistakes || []).length < 4) failures.push(`${page.slug} needs at least 4 mistake items`);
  if ((expansion.faq || []).length < 3) failures.push(`${page.slug} needs at least 3 FAQ items`);
  if ((quality.quickReference || []).length < 4) failures.push(`${page.slug} needs at least 4 quick-reference items`);
  if ((quality.troubleshooting || []).length < 3) failures.push(`${page.slug} needs at least 3 troubleshooting items`);
  if ((quality.sourceBoundary?.official || []).length < 1) failures.push(`${page.slug} needs official/source verified notes`);
  if ((quality.sourceBoundary?.guideSourced || []).length < 1) failures.push(`${page.slug} needs guide-sourced boundary notes`);
  if ((quality.sourceBoundary?.avoid || []).length < 1) failures.push(`${page.slug} needs overclaim-avoidance notes`);
  const wordCount = countPageWords(page, expansion, quality);
  if (wordCount < 700) failures.push(`${page.slug} content is too thin: ${wordCount} words`);
  for (const source of page.sources) {
    if (!externalLinkMap[source]) failures.push(`${page.slug} source "${source}" is missing an external link`);
  }
}

if (failures.length) {
  console.error('Page check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Checked ${checks.length} routes: SEO, sitemap, robots, GA placeholder, source links, article depth, and quality-layer content passed.`,
);

function routeCheck(path, filePath, item) {
  return {
    path,
    filePath,
    ...item,
  };
}

function countPageWords(page, expansion, quality) {
  const sourceBoundary = quality.sourceBoundary || {};
  const text = [
    page.title,
    page.keyword,
    page.description,
    page.summary,
    ...(page.sections || []).flatMap((section) => [section.heading, section.body]),
    ...(expansion.steps || []),
    ...(expansion.checklist || []),
    ...(expansion.mistakes || []),
    ...(expansion.faq || []).flatMap((item) => [item.q, item.a]),
    ...(quality.quickReference || []).flat(),
    ...(quality.troubleshooting || []).flatMap((item) => [item.symptom, item.likelyCause, item.fix]),
    ...(sourceBoundary.official || []),
    ...(sourceBoundary.guideSourced || []),
    ...(sourceBoundary.avoid || []),
  ].join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

async function checkStaticSeoFiles() {
  const rootHtml = await readRequiredFile(join(root, 'index.html'), 'homepage static HTML');
  const sitemap = await readRequiredFile(join(root, 'sitemap.xml'), 'sitemap.xml');
  const robots = await readRequiredFile(join(root, 'robots.txt'), 'robots.txt');
  const notFound = await readRequiredFile(join(root, '404.html'), '404.html');

  for (const route of checks) {
    const html = await readRequiredFile(route.filePath, `${route.path} static HTML`);
    const canonical = `${siteUrl}${route.path}`;

    expectIncludes(html, `<title>${escapeHtml(route.title)}</title>`, `${route.path} static title`);
    expectIncludes(
      html,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
      `${route.path} static description`,
    );
    expectIncludes(html, '<meta name="robots" content="index, follow" />', `${route.path} robots meta`);
    expectIncludes(html, `<link rel="canonical" href="${canonical}" />`, `${route.path} canonical`);
    expectIncludes(html, `<meta property="og:url" content="${canonical}" />`, `${route.path} og:url`);
    expectIncludes(sitemap, `<loc>${canonical}</loc>`, `${route.path} sitemap loc`);
  }

  const sitemapUrlCount = (sitemap.match(/<url>/g) || []).length;
  if (sitemapUrlCount !== checks.length) {
    failures.push(`sitemap.xml has ${sitemapUrlCount} URLs, expected ${checks.length}`);
  }
  expectIncludes(robots, 'User-agent: *', 'robots user agent');
  expectIncludes(robots, 'Allow: /', 'robots allow rule');
  expectIncludes(robots, `Sitemap: ${siteUrl}/sitemap.xml`, 'robots sitemap URL');
  expectIncludes(notFound, '<meta name="robots" content="noindex, follow" />', '404 noindex robots meta');
  expectIncludes(notFound, `<link rel="canonical" href="${siteUrl}/" />`, '404 canonical fallback');

  if (!rootHtml.includes("window.__GA_MEASUREMENT_ID__ = ''")) {
    failures.push('homepage is missing the GA measurement ID placeholder');
  }
  if (!rootHtml.includes('/^G-[A-Z0-9]+$/.test(gaId)')) {
    failures.push('homepage GA loader does not guard against an empty or invalid measurement ID');
  }
  if (!rootHtml.includes('googletagmanager.com/gtag/js?id=${gaId}')) {
    failures.push('homepage is missing the Google Analytics loader code');
  }

  for (const [name, text] of [
    ['sitemap.xml', sitemap],
    ['robots.txt', robots],
  ]) {
    if (/localhost|127\.0\.0\.1|example\.com|vercel\.app|netlify\.app/i.test(text)) {
      failures.push(`${name} contains a stale local or temporary deployment domain`);
    }
  }
}

async function readRequiredFile(path, label) {
  try {
    return await readFile(path, 'utf8');
  } catch (error) {
    failures.push(`${label} could not be read: ${error.message}`);
    return '';
  }
}

function expectIncludes(text, expected, label) {
  if (!text.includes(expected)) failures.push(`${label} missing`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { pages } from '../src/content.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const shell = await readFile(join(root, 'index.html'), 'utf8');
const siteUrl = 'https://robertwei20.github.io/iron-nest-wiki';
const lastModified = '2026-08-22';

const homeSeo = {
  path: '/',
  outputDirectory: root,
  title: 'Iron Nest Wiki - Guide, Missions & Calculator',
  description:
    'Fan-made Iron Nest wiki for beginner guides, mission walkthroughs, triangulation, shell choices, counter-battery tips, endings, and roadmap updates.',
  keywords: 'Iron Nest, guide, missions, triangulation, shell types, endings, calculator',
};

const guideIndexSeo = {
  path: '/guides/',
  outputDirectory: join(root, 'guides'),
  title: 'All Iron Nest Guides - Iron Nest Wiki',
  description:
    'Browse every Iron Nest guide page, including beginner help, missions, triangulation, counter-battery, shell types, endings, multiplayer, and roadmap notes.',
  keywords: 'Iron Nest guides, Iron Nest wiki, Iron Nest walkthrough, Iron Nest missions',
};

const privacySeo = {
  path: '/privacy/',
  outputDirectory: join(root, 'privacy'),
  title: 'Privacy Policy - Iron Nest Wiki',
  description:
    'Privacy policy for Iron Nest Wiki, including how this fan-made guide site uses Google Analytics and external links.',
  keywords: 'Iron Nest Wiki privacy, Google Analytics, fan-made guide site',
  robots: 'noindex, follow',
};

const articleRoutes = pages.map((page) => ({
  path: `/${page.slug}/`,
  outputDirectory: join(root, page.slug),
  title: `${page.title} - Iron Nest Wiki`,
  description: page.description,
  keywords: `${page.keyword}, Iron Nest, guide, missions, triangulation, shell types`,
}));

const publicRoutes = [homeSeo, guideIndexSeo, ...articleRoutes];
const staticRoutes = [...publicRoutes, privacySeo];

const notFoundSeo = {
  path: '/',
  outputDirectory: root,
  fileName: '404.html',
  title: 'Iron Nest Guide Not Found - Iron Nest Wiki',
  description: 'The requested Iron Nest guide page was not found. Return to the fan-made guide library.',
  keywords: 'Iron Nest guide, Iron Nest wiki',
  robots: 'noindex, follow',
};

for (const route of staticRoutes) {
  await mkdir(route.outputDirectory, { recursive: true });
  await writeFile(join(route.outputDirectory, 'index.html'), renderSeoShell(route));
}

await writeFile(join(root, '404.html'), renderSeoShell(notFoundSeo));
await writeFile(join(root, 'sitemap.xml'), renderSitemap(publicRoutes));
await writeFile(join(root, 'robots.txt'), renderRobots());

console.log(
  `Synced ${staticRoutes.length} static route entry files, ${publicRoutes.length} sitemap URLs, 404.html, sitemap.xml, and robots.txt.`,
);

function renderSeoShell(route) {
  const canonicalUrl = publicUrlForPath(route.path);
  const robots = route.robots || 'index, follow';
  let html = shell;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = replaceNamedMeta(html, 'description', route.description);
  html = replaceNamedMeta(html, 'keywords', route.keywords);
  html = replaceNamedMeta(html, 'robots', robots);
  html = replaceManagedSeoBlock(html, {
    title: route.title,
    description: route.description,
    canonicalUrl,
  });

  return html;
}

function replaceNamedMeta(html, name, content) {
  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+name="${name}"[\\s\\S]*?>`, 'i');

  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace(/<\/title>/i, `</title>\n    ${tag}`);
}

function replaceManagedSeoBlock(html, route) {
  const block = [
    '<!-- managed-seo-start -->',
    `    <link rel="canonical" href="${escapeHtml(route.canonicalUrl)}" />`,
    '    <meta property="og:type" content="website" />',
    '    <meta property="og:site_name" content="Iron Nest Wiki" />',
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(route.canonicalUrl)}" />`,
    '    <!-- managed-seo-end -->',
  ].join('\n');

  return html.replace(/<!-- managed-seo-start -->[\s\S]*?<!-- managed-seo-end -->/i, block);
}

function renderSitemap(routes) {
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${publicUrlForPath(route.path)}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function publicUrlForPath(path) {
  return `${siteUrl}${path}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

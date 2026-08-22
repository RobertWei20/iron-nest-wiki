import { externalLinkMap, pageExpansions, pageQualityLayers, pages } from '../src/content.js';

const home = {
  title: 'Iron Nest Wiki - Guide, Missions & Calculator',
  description:
    'Fan-made Iron Nest wiki for beginner guides, mission walkthroughs, triangulation, shell choices, counter-battery tips, endings, and roadmap updates.',
};

const guideIndex = {
  title: 'All Iron Nest Guides - Iron Nest Wiki',
  description:
    'Browse every Iron Nest guide page, including beginner help, missions, triangulation, counter-battery, shell types, endings, multiplayer, and roadmap notes.',
  h2Count: 4,
};

const checks = [
  ['/', home],
  ['/guides/', guideIndex],
  ...pages.map((page) => [
    `/${page.slug}/`,
    {
      title: `${page.title} - Iron Nest Wiki`,
      description: page.description,
      h1: page.title,
      h2Count: page.sections.length + 2,
    },
  ]),
];

const failures = [];

for (const [path, item] of checks) {
  if (!item.title || item.title.length > 60) {
    failures.push(`${path} title length is ${item.title?.length || 0}`);
  }
  if (!item.description || item.description.length < 50 || item.description.length > 165) {
    failures.push(`${path} description length is ${item.description?.length || 0}`);
  }
  if (item.h2Count !== undefined && item.h2Count < 3) {
    failures.push(`${path} needs at least 3 H2 sections`);
  }
}

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

if (failures.length) {
  console.error('Page check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked ${checks.length} routes: SEO, source links, article depth, and quality-layer content passed.`);

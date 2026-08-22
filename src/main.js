import { externalLinkMap, officialLinks, pageExpansions, pageQualityLayers, pages, sourceLinks } from './content.js';

const root = document.querySelector('#root');
const discoveredBasePath = new URL('../', import.meta.url).pathname.replace(/\/$/, '');
const APP_BASE_PATH = window.__APP_BASE_PATH__ || (discoveredBasePath === '/' ? '' : discoveredBasePath);
const icons = {
  book: 'B',
  flag: 'F',
  target: '+',
  crosshair: 'X',
  shield: '!',
  gauge: 'G',
  calculator: '=',
  warning: '!',
  radio: 'R',
  map: 'M',
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

function pageLink(page) {
  return sitePath(`/${page.slug}/`);
}

function sitePath(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${APP_BASE_PATH}${normalized}`;
}

function getRoute() {
  const pathname =
    APP_BASE_PATH && window.location.pathname.startsWith(`${APP_BASE_PATH}/`)
      ? window.location.pathname.slice(APP_BASE_PATH.length)
      : window.location.pathname;
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (!slug) return { type: 'home' };
  if (slug === 'guides') return { type: 'guides', page: guideIndexSeo };
  const page = pages.find((item) => item.slug === slug);
  if (page) return { type: 'article', page };
  return { type: 'not-found', page: notFoundSeo };
}

const guideIndexSeo = {
  title: 'All Iron Nest Guides',
  keyword: 'iron nest guides',
  description:
    'Browse every Iron Nest guide page, including beginner help, missions, triangulation, counter-battery, shell types, endings, multiplayer, and roadmap notes.',
};

const notFoundSeo = {
  title: 'Page Not Found',
  keyword: 'iron nest guide',
  description: 'The requested Iron Nest guide page was not found.',
};

function setSeo(page) {
  const title = page?.title ? `${page.title} - Iron Nest Wiki` : 'Iron Nest Wiki - Guide, Missions & Calculator';
  document.title = title.length <= 60 ? title : page.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      'content',
      page?.description ||
        'Fan-made Iron Nest wiki for beginner guides, mission walkthroughs, triangulation, shell choices, counter-battery tips, endings, and roadmap updates.',
    );
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute('content', `${page?.keyword || 'Iron Nest'}, guide, missions, triangulation, shell types`);
}

function header() {
  const navLinks = [
    ['Home', sitePath('/')],
    ['Guides', sitePath('/guides/')],
    ['Missions', sitePath('/guides/#missions')],
    ['Mechanics', sitePath('/guides/#mechanics')],
    ['Roadmap', sitePath('/iron-nest-roadmap/')],
  ];

  return `
    <header class="site-header">
      <a class="brand" href="${sitePath('/')}">
        <span class="brand-mark">IN</span>
        <span>
          <strong>Iron Nest Wiki</strong>
          <small>Fan-made field manual</small>
        </span>
      </a>
      <button class="icon-button mobile-toggle" type="button" aria-label="Toggle navigation">☰</button>
      <nav>
        ${navLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </nav>
    </header>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Fan-Made Heavy Turret Guide</p>
          <h1>
            <span>IRON NEST</span>
            <small>Heavy Turret Simulator Wiki</small>
          </h1>
          <p class="hero-lede">
            Operate a colossal dieselpunk artillery machine, turn field reports into firing solutions, and make every
            shell count. This wiki organizes beginner routes, mission notes, triangulation, shell choices,
            counter-battery pressure, endings, and roadmap updates from verified sources.
          </p>
          <p class="hero-disclaimer">Independent fan-made guide. Not affiliated with the developers, publishers, Steam, or GOG.</p>
          <div class="hero-actions">
            <a class="button primary" href="${sitePath('/iron-nest-beginner-guide/')}">Start Beginner Guide <span aria-hidden="true">></span></a>
            <a class="button secondary" href="${sitePath('/guides/')}">Open Guides</a>
            <a class="button ghost" href="${sitePath('/iron-nest-calculator/')}">Calculator Notes</a>
          </div>
        </div>
        <div class="command-panel" aria-label="Iron Nest quick facts">
          <div class="tactical-visual" aria-hidden="true">
            <span class="range-ring ring-a"></span>
            <span class="range-ring ring-b"></span>
            <span class="range-line horizontal"></span>
            <span class="range-line vertical"></span>
            <span class="range-line diagonal"></span>
            <span class="target-dot"></span>
            <span class="trajectory"></span>
          </div>
          <div class="panel-header"><span class="icon-symbol">G</span><span>Operator Brief</span></div>
          ${['Launched Aug 6, 2026', 'Windows PC', 'Single-player', '30x Ammo Types & Abilities', '15x Regions']
            .map((stat) => `<div class="stat-row"><span>${stat}</span><i></i></div>`)
            .join('')}
        </div>
      </div>
    </section>

    <section class="band">
      <div class="section-heading">
        <p class="eyebrow">Start Here</p>
        <h2>Your First Iron Nest Sortie</h2>
      </div>
      <div class="card-grid">
        ${pages
          .slice(1, 5)
          .map((page, index) => guideCard(page, index + 1))
          .join('')}
      </div>
    </section>

    <section class="about-band">
      <div>
        <p class="eyebrow">What Is Iron Nest?</p>
        <h2>A war-room puzzle disguised as heavy artillery</h2>
        <p>
          IRON NEST is a first-person heavy-artillery simulator built around a massive dieselpunk war machine. You
          receive orders through typewriter-like terminals, plot targets on a tactical map, run firing data through a
          ballistic calculator, then manually operate the turret.
        </p>
        <p>
          The game blends tactical problem-solving, mechanical operation, and strategic decisions. Official materials
          describe alternate-history Spain in the late 1920s, procedural objectives, challenge modes, leaderboards,
          unlockable ammunition and abilities, and a handcrafted story.
        </p>
      </div>
      <dl class="fact-grid">
        ${[
          ['Developer', 'Nick Nieuwoudt, Dominik Latos'],
          ['Platform', 'Windows PC'],
          ['Genre', 'Action, Indie, Simulation'],
          ['Release Date', 'Aug 6, 2026'],
          ['Game Mode', 'Single-player'],
          ['Steam Achievements', '33'],
        ]
          .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
          .join('')}
      </dl>
    </section>

    ${guideIndex(true)}

    ${officialResources()}

    <section class="final-cta">
      <p class="eyebrow">Ready To Command The Iron Nest?</p>
      <h2>Start with the beginner guide, then work outward.</h2>
      <p>
        Follow the core workflow first. Once the first shots make sense, move into mission walkthroughs, shell choices,
        counter-battery tactics, endings, and roadmap questions.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="${sitePath('/iron-nest-beginner-guide/')}">Read the Beginner Guide</a>
        <a class="button secondary" href="${officialLinks.steam}" target="_blank" rel="noopener noreferrer">Play on Steam <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  `;
}

function officialResources() {
  const resources = [
    ['Official Game Site', officialLinks.official, 'Game overview, official positioning, media, and community links.'],
    ['Steam Store Page', officialLinks.steam, 'Release status, platform labels, achievements, and player-facing store data.'],
    ['GOG Store Page', officialLinks.gog, 'Second platform source for current availability and basic game details.'],
    ['Official YouTube', officialLinks.youtube, 'Trailers and official gameplay media without rehosting copyrighted videos.'],
    ['Official FAQ / Roadmap', officialLinks.roadmap, 'Developer FAQ for roadmap, multiplayer, console, VR, and co-op notes.'],
  ];

  return `
    <section class="band resource-band">
      <div class="section-heading">
        <p class="eyebrow">Allowed External Links</p>
        <h2>Official resources worth opening</h2>
      </div>
      <div class="resource-grid">
        ${resources
          .map(
            ([title, href, body]) => `
              <a class="resource-card" href="${href}" target="_blank" rel="noopener noreferrer">
                <strong>${title}</strong>
                <span>${body}</span>
              </a>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function guideIndex(featured = false) {
  const groups = [
    ['start', 'Start Here', pages.filter((page) => ['Beginner', 'Guide'].includes(page.type) && page.slug !== 'iron-nest-guide')],
    ['missions', 'Mission Guides', pages.filter((page) => page.type === 'Mission')],
    ['mechanics', 'Mechanics', pages.filter((page) => page.type === 'Mechanics' || page.type === 'Tool')],
    ['reference', 'Reference', pages.filter((page) => ['Endings', 'FAQ', 'Roadmap'].includes(page.type))],
  ];

  return `
    <section class="${featured ? 'band guides-featured' : 'band page-band'}">
      <div class="section-heading">
        <p class="eyebrow">Guide Library</p>
        ${featured ? '<h2>Choose the guide you need now</h2>' : '<h1>All Iron Nest Guides</h1>'}
      </div>
      <div class="guide-layout">
        ${guideCard(pages[0], 'P0', true)}
        ${groups
          .map(
            ([id, title, items]) => `
              <div class="guide-group" id="${id}">
                ${featured ? `<h3>${title}</h3>` : `<h2>${title}</h2>`}
                <div class="mini-list">
                  ${items
                    .map(
                      (page) => `
                        <a href="${pageLink(page)}">
                          <span>${escapeHtml(page.title)}</span>
                          <small>${escapeHtml(page.keyword)}</small>
                        </a>
                      `,
                    )
                    .join('')}
                </div>
              </div>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function guideCard(page, number, wide = false) {
  return `
    <a class="${wide ? 'guide-card wide' : 'guide-card'}" href="${pageLink(page)}">
      <span class="card-number">${number}</span>
      <span class="icon-symbol">${icons[page.icon] || 'B'}</span>
      <h3>${escapeHtml(page.title)}</h3>
      <p>${escapeHtml(page.description)}</p>
    </a>
  `;
}

function articlePage(page) {
  const related = pages.filter((item) => item.slug !== page.slug).slice(0, 4);
  const expansion = pageExpansions[page.slug];
  return `
    <article class="article-shell">
      <aside class="article-sidebar">
        <a href="${sitePath('/guides/')}">All Guides</a>
        ${pages
          .map(
            (item) =>
              `<a class="${item.slug === page.slug ? 'active' : ''}" href="${pageLink(item)}">${escapeHtml(
                item.title,
              )}</a>`,
          )
          .join('')}
      </aside>
      <div class="article-content">
        <p class="eyebrow">${escapeHtml(page.type)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p class="article-summary">${escapeHtml(page.summary)}</p>
        ${
          page.type === 'Endings'
            ? '<div class="warning"><span class="icon-symbol">!</span>This page contains story and ending spoilers. Ending details are based on third-party guide material and should be checked against your current game version.</div>'
            : ''
        }
        ${page.sections
          .map(
            (section) => `
              <section class="article-section">
                <h2>${escapeHtml(section.heading)}</h2>
                <p>${escapeHtml(section.body)}</p>
              </section>
            `,
          )
          .join('')}
        ${expansion ? expandedGuideBlocks(page, expansion) : ''}
        <section class="article-section">
          <h2>Source Notes</h2>
          <ul class="source-list">
            ${page.sources.map((source) => sourceItem(source)).join('')}
          </ul>
        </section>
        <section class="article-section related">
          <h2>Related Guides</h2>
          <div class="related-grid">
            ${related
              .map(
                (item) => `
                  <a href="${pageLink(item)}">
                    <strong>${escapeHtml(item.title)}</strong>
                    <span>${escapeHtml(item.keyword)}</span>
                  </a>
                `,
              )
              .join('')}
          </div>
        </section>
      </div>
    </article>
  `;
}

function sourceItem(source) {
  const href = externalLinkMap[source];
  if (!href) return `<li>${escapeHtml(source)}</li>`;
  return `
    <li>
      <a class="source-link" href="${href}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(source)}
      </a>
    </li>
  `;
}

function expandedGuideBlocks(page, expansion) {
  const quality = pageQualityLayers[page.slug];
  return `
    ${quality ? quickReferenceBlock(quality.quickReference) : ''}
    ${orderedBlock('Step-By-Step Route', expansion.steps)}
    ${checklistBlock('Operator Checklist', expansion.checklist)}
    ${orderedBlock('Common Mistakes', expansion.mistakes)}
    ${quality ? troubleshootingBlock(quality.troubleshooting) : ''}
    ${quality ? sourceBoundaryBlock(quality.sourceBoundary) : ''}
    ${faqBlock(expansion.faq)}
  `;
}

function quickReferenceBlock(items = []) {
  if (!items.length) return '';
  return `
    <section class="article-section reference-section">
      <h2>Quick Reference</h2>
      <dl class="reference-grid">
        ${items
          .map(
            ([label, value]) => `
              <div>
                <dt>${escapeHtml(label)}</dt>
                <dd>${escapeHtml(value)}</dd>
              </div>
            `,
          )
          .join('')}
      </dl>
    </section>
  `;
}

function troubleshootingBlock(items = []) {
  if (!items.length) return '';
  return `
    <section class="article-section troubleshoot-section">
      <h2>Troubleshooting</h2>
      <div class="troubleshoot-grid">
        ${items
          .map(
            (item) => `
              <article>
                <h3>${escapeHtml(item.symptom)}</h3>
                <p><strong>Likely cause:</strong> ${escapeHtml(item.likelyCause)}</p>
                <p><strong>Fix:</strong> ${escapeHtml(item.fix)}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function sourceBoundaryBlock(boundary) {
  if (!boundary) return '';
  const groups = [
    ['Official / Store Verified', boundary.official],
    ['Guide-Sourced', boundary.guideSourced],
    ['Do Not Overclaim', boundary.avoid],
  ];
  return `
    <section class="article-section source-boundary">
      <h2>Source Boundary</h2>
      <p class="boundary-note">Last checked: August 22, 2026. This section separates stable facts from guide-sourced tactics.</p>
      <div class="boundary-grid">
        ${groups
          .map(
            ([label, items]) => `
              <div>
                <h3>${escapeHtml(label)}</h3>
                <ul class="detail-list">
                  ${(items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
              </div>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function orderedBlock(title, items = []) {
  if (!items.length) return '';
  return `
    <section class="article-section">
      <h2>${title}</h2>
      <ol class="detail-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ol>
    </section>
  `;
}

function checklistBlock(title, items = []) {
  if (!items.length) return '';
  return `
    <section class="article-section">
      <h2>${title}</h2>
      <ul class="detail-list check-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </section>
  `;
}

function faqBlock(items = []) {
  if (!items.length) return '';
  return `
    <section class="article-section faq-section">
      <h2>FAQ</h2>
      ${items
        .map(
          (item) => `
            <div class="faq-item">
              <h3>${escapeHtml(item.q)}</h3>
              <p>${escapeHtml(item.a)}</p>
            </div>
          `,
        )
        .join('')}
    </section>
  `;
}

function notFound() {
  return `
    <section class="not-found article-shell">
      <div class="article-content">
        <p class="eyebrow">404</p>
        <h1>Guide Not Found</h1>
        <p class="article-summary">
          This Iron Nest guide page does not exist yet. Return to the guide library and choose one of the researched
          pages from the first site version.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="${sitePath('/guides/')}">Open Guides</a>
          <a class="button secondary" href="${sitePath('/')}">Back Home</a>
        </div>
      </div>
    </section>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div>
        <strong>Iron Nest Wiki</strong>
        <p>
          Independent fan-made guide hub for IRON NEST: Heavy Turret Simulator. Not affiliated with the developers,
          publishers, Steam, or GOG. No fake codes, no fixed coordinates, no invented roadmap dates.
        </p>
      </div>
      <div class="footer-links">
        ${sourceLinks
          .map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`)
          .join('')}
      </div>
    </footer>
  `;
}

function render() {
  const route = getRoute();
  setSeo(route.page);
  const body = {
    home: homePage,
    guides: () => guideIndex(false),
    article: () => articlePage(route.page),
    'not-found': notFound,
  }[route.type]();
  root.innerHTML = `${header()}<main>${body}</main>${footer()}`;
  window.scrollTo(0, 0);
  setupNavigation();
}

function setupNavigation() {
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.mobile-toggle');
  toggle?.addEventListener('click', () => {
    nav?.classList.toggle('open');
    toggle.textContent = nav?.classList.contains('open') ? '×' : '☰';
  });
}

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a');
  if (!anchor || anchor.target || anchor.origin !== window.location.origin) return;
  event.preventDefault();
  window.history.pushState({}, '', anchor.pathname + anchor.hash);
  render();
  if (anchor.hash) {
    requestAnimationFrame(() => document.querySelector(anchor.hash)?.scrollIntoView({ behavior: 'smooth' }));
  }
});

window.addEventListener('popstate', render);
render();

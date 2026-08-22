import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { pages } from '../src/content.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const shell = await readFile(join(root, 'index.html'), 'utf8');
const routes = ['guides', ...pages.map((page) => page.slug)];

for (const route of routes) {
  const routeDirectory = join(root, route);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(join(routeDirectory, 'index.html'), shell);
}

await writeFile(join(root, '404.html'), shell);

console.log(`Synced ${routes.length} route entry files plus 404.html.`);

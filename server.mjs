import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

function resolvePath(urlPath) {
  const cleanPath = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  if (cleanPath === '/' || !extname(cleanPath)) return join(root, 'index.html');
  return join(root, cleanPath);
}

createServer(async (request, response) => {
  try {
    const filePath = resolvePath(request.url || '/');
    const body = await readFile(filePath);
    response.writeHead(200, {
      'content-type': types[extname(filePath)] || 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    });
    response.end(body);
  } catch {
    const body = await readFile(join(root, 'index.html'));
    response.writeHead(200, { 'content-type': types['.html'], 'cache-control': 'no-store' });
    response.end(body);
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Iron Nest Wiki running at http://127.0.0.1:${port}/`);
});

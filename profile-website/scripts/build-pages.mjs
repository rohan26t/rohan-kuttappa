import { spawnSync } from 'node:child_process';
import { writeFileSync, existsSync, renameSync, readFileSync } from 'node:fs';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/rohan-kuttappa';
const result = spawnSync(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: 'true', NEXT_PUBLIC_BASE_PATH: basePath },
});
if (result.status !== 0) process.exit(result.status || 1);
if (!existsSync('dist/client/index.html')) throw new Error('Static export did not produce index.html');
// Vinext places framework assets under assetPrefix; Pages already mounts this artifact there.
const prefixedAssets = 'dist/client' + basePath + '/_next';
if (existsSync(prefixedAssets)) renameSync(prefixedAssets, 'dist/client/_next');
const html = readFileSync('dist/client/index.html', 'utf8');
if (!html.includes('Major TM Rohan Kuttappa')) throw new Error('Profile content missing');
for (const match of html.matchAll(/(?:src|href)="(\/[^"\s]+)"/g)) {
  const url = match[1];
  if (!url.startsWith(basePath + '/')) throw new Error('Unprefixed asset: ' + url);
  const file = 'dist/client' + url.slice(basePath.length).split('?')[0];
  if (!existsSync(file)) throw new Error('Missing exported asset: ' + file);
}
writeFileSync('dist/client/.nojekyll', '');
console.log('GitHub Pages output: dist/client');

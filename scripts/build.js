// Copy only public template files. Deployment configuration follows in issue #4.
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const directories = [
  'accessibility', 'assets', 'budget', 'community', 'contact', 'data', 'doing-business', 'faq',
  'government', 'legislative', 'news', 'privacy', 'service-details',
  'services', 'sitemap', 'statistics', 'terms',
];
const files = [
  '403.html', '404.html', '500.html', 'index.html', 'manifest.webmanifest',
  'offline.html', 'robots.txt', 'sitemap.xml', 'sw.js', 'version.json',
  'LICENSE.upstream',
];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
for (const name of [...directories, ...files]) {
  fs.cpSync(path.join(root, name), path.join(output, name), { recursive: true });
}
console.log('Static site copied to dist/');

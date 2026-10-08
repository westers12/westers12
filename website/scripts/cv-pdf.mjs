// Renders /cv from the built site to public/cv.pdf using a locally installed
// Edge or Chrome (no browser download needed). Run with: npm run cv
import { preview } from 'astro';
import { chromium } from 'playwright-core';

const server = await preview({ root: process.cwd(), server: { port: 4329 }, logLevel: 'warn' });
let browser;
for (const channel of ['msedge', 'chrome']) {
  try {
    browser = await chromium.launch({ channel });
    break;
  } catch {}
}
if (!browser) throw new Error('No Edge or Chrome found. Install one of them to generate the PDF.');

try {
  const page = await browser.newPage();
  await page.goto('http://localhost:4329/cv/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: 'public/cv.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log('Wrote public/cv.pdf');
} finally {
  await browser.close();
  await server.stop();
}

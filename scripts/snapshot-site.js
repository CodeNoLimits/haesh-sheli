#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function snapshot(urls, outDir, viewport = { width: 1280, height: 800 }) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport(viewport);

  for (const { name, url } of urls) {
    const safe = name.replace(/[^a-zA-Z0-9-_]/g, '_');
    const file = path.join(outDir, `${safe}.png`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await page.waitForTimeout(800);
    await page.screenshot({ path: file, fullPage: true });
    console.log('Saved', file);
  }

  await browser.close();
}

async function main() {
  const base = process.env.SNAPSHOT_BASE_URL || 'http://localhost:3000';
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outDir = path.resolve('snapshots', stamp);
  await ensureDir(outDir);

  const urls = [
    { name: 'home', url: `${base}/` },
    { name: 'store', url: `${base}/store` },
    { name: 'downloads', url: `${base}/downloads` },
    { name: 'about', url: `${base}/about` },
  ];

  await snapshot(urls, outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});



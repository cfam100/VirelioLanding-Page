const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.goto('file://' + path.resolve(__dirname, 'og-template.html'), { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.resolve(__dirname, 'public/og-image.png'),
    type: 'png',
    clip: { x: 0, y: 0, width: 1200, height: 630 }
  });
  await browser.close();
  console.log('OG image saved to public/og-image.png');
})();

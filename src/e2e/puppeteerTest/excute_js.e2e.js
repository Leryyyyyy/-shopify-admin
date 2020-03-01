const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.ctrip.com/', { waitUntil: 'networkidle2' });

  await page.evaluate(() => {
    document.querySelector('#HD_CheckIn').value = '2020-3-20';
  });
}

run();

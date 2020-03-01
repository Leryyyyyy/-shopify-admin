const puppeteer = require('puppeteer');

async function jd() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://www.jd.com');

  const input = await page.$('#key');
  await input.type('手机');
  await page.keyboard.press('Enter');
  await page.waitForSelector('ul.gl-warp.clearfix>li');

  const list = await page.$$eval('ul.gl-warp.clearfix>li', eles => eles.map(ele => ele.innerText));
  console.log('lise=', list);
}

jd();

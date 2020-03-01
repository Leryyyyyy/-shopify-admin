const puppeteer = require('puppeteer');

async function switchWindows() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://music.taihe.com/', { waitUntil: 'networkidle2' });
  const ad = await page.waitForSelector('#__qianqian_pop_closebtn');
  await ad.click();
  const link = await page.waitForSelector('div.mod-tag-box > h3');
  await link.click();

  const target = await browser.waitForTarget(target => target.url().includes('tag'));
  const newpage = await target.page();

  await newpage.waitForSelector('ul[select="20"]>li');
  const innerText = await newpage.$$eval('ul[select="20"]>li', eles =>
    eles.map(ele => ele.innerText),
  );
  console.log(innerText);
}

switchWindows();

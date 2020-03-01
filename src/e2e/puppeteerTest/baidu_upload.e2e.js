const puppeteer = require('puppeteer');

async function upload() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://www.baidu.com');
  const soutuBtn = await page.waitForSelector('span.soutu-btn'); //等待该元素加载出来
  await soutuBtn.click();
  const uploadPic = await page.waitForSelector('input.upload-pic');
  await uploadPic.uploadFile(
    'E:\\gitpub\\shopify-admins\\shopify-admin\\src\\e2e\\test\\QQ图片20200215085002.jpg',
  );
}
upload();

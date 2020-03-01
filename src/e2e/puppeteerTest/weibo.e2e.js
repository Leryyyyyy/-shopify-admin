const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1200, height: 700 },
    ignoreDefaultArgs: ['--enable-automation'],
    slowMo: 200,
    args: ['--window-size=1200,700'],
  });
  const page = await browser.newPage();

  await page.goto('http://wufazhuce.com/', { waiUntil: 'networkidle2' });
  const oneCita = await page.waitForSelector('div.fp-one-cita-wrapper > div.fp-one-cita > a');
  const oneText = await page.$eval(
    'div.fp-one-cita-wrapper > div.fp-one-cita >a ',
    ele => ele.innerText,
  );
  console.log('OneText', oneText);

  await page.goto('http://weibo.com', { waitUntil: 'networkidle2' });
  await page.waitFor(2 * 1000);
  await page.reload();
  await page.waitFor(5 * 1000);

  const usernameInput = await page.waitForSelector('div.input_wrap > #loginname');
  await usernameInput.click();
  await usernameInput.type('13276080400');

  const passwordInput = await page.waitForSelector('input[type=password]');
  await passwordInput.click();
  await passwordInput.type('xxxxxx');

  const logninBtn = await page.waitForSelector('div.info_list.login_btn>a');
  await logninBtn.click();

  const textarea = await page.waitForSelector('textarea.W_input');
  await textarea.click();
  await textarea.type(oneText);
}

run();

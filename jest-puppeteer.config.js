// ps https://github.com/GoogleChrome/puppeteer/issues/3120
module.exports = {
  launch: {
    headless:true,
    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-zygote',
      '--no-sandbox',
    ],
  },
};

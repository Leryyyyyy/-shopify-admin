const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;
const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1536, height: 780 },
  });

  page = await browser.newPage();
});

test(' open basicForm page', async () => {
  await page.goto(`${BASE_URL}/#/products/allProducts`);
});

test('商品查询', async () => {
  await page.waitForSelector('.ant-table-row');
  await page.click('.ant-row > div:nth-child(3) >div >div > a');
  const product = await page.waitForSelector('#advanced_search_query');
  await product.type('ADBOOV  High Top Sneakers');
  await page.click('button[type="submit"]');
  await page.waitFor(5 * 1000);
  //查询简介(项目未实现)
  await page.click('button[type="button"]');
  const tag = await page.waitForSelector('#advanced_search_tag');
  await tag.type('yyyy');
  await page.click('button[type="submit"]');
  await page.waitFor(5 * 1000);
  //查询标签(项目未实现)
  await page.click('button[type="button"]');
  await page.click('div#advanced_search_published_status');
  await page.click('main > div > div:nth-child(2) > div > div >div > ul > li:nth-child(2) ');
  await page.click('div#advanced_search_vendor');
  await page.click('main > div > div:nth-child(3) > div > div >div > ul > li:nth-child(2) ');
  await page.click('div#advanced_search_product_type');
  await page.click('main > div > div:nth-child(4) > div > div >div > ul > li:nth-child(2) ');
  await page.click('button[type="submit"]');
  await page.waitFor(5 * 1000);

  //筛选功能测试
});

// test ("产品添加", async()=>{
//     await page.waitForSelector('.ant-table-row')
//     await page.click('a[href="#/products/allProduct/new"]')
//     await page.click('#components-modal-demo-button-props>div>button:nth-child(1)')
//     //若简介为空则提示无法生成产品
//     await page.click('a[href="#/products/allProduct/new"]')
//     const title = await page.waitForSelector('#title')
//     await title.type("ADBOOV  High Top Sneakers")
//     const price = await page.waitForSelector('.antd-pro-pages-products-add-product-card-l2-index-container >div >div>div>div>div>div>div:nth-child(2)>input')
//     await price.type('11')
//     const compareAtPrice = await page.waitForSelector('.antd-pro-pages-products-add-product-card-l2-index-container >div >div>div>div>div:nth-child(2)>div>div:nth-child(2)>input')
//     await compareAtPrice.type('11')
//     const costPerItem = await page.waitForSelector('.antd-pro-pages-products-add-product-card-l2-index-container >div >div>div>div:nth-child(4)>div>div>div>input')
//     await costPerItem.type('11')
//     await price.click()
//     const margin = await page.$$eval('.antd-pro-pages-products-add-product-card-l2-index-container>div>div>div>div>p',eles=>(eles.map(ele=>ele.textContent)))
//     console.log(margin);
//     const  pType = await page.waitForSelector('.antd-pro-pages-products-add-product-card-r1-index-container>div>div>div>div:nth-child(2)>div>div')
//     await pType.click()
//     const select = await page.waitForSelector('main > div> div:nth-child(2)>div>div>div>ul>li')
//     await select.click()
//     //await page.click('#components-modal-demo-button-props>div>button:nth-child(1)')
//     //保存
// })

// test('产品单个修改',async ()=>{
//     await page.waitForSelector('.ant-table-row');
//     const productText = await page.$$eval('tbody[class="ant-table-tbody"]>tr:nth-child(3)',eles=>eles.map(ele=>ele.textContent));
//     console.log('productText:',productText);
//     const product= await page.waitForSelector('tbody[class="ant-table-tbody"]>tr:nth-child(3)')
//     await product.click()
//     await page.waitFor(5*1000)
//     const title = await page.waitForSelector('#titleRevisedProduct')
//     await title.click()
//     await page.keyboard.down('Control');
//     await page.keyboard.down('a');
//     await page.keyboard.up('a');
//     await page.keyboard.up('Control');
//     await page.keyboard.press('Backspace');
//     await title.type('dog cars')
//     await page.click('#components-modal-demo-button-props>div>button:nth-child(1)')

// });
// test('产品批量修改',async ()=>{
//     await page.waitForSelector('.ant-table-row');
//     const productsList = await page.$$eval('.ant-table-row',eles=>eles.map(ele=>ele.textContent));
//     console.log('productsList',productsList);
//     for(let i=4;i<8;i++){
//         await page.click(`tbody[class="ant-table-tbody"]>tr:nth-child(${i})>td:nth-child(1)>span`)
//     }
//     await page.click('div[style="margin: 0px 30px 20px;"]>button:nth-child(2)')
//     for(let i=4;i<8;i++){
//         const title = await page.waitForSelector(`#title-${i-4}`)
//         await title.click()
//         await page.keyboard.down('Control');
//         await page.keyboard.down('a');
//         await page.keyboard.up('a');
//         await page.keyboard.up('Control');
//         await page.keyboard.press('Backspace');
//         await title.type(`dog${i}`)
//     }
//     await page.click('#components-modal-demo-button-props>div>button:nth-child(1)')
//     await page.goto(`${BASE_URL}/#/products/allProducts`)
//     //功能未完善 需要切到别的页面在切回来修改的才会刷新
// });
// test('产品删除',async ()=>{
//         await page.waitForSelector('.ant-table-row');
//         for(let i=4;i<8;i++){
//             await page.click(`tbody[class="ant-table-tbody"]>tr:nth-child(${i})>td:nth-child(1)>span`)
//         }
//         await page.click('div[style="margin: 0px 30px 20px;"]>button:nth-child(1)')

//     })

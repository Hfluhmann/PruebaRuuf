const puppeteer = require('puppeteer');

(async () => {
  // Launch a browser
  const browser = await puppeteer.launch({
    slowMo: 150, // 150 ms de delay entre pasos de ejecucion
  });

  const liderUrl = 'https://www.lider.cl/supermercado/search?query=soya'
  const page = await browser.newPage();
    if ((await page.goto(liderUrl)).ok()) {
      const products = await page.$$eval('.product-info', allProducts => {
        return allProducts.map(product => {
          const productName = product.textContent.split(",")[0] 
          const productPrice = "$" + product.textContent.split("$")[1]
          return {
            productName,
            productPrice,
          }
        });
      });
      console.log(products)
    }
  await browser.close();
})();



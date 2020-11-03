/**
 * @name get text value of an element
 *
 * @desc Gets the text value of an element by using the page.$eval method
 *
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.similarweb.com/website/cnn.com/')
  await page.screenshot({ path: 'nytimes.png', fullPage: true })
  await browser.close()
})()
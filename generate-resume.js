const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();

  let contentHtml = fs.readFileSync('index.html', 'utf8');
  contentHtml = contentHtml.replace('/index.css', 'https://synle.github.io/index.css')
  const page = await browser.newPage();
  await page.setContent(contentHtml);
  await page.pdf({ path: 'syle-resume.pdf', format: 'a4' });

  await browser.close();
})();

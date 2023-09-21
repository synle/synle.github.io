const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();

  let contentHtml = fs.readFileSync('index.html', 'utf8');
  let contentCss = fs.readFileSync('index.css', 'utf8');
  contentHtml += `<style>${contentCss}</style>`;
  const page = await browser.newPage();
  await page.setContent(contentHtml);

  // await page.pdf({ path: 'syle-resume.pdf', format: 'a4' });
  await page.pdf({
    path: 'syle-resume.pdf',
    format: 'Letter',
    pageRanges: '1',
  });

  await browser.close();
})();

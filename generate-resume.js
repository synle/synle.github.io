const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setContent(`
    ${fs.readFileSync('index.html', 'utf8')}
    <style>${fs.readFileSync('index.css', 'utf8')}</style>
  `.trim());
  // await page.pdf({ path: 'syle-resume.pdf', format: 'a4' });
  await page.pdf({ path: 'syle-resume.pdf', format: 'a4', margin: { top: '5px', bottom: '5px', left: '10px', right: '10px' } });

  await browser.close();
})();

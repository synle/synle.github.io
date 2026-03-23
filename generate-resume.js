const puppeteer = require('puppeteer');
const fs = require('fs');
const resumes = require('./src/resumes');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const contentCss = fs.readFileSync('index.css', 'utf8');

  for (const resume of resumes) {
    const htmlFile = resume.name + '.html';
    const pdfFile = resume.name + '.pdf';

    let contentHtml = fs.readFileSync(htmlFile, 'utf8');
    contentHtml += `<style>${contentCss}</style>`;

    const page = await browser.newPage();
    await page.setContent(contentHtml);
    await page.pdf({
      path: pdfFile,
      format: 'Letter',
      pageRanges: '1',
    });
    await page.close();

    console.log('>', htmlFile, '->', pdfFile);

    // Copy default variant to syle-resume.pdf
    if (resume.isDefault) {
      fs.copyFileSync(pdfFile, 'syle-resume.pdf');
      console.log('>', pdfFile, '-> syle-resume.pdf (default)');
    }
  }

  await browser.close();
})();

const puppeteer = require("puppeteer");
const fs = require("fs");
const { loadResumes } = require("./src/build-utils");

const resumes = loadResumes();

/** Letter page dimensions in inches */
const LETTER_WIDTH = 8.5;
const LETTER_HEIGHT = 11;

/**
 * Generates PDF files for each resume variant.
 * - Single-page resumes are scaled down to fit if content exceeds one page.
 * - Multi-page resumes (allowMultiplePages or name contains "full") render at full scale.
 */
(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const contentCss = fs.readFileSync("index.css", "utf8");

  for (const resume of resumes) {
    const htmlFile = resume.name + ".html";
    const pdfFile = resume.name.startsWith("syle-resume")
      ? resume.name + ".pdf"
      : "syle-resume-" + resume.name + ".pdf";

    let contentHtml = fs.readFileSync(htmlFile, "utf8");
    contentHtml += `<style>${contentCss}</style>`;

    const page = await browser.newPage();

    // Set viewport to letter width at 96dpi to approximate print layout
    await page.setViewport({
      width: Math.round(LETTER_WIDTH * 96),
      height: Math.round(LETTER_HEIGHT * 96),
    });
    await page.setContent(contentHtml, { waitUntil: "networkidle0" });

    // Emulate print media to get accurate content height measurement
    await page.emulateMediaType("print");

    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    const pageHeightPx = Math.round(LETTER_HEIGHT * 96); // 1056px

    /** @type {import('puppeteer').PDFOptions} */
    const pdfOptions = {
      path: pdfFile,
      format: "Letter",
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    };

    // Explicit value takes precedence, otherwise auto-detect from name
    const allowMultiplePages =
      resume.allowMultiplePages ?? resume.name.includes("full");

    if (allowMultiplePages) {
      pdfOptions.scale = 1;
    } else {
      // Scale down to fit content on a single page
      let scale = 1;
      if (bodyHeight > pageHeightPx) {
        scale = pageHeightPx / bodyHeight;
        scale = Math.max(0.1, Math.min(2, scale));
      }
      pdfOptions.scale = scale;
      pdfOptions.pageRanges = "1";
    }

    await page.pdf(pdfOptions);
    await page.close();

    const pct = Math.round(pdfOptions.scale * 100);
    const label = allowMultiplePages
      ? "(multi-page)"
      : pct < 100
        ? `(scaled to ${pct}%)`
        : "(fits)";
    console.log(">", htmlFile, "->", pdfFile, label);
  }

  await browser.close();
})();

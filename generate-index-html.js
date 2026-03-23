const Mustache = require('mustache');
const fs = require('fs');
const resumes = require('./src/resumes');

function readFile(inputFile) {
  return fs.readFileSync(inputFile, 'utf8');
}

const srcCommon = readFile('src/data.common.js');

function parseConfigFile(inputFile, baseConfigs = {}) {
  return {
    ...baseConfigs,
    ...eval(srcCommon + readFile(inputFile)),
  };
}

function generateView(inputData, outputFile) {
  let yoe;
  try {
    yoe = new Date().getYear() - (2011 - 1900);
    yoe += '+';
  } catch (e) {
    yoe = '8+';
  }

  const viewData = {
    ...eval(inputData),
    yoe,
  };

  const template = readFile('src/index.mustache');
  const output = Mustache.render(template, viewData);
  fs.writeFileSync(outputFile, output);
}

// Parse base data
const dataBase = parseConfigFile('src/data-base.js');

// Generate HTML for each resume variant
for (const resume of resumes) {
  const inputFile = 'src/' + resume.dataFile;
  const outputFile = resume.name + '.html';

  console.log('>', inputFile, '->', outputFile);
  const targetData = parseConfigFile(inputFile, dataBase);
  generateView(targetData, outputFile);

  // Copy default variant to index.html
  if (resume.isDefault) {
    fs.copyFileSync(outputFile, 'index.html');
    console.log('>', outputFile, '-> index.html (default)');
  }
}

// Generate list.html
const listTemplate = readFile('src/list.mustache');
const listData = {
  resumes: resumes.map((r) => ({
    name: r.name,
    description: r.description,
    htmlFile: r.name + '.html',
    pdfFile: r.name + '.pdf',
    isDefault: r.isDefault,
  })),
};
const listOutput = Mustache.render(listTemplate, listData);
fs.writeFileSync('list.html', listOutput);
console.log('> generated list.html');

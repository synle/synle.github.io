const Mustache = require('mustache');
const fs = require('fs');

function generateView(inputData, outputFile) {
  // generate the view
  let yoe;
  try {
    yoe = new Date().getYear() - (2011 - 1900);
    yoe += '+';
  } catch (e) {
    yoe = '8+';
  }

  const commonData = {
    yoe,
  };

  const viewData = {
    ...eval(inputData),
    ...commonData,
  };

  const template = readFile('src/index.mustache');
  const output = Mustache.render(template, viewData);
  fs.writeFileSync(outputFile, output);
}

function readFile(inputFile) {
  return fs.readFileSync(inputFile, 'utf8');
}

const srcCommon = readFile('src/data.common.js');

const dataBase = eval(srcCommon + readFile('src/data-base.js'));
let dataShort = eval(srcCommon + readFile('src/data-short.js'));
let dataFull = eval(srcCommon + readFile('src/data-full.js'));
dataShort = {
  ...dataBase,
  ...dataFull,
};
dataFull = {
  ...dataBase,
  ...dataFull,
};

generateView(dataShort, 'index.html');
generateView(dataFull, 'full.html');
generateView(dataFull, 'resume.html');

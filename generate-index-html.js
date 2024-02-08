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

function parseConfigFile(inputFile, baseConfigs = {}) {
  return {
    ...baseConfigs,
    ...eval(srcCommon + readFile(inputFile)),
  };
}

const srcCommon = readFile('src/data.common.js');

const dataBase = parseConfigFile('src/data-base.js');
const dataShort = parseConfigFile('src/data-short.js', dataBase);
const dataFull = parseConfigFile('src/data-full.js', dataBase);

generateView(dataShort, 'index.html');
generateView(dataFull, 'full.html');
generateView(dataFull, 'resume.html');

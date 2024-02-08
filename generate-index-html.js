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

// default short
generateView(dataShort, 'index.html');

for (const file of fs
  .readdirSync('src')
  .filter(
    (file) =>
      !file.includes('base') && file.includes('data-') && file.includes('.js'),
  )) {
  const inputFile = 'src/' + file;
  const outputFile = file.replace('.js', '').replace('data-', '') + '.html';

  console.log('> ', inputFile, outputFile);
  const targetData = parseConfigFile(inputFile, dataBase);
  generateView(targetData, outputFile);
}

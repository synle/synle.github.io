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

  const template = fs.readFileSync('src/index.mustache', 'utf8');
  const output = Mustache.render(template, viewData);
  fs.writeFileSync(outputFile, output);
}

let dataCommon = eval(fs.readFileSync('src/data.common.js', 'utf8'));
let dataShort = eval(fs.readFileSync('src/data-short.js', 'utf8'));
let dataFull = eval(fs.readFileSync('src/data-full.js', 'utf8'));
dataShort = {
  ...dataCommon,
  ...dataFull,
};
dataFull = {
  ...dataCommon,
  ...dataFull,
};

generateView(dataShort, 'index.html');
generateView(dataFull, 'full.html');
generateView(dataFull, 'resume.html');

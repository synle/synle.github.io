const Mustache = require('mustache');
const fs = require('fs');


let yoe;
try {
  yoe = new Date().getYear() - (2011 - 1900);
  yoe += '+';
} catch (e) {
  yoe = '8+';
}

const viewData = JSON.parse(fs.readFileSync('config.json', 'utf8'));
viewData.yoe = yoe;

const template = fs.readFileSync('index.mustache', 'utf8');
const output = Mustache.render(template, viewData);

fs.writeFileSync('index.html', output);

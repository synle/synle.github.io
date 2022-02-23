const Mustache = require('mustache');
const fs = require('fs');


const viewData = JSON.parse(fs.readFileSync('config.js', 'utf8'));
const template = fs.readFileSync('index.mustache', 'utf8');
const output = Mustache.render(template, viewData);

fs.writeFileSync('index.html', output);

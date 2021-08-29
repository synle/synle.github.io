// global level helpers
// ducktype & helper for special methods
String.prototype.trimWhiteSpaces = function (doFinalTrim) {
  let res = (this || '')
    .split('\n')
    .map((r) => r.trim())
    .join('\n');

  if (doFinalTrim === true) {
    res = res.trim();
  }
  return res;
};

String.prototype.fetchText = function (...params) {
  return fetch(this, ...params).then((r) => r.text());
};

String.prototype.fetchJSON = function (...params) {
  return fetch(this, ...params).then((r) => r.json());
};


// helpers
const helper = {};
helper.getNavBookmarkletFromSchema = (input) => {
  let rawOutput = `
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="https://synle.github.io/link/assets/navs.css" />
          <meta charset='utf-8' />
        </head>
        <body>
          <js_script id='schema' type='schema'>${input}</js_script>
          <js_script src="https://synle.github.io/link/assets/helpers.js"></js_script>
          <js_script src="https://unpkg.com/@babel/standalone/babel.min.js"></js_script>
          <js_script type="text/babel" data-presets="react" data-type="module" src="https://synle.github.io/link/assets/navs.js"></js_script>
        </body>
      </html>
    `
    .trim()
    .replace(/js_script/g, 'script');

  return 'data:text/html,' + encodeURIComponent(rawOutput);
};

helper.navigateToDataUrl = async (base64URL, forceOpenWindow) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(decodeURIComponent(base64URL.replace('data:text/html,', '')), 'text/html');
    const schema = doc.querySelector('#schema').innerText.trim();
    const childWindow = window.open('https://synle.github.io/link/nav-generator.html');
    const messageOrigin = 'https://synle.github.io';

    setTimeout(_doPostMessage, 100);

    function _doPostMessage() {
      console.log('[test] post message to child', schema);
      childWindow.postMessage({type: 'onViewLinks', schema}, messageOrigin);
    }
  } catch (err) {
    // show it in the prompt
    await prompt('Data URL (copy to your clipboard):', base64URL);
  }
};

helper.onCopyToClipboard = async (text, autoDismiss) => {
  try {
    await navigator.clipboard.writeText(text);
    await alert('Copied to clipboard!', true);
  } catch (err) {
    await prompt('Clipboard', text, autoDismiss);
  }
};

helper.persistBufferSchema = (value) => {
  try {
    sessionStorage['schemaData'] = value;
  } catch (err) {}
};

helper.getPersistedBufferSchema = () => {
  try {
    return sessionStorage['schemaData'] || '';
  } catch (err) {
    return '';
  }
};

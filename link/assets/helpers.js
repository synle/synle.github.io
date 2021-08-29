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

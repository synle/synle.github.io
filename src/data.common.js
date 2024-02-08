String.prototype._formatStringList = function () {
  return this.split('\n')
    .map((s) => s.trim())
    .filter((s) => s)
    .map(String.prototype._formatString);
};

String.prototype._formatString = function (s) {
  s = s || this;
  return `${s.replace(/\.*\.$/, '').trim()}.`;
};

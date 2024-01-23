String.prototype._reformatItems = function () {
  return this.split('\n')
    .map((s) => s.trim())
    .filter((s) => s)
      .map((s) => `${s.replace(/\.*\.$/, '')}.`);
};

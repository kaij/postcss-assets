var CSSString = function (string) {
  this.quotes = string[0];
  if (this.quotes === '\'' || this.quotes === '"') {
    this.value = string.slice(1, -1);
  } else {
    this.value = string;
    this.quotes = '';
  }
};

CSSString.prototype.toString = function () {
  if (!this.quotes && (this.value.indexOf('\'') !== -1 || this.value.indexOf('"') !== -1)) {
    this.quotes = '\'';
  }
  if (this.quotes === '"') {
    this.quotes = '\'';
  }
  return this.quotes + this.value + this.quotes;
};

module.exports = CSSString;

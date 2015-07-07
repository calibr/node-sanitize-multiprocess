var sanitizer = require("html-css-sanitizer");

function nmTokenPolicy(nmTokens) {
  return nmTokens;
}

function uriPolicy(value, effects, ltype, hints) {
  return value.toString();
}

module.exports = function(text, cb) {
  text = sanitizer.sanitize(text, uriPolicy, nmTokenPolicy);
  cb(null, text);
};
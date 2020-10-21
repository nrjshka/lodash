const slice = require('./slice');

function drop(array, n = 1) {
  if (n < 1) {
    return array;
  }

  return slice(array, n);
}

module.exports = drop;
const toInteger = require("./toInteger");

function slice(array, start = 0, end = array.length) {
  const [intStart, intEnd] = [toInteger(start), toInteger(end)];

  const correctLength = Math.min(intEnd < 0 ? intEnd + array.length : intEnd, array.length);
  const correctStart = Math.max(!intStart ? 0 : intStart < 0 ? intStart + array.length : intStart, 0);
  const output = [];

  for ( let i = correctStart; i < correctLength; i++) {
    output.push(array[i]);
  }

  return output;
}

module.exports = slice;
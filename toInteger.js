const toFinite = require("./toFinite");

function toInteger(value) {
  const result = toFinite(value)
  const remainder = result % 1

  return remainder ? result - remainder : result
}

module.exports = toInteger;
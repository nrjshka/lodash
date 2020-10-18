const toString = Object.prototype.toString;

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(value);
}

function isSymbol(value) {
  const type = typeof value;

  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]');
}

module.exports = isSymbol;
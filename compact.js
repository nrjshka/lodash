function compact(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    if (!!array[i]) {
      output.push(array[i]);
    }
  }

  return output;
}

module.exports = compact;
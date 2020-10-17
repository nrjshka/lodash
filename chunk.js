function castToInt(val) {
  return val | 0;
}

function chunk(array, size = 1) {
  const correnctSize = castToInt(size);

  const output = [];
  let [iterator, buffer] = [0, []];

  for (let i = 0; i < array.length; i++) {
    if (iterator++ >= correnctSize) {
      output.push(buffer);

      buffer = [array[i]];
      iterator = 1;
      
      continue;
    }

    buffer.push(array[i]);
  }

  if (buffer.length) {
    output.push(buffer);
  }

  return output;
}

module.exports = chunk;
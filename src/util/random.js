export const randomFromNumber = (num) => {
  if(Array.isArray(num)) {
    return Math.floor(Math.random() * num.length);
  }

  return Math.floor(Math.random() * num);
};

export const randomFromArray = (array) => {
  const length = array.length;
  return array[randomFromNumber(length)];
};

export const recursiveColor = (palette, colorOne) => {
  const colorTwo = randomFromArray(palette);

  if(colorTwo === colorOne) {
    return recursiveColor(palette, colorOne);
  }

  return colorTwo;
};

export const recursiveArrayIndex = (arr, id) => {
  const newId = randomFromNumber(arr);

  if(newId === id) {
    return recursiveArrayIndex(arr, id);
  }

  return newId;
};

export const shuffleArray = (unshuffled) => {
  return unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

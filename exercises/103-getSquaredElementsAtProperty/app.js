let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  if (!Array.isArray(obj.key)) {
    return [];
  } else if (obj.key.length === 0) {
    return [];
  } else {
    return obj.key.map(x => x * x);
    }
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
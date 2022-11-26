let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  if (typeof obj.key === 'undefined') {
    return 0;
  } if (!Array.isArray(obj.key)) {
    return 0;
  } if (obj.key.length === 0) {
    return 0;
  } else {
    return obj.key.reduce((x,y) => x * y)
}
}

let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
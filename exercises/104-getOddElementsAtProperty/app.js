let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  const newArr = [];
  if (!Array.isArray(obj.key)) {
    return newArr;
  } else if (obj.key.length === 0) {
    return newArr;
  } else {
    for (let i = 0; i < obj.key.length; i++) {
      if (obj.key[i] % 2 !== 0) {
        newArr.push(obj.key[i])
      }
    }
  }
  return newArr;
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
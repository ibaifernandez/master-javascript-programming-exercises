let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj,key) {
  const newArr = [];
  if (typeof obj.key === 'undefined') {
    return newArr;
  } else if (obj.key.length === 0) {
    return newArr;
  } else {
    for (let i = 0; i < obj.key.length; i++) {
      if (obj.key[i] % 2 === 0) {
        newArr.push(obj.key[i])
      }
    }
  }
  return newArr;
}

let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
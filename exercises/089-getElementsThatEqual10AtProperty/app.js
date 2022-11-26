function getElementsThatEqual10AtProperty(obj, key) {
  const newArr = [];
  if (typeof obj.key === 'undefined') {
    return newArr;
  } else {
    for (let i = 0; i < obj.key.length; i++) {
      if (obj.key[i] === 10) {
        newArr.push(obj.key[i]);
      }
    }
  }
    return newArr;
}

let obj = {
  key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  const newArr = [];
  if (typeof obj.key === 'undefined') {
    return newArr;
  } if (obj.key.length === 0) {
    return newArr;
  } else {
    for (let i = 0; i < obj.key.length; i++) {
      if (obj.key[i] !== obj.key[obj.key.length-1]) {
        newArr.push(obj.key[i]);
      }
    }
    return newArr;
  }
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
function getAverageOfElementsAtProperty(obj, key) {
  if (!Array.isArray(obj.key)) {
    return 0;
  } else if (obj.key.length === 0) {
    return 0;
  } else {
    let total = obj.key.reduce((x,y) => {return x + y})
    return total/obj.key.length;
  }
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  
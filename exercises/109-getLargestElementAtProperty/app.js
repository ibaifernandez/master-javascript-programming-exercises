let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  if (!Array.isArray(obj.key)) {
    return [];
  } if (obj.key.length === 0) {
    return [];
  } else {
    const sortedArray = obj.key.sort((a, b) => a - b);
    return sortedArray[sortedArray.length-1];
  }
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  if (!Array.isArray(obj.key)) {
    return [];
  } if (obj.key.length === 0) {
    return [];
  } else {
    const sortedArray = obj.key.sort((a, b) => a - b);
    return sortedArray[0];
}
}

let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
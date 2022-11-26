function getLastElementOfProperty(obj, key) {
    if (typeof obj.key === 'undefined') {
      return undefined;
    } else {
        return obj.key[obj.key.length-1];
    }
}
 
let obj = {
    key: [1, 2, 6]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 2
function getNthElementOfProperty(obj, key, num) {
    if (typeof obj.key === 'undefined') {
      return undefined;
    } else {
        return obj.key[num];
    }
}
 
let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2